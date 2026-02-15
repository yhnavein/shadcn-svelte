<script lang="ts">
  import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
  import InfoIcon from '@lucide/svelte/icons/info';
  import Loader2Icon from '@lucide/svelte/icons/loader-2';
  import OctagonXIcon from '@lucide/svelte/icons/octagon-x';
  import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';

  import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
  import { mode } from 'mode-watcher';

  let { ...restProps }: SonnerProps = $props();
</script>

<Sonner
  theme={mode.current}
  class="sh-sonner"
  toastOptions={{
    classes: {
      toast: 'sh-sonner__toast',
      description: 'sh-sonner__description',
      actionButton: 'sh-sonner__action',
      cancelButton: 'sh-sonner__cancel',
    },
  }}
  {...restProps}
  >{#snippet loadingIcon()}
    <Loader2Icon class="sh-sonner__icon sh-sonner__icon--loading" />
  {/snippet}
  {#snippet successIcon()}
    <CircleCheckIcon class="sh-sonner__icon" />
  {/snippet}
  {#snippet errorIcon()}
    <OctagonXIcon class="sh-sonner__icon" />
  {/snippet}
  {#snippet infoIcon()}
    <InfoIcon class="sh-sonner__icon" />
  {/snippet}
  {#snippet warningIcon()}
    <TriangleAlertIcon class="sh-sonner__icon" />
  {/snippet}
</Sonner>

<style>
  :global(.sh-sonner .sh-sonner__toast) {
    background-color: var(--background);
    color: var(--foreground);
    border: 1px solid var(--border);
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -2px rgb(0 0 0 / 0.05);
    border-radius: var(--radius);
  }

  :global(.sh-sonner .sh-sonner__toast .sh-sonner__description) {
    color: var(--muted-foreground);
  }

  :global(.sh-sonner .sh-sonner__toast .sh-sonner__action) {
    background-color: var(--primary);
    color: var(--primary-foreground);
    border-radius: var(--radius-sm);
    font-weight: 500;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  :global(.sh-sonner .sh-sonner__toast .sh-sonner__cancel) {
    background-color: var(--muted);
    color: var(--muted-foreground);
    border-radius: var(--radius-sm);
    font-weight: 500;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  :global(.sh-sonner__icon) {
    width: 1rem;
    height: 1rem;
  }

  :global(.sh-sonner__icon--loading) {
    animation: sh-sonner-spin 1s linear infinite;
  }

  @keyframes sh-sonner-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
