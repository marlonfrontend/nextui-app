import { useState } from 'react'

import { EventCategoriesProps } from './EventCategories.types'
import { eventCategoriesVariants } from './EventCategories.styles'

import { Flex } from '@/ui'

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
    <Flex scrollShadow className="w-full" orientation="horizontal">
      <Flex className="flex gap-2">
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
      </Flex>
    </Flex>
  )
}
