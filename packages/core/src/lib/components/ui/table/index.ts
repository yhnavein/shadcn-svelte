import Root from './table.svelte';
import Body from './table-body.svelte';
import Caption from './table-caption.svelte';
import Cell from './table-cell.svelte';
import Footer from './table-footer.svelte';
import Head from './table-head.svelte';
import Header from './table-header.svelte';
import Row from './table-row.svelte';

Object.assign(Root, { Body, Caption, Cell, Footer, Head, Header, Row });
export default Root as typeof Root & {
  Body: typeof Body;
  Caption: typeof Caption;
  Cell: typeof Cell;
  Footer: typeof Footer;
  Head: typeof Head;
  Header: typeof Header;
  Row: typeof Row;
};

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
