<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: TabsPrimitive.ContentProps = $props();
</script>

<TabsPrimitive.Content
  bind:ref
  data-slot="tabs-content"
  class={cn('sh-tabs__content', className)}
  {...restProps}
/>

<style>
  .sh-tabs__content {
    margin-top: 0.5rem;
  }

  .sh-tabs__content:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--background),
      0 0 0 4px var(--ring);
  }
</style>
