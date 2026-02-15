<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    href = undefined,
    child,
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    child?: Snippet<[{ props: HTMLAnchorAttributes }]>;
  } = $props();

  const attrs = $derived({
    'data-slot': 'breadcrumb-link',
    class: cn('sh-breadcrumb__link', className),
    href,
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: attrs })}
{:else}
  <a bind:this={ref} {...attrs}>
    {@render children?.()}
  </a>
{/if}

<style>
  :global(.sh-breadcrumb__link) {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  :global(.sh-breadcrumb__link:hover) {
    color: var(--foreground);
  }
</style>
