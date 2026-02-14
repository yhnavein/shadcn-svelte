<script lang="ts">
  import {
    Accordion,
    Alert,
    Avatar,
    Badge,
    Button,
    Card,
    Checkbox,
    Input,
    Label,
    Progress,
    Separator,
    Skeleton,
    Switch,
    Table,
    Tabs,
  } from '$lib';

  let switchChecked = $state(false);
  let checkboxChecked = $state(false);
  let progressValue = $state(45);
</script>

<div class="mx-auto max-w-3xl space-y-10 p-8">
  <div>
    <h1 class="text-3xl font-bold">Component Showcase</h1>
    <p class="text-muted-foreground mt-1">Quick preview of @puredev/shadcn-svelte-tw components</p>
  </div>

  <Separator />

  <!-- Buttons -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Buttons</h2>
    <div class="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Send</Button>
    </div>
    <div class="flex flex-wrap gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  </section>

  <Separator />

  <!-- Badges -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Badges</h2>
    <div class="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  </section>

  <Separator />

  <!-- Card -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Card</h2>
    <Card class="w-full max-w-sm">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>This is the card content area. You can place any content here.</p>
      </Card.Content>
      <Card.Footer class="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </Card.Footer>
    </Card>
  </section>

  <Separator />

  <!-- Accordion -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Accordion</h2>
    <Accordion type="single" class="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that match the other components.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, using CSS animations from tw-animate-css.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </section>

  <Separator />

  <!-- Tabs -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Tabs</h2>
    <Tabs value="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Card>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-3">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="John Doe" />
            </div>
            <div class="space-y-1">
              <Label for="email">Email</Label>
              <Input id="email" value="john@example.com" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card>
      </Tabs.Content>
      <Tabs.Content value="password">
        <Card>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>Change your password here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-3">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Update password</Button>
          </Card.Footer>
        </Card>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <Card>
          <Card.Header>
            <Card.Title>Settings</Card.Title>
            <Card.Description>Manage your preferences.</Card.Description>
          </Card.Header>
          <Card.Content>
            <p class="text-muted-foreground text-sm">Settings content goes here.</p>
          </Card.Content>
        </Card>
      </Tabs.Content>
    </Tabs>
  </section>

  <Separator />

  <!-- Alert -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Alerts</h2>
    <Alert>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
    </Alert>
    <Alert variant="destructive">
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>Your session has expired. Please log in again.</Alert.Description>
    </Alert>
  </section>

  <Separator />

  <!-- Form controls -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Form Controls</h2>
    <div class="grid max-w-sm gap-4">
      <div class="space-y-1">
        <Label for="demo-input">Input</Label>
        <Input id="demo-input" placeholder="Type something..." />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox
          id="demo-checkbox"
          checked={checkboxChecked}
          onCheckedChange={(v) => (checkboxChecked = !!v)}
        />
        <Label for="demo-checkbox">Accept terms and conditions</Label>
      </div>

      <div class="flex items-center gap-2">
        <Switch id="demo-switch" bind:checked={switchChecked} />
        <Label for="demo-switch">
          Airplane mode {switchChecked ? '(on)' : '(off)'}
        </Label>
      </div>
    </div>
  </section>

  <Separator />

  <!-- Progress -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Progress</h2>
    <Progress value={progressValue} class="max-w-sm" />
    <div class="flex gap-2">
      <Button
        size="sm"
        variant="outline"
        onclick={() => (progressValue = Math.max(0, progressValue - 10))}
      >
        -10
      </Button>
      <Button
        size="sm"
        variant="outline"
        onclick={() => (progressValue = Math.min(100, progressValue + 10))}
      >
        +10
      </Button>
      <span class="text-muted-foreground text-sm leading-8">{progressValue}%</span>
    </div>
  </section>

  <Separator />

  <!-- Avatar -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Avatars</h2>
    <div class="flex gap-3">
      <Avatar>
        <Avatar.Image src="https://github.com/shadcn.png" alt="shadcn avatar" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>PD</Avatar.Fallback>
      </Avatar>
    </div>
  </section>

  <Separator />

  <!-- Skeleton -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Skeleton</h2>
    <div class="flex items-center gap-4">
      <Skeleton class="size-12 rounded-full" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-48" />
        <Skeleton class="h-4 w-32" />
      </div>
    </div>
  </section>

  <Separator />

  <!-- Table -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Table</h2>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head class="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell class="font-medium">INV-001</Table.Cell>
          <Table.Cell>
            <Badge variant="outline">Paid</Badge>
          </Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell class="text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell class="font-medium">INV-002</Table.Cell>
          <Table.Cell>
            <Badge variant="secondary">Pending</Badge>
          </Table.Cell>
          <Table.Cell>PayPal</Table.Cell>
          <Table.Cell class="text-right">$150.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell class="font-medium">INV-003</Table.Cell>
          <Table.Cell>
            <Badge variant="destructive">Overdue</Badge>
          </Table.Cell>
          <Table.Cell>Bank Transfer</Table.Cell>
          <Table.Cell class="text-right">$350.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </section>
</div>
