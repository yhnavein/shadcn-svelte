<script lang="ts" module>
  export type AlertVariant = 'default' | 'destructive';
</script>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: AlertVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="alert"
  data-variant={variant}
  class={cn('sh-alert', className)}
  {...restProps}
  role="alert"
>
  {@render children?.()}
</div>

<style>
  .sh-alert {
    position: relative;
    width: 100%;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    padding: 1rem;
  }

  .sh-alert > :global(svg) {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: var(--foreground);
  }

  .sh-alert > :global(svg) ~ :global(*) {
    padding-left: 1.75rem;
  }

  .sh-alert > :global(svg) + :global(div) {
    transform: translateY(-3px);
  }

  .sh-alert[data-variant='default'] {
    background-color: var(--background);
    color: var(--foreground);
  }

  .sh-alert[data-variant='destructive'] {
    border-color: oklch(from var(--destructive) l c h / 0.5);
    color: var(--destructive);
  }

  .sh-alert[data-variant='destructive'] > :global(svg) {
    color: var(--destructive);
  }

  /* Dark mode handling for destructive border */
  :global(.dark) .sh-alert[data-variant='destructive'] {
    border-color: var(--destructive);
  }
</style>
