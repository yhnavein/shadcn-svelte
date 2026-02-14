import Badge from './badge.svelte';
import { type BadgeVariant } from './badge.svelte';

function badgeVariants({
  variant = 'default',
  className = '',
}: { variant?: BadgeVariant; className?: string } = {}) {
  const variantClass = `sh-badge--${variant}`;
  let classes = `sh-badge ${variantClass}`;

  if (className) {
    classes += ` ${className}`;
  }

  return classes;
}

export default Badge;

export { Badge, badgeVariants, type BadgeVariant };
