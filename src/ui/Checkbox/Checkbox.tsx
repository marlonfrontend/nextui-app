import { PropsWithChildren } from "react";
import { StyledCheckbox } from './Checkbox.styles'
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({ children, ...props }: PropsWithChildren<CheckboxProps>) => {
  return <StyledCheckbox {...props}>{children}</StyledCheckbox>;
};
