<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p
  bind:this={ref}
  data-slot="field-description"
  class={cn('sh-field__description', className)}
  {...restProps}
>
  {@render children?.()}
</p>

<style>
  .sh-field__description {
    font-size: 0.8rem;
    color: var(--muted-foreground);
  }
</style>
