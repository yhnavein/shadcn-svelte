<script lang="ts">
  import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
  import { getToggleGroupCtx } from './toggle-group.svelte';
  import { cn } from '$lib/utils.js';
  import type { ToggleVariant, ToggleSize } from '$lib/components/ui/toggle/index.js';

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    size,
    variant,
    ...restProps
  }: ToggleGroupPrimitive.ItemProps & {
    variant?: ToggleVariant;
    size?: ToggleSize;
  } = $props();

  const ctx = getToggleGroupCtx();
</script>

<ToggleGroupPrimitive.Item
  bind:ref
  data-slot="toggle-group-item"
  data-variant={ctx.variant || variant}
  data-size={ctx.size || size}
  data-spacing={ctx.spacing}
  class={cn(
    'sh-toggle',
    'sh-toggle-group-item',
    (ctx.variant || variant) === 'default' && 'sh-toggle--default',
    (ctx.variant || variant) === 'outline' && 'sh-toggle--outline',
    (ctx.size || size) === 'default' && 'sh-toggle--default-size',
    (ctx.size || size) === 'sm' && 'sh-toggle--sm',
    (ctx.size || size) === 'lg' && 'sh-toggle--lg',
    className
  )}
  {value}
  {...restProps}
/>
