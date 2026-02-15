<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CommandPrimitive.ItemProps = $props();
</script>

<CommandPrimitive.Item
  bind:ref
  data-slot="command-item"
  class={cn('sh-command__item', className)}
  {...restProps}
/>

<style>
  :global(.sh-command__item) {
    position: relative;
    display: flex;
    cursor: default;
    user-select: none;
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    border-radius: 0.125rem; /* rounded-sm */
    padding-left: 0.5rem; /* px-2 */
    padding-right: 0.5rem;
    padding-top: 0.375rem; /* py-1.5 */
    font-size: 0.875rem; /* text-sm */
    outline: none;
  }

  :global(.sh-command__item[data-disabled='true']) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-command__item[aria-selected='true']) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-command__item svg) {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem; /* size-4 */
    height: 1rem;
  }

  :global(.sh-command__item svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }
</style>
