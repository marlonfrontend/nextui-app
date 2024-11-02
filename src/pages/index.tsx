import { Autocomplete, AutocompleteItem } from '@nextui-org/react'

import { DefaultLayout } from '@/layouts'
import { Button, Form, Icon } from '@/ui'

export const IndexPage = () => {
  const animals = [
    { key: 'cat', label: 'Cat' },
    { key: 'dog', label: 'Dog' },
    { key: 'elephant', label: 'Elephant' },
    { key: 'lion', label: 'Lion' },
    { key: 'tiger', label: 'Tiger' },
    { key: 'giraffe', label: 'Giraffe' },
    { key: 'dolphin', label: 'Dolphin' },
    { key: 'penguin', label: 'Penguin' },
    { key: 'zebra', label: 'Zebra' },
    { key: 'shark', label: 'Shark' },
    { key: 'whale', label: 'Whale' },
    { key: 'otter', label: 'Otter' },
    { key: 'crocodile', label: 'Crocodile' }
  ]

  return (
    <DefaultLayout>
      <div className="flex flex-wrap py-20 w-full justify-center">
        <div>
          <h2 className="text-center my-12 text-4xl font-medium">
            Encontre um espaço que cumpra sua objetivo
          </h2>

          <Form schema={undefined} onSubmit={() => console.log('a')}>
            <div className="relative">
              <div className="flex items-center gap-2">
                <Autocomplete
                  endContent
                  defaultItems={animals}
                  label="Pesquisar"
                  radius="full"
                  size="lg"
                  variant="bordered"
                >
                  {(animal) => (
                    <AutocompleteItem key={animal.key}>
                      {animal.label}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
                <Button isIconOnly color="primary" size="lg">
                  <Icon name="Search" size={22} />
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </DefaultLayout>
  )
}
