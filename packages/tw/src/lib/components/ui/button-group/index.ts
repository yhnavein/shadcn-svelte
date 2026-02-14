import Root from './button-group.svelte';
import Text from './button-group-text.svelte';
import Separator from './button-group-separator.svelte';

const ButtonGroup = Object.assign(Root, { Text, Separator });
export default ButtonGroup;

export {
  Root,
  Text,
  Separator,
  //
  Root as ButtonGroup,
  Text as ButtonGroupText,
  Separator as ButtonGroupSeparator,
};
