/* eslint-disable react/display-name */
import { PropsWithChildren, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { stepItemStyles } from './Stepper.styles'
import { StepperProps } from './Stepper.types'

import { Icon } from '@/ui'

export const Stepper = ({
  items,
  selectedKey
}: PropsWithChildren<StepperProps & { selectedKey: string }>) => {
  const { pathname } = useLocation()
  const path = pathname.split('/').pop()

  const activeItem = useMemo(
    () => items.find((item) => item.value === (selectedKey || path)),
    [items, selectedKey, path]
  )

  return (
    <div className="flex flex-wrap">
      <ol className="md:w-1/4 w-full flex flex-col gap-5 my-20">
        {items.map((item, i) => {
          const isCurrent = item.value === (selectedKey || path)
          const isCompleted = false

          const { base, iconContainer, line, text } = stepItemStyles({
            isCurrent,
            isCompleted
          })

          return (
            <li key={i} className={base()}>
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
              <span className={text()}>{item.name}</span>
            </li>
          )
        })}
      </ol>

      <div className="md:w-3/4">
        {activeItem && <div>{activeItem.component}</div>}
      </div>
    </div>
  )
}
