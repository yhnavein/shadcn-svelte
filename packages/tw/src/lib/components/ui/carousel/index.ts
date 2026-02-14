import Root from './carousel.svelte';
import Content from './carousel-content.svelte';
import Item from './carousel-item.svelte';
import Previous from './carousel-previous.svelte';
import Next from './carousel-next.svelte';

const Carousel = Object.assign(Root, { Content, Item, Previous, Next });
export default Carousel;

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
