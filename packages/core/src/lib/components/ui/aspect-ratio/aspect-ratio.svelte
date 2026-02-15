<script lang="ts">
  import { AspectRatio as AspectRatioPrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AspectRatioPrimitive.RootProps = $props();
</script>

<AspectRatioPrimitive.Root
  bind:ref
  data-slot="aspect-ratio"
  class="sh-aspect-ratio {className || ''}"
  {...restProps}
/>

<style>
  .sh-aspect-ratio {
  }
</style>
