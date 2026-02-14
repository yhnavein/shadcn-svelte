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
