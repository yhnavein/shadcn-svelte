import Root from './native-select.svelte';
import Option from './native-select-option.svelte';
import OptGroup from './native-select-opt-group.svelte';

Object.assign(Root, { Option, OptGroup });
export default Root as typeof Root & { Option: typeof Option; OptGroup: typeof OptGroup };

export {
  Root,
  Option,
  OptGroup,
  Root as NativeSelect,
  Option as NativeSelectOption,
  OptGroup as NativeSelectOptGroup,
};
