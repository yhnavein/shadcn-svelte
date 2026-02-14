import Scrollbar from './scroll-area-scrollbar.svelte';
import Root from './scroll-area.svelte';

const ScrollArea = Object.assign(Root, { Scrollbar });
export default ScrollArea;

export {
  Root,
  Scrollbar,
  //,
  Root as ScrollArea,
  Scrollbar as ScrollAreaScrollbar,
};
