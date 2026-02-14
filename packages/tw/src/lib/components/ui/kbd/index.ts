import Root from './kbd.svelte';
import Group from './kbd-group.svelte';

const Kbd = Object.assign(Root, { Group });
export default Kbd;

export {
  Root,
  Group,
  //
  Root as Kbd,
  Group as KbdGroup,
};
