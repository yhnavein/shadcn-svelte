<script lang="ts">
  import { Tooltip as TooltipPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import TooltipPortal from './tooltip-portal.svelte';
  import type { ComponentProps } from 'svelte';
  import type { WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    sideOffset = 0,
    side = 'top',
    children,
    arrowClasses,
    portalProps,
    ...restProps
  }: TooltipPrimitive.ContentProps & {
    arrowClasses?: string;
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof TooltipPortal>>;
  } = $props();
</script>

<TooltipPortal {...portalProps}>
  <TooltipPrimitive.Content
    bind:ref
    data-slot="tooltip-content"
    {sideOffset}
    {side}
    class={cn('sh-tooltip__content', className)}
    {...restProps}
  >
    {@render children?.()}
    <TooltipPrimitive.Arrow>
      {#snippet child({ props })}
        <div class={cn('sh-tooltip__arrow', arrowClasses)} {...props}></div>
      {/snippet}
    </TooltipPrimitive.Arrow>
  </TooltipPrimitive.Content>
</TooltipPortal>

<style>
  @keyframes sh-tooltip-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes sh-tooltip-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-tooltip__content) {
    z-index: 50;
    overflow: hidden;
    border-radius: var(--radius-md, 0.375rem);
    background-color: var(--foreground);
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    color: var(--background);
    width: fit-content;
    text-wrap: balance;
    transform-origin: var(--bits-tooltip-content-transform-origin);
  }

  :global(.sh-tooltip__content[data-state='delayed-open']),
  :global(.sh-tooltip__content[data-state='instant-open']) {
    animation: sh-tooltip-in 150ms ease-in-out;
  }

  :global(.sh-tooltip__content[data-state='closed']) {
    animation: sh-tooltip-out 150ms ease-in-out;
  }

  :global(.sh-tooltip__arrow) {
    background-color: var(--foreground);
    z-index: 50;
    width: 0.625rem;
    height: 0.625rem;
    transform: rotate(45deg);
    border-radius: 2px;
  }

  :global(.sh-tooltip__arrow[data-side='top']) {
    transform: translateX(50%) translateY(calc(-50% + 2px)) rotate(45deg);
  }

  :global(.sh-tooltip__arrow[data-side='bottom']) {
    transform: translateX(-50%) translateY(calc(-50% + 1px)) rotate(45deg);
  }

  :global(.sh-tooltip__arrow[data-side='right']) {
    transform: translateX(calc(50% + 2px)) translateY(50%) rotate(45deg);
  }

  :global(.sh-tooltip__arrow[data-side='left']) {
    transform: translateY(calc(50% - 3px)) rotate(45deg);
  }
</style>
