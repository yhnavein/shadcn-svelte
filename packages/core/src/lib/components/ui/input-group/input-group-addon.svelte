<script lang="ts" module>
  export type InputGroupAddonAlign = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
</script>

<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    align = 'inline-start',
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    align?: InputGroupAddonAlign;
  } = $props();
</script>

<div
  bind:this={ref}
  role="group"
  data-slot="input-group-addon"
  data-align={align}
  class={cn('sh-input-group__addon', className)}
  onclick={(e) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    e.currentTarget.parentElement?.querySelector('input')?.focus();
  }}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Addon Styles */
  .sh-input-group__addon {
    color: var(--muted-foreground);
    display: flex;
    height: auto;
    cursor: text;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    user-select: none;
  }

  :global(.sh-input-group[data-disabled='true']) .sh-input-group__addon {
    opacity: 0.5;
  }

  .sh-input-group__addon :global(kbd) {
    border-radius: calc(var(--radius) - 5px);
  }

  .sh-input-group__addon :global(svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  /* Variant: align="inline-start" */
  .sh-input-group__addon[data-align='inline-start'] {
    order: -1; /* order-first */
    padding-inline-start: 0.75rem;
  }

  .sh-input-group__addon[data-align='inline-start']:has(> :global(button)) {
    margin-inline-start: -0.45rem;
  }

  .sh-input-group__addon[data-align='inline-start']:has(> :global(kbd)) {
    margin-inline-start: -0.35rem;
  }

  /* Variant: align="inline-end" */
  .sh-input-group__addon[data-align='inline-end'] {
    order: 9999; /* order-last */
    padding-inline-end: 0.75rem;
  }

  .sh-input-group__addon[data-align='inline-end']:has(> :global(button)) {
    margin-inline-end: -0.45rem;
  }

  .sh-input-group__addon[data-align='inline-end']:has(> :global(kbd)) {
    margin-inline-end: -0.35rem;
  }

  /* Variant: align="block-start" */
  .sh-input-group__addon[data-align='block-start'] {
    order: -1;
    width: 100%;
    justify-content: flex-start;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.75rem;
  }

  :global(.sh-input-group:has(> input)) .sh-input-group__addon[data-align='block-start'] {
    padding-top: 0.625rem;
  }

  /* Variant: align="block-end" */
  .sh-input-group__addon[data-align='block-end'] {
    order: 9999;
    width: 100%;
    justify-content: flex-start;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-bottom: 0.75rem;
  }

  :global(.sh-input-group:has(> input)) .sh-input-group__addon[data-align='block-end'] {
    padding-bottom: 0.625rem;
  }
</style>
