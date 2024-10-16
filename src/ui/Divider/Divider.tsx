import { Divider as AppDivider, DividerProps } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export const Divider = ({ children, ...props }: PropsWithChildren<DividerProps>) => {
  return <AppDivider {...props}>{children}</AppDivider>;
};
