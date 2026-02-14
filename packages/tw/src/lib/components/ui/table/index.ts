import Root from './table.svelte';
import Body from './table-body.svelte';
import Caption from './table-caption.svelte';
import Cell from './table-cell.svelte';
import Footer from './table-footer.svelte';
import Head from './table-head.svelte';
import Header from './table-header.svelte';
import Row from './table-row.svelte';

const Table = Object.assign(Root, { Body, Caption, Cell, Footer, Head, Header, Row });
export default Table;

export {
  Root,
  Body,
  Caption,
  Cell,
  Footer,
  Head,
  Header,
  Row,
  //
  Root as Table,
  Body as TableBody,
  Caption as TableCaption,
  Cell as TableCell,
  Footer as TableFooter,
  Head as TableHead,
  Header as TableHeader,
  Row as TableRow,
};
