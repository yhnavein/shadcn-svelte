import Root from './command.svelte';
import Loading from './command-loading.svelte';
import Dialog from './command-dialog.svelte';
import Empty from './command-empty.svelte';
import Group from './command-group.svelte';
import Item from './command-item.svelte';
import Input from './command-input.svelte';
import List from './command-list.svelte';
import Separator from './command-separator.svelte';
import Shortcut from './command-shortcut.svelte';
import LinkItem from './command-link-item.svelte';

Object.assign(Root, {
  Loading,
  Dialog,
  Empty,
  Group,
  Item,
  Input,
  List,
  Separator,
  Shortcut,
  LinkItem,
});
export default Root as typeof Root & {
  Loading: typeof Loading;
  Dialog: typeof Dialog;
  Empty: typeof Empty;
  Group: typeof Group;
  Item: typeof Item;
  Input: typeof Input;
  List: typeof List;
  Separator: typeof Separator;
  Shortcut: typeof Shortcut;
  LinkItem: typeof LinkItem;
};

export {
  Root,
  Dialog,
  Empty,
  Group,
  Item,
  LinkItem,
  Input,
  List,
  Separator,
  Shortcut,
  Loading,
  //
  Root as Command,
  Dialog as CommandDialog,
  Empty as CommandEmpty,
  Group as CommandGroup,
  Item as CommandItem,
  LinkItem as CommandLinkItem,
  Input as CommandInput,
  List as CommandList,
  Separator as CommandSeparator,
  Shortcut as CommandShortcut,
  Loading as CommandLoading,
};
