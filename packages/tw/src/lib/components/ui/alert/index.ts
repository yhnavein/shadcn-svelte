import Root from './alert.svelte';
import Description from './alert-description.svelte';
import Title from './alert-title.svelte';
export { alertVariants, type AlertVariant } from './alert.svelte';

const Alert = Object.assign(Root, { Description, Title });
export default Alert;

export {
  Root,
  Description,
  Title,
  //
  Root as Alert,
  Description as AlertDescription,
  Title as AlertTitle,
};
