import Root from './native-select.svelte';
import Option from './native-select-option.svelte';
import OptGroup from './native-select-opt-group.svelte';

const NativeSelect = Object.assign(Root, { Option, OptGroup });
export default NativeSelect;

export {
  Root,
  Option,
  OptGroup,
  Root as NativeSelect,
  Option as NativeSelectOption,
  OptGroup as NativeSelectOptGroup,
};
