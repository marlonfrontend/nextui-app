import {extendVariants, Button, ButtonGroup} from "@nextui-org/react";

export const StyledButton = extendVariants(Button, {
  variants: {
    color: {
      primary: 'bg-[#000]',
    },
  },
});

export const StyledButtonGroup = extendVariants(ButtonGroup, {});