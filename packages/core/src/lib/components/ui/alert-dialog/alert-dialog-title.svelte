<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AlertDialogPrimitive.TitleProps = $props();
</script>

<AlertDialogPrimitive.Title
  bind:ref
  data-slot="alert-dialog-title"
  class={cn('sh-alert-dialog__title', className)}
  {...restProps}
/>

<style>
  .sh-alert-dialog__title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--foreground);
  }
</style>
