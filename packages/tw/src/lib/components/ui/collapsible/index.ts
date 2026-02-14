import Root from './collapsible.svelte';
import Trigger from './collapsible-trigger.svelte';
import Content from './collapsible-content.svelte';

const Collapsible = Object.assign(Root, { Trigger, Content });
export default Collapsible;

export {
  Root,
  Content,
  Trigger,
  //
  Root as Collapsible,
  Content as CollapsibleContent,
  Trigger as CollapsibleTrigger,
};
