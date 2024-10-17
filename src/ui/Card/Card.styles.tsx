import {
  extendVariants,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@nextui-org/react'

export const StyledCard = extendVariants(Card, {
  slots: {
    base: 'shadow-lg'
  },
  variants: {}
})

export const StyledCardHeader = extendVariants(CardHeader, {
  variants: {}
})

export const StyledCardBody = extendVariants(CardBody, {
  variants: {}
})

export const StyledCardFooter = extendVariants(CardFooter, {
  variants: {}
})
