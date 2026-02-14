import Root from './button-group.svelte';
import Item from './button-group-item.svelte';
import Text from './button-group-text.svelte';
import Separator from './button-group-separator.svelte';

Object.assign(Root, { Item, Text, Separator });
export default Root as typeof Root & {
  Item: typeof Item;
  Text: typeof Text;
  Separator: typeof Separator;
};

export {
  Root,
  Item,
  Text,
  Separator,
  //
  Root as ButtonGroup,
  Item as ButtonGroupItem,
  Text as ButtonGroupText,
  Separator as ButtonGroupSeparator,
};
