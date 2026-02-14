import Root from './navigation-menu.svelte';
import Content from './navigation-menu-content.svelte';
import Indicator from './navigation-menu-indicator.svelte';
import Item from './navigation-menu-item.svelte';
import Link from './navigation-menu-link.svelte';
import List from './navigation-menu-list.svelte';
import Trigger from './navigation-menu-trigger.svelte';
import Viewport from './navigation-menu-viewport.svelte';

Object.assign(Root, {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Trigger,
  Viewport,
});
export default Root as typeof Root & {
  Content: typeof Content;
  Indicator: typeof Indicator;
  Item: typeof Item;
  Link: typeof Link;
  List: typeof List;
  Trigger: typeof Trigger;
  Viewport: typeof Viewport;
};

export {
  Root,
  Content,
  Indicator,
  Item,
  Link,
  List,
  Trigger,
  Viewport,
  //
  Root as NavigationMenuRoot,
  Content as NavigationMenuContent,
  Indicator as NavigationMenuIndicator,
  Item as NavigationMenuItem,
  Link as NavigationMenuLink,
  List as NavigationMenuList,
  Trigger as NavigationMenuTrigger,
  Viewport as NavigationMenuViewport,
};
