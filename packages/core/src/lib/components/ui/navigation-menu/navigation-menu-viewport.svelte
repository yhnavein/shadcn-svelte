<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ViewportProps = $props();
</script>

<div class="sh-navigation-menu__viewport-wrapper">
  <NavigationMenuPrimitive.Viewport
    bind:ref
    data-slot="navigation-menu-viewport"
    class={cn('sh-navigation-menu__viewport', className)}
    {...restProps}
  />
</div>

<style>
  .sh-navigation-menu__viewport-wrapper {
    position: absolute;
    inset-inline-start: 0;
    top: 100%;
    isolation: isolate;
    z-index: 50;
    display: flex;
    justify-content: center;
  }

  :global(.sh-navigation-menu__viewport) {
    position: relative;
    margin-top: 0.375rem;
    height: var(--bits-navigation-menu-viewport-height);
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--popover);
    color: var(--popover-foreground);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    transform-origin: top center;
    transition:
      width 0.15s ease,
      height 0.15s ease;
  }

  @media (min-width: 768px) {
    :global(.sh-navigation-menu__viewport) {
      width: var(--bits-navigation-menu-viewport-width);
    }
  }

  :global(.sh-navigation-menu__viewport[data-state='open']) {
    animation: navigation-menu-scale-in 0.15s ease;
  }

  :global(.sh-navigation-menu__viewport[data-state='closed']) {
    animation: navigation-menu-scale-out 0.15s ease;
  }

  @keyframes navigation-menu-scale-in {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes navigation-menu-scale-out {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.95);
      opacity: 0;
    }
  }
</style>
