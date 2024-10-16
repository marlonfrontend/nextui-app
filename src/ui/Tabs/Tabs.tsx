import { Tabs as AppTabs, Tab as AppTab, TabsProps } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export const Tabs = ({ children, ...props }: PropsWithChildren<TabsProps>) => {
  return <AppTabs {...props}>{children}</AppTabs>;
};

export const Tab = ({ children, ...props }: PropsWithChildren) => {
  return <AppTab {...props}>{children}</AppTab>;
};
