import DefaultLayout from "@/layouts/default";

import { Card, Input, Dropdown, Button, Checkbox } from "@/ui";

const DocsPage = () => {
  return (
    <DefaultLayout>
      <Card>
        <Card.Header>
          card header
        </Card.Header>
      </Card>
      <Input label="teste" />
      <Dropdown>
        <Dropdown.Trigger>
          <Button color="primary" size="lg">Continuar</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item key="item1">Item 1</Dropdown.Item>
          <Dropdown.Item key="item2">Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Checkbox />
    </DefaultLayout>
  );
}

export default DocsPage