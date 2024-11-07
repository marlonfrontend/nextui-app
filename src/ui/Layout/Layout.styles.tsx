import { tv } from 'tailwind-variants'

export const layoutVariants = tv({
  slots: {
    base: '',
    header: 'top-0 w-full z-40',
    aside: 'w-[250px] h-full fixed'
  },
  variants: {
    fixed: {
      true: {
        header: 'fixed'
      },
      false: {
        header: 'relative'
      }
    }
  },
  defaultVariants: {
    fixed: false
  }
})
