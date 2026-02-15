<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p
  bind:this={ref}
  data-slot="card-description"
  class={cn('sh-card__description', className)}
  {...restProps}
>
  {@render children?.()}
</p>

<style>
  .sh-card__description {
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }
</style>
