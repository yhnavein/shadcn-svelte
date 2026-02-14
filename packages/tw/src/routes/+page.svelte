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

  <Separator.Root />

  <!-- Buttons -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Buttons</h2>
    <div class="flex flex-wrap gap-3">
      <Button.Root>Default</Button.Root>
      <Button.Root variant="secondary">Secondary</Button.Root>
      <Button.Root variant="destructive">Destructive</Button.Root>
      <Button.Root variant="outline">Outline</Button.Root>
      <Button.Root variant="ghost">Ghost</Button.Root>
      <Button.Root variant="link">Link</Button.Root>
      <Button.Root disabled>Disabled</Button.Root>
    </div>
    <div class="flex flex-wrap gap-3">
      <Button.Root size="sm">Small</Button.Root>
      <Button.Root size="default">Default</Button.Root>
      <Button.Root size="lg">Large</Button.Root>
    </div>
  </section>

  <Separator.Root />

  <!-- Badges -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Badges</h2>
    <div class="flex flex-wrap gap-3">
      <Badge.Badge>Default</Badge.Badge>
      <Badge.Badge variant="secondary">Secondary</Badge.Badge>
      <Badge.Badge variant="destructive">Destructive</Badge.Badge>
      <Badge.Badge variant="outline">Outline</Badge.Badge>
    </div>
  </section>

  <Separator.Root />

  <!-- Card -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Card</h2>
    <Card.Root class="w-full max-w-sm">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>This is the card content area. You can place any content here.</p>
      </Card.Content>
      <Card.Footer class="flex justify-end gap-2">
        <Button.Root variant="outline">Cancel</Button.Root>
        <Button.Root>Save</Button.Root>
      </Card.Footer>
    </Card.Root>
  </section>

  <Separator.Root />

  <!-- Accordion -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Accordion</h2>
    <Accordion.Root type="single" class="w-full">
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
    </Accordion.Root>
  </section>

  <Separator.Root />

  <!-- Tabs -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Tabs</h2>
    <Tabs.Root value="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-3">
            <div class="space-y-1">
              <Label.Root for="name">Name</Label.Root>
              <Input.Root id="name" value="John Doe" />
            </div>
            <div class="space-y-1">
              <Label.Root for="email">Email</Label.Root>
              <Input.Root id="email" value="john@example.com" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button.Root>Save changes</Button.Root>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>Change your password here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-3">
            <div class="space-y-1">
              <Label.Root for="current">Current password</Label.Root>
              <Input.Root id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label.Root for="new">New password</Label.Root>
              <Input.Root id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button.Root>Update password</Button.Root>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <Card.Root>
          <Card.Header>
            <Card.Title>Settings</Card.Title>
            <Card.Description>Manage your preferences.</Card.Description>
          </Card.Header>
          <Card.Content>
            <p class="text-muted-foreground text-sm">Settings content goes here.</p>
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </section>

  <Separator.Root />

  <!-- Alert -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Alerts</h2>
    <Alert.Root>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
    </Alert.Root>
    <Alert.Root variant="destructive">
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>Your session has expired. Please log in again.</Alert.Description>
    </Alert.Root>
  </section>

  <Separator.Root />

  <!-- Form controls -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Form Controls</h2>
    <div class="grid max-w-sm gap-4">
      <div class="space-y-1">
        <Label.Root for="demo-input">Input</Label.Root>
        <Input.Root id="demo-input" placeholder="Type something..." />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox.Root
          id="demo-checkbox"
          checked={checkboxChecked}
          onCheckedChange={(v) => (checkboxChecked = !!v)}
        />
        <Label.Root for="demo-checkbox">Accept terms and conditions</Label.Root>
      </div>

      <div class="flex items-center gap-2">
        <Switch.Root id="demo-switch" bind:checked={switchChecked} />
        <Label.Root for="demo-switch">
          Airplane mode {switchChecked ? '(on)' : '(off)'}
        </Label.Root>
      </div>
    </div>
  </section>

  <Separator.Root />

  <!-- Progress -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Progress</h2>
    <Progress.Root value={progressValue} class="max-w-sm" />
    <div class="flex gap-2">
      <Button.Root
        size="sm"
        variant="outline"
        onclick={() => (progressValue = Math.max(0, progressValue - 10))}
      >
        -10
      </Button.Root>
      <Button.Root
        size="sm"
        variant="outline"
        onclick={() => (progressValue = Math.min(100, progressValue + 10))}
      >
        +10
      </Button.Root>
      <span class="text-muted-foreground text-sm leading-8">{progressValue}%</span>
    </div>
  </section>

  <Separator.Root />

  <!-- Avatar -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Avatars</h2>
    <div class="flex gap-3">
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="shadcn avatar" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>PD</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </section>

  <Separator.Root />

  <!-- Skeleton -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Skeleton</h2>
    <div class="flex items-center gap-4">
      <Skeleton.Root class="size-12 rounded-full" />
      <div class="space-y-2">
        <Skeleton.Root class="h-4 w-48" />
        <Skeleton.Root class="h-4 w-32" />
      </div>
    </div>
  </section>

  <Separator.Root />

  <!-- Table -->
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Table</h2>
    <Table.Root>
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
            <Badge.Badge variant="outline">Paid</Badge.Badge>
          </Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell class="text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell class="font-medium">INV-002</Table.Cell>
          <Table.Cell>
            <Badge.Badge variant="secondary">Pending</Badge.Badge>
          </Table.Cell>
          <Table.Cell>PayPal</Table.Cell>
          <Table.Cell class="text-right">$150.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell class="font-medium">INV-003</Table.Cell>
          <Table.Cell>
            <Badge.Badge variant="destructive">Overdue</Badge.Badge>
          </Table.Cell>
          <Table.Cell>Bank Transfer</Table.Cell>
          <Table.Cell class="text-right">$350.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  </section>
</div>
