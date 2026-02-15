<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DialogPrimitive.TitleProps = $props();
</script>

<DialogPrimitive.Title
  bind:ref
  data-slot="dialog-title"
  class={cn('sh-dialog__title', className)}
  {...restProps}
/>

<style>
  :global(.sh-dialog__title) {
    font-size: 1.125rem; /* text-lg */
    font-weight: 600; /* font-semibold */
    line-height: 1; /* leading-none */
    letter-spacing: -0.025em; /* tracking-tight */
    color: var(--foreground);
  }
</style>
