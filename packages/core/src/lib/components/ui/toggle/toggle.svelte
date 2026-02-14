<script lang="ts" module>
  export type ToggleVariant = 'default' | 'outline';
  export type ToggleSize = 'default' | 'sm' | 'lg';
</script>

<script lang="ts">
  import { Toggle as TogglePrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    pressed = $bindable(false),
    class: className,
    size = 'default',
    variant = 'default',
    ...restProps
  }: TogglePrimitive.RootProps & {
    variant?: ToggleVariant;
    size?: ToggleSize;
  } = $props();
</script>

<TogglePrimitive.Root
  bind:ref
  bind:pressed
  data-slot="toggle"
  class={cn(
    'sh-toggle',
    variant === 'default' && 'sh-toggle--default',
    variant === 'outline' && 'sh-toggle--outline',
    size === 'default' && 'sh-toggle--default-size',
    size === 'sm' && 'sh-toggle--sm',
    size === 'lg' && 'sh-toggle--lg',
    className
  )}
  {...restProps}
/>
