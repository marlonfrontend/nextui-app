import { AccordionItem } from '@nextui-org/react'

import { StyledAccordion } from './Accordion.styles'
import { AccordionProps } from './Accordion.types'

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>
}

Accordion.Item = AccordionItem
