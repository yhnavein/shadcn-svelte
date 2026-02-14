import Root from './accordion.svelte';
import Content from './accordion-content.svelte';
import Item from './accordion-item.svelte';
import Trigger from './accordion-trigger.svelte';

Object.assign(Root, { Content, Item, Trigger });
export default Root as typeof Root & {
  Content: typeof Content;
  Item: typeof Item;
  Trigger: typeof Trigger;
};

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
