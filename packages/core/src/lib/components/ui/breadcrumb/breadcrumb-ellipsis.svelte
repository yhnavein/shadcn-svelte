<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLSpanElement>>> = $props();
</script>

<span
  bind:this={ref}
  data-slot="breadcrumb-ellipsis"
  role="presentation"
  aria-hidden="true"
  class={cn('sh-breadcrumb__ellipsis', className)}
  {...restProps}
>
  <EllipsisIcon class="sh-breadcrumb__ellipsis-icon" />
  <span class="sr-only">More</span>
</span>

<style>
  .sh-breadcrumb__ellipsis {
    display: flex;
    height: 2.25rem;
    width: 2.25rem;
    align-items: center;
    justify-content: center;
  }

  :global(.sh-breadcrumb__ellipsis-icon) {
    width: 1rem;
    height: 1rem;
  }
</style>
