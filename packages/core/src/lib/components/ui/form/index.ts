import * as FormPrimitive from 'formsnap';
import Description from './form-description.svelte';
import Label from './form-label.svelte';
import FieldErrors from './form-field-errors.svelte';
import Field from './form-field.svelte';
import Fieldset from './form-fieldset.svelte';
import Legend from './form-legend.svelte';
import ElementField from './form-element-field.svelte';
import Button from './form-button.svelte';

const Control = FormPrimitive.Control;

Object.assign(Field, {
  Control,
  Label,
  Button,
  FieldErrors,
  Description,
  Fieldset,
  Legend,
  ElementField,
});

export default Field as typeof Field & {
  Control: typeof Control;
  Label: typeof Label;
  Button: typeof Button;
  FieldErrors: typeof FieldErrors;
  Description: typeof Description;
  Fieldset: typeof Fieldset;
  Legend: typeof Legend;
  ElementField: typeof ElementField;
};

export {
  Field,
  Control,
  Label,
  Button,
  FieldErrors,
  Description,
  Fieldset,
  Legend,
  ElementField,
  //
  Field as FormField,
  Control as FormControl,
  Description as FormDescription,
  Label as FormLabel,
  FieldErrors as FormFieldErrors,
  Fieldset as FormFieldset,
  Legend as FormLegend,
  ElementField as FormElementField,
  Button as FormButton,
};
