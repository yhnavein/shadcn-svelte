<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AlertDialogPrimitive.DescriptionProps = $props();
</script>

<AlertDialogPrimitive.Description
  bind:ref
  data-slot="alert-dialog-description"
  class={cn('sh-alert-dialog__description', className)}
  {...restProps}
/>

<style>
  .sh-alert-dialog__description {
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }
</style>
