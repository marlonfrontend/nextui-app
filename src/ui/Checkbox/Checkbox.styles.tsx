import {extendVariants, Checkbox} from "@nextui-org/react";

export const StyledCheckbox = extendVariants(Checkbox, {
  variants: {
    color: {
      primary: {
        base: 'bg-[#000]'
      }
    }
  },
});
