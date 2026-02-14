import FlexRender from './flex-render.svelte';
import { renderComponent, renderSnippet } from './render-helpers.js';
import { createSvelteTable } from './data-table.svelte.js';

Object.assign(FlexRender, { renderComponent, renderSnippet, createSvelteTable });

export default FlexRender as typeof FlexRender & {
  renderComponent: typeof renderComponent;
  renderSnippet: typeof renderSnippet;
  createSvelteTable: typeof createSvelteTable;
};

export { FlexRender, renderComponent, renderSnippet, createSvelteTable };
