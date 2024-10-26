import { tv, VariantProps } from 'tailwind-variants'

export const stepItemStyles = tv({
  slots: {
    base: 'flex items-center gap-2',
    iconContainer: 'flex justify-end items-center w-[30px] relative',
    line: 'h-[2px] absolute',
    text: 'font-medium'
  },
  variants: {
    isCurrent: {
      true: {
        iconContainer: 'bg-black',
        line: 'bg-black w-[30px]',
        text: 'text-black'
      },
      false: {
        iconContainer: '',
        line: 'bg-gray-500 w-[15px]',
        text: 'text-gray-500'
      }
    },
    isCompleted: {
      true: {
        iconContainer: 'text-green-500',
        text: 'text-green-500'
      },
      false: {}
    }
  },
  compoundVariants: [
    {
      isCurrent: true,
      isCompleted: false,
      iconContainer: 'bg-black'
    },
    {
      isCurrent: false,
      isCompleted: true,
      iconContainer: 'text-green-500'
    }
  ],
  defaultVariants: {
    isCurrent: false,
    isCompleted: false
  }
})

export type StepItemStylesProps = VariantProps<typeof stepItemStyles>
