<script lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CollapsiblePrimitive.TriggerProps = $props();
</script>

<CollapsiblePrimitive.Trigger
  bind:ref
  data-slot="collapsible-trigger"
  class="sh-collapsible-trigger {className || ''}"
  {...restProps}
/>

<style>
  .sh-collapsible-trigger {
  }
</style>
