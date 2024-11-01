import { Tabs as AppTabs, Tab as AppTab } from '@nextui-org/react'

import { TabsProps } from './Tabs.types'

export const Tabs = ({ items, ...props }: TabsProps) => {
  return (
    <div className="flex w-full flex-col">
      <AppTabs placement="start" {...props}>
        {items.map((item) => (
          <AppTab key={item.value} title={item.name}>
            {item.component}
          </AppTab>
        ))}
      </AppTabs>
    </div>
  )
}
