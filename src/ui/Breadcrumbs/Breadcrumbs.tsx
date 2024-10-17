import { PropsWithChildren } from 'react'
import { StyledBreadcrumbs, StyledBreadcrumbItem } from './Breadcrumbs.styles'
import { BreadcrumbsProps, BreadcrumbItemProps } from './Breadcrumbs.types'

export const Breadcrumbs = ({
  children,
  ...props
}: PropsWithChildren<BreadcrumbsProps>) => {
  return <StyledBreadcrumbs {...props}>{children}</StyledBreadcrumbs>
}

Breadcrumbs.Item = ({
  children,
  ...props
}: PropsWithChildren<BreadcrumbItemProps>) => {
  return <StyledBreadcrumbItem {...props}>{children}</StyledBreadcrumbItem>
}
