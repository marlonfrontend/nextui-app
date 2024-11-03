/* eslint-disable react/display-name */
import { GridVariants, ColVariants } from './Grid.styles'
import { GridProps, ColProps } from './Grid.types'

export const Grid = ({ children, ...props }: GridProps) => {
  return (
    <div className={GridVariants({ gap: props.gap })} {...props}>
      {children}
    </div>
  )
}

Grid.Col = ({ span, children }: ColProps) => {
  return <div className={ColVariants({ span })}>{children}</div>
}
