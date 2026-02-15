<script lang="ts">
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    'data-slot': dataSlot = 'textarea',
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
  bind:this={ref}
  data-slot={dataSlot}
  class={cn('sh-textarea', className)}
  bind:value
  {...restProps}
></textarea>

<style>
  .sh-textarea {
    display: flex;
    min-height: 4rem;
    width: 100%;
    border-radius: var(--radius-md);
    border: 1px solid var(--input);
    background-color: transparent;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition-property: color, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline: none;
    field-sizing: content;
  }

  @media (min-width: 768px) {
    .sh-textarea {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  .sh-textarea::placeholder {
    color: var(--muted-foreground);
  }

  .sh-textarea:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px oklch(from var(--ring) l c h / 0.5);
    outline: none;
  }

  .sh-textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sh-textarea::selection {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }

  /* Dark mode overrides */
  :global(.dark) .sh-textarea {
    background-color: oklch(from var(--input) l c h / 0.3);
  }

  /* Invalid state */
  .sh-textarea[aria-invalid='true'] {
    border-color: var(--destructive);
  }

  .sh-textarea[aria-invalid='true']:focus-visible {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.2);
  }

  :global(.dark) .sh-textarea[aria-invalid='true']:focus-visible {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.4);
  }
</style>
