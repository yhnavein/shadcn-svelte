<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import ChartStyle from './chart-style.svelte';
  import { setChartContext, type ChartConfig } from './chart-utils.js';

  const uid = $props.id();

  let {
    ref = $bindable(null),
    id = uid,
    class: className,
    children,
    config,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> & {
    config: ChartConfig;
  } = $props();

  const chartId = `chart-${id || uid.replace(/:/g, '')}`;

  setChartContext({
    get config() {
      return config;
    },
  });
</script>

<div
  bind:this={ref}
  data-chart={chartId}
  data-slot="chart"
  class={cn('sh-chart', className)}
  {...restProps}
>
  <ChartStyle id={chartId} {config} />
  {@render children?.()}
</div>

<style>
  .sh-chart {
    display: flex;
    aspect-ratio: 16 / 9;
    justify-content: center;
    overflow: visible;
    font-size: 0.75rem;
  }

  /* LayerChart Overrides */
  :global(.sh-chart .lc-highlight-point) {
    stroke: transparent;
  }

  :global(.sh-chart .lc-line) {
    stroke: color-mix(in oklch, var(--border), transparent 50%);
  }

  :global(.sh-chart .lc-highlight-line) {
    stroke-width: 0;
  }

  :global(
    .sh-chart .lc-area-path,
    .sh-chart .lc-highlight-line,
    .sh-chart .lc-highlight-point,
    .sh-chart .lc-spline-path
  ) {
    opacity: 1;
  }

  :global(.sh-chart .lc-text) {
    font-size: 0.75rem;
  }

  :global(.sh-chart .lc-text-svg) {
    overflow: visible;
  }

  :global(.sh-chart .lc-axis-tick) {
    stroke-width: 0;
  }

  :global(
    .sh-chart .lc-rule-x-line:not(.lc-grid-x-rule),
    .sh-chart .lc-rule-y-line:not(.lc-grid-y-rule)
  ) {
    stroke-width: 0;
  }

  :global(
    .sh-chart .lc-grid-x-radial-line,
    .sh-chart .lc-grid-x-radial-circle,
    .sh-chart .lc-grid-y-radial-line,
    .sh-chart .lc-grid-y-radial-circle
  ) {
    stroke: var(--border);
  }

  :global(.sh-chart .lc-legend-swatch-button) {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  :global(.sh-chart .lc-legend-swatch-group) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  :global(.sh-chart .lc-legend-swatch) {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 2px;
  }

  :global(.sh-chart .lc-labels-text:not([fill])) {
    fill: var(--foreground);
  }

  :global(.sh-chart text) {
    stroke: transparent;
  }

  :global(.sh-chart .lc-axis-tick-label) {
    fill: var(--muted-foreground);
    font-weight: 400;
  }

  :global(.sh-chart .lc-tooltip-rects-g, .sh-chart .lc-layout-svg-g) {
    fill: transparent;
  }

  :global(.sh-chart .lc-root-container) {
    width: 100%;
  }

  :global(.sh-chart__legend) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
