import Root from './select.svelte';
import Group from './select-group.svelte';
import Label from './select-label.svelte';
import Item from './select-item.svelte';
import Content from './select-content.svelte';
import Trigger from './select-trigger.svelte';
import Separator from './select-separator.svelte';
import ScrollDownButton from './select-scroll-down-button.svelte';
import ScrollUpButton from './select-scroll-up-button.svelte';
import GroupHeading from './select-group-heading.svelte';
import Portal from './select-portal.svelte';

Object.assign(Root, {
  Group,
  Label,
  Item,
  Content,
  Trigger,
  Separator,
  ScrollDownButton,
  ScrollUpButton,
  GroupHeading,
  Portal,
});
export default Root as typeof Root & {
  Group: typeof Group;
  Label: typeof Label;
  Item: typeof Item;
  Content: typeof Content;
  Trigger: typeof Trigger;
  Separator: typeof Separator;
  ScrollDownButton: typeof ScrollDownButton;
  ScrollUpButton: typeof ScrollUpButton;
  GroupHeading: typeof GroupHeading;
  Portal: typeof Portal;
};

export {
  Root,
  Group,
  Label,
  Item,
  Content,
  Trigger,
  Separator,
  ScrollDownButton,
  ScrollUpButton,
  GroupHeading,
  Portal,
  //
  Root as Select,
  Group as SelectGroup,
  Label as SelectLabel,
  Item as SelectItem,
  Content as SelectContent,
  Trigger as SelectTrigger,
  Separator as SelectSeparator,
  ScrollDownButton as SelectScrollDownButton,
  ScrollUpButton as SelectScrollUpButton,
  GroupHeading as SelectGroupHeading,
  Portal as SelectPortal,
};
