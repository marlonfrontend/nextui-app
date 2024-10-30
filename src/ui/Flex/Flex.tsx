import { PropsWithChildren } from 'react'

import { FlexProps } from './Flex.types'

export const Flex = ({ className, children }: PropsWithChildren<FlexProps>) => {
  return <div className={className}>{children}</div>
}
