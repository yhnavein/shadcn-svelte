import Root from './button.svelte';
import { type ButtonProps, type ButtonSize, type ButtonVariant } from './button.svelte';

function buttonVariants({ variant = 'default', size = 'default', className = '' } = {}) {
  // We no longer generate BEM classes for variants/sizes.
  // Instead, the component uses data attributes.
  // We return the base class for consumers who need it (e.g. for consistency).
  let classes = 'sh-button';

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
