import Root from './breadcrumb.svelte';
import Ellipsis from './breadcrumb-ellipsis.svelte';
import Item from './breadcrumb-item.svelte';
import Separator from './breadcrumb-separator.svelte';
import Link from './breadcrumb-link.svelte';
import List from './breadcrumb-list.svelte';
import Page from './breadcrumb-page.svelte';

Object.assign(Root, { Ellipsis, Item, Separator, Link, List, Page });
export default Root as typeof Root & {
  Ellipsis: typeof Ellipsis;
  Item: typeof Item;
  Separator: typeof Separator;
  Link: typeof Link;
  List: typeof List;
  Page: typeof Page;
};

export {
  Root,
  Ellipsis,
  Item,
  Separator,
  Link,
  List,
  Page,
  //
  Root as Breadcrumb,
  Ellipsis as BreadcrumbEllipsis,
  Item as BreadcrumbItem,
  Separator as BreadcrumbSeparator,
  Link as BreadcrumbLink,
  List as BreadcrumbList,
  Page as BreadcrumbPage,
};
