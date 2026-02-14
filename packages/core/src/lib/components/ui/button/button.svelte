<script lang="ts" module>
  import { type WithElementRef } from '$lib/utils.js';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  export type ButtonVariant =
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
      isLoading?: boolean;
    };
</script>

<script lang="ts">
  import Spinner from '../spinner/spinner.svelte';
  import { cn } from '$lib/utils.js';
  // Import global styles. In SvelteKit library, this usually means importing in global CSS, but for dev here:
  // We rely on consumer importing the CSS or bundling it.
  // For now, let's assume global CSS is loaded.

  let {
    class: className,
    variant = 'default',
    size = 'default',
    isLoading = false,
    ref = $bindable(null),
    href = undefined,
    type = 'button',
    disabled,
    children,
    ...restProps
  }: ButtonProps = $props();

  // Construct class names
  const variantClass = `sh-btn--${variant}`;
  const sizeClass = size === 'default' ? 'sh-btn--default-size' : `sh-btn--${size}`;
  const baseClass = `sh-btn ${variantClass} ${sizeClass}`;
</script>

{#if href}
  <a
    bind:this={ref}
    data-slot="button"
    class={cn(baseClass, className)}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? 'link' : undefined}
    tabindex={disabled ? -1 : undefined}
    {...restProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    data-slot="button"
    class={cn(baseClass, className)}
    {type}
    disabled={isLoading || disabled}
    {...restProps}
  >
    {#if isLoading}
      <Spinner />
    {/if}
    {@render children?.()}
  </button>
{/if}
