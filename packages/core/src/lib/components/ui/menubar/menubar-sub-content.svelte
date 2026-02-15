<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.SubContentProps = $props();
</script>

<MenubarPrimitive.SubContent
  bind:ref
  data-slot="menubar-sub-content"
  class={cn('sh-menubar__sub-content', className)}
  {...restProps}
/>

<style>
  @keyframes sh-menubar-in-from-top {
    from {
      opacity: 0;
      transform: translateY(-0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sh-menubar-in-from-bottom {
    from {
      opacity: 0;
      transform: translateY(0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sh-menubar-in-from-left {
    from {
      opacity: 0;
      transform: translateX(-0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes sh-menubar-in-from-right {
    from {
      opacity: 0;
      transform: translateX(0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes sh-menubar-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-menubar__sub-content) {
    z-index: 50;
    min-width: 8rem;
    overflow: hidden;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--popover);
    padding: 0.25rem;
    color: var(--popover-foreground);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -2px rgb(0 0 0 / 0.05);
    transform-origin: var(--bits-menubar-content-transform-origin);
  }

  :global(.sh-menubar__sub-content[data-state='open']) {
    animation-duration: 0.15s;
    animation-timing-function: ease-out;
  }

  :global(.sh-menubar__sub-content[data-state='closed']) {
    animation: sh-menubar-out 0.15s ease-in;
  }

  :global(.sh-menubar__sub-content[data-state='open'][data-side='bottom']) {
    animation-name: sh-menubar-in-from-top;
  }

  :global(.sh-menubar__sub-content[data-state='open'][data-side='top']) {
    animation-name: sh-menubar-in-from-bottom;
  }

  :global(.sh-menubar__sub-content[data-state='open'][data-side='left']) {
    animation-name: sh-menubar-in-from-right;
  }

  :global(.sh-menubar__sub-content[data-state='open'][data-side='right']) {
    animation-name: sh-menubar-in-from-left;
  }
</style>
