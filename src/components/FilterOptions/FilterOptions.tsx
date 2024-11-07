import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ScrollShadow
} from '@nextui-org/react'
import { useState } from 'react'

import { FilterOptionsProps } from './FilterOptions.types'

import { SPACE_CATEGORIES } from '@/constants/spaceCategories'
import {
  Button,
  Accordion,
  Checkbox,
  CheckboxGroup,
  Spacer,
  Slider,
  Chip
} from '@/ui'

export const FilterOptions = ({ isOpen, onOpenChange }: FilterOptionsProps) => {
  const [priceRange, setPriceRange] = useState<number | number[]>([100, 300])

  return (
    <Modal
      isOpen={isOpen}
      scrollBehavior="inside"
      size="lg"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Filtros</ModalHeader>
            <ModalBody>
              <Chip color="primary" onClose={() => console.log('close')}>
                Casa
              </Chip>
              <Accordion
                defaultExpandedKeys={['price', 'space']}
                selectionMode="multiple"
              >
                <Accordion.Item key="price" title="Faixa de preço">
                  <Slider
                    formatOptions={{ style: 'currency', currency: 'BRL' }}
                    label="Faixa de preço"
                    maxValue={10000}
                    minValue={0}
                    showTooltip={true}
                    step={50}
                    tooltipProps={{
                      offset: 10,
                      placement: 'bottom'
                    }}
                    value={priceRange}
                    onChange={setPriceRange}
                  />
                </Accordion.Item>
                <Accordion.Item key="space" title="Tipo de espaço">
                  <ScrollShadow
                    className="h-[200px] p-2"
                    orientation="vertical"
                  >
                    <CheckboxGroup defaultValue={['buenos-aires', 'london']}>
                      {SPACE_CATEGORIES.map((item, i) => (
                        <Checkbox
                          key={i}
                          className="w-1/2 col-span-2"
                          value={item.name}
                        >
                          {item.name}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </ScrollShadow>
                  <Spacer y={5} />
                </Accordion.Item>
                <Accordion.Item key="amenities" title="Comodidades">
                  <ScrollShadow
                    className="h-[200px] p-2"
                    orientation="vertical"
                  >
                    <CheckboxGroup defaultValue={['buenos-aires', 'london']}>
                      {SPACE_CATEGORIES.map((item, i) => (
                        <Checkbox
                          key={i}
                          className="w-1/2 col-span-2"
                          value={item.name}
                        >
                          {item.name}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </ScrollShadow>
                </Accordion.Item>
              </Accordion>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Limpar
              </Button>
              <Button color="primary" onPress={onClose}>
                Filtrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
