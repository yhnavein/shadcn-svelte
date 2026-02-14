import Field from './field.svelte';
import Set from './field-set.svelte';
import Legend from './field-legend.svelte';
import Group from './field-group.svelte';
import Content from './field-content.svelte';
import Label from './field-label.svelte';
import Title from './field-title.svelte';
import Description from './field-description.svelte';
import Separator from './field-separator.svelte';
import Error from './field-error.svelte';

Object.assign(Field, {
  Set,
  Legend,
  Group,
  Content,
  Label,
  Title,
  Description,
  Separator,
  Error,
});

export default Field as typeof Field & {
  Set: typeof Set;
  Legend: typeof Legend;
  Group: typeof Group;
  Content: typeof Content;
  Label: typeof Label;
  Title: typeof Title;
  Description: typeof Description;
  Separator: typeof Separator;
  Error: typeof Error;
};

export {
  Field,
  Set,
  Legend,
  Group,
  Content,
  Label,
  Title,
  Description,
  Separator,
  Error,
  //
  Set as FieldSet,
  Legend as FieldLegend,
  Group as FieldGroup,
  Content as FieldContent,
  Label as FieldLabel,
  Title as FieldTitle,
  Description as FieldDescription,
  Separator as FieldSeparator,
  Error as FieldError,
};
