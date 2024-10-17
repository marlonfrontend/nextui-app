import { HTMLAttributes } from 'react'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface ColProps {
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  children: React.ReactNode
}
