import FlexRender from './flex-render.svelte';
import { renderComponent, renderSnippet } from './render-helpers.js';
import { createSvelteTable } from './data-table.svelte.js';

const DataTable = Object.assign(FlexRender, { renderComponent, renderSnippet, createSvelteTable });

export default DataTable;

export { FlexRender, renderComponent, renderSnippet, createSvelteTable };
