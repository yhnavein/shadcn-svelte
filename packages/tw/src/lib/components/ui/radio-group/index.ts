import Root from './radio-group.svelte';
import Item from './radio-group-item.svelte';

const RadioGroup = Object.assign(Root, { Item });
export default RadioGroup;

export {
  Root,
  Item,
  //
  Root as RadioGroup,
  Item as RadioGroupItem,
};
