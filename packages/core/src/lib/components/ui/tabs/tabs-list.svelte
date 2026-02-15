<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let { ref = $bindable(null), class: className, ...restProps }: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List
  bind:ref
  data-slot="tabs-list"
  class={cn('sh-tabs__list', className)}
  {...restProps}
/>

<style>
  .sh-tabs__list {
    display: inline-flex;
    height: 2.25rem;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background-color: var(--muted);
    padding: 3px;
    color: var(--muted-foreground);
  }
</style>
