import { ScrollShadow } from '@nextui-org/react'

import { EventCategoriesProps } from './EventCategoriesFilter.types'

export const EventCategoriesFilter = ({ items }: EventCategoriesProps) => {
  return (
    <ScrollShadow className="w-full flex gap-2" orientation="horizontal">
      {items.map((item, i) => (
        <div
          key={i}
          className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250 text-nowrap"
        >
          {item.name}
        </div>
      ))}
    </ScrollShadow>
  )
}
