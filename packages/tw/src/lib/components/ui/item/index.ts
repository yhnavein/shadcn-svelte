import Root from './item.svelte';
import Group from './item-group.svelte';
import Separator from './item-separator.svelte';
import Header from './item-header.svelte';
import Footer from './item-footer.svelte';
import Content from './item-content.svelte';
import Title from './item-title.svelte';
import Description from './item-description.svelte';
import Actions from './item-actions.svelte';
import Media from './item-media.svelte';

Object.assign(Root, {
  Group,
  Separator,
  Header,
  Footer,
  Content,
  Title,
  Description,
  Actions,
  Media,
});
export default Root as typeof Root & {
  Group: typeof Group;
  Separator: typeof Separator;
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Title: typeof Title;
  Description: typeof Description;
  Actions: typeof Actions;
  Media: typeof Media;
};

export {
  Root,
  Group,
  Separator,
  Header,
  Footer,
  Content,
  Title,
  Description,
  Actions,
  Media,
  //
  Root as Item,
  Group as ItemGroup,
  Separator as ItemSeparator,
  Header as ItemHeader,
  Footer as ItemFooter,
  Content as ItemContent,
  Title as ItemTitle,
  Description as ItemDescription,
  Actions as ItemActions,
  Media as ItemMedia,
};
