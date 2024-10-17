import DefaultLayout from '@/layouts/default'

import {
  Card,
  Input,
  Dropdown,
  Button,
  Checkbox,
  Badge,
  Breadcrumbs,
  Chip
} from '@/ui'

const DocsPage = () => {
  return (
    <DefaultLayout>
      <Card>
        <Card.Header>card header</Card.Header>
      </Card>

      <Breadcrumbs>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Music</Breadcrumbs.Item>
        <Breadcrumbs.Item>Artist</Breadcrumbs.Item>
        <Breadcrumbs.Item>Album</Breadcrumbs.Item>
        <Breadcrumbs.Item>Song</Breadcrumbs.Item>
      </Breadcrumbs>

      <Chip>Chip</Chip>

      <Input label="teste" />
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
      <Checkbox />
      <Badge color="danger" content={3}>
        avatar
      </Badge>
    </DefaultLayout>
  )
}

export default DocsPage
