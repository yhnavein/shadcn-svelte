<script lang="ts">
  import { Avatar as AvatarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AvatarPrimitive.ImageProps = $props();
</script>

<AvatarPrimitive.Image
  bind:ref
  data-slot="avatar-image"
  class={cn('sh-avatar__image', className)}
  {...restProps}
/>

<style>
  .sh-avatar__image {
    aspect-ratio: 1 / 1;
    height: 100%;
    width: 100%;
  }
</style>
