<script lang="ts">
  import { Avatar as AvatarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    loadingStatus = $bindable('loading'),
    class: className,
    ...restProps
  }: AvatarPrimitive.RootProps = $props();
</script>

<AvatarPrimitive.Root
  bind:ref
  bind:loadingStatus
  data-slot="avatar"
  class={cn('sh-avatar', className)}
  {...restProps}
/>

<style>
  .sh-avatar {
    position: relative;
    display: flex;
    height: 2rem;
    width: 2rem;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 9999px;
  }
</style>
