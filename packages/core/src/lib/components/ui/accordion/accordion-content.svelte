<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import type { WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
  bind:ref
  data-slot="accordion-content"
  class="sh-accordion__content"
  {...restProps}
>
  <div class="sh-accordion__content-inner {className || ''}">
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>
