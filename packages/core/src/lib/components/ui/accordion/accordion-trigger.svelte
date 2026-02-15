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

<style>
  :global(.sh-accordion__header) {
    display: flex;
  }

  :global(.sh-accordion__trigger) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 500;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    font-size: 0.875rem;
    text-align: start;
  }

  :global(.sh-accordion__trigger:hover) {
    text-decoration: underline;
  }

  :global(.sh-accordion__trigger:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 2px var(--ring);
  }

  :global(.sh-accordion__trigger[disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-accordion__trigger[data-state='open']) :global(.sh-accordion__icon) {
    transform: rotate(180deg);
  }

  :global(.sh-accordion__icon) {
    height: 1rem;
    width: 1rem;
    flex-shrink: 0;
    color: var(--muted-foreground);
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    pointer-events: none;
  }
</style>
