<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';
  import MinusIcon from '@lucide/svelte/icons/minus';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="input-otp-separator"
  role="separator"
  class={cn('sh-input-otp__separator', className)}
  {...restProps}
>
  {#if children}
    {@render children?.()}
  {:else}
    <MinusIcon />
  {/if}
</div>
