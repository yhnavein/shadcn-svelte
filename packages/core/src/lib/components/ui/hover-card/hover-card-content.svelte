<script lang="ts">
  import { LinkPreview as HoverCardPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import HoverCardPortal from './hover-card-portal.svelte';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    align = 'center',
    sideOffset = 4,
    portalProps,
    ...restProps
  }: HoverCardPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof HoverCardPortal>>;
  } = $props();
</script>

<HoverCardPortal {...portalProps}>
  <HoverCardPrimitive.Content
    bind:ref
    data-slot="hover-card-content"
    {align}
    {sideOffset}
    class={cn('sh-hover-card__content', className)}
    {...restProps}
  />
</HoverCardPortal>

<style>
  @keyframes sh-hover-card-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes sh-hover-card-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-hover-card__content) {
    z-index: 50;
    width: 16rem;
    border-radius: var(--radius-md, 0.375rem);
    border: 1px solid var(--border);
    background-color: var(--popover);
    padding: 1rem;
    color: var(--popover-foreground);
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    outline: none;
    margin-top: 0.75rem;
  }

  :global(.sh-hover-card__content[data-state='open']) {
    animation: sh-hover-card-in 150ms ease-in-out;
  }

  :global(.sh-hover-card__content[data-state='closed']) {
    animation: sh-hover-card-out 150ms ease-in-out;
  }
</style>
