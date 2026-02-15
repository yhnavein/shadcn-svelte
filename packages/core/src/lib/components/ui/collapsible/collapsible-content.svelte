<script lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CollapsiblePrimitive.ContentProps = $props();
</script>

<CollapsiblePrimitive.Content
  bind:ref
  data-slot="collapsible-content"
  class="sh-collapsible-content {className || ''}"
  {...restProps}
/>

<style>
  .sh-collapsible-content {
    overflow: hidden;
  }

  .sh-collapsible-content[data-state='closed'] {
    animation: collapsible-up 0.2s ease-out;
  }

  .sh-collapsible-content[data-state='open'] {
    animation: collapsible-down 0.2s ease-out;
  }

  @keyframes collapsible-down {
    from {
      height: 0;
    }
    to {
      height: var(--bits-collapsible-content-height);
    }
  }

  @keyframes collapsible-up {
    from {
      height: var(--bits-collapsible-content-height);
    }
    to {
      height: 0;
    }
  }
</style>
