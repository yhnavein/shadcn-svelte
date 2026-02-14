import Scrollbar from './scroll-area-scrollbar.svelte';
import Root from './scroll-area.svelte';

Object.assign(Root, { Scrollbar });
export default Root as typeof Root & { Scrollbar: typeof Scrollbar };

export {
  Root,
  Scrollbar,
  //,
  Root as ScrollArea,
  Scrollbar as ScrollAreaScrollbar,
};
