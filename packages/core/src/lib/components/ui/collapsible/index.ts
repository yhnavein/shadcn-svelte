import Root from './collapsible.svelte';
import Trigger from './collapsible-trigger.svelte';
import Content from './collapsible-content.svelte';

Object.assign(Root, { Trigger, Content });
export default Root as typeof Root & { Trigger: typeof Trigger; Content: typeof Content };

export {
  Root,
  Content,
  Trigger,
  //
  Root as Collapsible,
  Content as CollapsibleContent,
  Trigger as CollapsibleTrigger,
};
