import Root from './toggle-group.svelte';
import Item from './toggle-group-item.svelte';

Object.assign(Root, { Item });
export default Root as typeof Root & { Item: typeof Item };

export {
  Root,
  Item,
  //
  Root as ToggleGroup,
  Item as ToggleGroupItem,
};
