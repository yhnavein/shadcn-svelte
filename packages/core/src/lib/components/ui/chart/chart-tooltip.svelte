<script lang="ts">
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getPayloadConfigFromPayload, useChart, type TooltipPayload } from './chart-utils.js';
  import { getTooltipContext, Tooltip as TooltipPrimitive } from 'layerchart';
  import type { Snippet } from 'svelte';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function defaultFormatter(value: any, _payload: TooltipPayload[]) {
    return `${value}`;
  }

  let {
    ref = $bindable(null),
    class: className,
    hideLabel = false,
    indicator = 'dot',
    hideIndicator = false,
    labelKey,
    label,
    labelFormatter = defaultFormatter,
    labelClassName,
    formatter,
    nameKey,
    color,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> & {
    hideLabel?: boolean;
    label?: string;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
    hideIndicator?: boolean;
    labelClassName?: string;
    labelFormatter?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((value: any, payload: TooltipPayload[]) => string | number | Snippet) | null;
    formatter?: Snippet<
      [
        {
          value: unknown;
          name: string;
          item: TooltipPayload;
          index: number;
          payload: TooltipPayload[];
        },
      ]
    >;
  } = $props();

  const chart = useChart();
  const tooltipCtx = getTooltipContext();

  const formattedLabel = $derived.by(() => {
    if (hideLabel || !tooltipCtx.payload?.length) return null;

    const [item] = tooltipCtx.payload;
    const key = labelKey ?? item?.label ?? item?.name ?? 'value';

    const itemConfig = getPayloadConfigFromPayload(chart.config, item, key);

    const value =
      !labelKey && typeof label === 'string'
        ? (chart.config[label as keyof typeof chart.config]?.label ?? label)
        : (itemConfig?.label ?? item.label);

    if (value === undefined) return null;
    if (!labelFormatter) return value;
    return labelFormatter(value, tooltipCtx.payload);
  });

  const nestLabel = $derived(tooltipCtx.payload.length === 1 && indicator !== 'dot');
</script>

{#snippet TooltipLabel()}
  {#if formattedLabel}
    <div class={cn('sh-chart__tooltip-label', labelClassName)}>
      {#if typeof formattedLabel === 'function'}
        {@render formattedLabel()}
      {:else}
        {formattedLabel}
      {/if}
    </div>
  {/if}
{/snippet}

<TooltipPrimitive.Root variant="none">
  <div class={cn('sh-chart__tooltip', className)} {...restProps}>
    {#if !nestLabel}
      {@render TooltipLabel()}
    {/if}
    <div class="sh-chart__tooltip-items">
      {#each tooltipCtx.payload as item, i (item.key + i)}
        {@const key = `${nameKey || item.key || item.name || 'value'}`}
        {@const itemConfig = getPayloadConfigFromPayload(chart.config, item, key)}
        {@const indicatorColor = color || item.payload?.color || item.color}
        <div
          class={cn('sh-chart__tooltip-item', indicator === 'dot' && 'sh-chart__tooltip-item--dot')}
        >
          {#if formatter && item.value !== undefined && item.name}
            {@render formatter({
              value: item.value,
              name: item.name,
              item,
              index: i,
              payload: tooltipCtx.payload,
            })}
          {:else}
            {#if itemConfig?.icon}
              <itemConfig.icon />
            {:else if !hideIndicator}
              <div
                style="--color-bg: {indicatorColor}; --color-border: {indicatorColor};"
                class={cn('sh-chart__tooltip-indicator', {
                  'sh-chart__tooltip-indicator--dot': indicator === 'dot',
                  'sh-chart__tooltip-indicator--line': indicator === 'line',
                  'sh-chart__tooltip-indicator--dashed': indicator === 'dashed',
                  'sh-chart__tooltip-indicator--dashed-nested': nestLabel && indicator === 'dashed',
                })}
              ></div>
            {/if}
            <div
              class={cn(
                'sh-chart__tooltip-content',
                nestLabel
                  ? 'sh-chart__tooltip-content--nested'
                  : 'sh-chart__tooltip-content--center'
              )}
            >
              <div class="sh-chart__tooltip-name-container">
                {#if nestLabel}
                  {@render TooltipLabel()}
                {/if}
                <span class="sh-chart__tooltip-name">
                  {itemConfig?.label || item.name}
                </span>
              </div>
              {#if item.value !== undefined}
                <span class="sh-chart__tooltip-value">
                  {item.value.toLocaleString()}
                </span>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</TooltipPrimitive.Root>

<style>
  :global(.sh-chart__tooltip) {
    display: grid;
    min-width: 9rem;
    align-items: flex-start;
    gap: 0.375rem;
    border-radius: var(--radius-lg);
    border: 1px solid color-mix(in oklch, var(--border), transparent 50%);
    background-color: var(--background);
    padding: 0.375rem 0.625rem;
    font-size: 0.75rem;
    box-shadow:
      0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  :global(.sh-chart__tooltip-label) {
    font-weight: 500;
  }

  .sh-chart__tooltip-items {
    display: grid;
    gap: 0.375rem;
  }

  :global(.sh-chart__tooltip-item) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 0.5rem;
  }

  :global(.sh-chart__tooltip-item svg) {
    width: 0.625rem;
    height: 0.625rem;
    color: var(--muted-foreground);
  }

  :global(.sh-chart__tooltip-item--dot) {
    align-items: center;
  }

  :global(.sh-chart__tooltip-indicator) {
    flex-shrink: 0;
    border-radius: 2px;
    border-color: var(--color-border);
    background-color: var(--color-bg);
  }

  :global(.sh-chart__tooltip-indicator--dot) {
    width: 0.625rem;
    height: 0.625rem;
  }

  :global(.sh-chart__tooltip-indicator--line) {
    width: 0.25rem;
    height: 100%;
  }

  :global(.sh-chart__tooltip-indicator--dashed) {
    width: 0;
    border-width: 1.5px;
    border-style: dashed;
    background-color: transparent;
  }

  :global(.sh-chart__tooltip-indicator--dashed-nested) {
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
  }

  :global(.sh-chart__tooltip-content) {
    display: flex;
    flex: 1;
    flex-shrink: 0;
    justify-content: space-between;
    line-height: 1;
  }

  :global(.sh-chart__tooltip-content--nested) {
    align-items: flex-end;
  }

  :global(.sh-chart__tooltip-content--center) {
    align-items: center;
  }

  .sh-chart__tooltip-name-container {
    display: grid;
    gap: 0.375rem;
  }

  .sh-chart__tooltip-name {
    color: var(--muted-foreground);
  }

  .sh-chart__tooltip-value {
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    color: var(--foreground);
  }
</style>
