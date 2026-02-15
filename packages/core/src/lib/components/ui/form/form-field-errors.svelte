<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    errorClasses,
    children: childrenProp,
    ...restProps
  }: WithoutChild<FormPrimitive.FieldErrorsProps> & {
    errorClasses?: string | undefined | null;
  } = $props();
</script>

<FormPrimitive.FieldErrors bind:ref class={cn('sh-form__message', className)} {...restProps}>
  {#snippet children({ errors, errorProps })}
    {#if childrenProp}
      {@render childrenProp({ errors, errorProps })}
    {:else}
      {#each errors as error (error)}
        <div {...errorProps} class={cn(errorClasses)}>{error}</div>
      {/each}
    {/if}
  {/snippet}
</FormPrimitive.FieldErrors>

<style>
  :global(.sh-form__message) {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--destructive);
  }
</style>
