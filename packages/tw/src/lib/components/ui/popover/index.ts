import Root from './popover.svelte';
import Close from './popover-close.svelte';
import Content from './popover-content.svelte';
import Trigger from './popover-trigger.svelte';
import Portal from './popover-portal.svelte';

Object.assign(Root, { Close, Content, Trigger, Portal });
export default Root as typeof Root & {
  Close: typeof Close;
  Content: typeof Content;
  Trigger: typeof Trigger;
  Portal: typeof Portal;
};

export {
  Root,
  Content,
  Trigger,
  Close,
  Portal,
  //
  Root as Popover,
  Content as PopoverContent,
  Trigger as PopoverTrigger,
  Close as PopoverClose,
  Portal as PopoverPortal,
};
