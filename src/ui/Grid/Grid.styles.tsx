import { tv } from 'tailwind-variants'

export const gridVariants = tv({
  base: 'flex flex-wrap -m-2'
})

export const colVariants = tv({
  base: 'p-2 box-border',
  variants: {
    span: {
      1: 'flex-none w-1/12',
      2: 'flex-none w-2/12',
      3: 'flex-none w-3/12',
      4: 'flex-none w-4/12',
      5: 'flex-none w-5/12',
      6: 'flex-none w-6/12',
      7: 'flex-none w-7/12',
      8: 'flex-none w-8/12',
      9: 'flex-none w-9/12',
      10: 'flex-none w-10/12',
      11: 'flex-none w-11/12',
      12: 'flex-none w-full'
    }
  }
})
