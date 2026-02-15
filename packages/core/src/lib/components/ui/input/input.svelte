<script lang="ts">
  import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;

  type Props = WithElementRef<
    Omit<HTMLInputAttributes, 'type'> &
      ({ type: 'file'; files?: FileList } | { type?: InputType; files?: undefined })
  >;

  let {
    ref = $bindable(null),
    value = $bindable(),
    type,
    files = $bindable(),
    class: className,
    'data-slot': dataSlot = 'input',
    ...restProps
  }: Props = $props();
</script>

{#if type === 'file'}
  <input
    bind:this={ref}
    data-slot={dataSlot}
    class={cn('sh-input', className)}
    type="file"
    bind:files
    bind:value
    {...restProps}
  />
{:else}
  <input
    bind:this={ref}
    data-slot={dataSlot}
    class={cn('sh-input', className)}
    {type}
    bind:value
    {...restProps}
  />
{/if}

<style>
  .sh-input {
    display: flex;
    height: 2.25rem;
    width: 100%;
    min-width: 0;
    border-radius: var(--radius-md);
    border: 1px solid var(--input);
    background-color: var(--background);
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition-property: color, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline: none;
    color: var(--foreground);
  }

  @media (min-width: 768px) {
    .sh-input {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  .sh-input::placeholder {
    color: var(--muted-foreground);
  }

  .sh-input:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px oklch(from var(--ring) l c h / 0.5);
    outline: none;
  }

  .sh-input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sh-input::selection {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }

  /* File input overrides */
  .sh-input[type='file'] {
    background-color: transparent;
    padding-top: 0.375rem;
    padding-bottom: 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
  }

  /* Dark mode overrides */
  :global(.dark) .sh-input {
    background-color: transparent;
  }

  /* Invalid state */
  .sh-input[aria-invalid='true'] {
    border-color: var(--destructive);
  }

  .sh-input[aria-invalid='true']:focus-visible {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.2);
  }

  :global(.dark) .sh-input[aria-invalid='true']:focus-visible {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.4);
  }
</style>
