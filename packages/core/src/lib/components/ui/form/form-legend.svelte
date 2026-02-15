<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LegendProps> = $props();
</script>

<FormPrimitive.Legend bind:ref class={cn('sh-form__legend', className)} {...restProps} />

<style>
  :global(.sh-form__legend) {
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 500;
  }

  :global(.sh-form__legend[data-fs-error]) {
    color: var(--destructive);
  }
</style>
