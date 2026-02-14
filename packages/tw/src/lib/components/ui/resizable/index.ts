import { Pane } from 'paneforge';
import Handle from './resizable-handle.svelte';
import PaneGroup from './resizable-pane-group.svelte';

const Resizable = Object.assign(PaneGroup, { Pane, Handle });

export default Resizable;

export {
  PaneGroup,
  Pane,
  Handle,
  //
  PaneGroup as ResizablePaneGroup,
  Pane as ResizablePane,
  Handle as ResizableHandle,
};
