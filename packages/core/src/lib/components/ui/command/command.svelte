<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Command as CommandPrimitive } from 'bits-ui';

  export type CommandRootApi = CommandPrimitive.Root;

  let {
    api = $bindable(null),
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: CommandPrimitive.RootProps & {
    api?: CommandRootApi | null;
  } = $props();
</script>

<CommandPrimitive.Root
  bind:this={api}
  bind:value
  bind:ref
  data-slot="command"
  class={cn('sh-command', className)}
  {...restProps}
/>

<style>
  :global(.sh-command) {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    border-radius: var(--radius-md);
    background-color: var(--popover);
    color: var(--popover-foreground);
  }
</style>
