import { useDisclosure } from '@nextui-org/react'

import { filterBarVariants } from './FilterBar.styles'

import { EventCategories, FilterOptions } from '@/components'
import { Badge, Button, Divider, Flex, Icon } from '@/ui'
import { EVENT_CATEGORIES } from '@/constants'

export const FilterBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className={filterBarVariants({})}>
      <Flex className="flex gap-4">
        <Button color="default" size="md">
          Preço
        </Button>
        <Button color="default" size="md">
          Convidados
        </Button>
        <Badge color="primary" content="2">
          <Button
            color="primary"
            size="md"
            startContent={<Icon name="Settings2" size={18} />}
            variant="bordered"
            onClick={onOpen}
          >
            Filtros
          </Button>
        </Badge>
      </Flex>

      <Divider className="h-[45px]" orientation="vertical" />

      <EventCategories items={EVENT_CATEGORIES} />

      <FilterOptions isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}
