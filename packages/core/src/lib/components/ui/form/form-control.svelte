<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: Record<string, any> = $props();
</script>

<FormPrimitive.Control {...restProps}>
  {#snippet children({ props, ...rest })}
    <div bind:this={ref} class={cn('sh-form__control', className)}>
      {@render children?.({ attrs: props, ...rest })}
    </div>
  {/snippet}
</FormPrimitive.Control>

<style>
  /* .sh-form__control is primarily for future extensibility or override */
  .sh-form__control {
  }
</style>
