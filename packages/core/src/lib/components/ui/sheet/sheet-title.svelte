<script lang="ts">
  import { Dialog as SheetPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title
  bind:ref
  data-slot="sheet-title"
  class={cn('sh-sheet__title', className)}
  {...restProps}
/>

<style>
  :global(.sh-sheet__title) {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--foreground);
  }
</style>
