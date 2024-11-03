import { FilterBarVariants } from './FilterBar.styles'

import { EventCategories } from '@/components'
import { Button, Divider, Flex, Icon } from '@/ui'
import { EVENT_CATEGORIES } from '@/constants'

export const FilterBar = () => {
  return (
    <div className={FilterBarVariants({})}>
      <Flex className="flex gap-4">
        <Button color="default" size="md">
          Preço
        </Button>
        <Button color="default" size="md">
          Convidados
        </Button>
        <Button
          color="default"
          size="md"
          startContent={<Icon name="Settings2" size={18} />}
        >
          Filtros
        </Button>
      </Flex>

      <Divider className="h-[45px]" orientation="vertical" />

      <EventCategories items={EVENT_CATEGORIES} />
    </div>
  )
}
