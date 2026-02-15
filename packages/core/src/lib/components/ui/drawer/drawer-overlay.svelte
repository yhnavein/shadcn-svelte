<script lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DrawerPrimitive.OverlayProps = $props();
</script>

<DrawerPrimitive.Overlay
  bind:ref
  data-slot="drawer-overlay"
  class={cn('sh-drawer__overlay', className)}
  {...restProps}
/>

<style>
  :global(.sh-drawer__overlay) {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgb(0 0 0 / 0.8);
  }

  :global(.sh-drawer__overlay[data-state='open']) {
    animation: sh-drawer-fade-in 0.2s ease-out;
  }

  :global(.sh-drawer__overlay[data-state='closed']) {
    animation: sh-drawer-fade-out 0.2s ease-in;
  }

  @keyframes sh-drawer-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes sh-drawer-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
