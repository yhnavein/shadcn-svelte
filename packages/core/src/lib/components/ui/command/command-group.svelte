<script lang="ts">
  import { Command as CommandPrimitive, useId } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    heading,
    value,
    ...restProps
  }: CommandPrimitive.GroupProps & {
    heading?: string;
  } = $props();
</script>

<CommandPrimitive.Group
  bind:ref
  data-slot="command-group"
  class={cn('sh-command__group', className)}
  value={value ?? heading ?? `----${useId()}`}
  {...restProps}
>
  {#if heading}
    <CommandPrimitive.GroupHeading>
      {heading}
    </CommandPrimitive.GroupHeading>
  {/if}
  <CommandPrimitive.GroupItems {children} />
</CommandPrimitive.Group>

<style>
  :global(.sh-command__group) {
    overflow: hidden;
    padding: 0.25rem; /* p-1 */
    color: var(--foreground);
  }

  :global(.sh-command__group [cmdk-group-heading]) {
    padding-left: 0.5rem; /* px-2 */
    padding-right: 0.5rem;
    padding-top: 0.375rem; /* py-1.5 */
    padding-bottom: 0.375rem;
    font-size: 0.75rem; /* text-xs */
    font-weight: 500;
    color: var(--muted-foreground);
  }
</style>
