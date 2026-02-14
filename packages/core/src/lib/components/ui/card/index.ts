import Root from './card.svelte';
import Content from './card-content.svelte';
import Description from './card-description.svelte';
import Footer from './card-footer.svelte';
import Header from './card-header.svelte';
import Title from './card-title.svelte';
import Action from './card-action.svelte';

Object.assign(Root, { Content, Description, Footer, Header, Title, Action });
export default Root as typeof Root & {
  Content: typeof Content;
  Description: typeof Description;
  Footer: typeof Footer;
  Header: typeof Header;
  Title: typeof Title;
  Action: typeof Action;
};

export {
  Root,
  Content,
  Description,
  Footer,
  Header,
  Title,
  Action,
  //
  Root as Card,
  Content as CardContent,
  Description as CardDescription,
  Footer as CardFooter,
  Header as CardHeader,
  Title as CardTitle,
  Action as CardAction,
};
