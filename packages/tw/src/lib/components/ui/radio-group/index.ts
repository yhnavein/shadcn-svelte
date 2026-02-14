import Root from './radio-group.svelte';
import Item from './radio-group-item.svelte';

Object.assign(Root, { Item });
export default Root as typeof Root & { Item: typeof Item };

export {
  Root,
  Item,
  //
  Root as RadioGroup,
  Item as RadioGroupItem,
};
