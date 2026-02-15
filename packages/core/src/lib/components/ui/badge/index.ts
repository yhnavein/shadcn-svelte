import Badge from './badge.svelte';
import { type BadgeVariant } from './badge.svelte';

function badgeVariants({ variant = 'default', className = '' } = {}) {
  // We no longer generate BEM classes.
  // Instead, the component uses data attributes.
  let classes = 'sh-badge';

  if (className) {
    classes += ` ${className}`;
  }

  return classes;
}

export default Badge;

export { Badge, badgeVariants, type BadgeVariant };
