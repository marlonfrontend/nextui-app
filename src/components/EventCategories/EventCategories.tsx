import { useState } from 'react'
import { ScrollShadow } from '@nextui-org/react'

import { EventCategoriesProps } from './EventCategories.types'
import { eventCategoriesVariants } from './EventCategories.styles'

export const EventCategories = ({ items }: EventCategoriesProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleItemClick = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index))
    } else {
      setSelectedItems([...selectedItems, index])
    }
  }

  return (
    <ScrollShadow
      className="w-full flex gap-2 pb-3 -mb-3"
      orientation="horizontal"
    >
      {items.map((item, i) => (
        <button
          key={i}
          className={eventCategoriesVariants({
            selected: selectedItems.includes(i)
          })}
          onClick={() => handleItemClick(i)}
        >
          {item.name}
        </button>
      ))}
    </ScrollShadow>
  )
}
