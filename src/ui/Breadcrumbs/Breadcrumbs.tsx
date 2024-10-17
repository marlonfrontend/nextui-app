import { StyledBreadcrumbs, StyledBreadcrumbItem } from './Breadcrumbs.styles'
import { BreadcrumbsProps, BreadcrumbItemProps } from './Breadcrumbs.types'

export const Breadcrumbs = ({ children, ...props }: BreadcrumbsProps) => {
  return <StyledBreadcrumbs {...props}>{children}</StyledBreadcrumbs>
}

Breadcrumbs.Item = ({ children, ...props }: BreadcrumbItemProps) => {
  return <StyledBreadcrumbItem {...props}>{children}</StyledBreadcrumbItem>
}
