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
    Resizable,
  } from '$lib';

  let switchChecked = $state(false);
  let checkboxChecked = $state(false);
  let progressValue = $state(45);
</script>

<div class="preview-container">
  <div>
    <h1 class="heading-3xl">Component Showcase</h1>
    <p class="text-muted mt-1">Quick preview of @puredev/shadcn-svelte components</p>
  </div>

  <Separator />

  <!-- Buttons -->
  <section class="section">
    <h2 class="heading-xl">Buttons</h2>
    <div class="flex-wrap-gap">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Send</Button>
    </div>
    <div class="flex-wrap-gap">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  </section>

  <Separator />

  <!-- Badges -->
  <section class="section">
    <h2 class="heading-xl">Badges</h2>
    <div class="flex-wrap-gap">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  </section>

  <Separator />

  <!-- Card -->
  <section class="section">
    <h2 class="heading-xl">Card</h2>
    <Card class="card-preview">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>This is the card content area. You can place any content here.</p>
      </Card.Content>
      <Card.Footer class="card-footer-preview">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </Card.Footer>
    </Card>
  </section>

  <Separator />

  <!-- Accordion -->
  <section class="section">
    <h2 class="heading-xl">Accordion</h2>
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
        <Accordion.Content>Yes. It's animated by default, using CSS animations.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </section>

  <Separator />

  <!-- Tabs -->
  <section class="section">
    <h2 class="heading-xl">Tabs</h2>
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
            <div class="form-group">
              <Label for="name">Name</Label>
              <Input id="name" value="John Doe" />
            </div>
            <div class="form-group">
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
            <div class="form-group">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="form-group">
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
            <p class="text-muted text-sm">Settings content goes here.</p>
          </Card.Content>
        </Card>
      </Tabs.Content>
    </Tabs>
  </section>

  <Separator />

  <!-- Alert -->
  <section class="section">
    <h2 class="heading-xl">Alerts</h2>
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
  <section class="section">
    <h2 class="heading-xl">Form Controls</h2>
    <div class="form-grid">
      <div class="form-group">
        <Label for="demo-input">Input</Label>
        <Input id="demo-input" placeholder="Type something..." />
      </div>

      <div class="flex-center-gap">
        <Checkbox
          id="demo-checkbox"
          checked={checkboxChecked}
          onCheckedChange={(v) => (checkboxChecked = !!v)}
        />
        <Label for="demo-checkbox">Accept terms and conditions</Label>
      </div>

      <div class="flex-center-gap">
        <Switch id="demo-switch" bind:checked={switchChecked} />
        <Label for="demo-switch">
          Airplane mode {switchChecked ? '(on)' : '(off)'}
        </Label>
      </div>
    </div>
  </section>

  <Separator />

  <!-- Progress -->
  <section class="section">
    <h2 class="heading-xl">Progress</h2>
    <Progress value={progressValue} class="max-w-sm" />
    <div class="flex-gap">
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
      <span class="text-muted text-sm leading-8">{progressValue}%</span>
    </div>
  </section>

  <Separator />

  <!-- Avatar -->
  <section class="section">
    <h2 class="heading-xl">Avatars</h2>
    <div class="flex-gap">
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
  <section class="section">
    <h2 class="heading-xl">Skeleton</h2>
    <div class="flex-center-gap skeleton-preview">
      <Skeleton class="skeleton-avatar" />
      <div class="form-group">
        <Skeleton class="skeleton-text-lg" />
        <Skeleton class="skeleton-text-sm" />
      </div>
    </div>
  </section>

  <Separator />

  <!-- Table -->
  <section class="section">
    <h2 class="heading-xl">Table</h2>
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

  <Separator />

  <!-- Resizable -->
  <section class="section">
    <h2 class="heading-xl">Resizable</h2>
    <Resizable direction="horizontal" class="resizable-preview">
      <Resizable.Pane>
        <Resizable direction="vertical">
          <Resizable.Pane>
            <div class="resizable-box bg-gray">
              <p>Hello</p>
            </div>
          </Resizable.Pane>
          <Resizable.Handle />
          <Resizable.Pane>
            <div class="resizable-box bg-orange">
              <p>World</p>
            </div>
          </Resizable.Pane>
        </Resizable>
      </Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane>
        <div class="resizable-box bg-violet h-200">
          <p>Galaxy</p>
        </div>
      </Resizable.Pane>
    </Resizable>
  </section>
</div>

<style>
  .preview-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 48rem; /* max-w-3xl */
    padding: 2rem; /* p-8 */
    display: flex;
    flex-direction: column;
    gap: 2.5rem; /* space-y-10 approx */
  }

  .mt-1 {
    margin-top: 0.25rem;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem; /* space-y-3 */
  }

  .heading-xl {
    font-size: 1.25rem; /* text-xl */
    line-height: 1.75rem;
    font-weight: 600; /* font-semibold */
  }

  .heading-3xl {
    font-size: 1.875rem; /* text-3xl */
    line-height: 2.25rem;
    font-weight: 700; /* font-bold */
  }

  .text-muted {
    color: var(--muted-foreground);
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .flex-wrap-gap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem; /* gap-3 */
  }

  .flex-gap {
    display: flex;
    gap: 0.75rem; /* gap-3 */
  }

  .flex-center-gap {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* gap-2 */
  }

  /* Card */
  .card-preview {
    width: 100%;
    max-width: 24rem; /* max-w-sm */
  }

  .card-footer-preview {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  /* Accordion */
  .w-full {
    width: 100%;
  }

  /* Tabs */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem; /* space-y-1 */
  }

  .space-y-3 > :global(*) + :global(*) {
    margin-top: 0.75rem;
  }

  /* Form */
  .form-grid {
    display: grid;
    max-width: 24rem; /* max-w-sm */
    gap: 1rem; /* gap-4 */
  }

  /* Progress */
  .max-w-sm {
    max-width: 24rem;
  }

  .leading-8 {
    line-height: 2rem;
  }

  /* Skeleton */
  .skeleton-avatar {
    width: 3rem; /* size-12 */
    height: 3rem;
    border-radius: 9999px;
  }

  .skeleton-text-lg {
    height: 1rem; /* h-4 */
    width: 12rem; /* w-48 */
  }

  .skeleton-text-sm {
    height: 1rem; /* h-4 */
    width: 8rem; /* w-32 */
  }

  /* Table */
  .text-right {
    text-align: right;
  }

  /* Resizable */
  .resizable-preview {
    min-height: 200px;
    max-width: 100%;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
  }

  .resizable-box {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .bg-gray {
    background-color: oklch(0.554 0.046 257.417); /* Using muted-foreground roughly */
    color: white;
  }
  .bg-orange {
    background-color: oklch(0.627 0.265 303.9); /* chart-4 ish */
    color: white;
  }
  .bg-violet {
    background-color: oklch(0.646 0.222 41.116); /* chart-1 ish */
    color: white;
  }

  .h-200 {
    height: 200px;
  }
</style>
