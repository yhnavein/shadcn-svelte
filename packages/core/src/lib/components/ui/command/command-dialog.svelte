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

<style>
  /* Command Dialog Overrides */
  :global(.sh-command-dialog .sh-command__input-wrapper) {
    height: 3rem; /* h-12 */
  }

  :global(.sh-command-dialog .sh-command__input-wrapper svg) {
    width: 1.25rem; /* h-5 w-5 */
    height: 1.25rem;
  }

  :global(.sh-command-dialog .sh-command__input) {
    height: 3rem; /* h-12 */
  }

  :global(.sh-command-dialog .sh-command__group) {
    padding-left: 0.5rem; /* px-2 */
    padding-right: 0.5rem;
  }

  :global(.sh-command-dialog .sh-command__group:not([hidden]) ~ .sh-command__group) {
    padding-top: 0;
  }

  :global(.sh-command-dialog .sh-command__item) {
    padding-left: 0.5rem; /* px-2 */
    padding-right: 0.5rem;
    padding-top: 0.75rem; /* py-3 */
    padding-bottom: 0.75rem;
  }

  :global(.sh-command-dialog .sh-command__item svg) {
    width: 1.25rem; /* h-5 w-5 */
    height: 1.25rem;
  }
</style>
