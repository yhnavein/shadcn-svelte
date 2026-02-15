<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DropdownMenuPrimitive.SeparatorProps = $props();
</script>

<DropdownMenuPrimitive.Separator
  bind:ref
  data-slot="dropdown-menu-separator"
  class={cn('sh-dropdown-menu__separator', className)}
  {...restProps}
/>

<style>
  :global(.sh-dropdown-menu__separator) {
    margin: 0.25rem -0.25rem;
    height: 1px;
    background-color: var(--muted);
  }
</style>
