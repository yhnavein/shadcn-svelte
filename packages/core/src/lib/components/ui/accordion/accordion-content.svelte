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

<style>
  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--bits-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--bits-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  :global(.sh-accordion__content) {
    overflow: hidden;
    font-size: 0.875rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  :global(.sh-accordion__content[data-state='closed']) {
    animation: accordion-up 0.2s ease-out;
  }

  :global(.sh-accordion__content[data-state='open']) {
    animation: accordion-down 0.2s ease-out;
  }

  .sh-accordion__content-inner {
    padding-bottom: 1rem;
    padding-top: 0;
  }
</style>
