import { GridProps } from './Grid.types'
import { PropsWithChildren } from 'react'

export const Grid = ({ children, ...props }: PropsWithChildren<GridProps>) => {
  return <div {...props}>{children}</div>
}

Grid.Col = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>
}
