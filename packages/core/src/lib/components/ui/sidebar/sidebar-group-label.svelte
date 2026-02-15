<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    children,
    child,
    class: className,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const mergedProps = $derived({
    class: cn('sh-sidebar-group-label', className),
    'data-slot': 'sidebar-group-label',
    'data-sidebar': 'group-label',
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}

<style>
  /* Sidebar Group Label */
  :global(.sh-sidebar-group-label) {
    color: var(--sidebar-foreground);
    opacity: 0.7;
    display: flex;
    height: 2rem; /* h-8 */
    flex-shrink: 0;
    align-items: center;
    border-radius: var(--radius-md);
    padding-inline: 0.5rem; /* px-2 */
    font-size: 0.75rem; /* text-xs */
    font-weight: 500;
    outline: none;
    transition:
      margin 0.2s linear,
      opacity 0.2s linear;
  }

  :global(.sh-sidebar-group-label:focus-visible) {
    box-shadow: 0 0 0 2px var(--sidebar-ring);
  }

  :global(.sh-sidebar-group-label > svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) :global(.sh-sidebar-group-label) {
    margin-top: -2rem; /* -mt-8 */
    opacity: 0;
  }
</style>
