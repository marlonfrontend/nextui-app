import { tv } from 'tailwind-variants'

export const eventCategoriesVariants = tv({
  base: 'dark:border-divider cursor-pointer py-2 px-3 border rounded-full text-sm transition-all duration-250 !text-nowrap',
  variants: {
    selected: {
      true: 'bg-black dark:border-white dark:bg-white dark:text-black text-white border-black',
      false: 'hover:border-black'
    }
  },
  defaultVariants: {
    selected: false
  }
})
