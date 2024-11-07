/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'
import {
  Modal as AppModal,
  ModalProps,
  ModalContentProps,
  ModalContent as AppModalContent,
  ModalHeader as AppModalHeader,
  ModalBody as AppModalBody,
  ModalFooter as AppModalFooter
} from '@nextui-org/react'

export const Modal = ({
  children,
  ...props
}: PropsWithChildren<ModalProps>) => {
  return <AppModal {...props}>{children}</AppModal>
}

Modal.Content = ({ children, ...props }: ModalContentProps) => {
  return <AppModalContent {...props}>{children}</AppModalContent>
}

Modal.Header = ({ children, ...props }: PropsWithChildren<ModalProps>) => {
  return <AppModalHeader {...props}>{children}</AppModalHeader>
}

Modal.Body = ({ children, ...props }: PropsWithChildren<ModalProps>) => {
  return <AppModalBody {...props}>{children}</AppModalBody>
}

Modal.Footer = ({ children, ...props }: PropsWithChildren<ModalProps>) => {
  return <AppModalFooter {...props}>{children}</AppModalFooter>
}
