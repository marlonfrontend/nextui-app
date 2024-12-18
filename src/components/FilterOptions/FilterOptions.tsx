import { useState } from 'react'

import { FilterOptionsProps } from './FilterOptions.types'

import { SPACE_CATEGORIES } from '@/constants/spaceCategories'
import {
  Button,
  Accordion,
  Modal,
  Checkbox,
  CheckboxGroup,
  Spacer,
  Slider,
  Chip,
  Flex
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
      <Modal.Content>
        {(onClose) => (
          <>
            <Modal.Header className="flex flex-col gap-1">Filtros</Modal.Header>
            <Modal.Body>
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
                  <Flex
                    scrollShadow
                    className="pb-3 -mb-3 h-[200px]"
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
                  </Flex>
                  <Spacer y={5} />
                </Accordion.Item>
                <Accordion.Item key="amenities" title="Comodidades">
                  <Flex
                    scrollShadow
                    className="pb-3 -mb-3 h-[200px]"
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
                  </Flex>
                </Accordion.Item>
              </Accordion>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onPress={onClose}>
                Limpar
              </Button>
              <Button color="primary" onPress={onClose}>
                Filtrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal.Content>
    </Modal>
  )
}
