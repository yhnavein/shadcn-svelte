<script lang="ts" module>
  export type InputGroupButtonSize = 'xs' | 'sm' | 'icon-xs' | 'icon-sm';
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';
  import { Button } from '$lib/components/ui/button/index.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    type = 'button',
    variant = 'ghost',
    size = 'xs',
    ...restProps
  }: Omit<ComponentProps<typeof Button>, 'href' | 'size'> & {
    size?: InputGroupButtonSize;
  } = $props();
</script>

<Button
  bind:ref
  {type}
  data-size={size}
  {variant}
  class={cn('sh-input-group__button', className)}
  {...restProps}
>
  {@render children?.()}
</Button>

<style>
  /* Button Styles */
  :global(.sh-input-group__button) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    box-shadow: none !important; /* Override button shadow */
  }

  /* Size: xs */
  :global(.sh-input-group__button[data-size='xs']) {
    height: 1.5rem; /* h-6 */
    gap: 0.25rem;
    border-radius: calc(var(--radius) - 5px);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  :global(.sh-input-group__button[data-size='xs']:has(> svg)) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  :global(.sh-input-group__button[data-size='xs'] svg:not([class*='size-'])) {
    width: 0.875rem;
    height: 0.875rem;
  }

  /* Size: sm */
  :global(.sh-input-group__button[data-size='sm']) {
    height: 2rem; /* h-8 */
    gap: 0.375rem;
    border-radius: var(--radius-md);
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  :global(.sh-input-group__button[data-size='sm']:has(> svg)) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  /* Size: icon-xs */
  :global(.sh-input-group__button[data-size='icon-xs']) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: calc(var(--radius) - 5px);
    padding: 0;
  }

  :global(.sh-input-group__button[data-size='icon-xs']:has(> svg)) {
    padding: 0;
  }

  /* Size: icon-sm */
  :global(.sh-input-group__button[data-size='icon-sm']) {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  :global(.sh-input-group__button[data-size='icon-sm']:has(> svg)) {
    padding: 0;
  }
</style>
