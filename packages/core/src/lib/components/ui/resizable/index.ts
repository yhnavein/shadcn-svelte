import { Pane } from 'paneforge';
import Handle from './resizable-handle.svelte';
import PaneGroup from './resizable-pane-group.svelte';

Object.assign(PaneGroup, { Pane, Handle });

export default PaneGroup as typeof PaneGroup & { Pane: typeof Pane; Handle: typeof Handle };

export {
  PaneGroup,
  Pane,
  Handle,
  //
  PaneGroup as ResizablePaneGroup,
  Pane as ResizablePane,
  Handle as ResizableHandle,
};
