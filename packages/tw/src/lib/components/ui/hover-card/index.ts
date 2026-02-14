import Root from './hover-card.svelte';
import Content from './hover-card-content.svelte';
import Trigger from './hover-card-trigger.svelte';
import Portal from './hover-card-portal.svelte';

const HoverCard = Object.assign(Root, { Content, Trigger, Portal });
export default HoverCard;

export {
  Root,
  Content,
  Trigger,
  Portal,
  Root as HoverCard,
  Content as HoverCardContent,
  Trigger as HoverCardTrigger,
  Portal as HoverCardPortal,
};
