import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'

import { FilterOptionsProps } from './FilterOptions.types'

import { Button, Accordion, Checkbox, CheckboxGroup, Spacer } from '@/ui'

export const FilterOptions = ({ isOpen, onOpenChange }: FilterOptionsProps) => {
  return (
    <Modal isOpen={isOpen} size="lg" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Filtros</ModalHeader>
            <ModalBody>
              <Accordion selectedKeys="all">
                <Accordion.Item title="Faixa de preço">asdasd</Accordion.Item>
                <Accordion.Item title="Tipo de espaço">
                  <CheckboxGroup defaultValue={['buenos-aires', 'london']}>
                    <Checkbox className="w-1/2 col-span-2" value="buenos-aires">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox className="w-1/2 col-span-2" value="sydney">
                      Sydney
                    </Checkbox>
                    <Checkbox
                      className="w-1/2 col-span-2"
                      value="san-francisco"
                    >
                      San Francisco
                    </Checkbox>
                    <Checkbox className="w-1/2 col-span-2" value="london">
                      London
                    </Checkbox>
                    <Checkbox className="w-1/2 col-span-2" value="tokyo">
                      Tokyo
                    </Checkbox>
                  </CheckboxGroup>
                  <Spacer y={5} />
                  <Button size="sm" variant="light">
                    Mostrar mais
                  </Button>
                </Accordion.Item>
                <Accordion.Item title="Comodidades">asdasd</Accordion.Item>
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
