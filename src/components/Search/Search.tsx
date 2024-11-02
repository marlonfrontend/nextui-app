import { Autocomplete, AutocompleteItem } from '@nextui-org/react'

import { Button, Form, Icon } from '@/ui'

export const Search = () => {
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
      <div className="py-12 justify-center gap-4 flex">
        <div className="cursor-pointer inline-flex items-center gap-2 py-2 px-3 border-foreground rounded-full text-sm hover:border-foreground transition-all duration-250 bg-foreground text-primary-foreground">
          <Icon name="Check" size={16} />
          Casamento
        </div>
        <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
          Formatura
        </div>
        <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
          Baile
        </div>
        <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
          Restaurantes
        </div>
      </div>
    </Form>
  )
}
