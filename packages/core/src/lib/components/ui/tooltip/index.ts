import Root from './tooltip.svelte';
import Trigger from './tooltip-trigger.svelte';
import Content from './tooltip-content.svelte';
import Provider from './tooltip-provider.svelte';
import Portal from './tooltip-portal.svelte';

Object.assign(Root, { Trigger, Content, Provider, Portal });
export default Root as typeof Root & {
  Trigger: typeof Trigger;
  Content: typeof Content;
  Provider: typeof Provider;
  Portal: typeof Portal;
};

export {
  Root,
  Trigger,
  Content,
  Provider,
  Portal,
  //
  Root as Tooltip,
  Content as TooltipContent,
  Trigger as TooltipTrigger,
  Provider as TooltipProvider,
  Portal as TooltipPortal,
};
