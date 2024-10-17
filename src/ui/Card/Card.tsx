import { CardProps } from './Card.types'
import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledCardFooter
} from './Card.styles'
import { PropsWithChildren } from 'react'

export const Card = ({ children, ...props }: PropsWithChildren<CardProps>) => {
  return <StyledCard {...props}>{children}</StyledCard>
}

Card.Header = ({ children }: PropsWithChildren) => {
  return <StyledCardHeader>{children}</StyledCardHeader>
}

Card.Body = ({ children }: PropsWithChildren) => {
  return <StyledCardBody>{children}</StyledCardBody>
}

Card.Footer = ({ children }: PropsWithChildren) => {
  return <StyledCardFooter>{children}</StyledCardFooter>
}
