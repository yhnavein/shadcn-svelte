<script lang="ts">
  import type { Command as CommandPrimitive, Dialog as DialogPrimitive } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import Command from './command.svelte';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import type { WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    open = $bindable(false),
    ref = $bindable(null),
    value = $bindable(''),
    title = 'Command Palette',
    description = 'Search for a command to run',
    portalProps,
    children,
    ...restProps
  }: WithoutChildrenOrChild<DialogPrimitive.RootProps> &
    WithoutChildrenOrChild<CommandPrimitive.RootProps> & {
      portalProps?: DialogPrimitive.PortalProps;
      children: Snippet;
      title?: string;
      description?: string;
    } = $props();
</script>

<Dialog.Root bind:open {...restProps}>
  <Dialog.Header class="sr-only">
    <Dialog.Title>{title}</Dialog.Title>
    <Dialog.Description>{description}</Dialog.Description>
  </Dialog.Header>
  <Dialog.Content class="overflow-hidden p-0" {portalProps}>
    <Command class="sh-command-dialog" {...restProps} bind:value bind:ref {children} />
  </Dialog.Content>
</Dialog.Root>
