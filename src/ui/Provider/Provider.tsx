import { NextUIProvider } from "@nextui-org/system";
import { useNavigate } from "react-router-dom";

import { ProviderProps } from './Provider.types'

export const Provider = ({ children }: ProviderProps) => {
  const navigate = useNavigate();

  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}
