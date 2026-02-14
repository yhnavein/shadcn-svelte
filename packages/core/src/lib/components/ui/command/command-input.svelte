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
