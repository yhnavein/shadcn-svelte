import Root from './menubar.svelte';
import Menu from './menubar-menu.svelte';
import Sub from './menubar-sub.svelte';
import RadioGroup from './menubar-radio-group.svelte';
import CheckboxItem from './menubar-checkbox-item.svelte';
import Content from './menubar-content.svelte';
import Item from './menubar-item.svelte';
import Group from './menubar-group.svelte';
import RadioItem from './menubar-radio-item.svelte';
import Separator from './menubar-separator.svelte';
import Shortcut from './menubar-shortcut.svelte';
import SubContent from './menubar-sub-content.svelte';
import SubTrigger from './menubar-sub-trigger.svelte';
import Trigger from './menubar-trigger.svelte';
import Label from './menubar-label.svelte';
import GroupHeading from './menubar-group-heading.svelte';
import Portal from './menubar-portal.svelte';

Object.assign(Root, {
  Menu,
  Sub,
  RadioGroup,
  CheckboxItem,
  Content,
  Item,
  Group,
  RadioItem,
  Separator,
  Shortcut,
  SubContent,
  SubTrigger,
  Trigger,
  Label,
  GroupHeading,
  Portal,
});
export default Root as typeof Root & {
  Menu: typeof Menu;
  Sub: typeof Sub;
  RadioGroup: typeof RadioGroup;
  CheckboxItem: typeof CheckboxItem;
  Content: typeof Content;
  Item: typeof Item;
  Group: typeof Group;
  RadioItem: typeof RadioItem;
  Separator: typeof Separator;
  Shortcut: typeof Shortcut;
  SubContent: typeof SubContent;
  SubTrigger: typeof SubTrigger;
  Trigger: typeof Trigger;
  Label: typeof Label;
  GroupHeading: typeof GroupHeading;
  Portal: typeof Portal;
};

export {
  Root,
  CheckboxItem,
  Content,
  Item,
  RadioItem,
  Separator,
  Shortcut,
  SubContent,
  SubTrigger,
  Trigger,
  Menu,
  Group,
  Sub,
  RadioGroup,
  Label,
  GroupHeading,
  Portal,
  //
  Root as Menubar,
  CheckboxItem as MenubarCheckboxItem,
  Content as MenubarContent,
  Item as MenubarItem,
  RadioItem as MenubarRadioItem,
  Separator as MenubarSeparator,
  Shortcut as MenubarShortcut,
  SubContent as MenubarSubContent,
  SubTrigger as MenubarSubTrigger,
  Trigger as MenubarTrigger,
  Menu as MenubarMenu,
  Group as MenubarGroup,
  Sub as MenubarSub,
  RadioGroup as MenubarRadioGroup,
  Label as MenubarLabel,
  GroupHeading as MenubarGroupHeading,
  Portal as MenubarPortal,
};
