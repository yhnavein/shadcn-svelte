<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import SearchIcon from '@lucide/svelte/icons/search';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    value = $bindable(''),
    ...restProps
  }: CommandPrimitive.InputProps = $props();
</script>

<div class="sh-command__input-wrapper" data-slot="command-input-wrapper">
  <SearchIcon class="sh-command__search-icon" />
  <CommandPrimitive.Input
    data-slot="command-input"
    class={cn('sh-command__input', className)}
    bind:ref
    {...restProps}
    bind:value
  />
</div>

<style>
  .sh-command__input-wrapper {
    display: flex;
    height: 2.25rem; /* h-9 */
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    border-bottom: 1px solid var(--border);
    padding-left: 0.75rem; /* px-3 */
    padding-right: 0.75rem;
  }

  :global(.sh-command__search-icon) {
    width: 1rem; /* size-4 */
    height: 1rem;
    flex-shrink: 0;
    opacity: 0.5;
  }

  :global(.sh-command__input) {
    display: flex;
    height: 2.5rem; /* h-10 */
    width: 100%;
    border-radius: var(--radius-md);
    background-color: transparent;
    padding-top: 0.75rem; /* py-3 */
    padding-bottom: 0.75rem;
    font-size: 0.875rem; /* text-sm */
    outline: none;
  }

  :global(.sh-command__input::placeholder) {
    color: var(--muted-foreground);
  }

  :global(.sh-command__input:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
