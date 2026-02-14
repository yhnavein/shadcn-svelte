import Root from './avatar.svelte';
import Image from './avatar-image.svelte';
import Fallback from './avatar-fallback.svelte';

Object.assign(Root, { Image, Fallback });
export default Root as typeof Root & { Image: typeof Image; Fallback: typeof Fallback };

export {
  Root,
  Image,
  Fallback,
  //
  Root as Avatar,
  Image as AvatarImage,
  Fallback as AvatarFallback,
};
