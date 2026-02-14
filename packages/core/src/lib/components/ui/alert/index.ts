import Root from './alert.svelte';
import Description from './alert-description.svelte';
import Title from './alert-title.svelte';
export { alertVariants, type AlertVariant } from './alert.svelte';

Object.assign(Root, { Description, Title });
export default Root as typeof Root & { Description: typeof Description; Title: typeof Title };

export {
  Root,
  Description,
  Title,
  //
  Root as Alert,
  Description as AlertDescription,
  Title as AlertTitle,
};
