/* eslint-disable react/display-name */
import { gridVariants, colVariants } from './Grid.styles'
import { GridProps, ColProps } from './Grid.types'

export const Grid = ({ children, ...props }: GridProps) => {
  return (
    <div className={gridVariants({ gap: props.gap })} {...props}>
      {children}
    </div>
  )
}

Grid.Col = ({ span, children }: ColProps) => {
  return <div className={colVariants({ span })}>{children}</div>
}
