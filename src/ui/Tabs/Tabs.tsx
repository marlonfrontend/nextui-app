import { Tab } from '@nextui-org/react'

import { StyledTabs } from './Tabs.styles'
import { TabsProps } from './Tabs.types'

export const Tabs = ({ items, ...props }: TabsProps) => {
  return (
    <StyledTabs
      classNames={{
        tabList:
          'gap-6 w-full relative rounded-none p-0 border-b border-divider',
        cursor: 'w-full',
        tab: 'max-w-fit px-0 h-12',
        tabContent: ''
      }}
      color="primary"
      variant="underlined"
      {...props}
    >
      {items.map((item) => (
        <Tab key={item.value} title={item.name}>
          {item.component}
        </Tab>
      ))}
    </StyledTabs>
  )
}
