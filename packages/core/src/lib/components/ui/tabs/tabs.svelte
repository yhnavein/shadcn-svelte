<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: TabsPrimitive.RootProps = $props();
</script>

<TabsPrimitive.Root
  bind:ref
  bind:value
  data-slot="tabs"
  class={cn('sh-tabs', className)}
  {...restProps}
/>

<style>
  .sh-tabs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
