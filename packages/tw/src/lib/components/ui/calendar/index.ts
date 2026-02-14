import Root from './calendar.svelte';
import Cell from './calendar-cell.svelte';
import Day from './calendar-day.svelte';
import Grid from './calendar-grid.svelte';
import Header from './calendar-header.svelte';
import Months from './calendar-months.svelte';
import GridRow from './calendar-grid-row.svelte';
import Heading from './calendar-heading.svelte';
import GridBody from './calendar-grid-body.svelte';
import GridHead from './calendar-grid-head.svelte';
import HeadCell from './calendar-head-cell.svelte';
import NextButton from './calendar-next-button.svelte';
import PrevButton from './calendar-prev-button.svelte';
import MonthSelect from './calendar-month-select.svelte';
import YearSelect from './calendar-year-select.svelte';
import Month from './calendar-month.svelte';
import Nav from './calendar-nav.svelte';
import Caption from './calendar-caption.svelte';

Object.assign(Root, {
  Day,
  Cell,
  Grid,
  Header,
  Months,
  GridRow,
  Heading,
  GridBody,
  GridHead,
  HeadCell,
  NextButton,
  PrevButton,
  Nav,
  Month,
  YearSelect,
  MonthSelect,
  Caption,
});

export default Root as typeof Root & {
  Day: typeof Day;
  Cell: typeof Cell;
  Grid: typeof Grid;
  Header: typeof Header;
  Months: typeof Months;
  GridRow: typeof GridRow;
  Heading: typeof Heading;
  GridBody: typeof GridBody;
  GridHead: typeof GridHead;
  HeadCell: typeof HeadCell;
  NextButton: typeof NextButton;
  PrevButton: typeof PrevButton;
  Nav: typeof Nav;
  Month: typeof Month;
  YearSelect: typeof YearSelect;
  MonthSelect: typeof MonthSelect;
  Caption: typeof Caption;
};

export {
  Day,
  Cell,
  Grid,
  Header,
  Months,
  GridRow,
  Heading,
  GridBody,
  GridHead,
  HeadCell,
  NextButton,
  PrevButton,
  Nav,
  Month,
  YearSelect,
  MonthSelect,
  Caption,
  //
  Root as Calendar,
};
