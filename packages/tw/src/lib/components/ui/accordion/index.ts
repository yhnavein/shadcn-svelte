import Root from './accordion.svelte';
import Content from './accordion-content.svelte';
import Item from './accordion-item.svelte';
import Trigger from './accordion-trigger.svelte';

const Accordion = Object.assign(Root, { Content, Item, Trigger });
export default Accordion;

export {
  Root,
  Content,
  Item,
  Trigger,
  //
  Root as Accordion,
  Content as AccordionContent,
  Item as AccordionItem,
  Trigger as AccordionTrigger,
};
