<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.IndicatorProps = $props();
</script>

<NavigationMenuPrimitive.Indicator
  bind:ref
  data-slot="navigation-menu-indicator"
  class={cn('sh-navigation-menu__indicator', className)}
  {...restProps}
>
  <div class="sh-navigation-menu__indicator-arrow"></div>
</NavigationMenuPrimitive.Indicator>

<style>
  :global(.sh-navigation-menu__indicator) {
    top: 100%;
    z-index: 1;
    display: flex;
    height: 0.375rem;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    transition:
      width 0.15s ease,
      transform 0.15s ease;
  }

  :global(.sh-navigation-menu__indicator[data-state='visible']) {
    animation: navigation-menu-fade-in 0.15s ease;
  }

  :global(.sh-navigation-menu__indicator[data-state='hidden']) {
    animation: navigation-menu-fade-out 0.15s ease;
  }

  .sh-navigation-menu__indicator-arrow {
    background-color: var(--border);
    border-top-left-radius: var(--radius-sm);
    position: relative;
    top: 60%;
    height: 0.5rem;
    width: 0.5rem;
    transform: rotate(45deg);
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1); /* shadow-md */
  }

  @keyframes navigation-menu-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes navigation-menu-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
