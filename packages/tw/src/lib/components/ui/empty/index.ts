import Root from './empty.svelte';
import Header from './empty-header.svelte';
import Media from './empty-media.svelte';
import Title from './empty-title.svelte';
import Description from './empty-description.svelte';
import Content from './empty-content.svelte';

const Empty = Object.assign(Root, { Header, Media, Title, Description, Content });
export default Empty;

export {
  Root,
  Header,
  Media,
  Title,
  Description,
  Content,
  //
  Root as Empty,
  Header as EmptyHeader,
  Media as EmptyMedia,
  Title as EmptyTitle,
  Description as EmptyDescription,
  Content as EmptyContent,
};
