<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CommandPrimitive.ListProps = $props();
</script>

<CommandPrimitive.List
  bind:ref
  data-slot="command-list"
  class={cn('sh-command__list', className)}
  {...restProps}
/>

<style>
  :global(.sh-command__list) {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
