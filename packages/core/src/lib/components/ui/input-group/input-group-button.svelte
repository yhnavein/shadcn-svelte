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
