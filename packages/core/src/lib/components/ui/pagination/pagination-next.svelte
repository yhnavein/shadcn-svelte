<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

<PaginationPrimitive.NextButton
  bind:ref
  aria-label="Go to next page"
  class={cn('sh-pagination__next', buttonVariants(), className)}
  data-variant="ghost"
  data-size="default"
  {...restProps}
>
  <span class="sh-pagination__label">Next</span>
  <ChevronRightIcon /></PaginationPrimitive.NextButton
>

<style>
  :global(.sh-pagination__next) {
    gap: 0.25rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  @media (min-width: 640px) {
    :global(.sh-pagination__next) {
      padding-inline-end: 0.625rem;
    }
  }

  .sh-pagination__label {
    display: none;
  }

  @media (min-width: 640px) {
    .sh-pagination__label {
      display: block;
    }
  }
</style>
