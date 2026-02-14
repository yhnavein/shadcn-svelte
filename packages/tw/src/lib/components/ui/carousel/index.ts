import Root from './carousel.svelte';
import Content from './carousel-content.svelte';
import Item from './carousel-item.svelte';
import Previous from './carousel-previous.svelte';
import Next from './carousel-next.svelte';

Object.assign(Root, { Content, Item, Previous, Next });
export default Root as typeof Root & {
  Content: typeof Content;
  Item: typeof Item;
  Previous: typeof Previous;
  Next: typeof Next;
};

export {
  Root,
  Content,
  Item,
  Previous,
  Next,
  //
  Root as Carousel,
  Content as CarouselContent,
  Item as CarouselItem,
  Previous as CarouselPrevious,
  Next as CarouselNext,
};
