import Root from './kbd.svelte';
import Group from './kbd-group.svelte';

Object.assign(Root, { Group });
export default Root as typeof Root & { Group: typeof Group };

export {
  Root,
  Group,
  //
  Root as Kbd,
  Group as KbdGroup,
};
