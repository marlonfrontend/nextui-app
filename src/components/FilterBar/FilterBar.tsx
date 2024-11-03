import { EventCategoriesFilter } from '@/components'
import { Button, Divider, Icon } from '@/ui'
import { EVENT_CATEGORIES } from '@/constants'

export const FilterBar = () => {
  return (
    <div className="flex items-center gap-5 border-b border-divider backdrop-blur-lg p-3 bg-background/70">
      <div className="flex gap-4">
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
      </div>

      <Divider className="h-[45px]" orientation="vertical" />

      <EventCategoriesFilter items={EVENT_CATEGORIES} />
    </div>
  )
}
