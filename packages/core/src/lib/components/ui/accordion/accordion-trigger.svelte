<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
  import type { WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    level = 3,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.TriggerProps> & {
    level?: AccordionPrimitive.HeaderProps['level'];
  } = $props();
</script>

<AccordionPrimitive.Header {level} class="sh-accordion__header">
  <AccordionPrimitive.Trigger
    data-slot="accordion-trigger"
    bind:ref
    class="sh-accordion__trigger {className || ''}"
    {...restProps}
  >
    {@render children?.()}
    <ChevronDownIcon class="sh-accordion__icon" />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
