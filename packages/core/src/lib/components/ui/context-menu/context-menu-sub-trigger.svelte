<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...restProps
  }: WithoutChild<ContextMenuPrimitive.SubTriggerProps> & {
    inset?: boolean;
  } = $props();
</script>

<ContextMenuPrimitive.SubTrigger
  bind:ref
  data-slot="context-menu-sub-trigger"
  data-inset={inset}
  class={cn('sh-context-menu__sub-trigger', className)}
  {...restProps}
>
  {@render children?.()}
  <ChevronRightIcon class="ms-auto" />
</ContextMenuPrimitive.SubTrigger>
