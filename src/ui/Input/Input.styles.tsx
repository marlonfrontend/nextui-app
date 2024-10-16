import {extendVariants, Input} from "@nextui-org/react";

export const StyledInput = extendVariants(Input, {
  variants: {
    color: {
      primary: {}
    }
  },
});
