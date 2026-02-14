import Root from './alert-dialog.svelte';
import Portal from './alert-dialog-portal.svelte';
import Trigger from './alert-dialog-trigger.svelte';
import Title from './alert-dialog-title.svelte';
import Action from './alert-dialog-action.svelte';
import Cancel from './alert-dialog-cancel.svelte';
import Footer from './alert-dialog-footer.svelte';
import Header from './alert-dialog-header.svelte';
import Overlay from './alert-dialog-overlay.svelte';
import Content from './alert-dialog-content.svelte';
import Description from './alert-dialog-description.svelte';

Object.assign(Root, {
  Portal,
  Trigger,
  Title,
  Action,
  Cancel,
  Footer,
  Header,
  Overlay,
  Content,
  Description,
});
export default Root as typeof Root & {
  Portal: typeof Portal;
  Trigger: typeof Trigger;
  Title: typeof Title;
  Action: typeof Action;
  Cancel: typeof Cancel;
  Footer: typeof Footer;
  Header: typeof Header;
  Overlay: typeof Overlay;
  Content: typeof Content;
  Description: typeof Description;
};

export {
  Root,
  Title,
  Action,
  Cancel,
  Portal,
  Footer,
  Header,
  Trigger,
  Overlay,
  Content,
  Description,
  //
  Root as AlertDialog,
  Title as AlertDialogTitle,
  Action as AlertDialogAction,
  Cancel as AlertDialogCancel,
  Portal as AlertDialogPortal,
  Footer as AlertDialogFooter,
  Header as AlertDialogHeader,
  Trigger as AlertDialogTrigger,
  Overlay as AlertDialogOverlay,
  Content as AlertDialogContent,
  Description as AlertDialogDescription,
};
