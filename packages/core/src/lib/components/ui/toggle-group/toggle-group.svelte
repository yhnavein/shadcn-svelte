<script lang="ts" module>
  import { getContext, setContext } from 'svelte';
  import type { ToggleVariant, ToggleSize } from '$lib/components/ui/toggle/index.js';

  interface ToggleGroupContext {
    variant?: ToggleVariant;
    size?: ToggleSize;
    spacing?: number;
  }

  export function setToggleGroupCtx(props: ToggleGroupContext) {
    setContext('toggleGroup', props);
  }

  export function getToggleGroupCtx() {
    return getContext<Required<ToggleGroupContext>>('toggleGroup');
  }
</script>

<script lang="ts">
  import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    size = 'default',
    spacing = 0,
    variant = 'default',
    ...restProps
  }: ToggleGroupPrimitive.RootProps & {
    variant?: ToggleVariant;
    size?: ToggleSize;
    spacing?: number;
  } = $props();

  setToggleGroupCtx({
    variant,
    size,
    spacing,
  });
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<ToggleGroupPrimitive.Root
  bind:value={value as never}
  bind:ref
  data-slot="toggle-group"
  data-variant={variant}
  data-size={size}
  data-spacing={spacing}
  class={cn('sh-toggle-group', className)}
  {...restProps}
/>

<style>
  :global(.sh-toggle-group) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: fit-content;
    border-radius: var(--radius-md);
  }

  :global(.sh-toggle-group[data-spacing='0']) {
    gap: 0;
  }
</style>
