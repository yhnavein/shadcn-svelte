<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.LinkProps = $props();
</script>

<NavigationMenuPrimitive.Link
  bind:ref
  data-slot="navigation-menu-link"
  class={cn('sh-navigation-menu__link', className)}
  {...restProps}
/>

<style>
  :global(.sh-navigation-menu__link) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    border-radius: var(--radius-sm);
    padding: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-duration: 150ms;
    outline: none;
    text-decoration: none;
    color: inherit;
  }

  :global(.sh-navigation-menu__link:hover),
  :global(.sh-navigation-menu__link:focus) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-navigation-menu__link[data-active='true']) {
    background-color: color-mix(in srgb, var(--accent) 50%, transparent);
    color: var(--accent-foreground);
  }

  :global(.sh-navigation-menu__link[data-active='true']:hover),
  :global(.sh-navigation-menu__link[data-active='true']:focus) {
    background-color: var(--accent);
  }

  :global(.sh-navigation-menu__link:focus-visible) {
    outline: 1px solid var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
  }

  :global(.sh-navigation-menu__link svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }

  :global(.sh-navigation-menu__link svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }
</style>
