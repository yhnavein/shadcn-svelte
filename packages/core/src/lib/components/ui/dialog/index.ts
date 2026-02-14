import Root from './dialog.svelte';
import Portal from './dialog-portal.svelte';
import Title from './dialog-title.svelte';
import Footer from './dialog-footer.svelte';
import Header from './dialog-header.svelte';
import Overlay from './dialog-overlay.svelte';
import Content from './dialog-content.svelte';
import Description from './dialog-description.svelte';
import Trigger from './dialog-trigger.svelte';
import Close from './dialog-close.svelte';

Object.assign(Root, {
  Portal,
  Title,
  Footer,
  Header,
  Overlay,
  Content,
  Description,
  Trigger,
  Close,
});
export default Root as typeof Root & {
  Portal: typeof Portal;
  Title: typeof Title;
  Footer: typeof Footer;
  Header: typeof Header;
  Overlay: typeof Overlay;
  Content: typeof Content;
  Description: typeof Description;
  Trigger: typeof Trigger;
  Close: typeof Close;
};

export {
  Root,
  Title,
  Portal,
  Footer,
  Header,
  Trigger,
  Overlay,
  Content,
  Description,
  Close,
  //
  Root as Dialog,
  Title as DialogTitle,
  Portal as DialogPortal,
  Footer as DialogFooter,
  Header as DialogHeader,
  Trigger as DialogTrigger,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Description as DialogDescription,
  Close as DialogClose,
};
