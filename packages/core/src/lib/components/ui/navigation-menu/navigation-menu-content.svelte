<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ContentProps = $props();
</script>

<NavigationMenuPrimitive.Content
  bind:ref
  data-slot="navigation-menu-content"
  class={cn('sh-navigation-menu__content', className)}
  {...restProps}
/>

<style>
  :global(.sh-navigation-menu__content) {
    left: 0;
    top: 0;
    width: 100%;
    animation-duration: 0.15s;
    animation-timing-function: ease;
  }

  @media (min-width: 768px) {
    :global(.sh-navigation-menu__content) {
      position: absolute;
      width: auto;
    }
  }

  :global(.sh-navigation-menu__content[data-motion^='from-']) {
    animation-name: navigation-menu-fade-in;
  }

  :global(.sh-navigation-menu__content[data-motion^='to-']) {
    animation-name: navigation-menu-fade-out;
  }

  :global(.sh-navigation-menu__content[data-motion='from-end']) {
    animation-name: navigation-menu-enter-from-right;
  }

  :global(.sh-navigation-menu__content[data-motion='from-start']) {
    animation-name: navigation-menu-enter-from-left;
  }

  :global(.sh-navigation-menu__content[data-motion='to-end']) {
    animation-name: navigation-menu-exit-to-right;
  }

  :global(.sh-navigation-menu__content[data-motion='to-start']) {
    animation-name: navigation-menu-exit-to-left;
  }

  /* When viewport is false, treat as popover */
  :global(.sh-navigation-menu[data-viewport='false'] .sh-navigation-menu__content) {
    background-color: var(--popover);
    color: var(--popover-foreground);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow);
    top: 100%;
    margin-top: 0.375rem;
    overflow: hidden;
  }

  :global(
    .sh-navigation-menu[data-viewport='false'] .sh-navigation-menu__content[data-state='open']
  ) {
    animation:
      navigation-menu-enter-zoom 0.2s ease-out,
      navigation-menu-fade-in 0.2s ease-out;
  }

  :global(
    .sh-navigation-menu[data-viewport='false'] .sh-navigation-menu__content[data-state='closed']
  ) {
    animation:
      navigation-menu-exit-zoom 0.2s ease-in,
      navigation-menu-fade-out 0.2s ease-in;
  }

  /* Reset outline for links inside content */
  :global(.sh-navigation-menu__content [data-slot='navigation-menu-link']:focus) {
    outline: none;
    box-shadow: none;
  }

  @keyframes navigation-menu-enter-from-right {
    from {
      transform: translateX(13rem);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes navigation-menu-enter-from-left {
    from {
      transform: translateX(-13rem);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes navigation-menu-exit-to-right {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(13rem);
      opacity: 0;
    }
  }

  @keyframes navigation-menu-exit-to-left {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-13rem);
      opacity: 0;
    }
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

  @keyframes navigation-menu-enter-zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes navigation-menu-exit-zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.95);
    }
  }
</style>
