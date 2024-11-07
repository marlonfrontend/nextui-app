import { PropsWithChildren } from 'react'
import { ScrollShadow } from '@nextui-org/react'

import { FlexProps } from './Flex.types'

export const Flex = ({
  className,
  scrollShadow = false,
  orientation,
  height,
  children
}: PropsWithChildren<FlexProps>) => {
  return (
    <div className={className}>
      {scrollShadow ? (
        <ScrollShadow className={`h-[${height}]`} orientation={orientation}>
          {children}
        </ScrollShadow>
      ) : (
        children
      )}
    </div>
  )
}
