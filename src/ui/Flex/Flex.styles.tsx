import { tv } from 'tailwind-variants'

export const flexVariants = tv({
  slots: {
    base: 'flex',
    scroll: ''
  },
  variants: {
    height: {
      true: {
        scroll: ''
      }
    }
  }
})
