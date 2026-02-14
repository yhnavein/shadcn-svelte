import Root from './hover-card.svelte';
import Content from './hover-card-content.svelte';
import Trigger from './hover-card-trigger.svelte';
import Portal from './hover-card-portal.svelte';

Object.assign(Root, { Content, Trigger, Portal });
export default Root as typeof Root & {
  Content: typeof Content;
  Trigger: typeof Trigger;
  Portal: typeof Portal;
};

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
