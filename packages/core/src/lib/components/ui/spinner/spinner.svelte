<script lang="ts">
  import { cn } from '$lib/utils.js';
  import Loader2Icon from '@lucide/svelte/icons/loader-2';
  import type { ComponentProps } from 'svelte';

  let { class: className, ...restProps }: ComponentProps<typeof Loader2Icon> = $props();
</script>

<Loader2Icon role="status" aria-label="Loading" class={cn('spinner', className)} {...restProps} />

<style>
  :global(.spinner) {
    width: 1rem;
    height: 1rem;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
