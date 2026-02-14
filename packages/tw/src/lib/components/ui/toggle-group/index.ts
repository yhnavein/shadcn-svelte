import Root from './toggle-group.svelte';
import Item from './toggle-group-item.svelte';

const ToggleGroup = Object.assign(Root, { Item });
export default ToggleGroup;

export {
  Root,
  Item,
  //
  Root as ToggleGroup,
  Item as ToggleGroupItem,
};
