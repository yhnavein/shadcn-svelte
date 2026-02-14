import Root from './button.svelte';
import { type ButtonProps, type ButtonSize, type ButtonVariant } from './button.svelte';

function buttonVariants({ variant = 'default', size = 'default', className = '' } = {}) {
  const variantClass = `sh-btn--${variant}`;
  // Handle default size class specially if needed, but I named it sh-btn--default-size
  const sizeClass = size === 'default' ? 'sh-btn--default-size' : `sh-btn--${size}`;

  // Start with base class
  let classes = `sh-btn ${variantClass} ${sizeClass}`;

  if (className) {
    classes += ` ${className}`;
  }

  return classes;
}

export default Root;

export {
  Root,
  type ButtonProps as Props,
  //
  Root as Button,
  buttonVariants,
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
};
