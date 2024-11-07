import { useDisclosure } from '@nextui-org/react'

import { filterBarVariants } from './FilterBar.styles'

import { EventCategories, FilterOptions } from '@/components'
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Popover,
  Button,
  RadioGroup,
  Radio
} from '@/ui'
import { EVENT_CATEGORIES } from '@/constants'

export const FilterBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className={filterBarVariants({})}>
      <Flex className="flex gap-4">
        <Button color="default" size="md">
          Preço
        </Button>

        <Popover>
          <Popover.Trigger>
            <Button
              color="default"
              endContent={<Icon name="ChevronDown" size={18} />}
              size="md"
            >
              Convidados
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <RadioGroup classNames={{ base: 'p-5', wrapper: 'gap-3' }}>
              <Radio size="sm" value="1-10">
                1 - 10
              </Radio>
              <Radio size="sm" value="11-25">
                11 - 25
              </Radio>
              <Radio size="sm" value="26-50">
                26 - 50
              </Radio>
              <Radio size="sm" value="+100">
                Mais 100
              </Radio>
            </RadioGroup>
          </Popover.Content>
        </Popover>

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
