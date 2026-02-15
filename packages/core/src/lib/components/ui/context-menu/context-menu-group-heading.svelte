<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    ...restProps
  }: ContextMenuPrimitive.GroupHeadingProps & {
    inset?: boolean;
  } = $props();
</script>

<ContextMenuPrimitive.GroupHeading
  bind:ref
  data-slot="context-menu-group-heading"
  data-inset={inset}
  class={cn('sh-context-menu__group-heading', className)}
  {...restProps}
/>

<style>
  :global(.sh-context-menu__group-heading) {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
  :global(.sh-context-menu__group-heading[data-inset]) {
    padding-left: 2rem;
  }
</style>
