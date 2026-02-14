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
