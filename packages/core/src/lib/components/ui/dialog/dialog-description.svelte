<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DialogPrimitive.DescriptionProps = $props();
</script>

<DialogPrimitive.Description
  bind:ref
  data-slot="dialog-description"
  class={cn('sh-dialog__description', className)}
  {...restProps}
/>

<style>
  :global(.sh-dialog__description) {
    font-size: 0.875rem; /* text-sm */
    color: var(--muted-foreground);
  }
</style>
