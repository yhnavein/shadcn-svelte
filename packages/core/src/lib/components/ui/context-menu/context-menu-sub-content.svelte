<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ContextMenuPrimitive.SubContentProps = $props();
</script>

<ContextMenuPrimitive.SubContent
  bind:ref
  data-slot="context-menu-sub-content"
  class={cn('sh-context-menu__sub-content', className)}
  {...restProps}
/>

<style>
  @keyframes sh-context-enter {
    from {
      opacity: 0;
      transform: scale(0.95)
        translate(var(--sh-context-enter-translate-x, 0), var(--sh-context-enter-translate-y, 0));
    }
    to {
      opacity: 1;
      transform: scale(1) translate(0, 0);
    }
  }

  @keyframes sh-context-exit {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-context-menu__sub-content) {
    z-index: 50;
    min-width: 8rem;
    overflow: hidden;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--popover);
    padding: 0.25rem;
    color: var(--popover-foreground);
    outline: none;
    max-height: var(--bits-context-menu-content-available-height);
    transform-origin: var(--bits-context-menu-content-transform-origin);
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -2px rgb(0 0 0 / 0.05);
  }

  :global(.sh-context-menu__sub-content[data-state='open']) {
    animation: sh-context-enter 0.1s ease-out;
  }

  :global(.sh-context-menu__sub-content[data-state='closed']) {
    animation: sh-context-exit 0.1s ease-in;
  }

  :global(.sh-context-menu__sub-content[data-side='bottom']) {
    --sh-context-enter-translate-y: -0.5rem;
  }
  :global(.sh-context-menu__sub-content[data-side='top']) {
    --sh-context-enter-translate-y: 0.5rem;
  }
  :global(.sh-context-menu__sub-content[data-side='left']) {
    --sh-context-enter-translate-x: 0.5rem;
  }
  :global(.sh-context-menu__sub-content[data-side='right']) {
    --sh-context-enter-translate-x: -0.5rem;
  }
</style>
