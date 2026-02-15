<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.SeparatorProps = $props();
</script>

<MenubarPrimitive.Separator
  bind:ref
  data-slot="menubar-separator"
  class={cn('sh-menubar__separator', className)}
  {...restProps}
/>

<style>
  :global(.sh-menubar__separator) {
    margin: 0.25rem -0.25rem;
    height: 1px;
    background-color: var(--border);
  }
</style>
