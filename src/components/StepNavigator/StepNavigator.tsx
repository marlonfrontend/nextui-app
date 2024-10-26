/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'

import { StepNavigatorItemProps } from './StepNavigator.types'
import { stepItemStyles, StepItemStylesProps } from './StepNavigator.styles'

import { Icon } from '@/ui'

export const StepNavigator = ({ children }: PropsWithChildren) => {
  return <ol className="flex flex-col gap-5">{children}</ol>
}

StepNavigator.Item = ({
  children,
  isCurrent,
  isCompleted
}: PropsWithChildren<StepNavigatorItemProps & StepItemStylesProps>) => {
  const { base, iconContainer, line, text } = stepItemStyles({
    isCurrent,
    isCompleted
  })

  return (
    <li className={base()}>
      {isCurrent ? (
        <div className={iconContainer()}>
          <div className={line()} />
        </div>
      ) : isCompleted ? (
        <div className={iconContainer()}>
          <Icon name="Check" />
        </div>
      ) : (
        <div className={iconContainer()}>
          <div className={line()} />
        </div>
      )}
      <span className={text()}>{children}</span>
    </li>
  )
}
