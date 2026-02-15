<script lang="ts">
  import GripVerticalIcon from '@lucide/svelte/icons/grip-vertical';
  import * as ResizablePrimitive from 'paneforge';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    withHandle = false,
    ...restProps
  }: WithoutChildrenOrChild<ResizablePrimitive.PaneResizerProps> & {
    withHandle?: boolean;
  } = $props();
</script>

<ResizablePrimitive.PaneResizer
  bind:ref
  data-slot="resizable-handle"
  class={cn('sh-resizable__handle', className)}
  {...restProps}
>
  {#if withHandle}
    <div class="sh-resizable__handle-icon">
      <GripVerticalIcon class="size-2.5" />
    </div>
  {/if}
</ResizablePrimitive.PaneResizer>

<style>
  :global(.sh-resizable__handle) {
    position: relative;
    display: flex;
    width: 1px;
    align-items: center;
    justify-content: center;
    background-color: var(--border);
  }

  :global(.sh-resizable__handle:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 1px var(--ring);
    outline-offset: 1px;
  }

  :global(.sh-resizable__handle::after) {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    transform: translateX(-50%);
  }

  :global(.sh-resizable__handle[data-direction='vertical']) {
    height: 1px;
    width: 100%;
  }

  :global(.sh-resizable__handle[data-direction='vertical']::after) {
    left: 0;
    height: 4px;
    width: 100%;
    transform: translate(0, -50%);
    top: 50%;
  }

  :global(.sh-resizable__handle[data-direction='vertical']) > div {
    transform: rotate(90deg);
  }

  .sh-resizable__handle-icon {
    z-index: 10;
    display: flex;
    height: 1rem;
    width: 0.75rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.125rem;
    border: 1px solid var(--border);
    background-color: var(--border);
  }
</style>
