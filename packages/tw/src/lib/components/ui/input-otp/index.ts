import Root from './input-otp.svelte';
import Group from './input-otp-group.svelte';
import Slot from './input-otp-slot.svelte';
import Separator from './input-otp-separator.svelte';

Object.assign(Root, { Group, Slot, Separator });
export default Root as typeof Root & {
  Group: typeof Group;
  Slot: typeof Slot;
  Separator: typeof Separator;
};

export {
  Root,
  Group,
  Slot,
  Separator,
  Root as InputOTP,
  Group as InputOTPGroup,
  Slot as InputOTPSlot,
  Separator as InputOTPSeparator,
};
