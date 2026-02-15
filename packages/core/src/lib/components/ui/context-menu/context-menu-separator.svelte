<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ContextMenuPrimitive.SeparatorProps = $props();
</script>

<ContextMenuPrimitive.Separator
  bind:ref
  data-slot="context-menu-separator"
  class={cn('sh-context-menu__separator', className)}
  {...restProps}
/>

<style>
  :global(.sh-context-menu__separator) {
    margin: 0.25rem -0.25rem;
    height: 1px;
    background-color: var(--muted);
  }
</style>
