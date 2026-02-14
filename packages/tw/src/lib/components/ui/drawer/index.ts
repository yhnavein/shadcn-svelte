import Root from './drawer.svelte';
import Content from './drawer-content.svelte';
import Description from './drawer-description.svelte';
import Overlay from './drawer-overlay.svelte';
import Footer from './drawer-footer.svelte';
import Header from './drawer-header.svelte';
import Title from './drawer-title.svelte';
import NestedRoot from './drawer-nested.svelte';
import Close from './drawer-close.svelte';
import Trigger from './drawer-trigger.svelte';
import Portal from './drawer-portal.svelte';

Object.assign(Root, {
  Content,
  Description,
  Overlay,
  Footer,
  Header,
  Title,
  NestedRoot,
  Close,
  Trigger,
  Portal,
});
export default Root as typeof Root & {
  Content: typeof Content;
  Description: typeof Description;
  Overlay: typeof Overlay;
  Footer: typeof Footer;
  Header: typeof Header;
  Title: typeof Title;
  NestedRoot: typeof NestedRoot;
  Close: typeof Close;
  Trigger: typeof Trigger;
  Portal: typeof Portal;
};

export {
  Root,
  NestedRoot,
  Content,
  Description,
  Overlay,
  Footer,
  Header,
  Title,
  Trigger,
  Portal,
  Close,

  //
  Root as Drawer,
  NestedRoot as DrawerNestedRoot,
  Content as DrawerContent,
  Description as DrawerDescription,
  Overlay as DrawerOverlay,
  Footer as DrawerFooter,
  Header as DrawerHeader,
  Title as DrawerTitle,
  Trigger as DrawerTrigger,
  Portal as DrawerPortal,
  Close as DrawerClose,
};
