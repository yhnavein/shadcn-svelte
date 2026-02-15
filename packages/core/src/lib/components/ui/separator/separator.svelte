<script lang="ts">
  import { Separator as SeparatorPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    'data-slot': dataSlot = 'separator',
    ...restProps
  }: SeparatorPrimitive.RootProps = $props();
</script>

<SeparatorPrimitive.Root
  bind:ref
  data-slot={dataSlot}
  class={cn('sh-separator', className)}
  {...restProps}
/>

<style>
  :global(.sh-separator) {
    background-color: var(--border);
    flex-shrink: 0;
  }

  :global(.sh-separator[data-orientation='horizontal']) {
    height: 1px;
    width: 100%;
  }

  :global(.sh-separator[data-orientation='vertical']) {
    height: 100%;
    width: 1px;
  }
</style>
