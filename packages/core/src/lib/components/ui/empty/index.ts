import Root from './empty.svelte';
import Header from './empty-header.svelte';
import Media from './empty-media.svelte';
import Icon from './empty-icon.svelte';
import Title from './empty-title.svelte';
import Description from './empty-description.svelte';
import Content from './empty-content.svelte';

Object.assign(Root, { Header, Media, Icon, Title, Description, Content });
export default Root as typeof Root & {
  Header: typeof Header;
  Media: typeof Media;
  Icon: typeof Icon;
  Title: typeof Title;
  Description: typeof Description;
  Content: typeof Content;
};

export {
  Root,
  Header,
  Media,
  Icon,
  Title,
  Description,
  Content,
  //
  Root as Empty,
  Header as EmptyHeader,
  Media as EmptyMedia,
  Icon as EmptyIcon,
  Title as EmptyTitle,
  Description as EmptyDescription,
  Content as EmptyContent,
};
