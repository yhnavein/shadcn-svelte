<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.TriggerProps = $props();
</script>

<MenubarPrimitive.Trigger
  bind:ref
  data-slot="menubar-trigger"
  class={cn('sh-menubar__trigger', className)}
  {...restProps}
/>

<style>
  :global(.sh-menubar__trigger) {
    display: flex;
    cursor: default;
    align-items: center;
    border-radius: var(--radius-sm);
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    outline: none;
    user-select: none;
  }

  :global(.sh-menubar__trigger:focus),
  :global(.sh-menubar__trigger[data-state='open']) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
</style>
