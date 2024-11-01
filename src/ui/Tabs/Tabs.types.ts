import {
  TabsProps as AppTabsProps,
  TabItemProps as AppTabItemProps
} from '@nextui-org/react'

type TabItem = {
  name: string
  value: string
  component: React.ReactNode
}

export type TabsProps = {
  items: TabItem[]
} & AppTabsProps
export type TabItemProps = AppTabItemProps
