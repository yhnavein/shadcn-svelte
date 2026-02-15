<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

<PaginationPrimitive.PrevButton
  bind:ref
  aria-label="Go to previous page"
  class={cn('sh-pagination__previous', buttonVariants(), className)}
  data-variant="ghost"
  data-size="default"
  {...restProps}
>
  <ChevronLeftIcon />
  <span class="sh-pagination__label">Previous</span></PaginationPrimitive.PrevButton
>

<style>
  :global(.sh-pagination__previous) {
    gap: 0.25rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  @media (min-width: 640px) {
    :global(.sh-pagination__previous) {
      padding-inline-start: 0.625rem;
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
