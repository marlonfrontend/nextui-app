import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'

import { FilterOptionsProps } from './FilterOptions.types'

import { Button, Accordion } from '@/ui'

export const FilterOptions = ({ isOpen, onOpenChange }: FilterOptionsProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Filtros</ModalHeader>
            <ModalBody>
              <Accordion selectedKeys="all">
                <Accordion.Item title="Faixa de preço">asdasd</Accordion.Item>
                <Accordion.Item title="Tipo de espaço">asdasd</Accordion.Item>
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
