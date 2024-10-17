import { StyledSkeleton } from './Skeleton.styles'
import { SkeletonProps } from './Skeleton.types'

export const Skeleton = ({ ...props }: SkeletonProps) => {
  return <StyledSkeleton {...props} />
}
