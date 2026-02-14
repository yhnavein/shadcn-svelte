import Root from './tabs.svelte';
import Content from './tabs-content.svelte';
import List from './tabs-list.svelte';
import Trigger from './tabs-trigger.svelte';

Object.assign(Root, { Content, List, Trigger });
export default Root as typeof Root & {
  Content: typeof Content;
  List: typeof List;
  Trigger: typeof Trigger;
};

export {
  Root,
  Content,
  List,
  Trigger,
  //
  Root as Tabs,
  Content as TabsContent,
  List as TabsList,
  Trigger as TabsTrigger,
};
