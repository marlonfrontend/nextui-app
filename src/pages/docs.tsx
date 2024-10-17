import DefaultLayout from '@/layouts/default'

import {
  Card,
  Input,
  Dropdown,
  Button,
  Checkbox,
  Badge,
  Breadcrumbs,
  Chip,
  Calendar,
  Navbar,
  Divider,
  Image,
  DatePicker,
  DateRangePicker,
  Spacer,
  Link,
  Skeleton,
  Grid
} from '@/ui'
import { Logo } from '@/components/icons'

const DocsPage = () => {
  return (
    <DefaultLayout>
      <Navbar maxWidth="xl">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>About</Navbar.Item>
        </Navbar.Content>
        <Navbar.MenuToggle />
        <Navbar.Menu>
          <Navbar.MenuItem>Profile</Navbar.MenuItem>
          <Navbar.MenuItem>Settings</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>

      <Divider my={20} />

      <Card>
        <Card.Header>card header</Card.Header>
      </Card>

      <Divider my={20} />

      <Breadcrumbs>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Music</Breadcrumbs.Item>
        <Breadcrumbs.Item>Artist</Breadcrumbs.Item>
        <Breadcrumbs.Item>Album</Breadcrumbs.Item>
        <Breadcrumbs.Item>Song</Breadcrumbs.Item>
      </Breadcrumbs>

      <Divider my={20} />

      <Chip>Chip</Chip>

      <Divider my={20} />

      <Input label="teste" />

      <Divider my={20} />

      <Dropdown>
        <Dropdown.Trigger>
          <Button color="primary" size="lg">
            Continuar
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item key="item1">Item 1</Dropdown.Item>
          <Dropdown.Item key="item2">Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Divider my={20} />

      <Checkbox />

      <Divider my={20} />

      <Badge color="danger" content={3}>
        avatar
      </Badge>

      <Divider my={20} />

      <Calendar isReadOnly />

      <Divider my={20} />

      <DatePicker />

      <Divider my={20} />

      <DateRangePicker />

      <Divider my={20} />

      <Image
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="alt"
        width={400}
      />
      <Spacer y={4} />
      <Image
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="alt"
        width={400}
      />
      <Link href="#">Link</Link>

      <Divider my={20} />

      <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton>
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>

      <Divider my={20} />

      <Grid>
        <Grid.Col span={3}>asd</Grid.Col>
        <Grid.Col span={9}>asd</Grid.Col>
        <Grid.Col span={3}>asd</Grid.Col>
      </Grid>
    </DefaultLayout>
  )
}

export default DocsPage
