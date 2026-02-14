import Root from './button-group.svelte';
import Text from './button-group-text.svelte';
import Separator from './button-group-separator.svelte';

Object.assign(Root, { Text, Separator });
export default Root as typeof Root & { Text: typeof Text; Separator: typeof Separator };

export {
  Root,
  Text,
  Separator,
  //
  Root as ButtonGroup,
  Text as ButtonGroupText,
  Separator as ButtonGroupSeparator,
};
