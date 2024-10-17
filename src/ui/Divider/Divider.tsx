import { StyledDivider } from './Divider.styles'
import { DividerProps } from './Divider.types'

export const Divider = ({ mt, mb, ml, mr, mx, my, ...props }: DividerProps) => {
  return (
    <StyledDivider
      style={{
        marginTop: mt || 0,
        marginBottom: mb || 0,
        marginLeft: ml || 0,
        marginRight: mr || 0,
        marginInline: mx || 0,
        marginBlock: my || 0
      }}
      {...props}
    ></StyledDivider>
  )
}
