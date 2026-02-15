<script lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { buttonVariants } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
  <span>Next</span>
  <ChevronRightIcon />
{/snippet}

<PaginationPrimitive.NextButton
  bind:ref
  aria-label="Go to next page"
  class={cn('sh-pagination__next', buttonVariants(), className)}
  data-variant="ghost"
  data-size="default"
  children={children || Fallback}
  {...restProps}
/>
