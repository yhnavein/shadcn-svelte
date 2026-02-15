<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AccordionPrimitive.ItemProps = $props();
</script>

<AccordionPrimitive.Item
  bind:ref
  data-slot="accordion-item"
  class="sh-accordion__item {className || ''}"
  {...restProps}
/>

<style>
  :global(.sh-accordion__item) {
    border-bottom: 1px solid var(--border);
  }

  :global(.sh-accordion__item:last-child) {
    border-bottom: 0;
  }
</style>
