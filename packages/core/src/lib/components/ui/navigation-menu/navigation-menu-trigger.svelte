<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: NavigationMenuPrimitive.TriggerProps = $props();
</script>

<NavigationMenuPrimitive.Trigger
  bind:ref
  data-slot="navigation-menu-trigger"
  class={cn('sh-navigation-menu__trigger', className)}
  {...restProps}
>
  {@render children?.()}

  <ChevronDownIcon class="sh-navigation-menu__trigger-icon" aria-hidden="true" />
</NavigationMenuPrimitive.Trigger>

<style>
  :global(.sh-navigation-menu__trigger) {
    display: inline-flex;
    height: 2.5rem;
    width: max-content;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background-color: var(--background);
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition:
      background-color 0.15s ease-in-out,
      color 0.15s ease-in-out;
  }

  :global(.sh-navigation-menu__trigger:hover),
  :global(.sh-navigation-menu__trigger:focus) {
    background-color: var(--accent);
    color: var(--accent-foreground);
    outline: none;
  }

  :global(.sh-navigation-menu__trigger[disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(
    .sh-navigation-menu__trigger[data-active],
    .sh-navigation-menu__trigger[data-state='open']
  ) {
    background-color: color-mix(in srgb, var(--accent) 50%, transparent);
  }

  :global(.sh-navigation-menu__trigger-icon) {
    position: relative;
    top: 1px;
    margin-inline-start: 0.25rem;
    height: 0.75rem;
    width: 0.75rem;
    transition-duration: 300ms;
  }

  :global(.sh-navigation-menu__trigger[data-state='open'] .sh-navigation-menu__trigger-icon) {
    transform: rotate(180deg);
  }
</style>
