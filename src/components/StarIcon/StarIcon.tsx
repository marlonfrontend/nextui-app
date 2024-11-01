import { IconSvgProps } from '@/types'

export const StarIcon = ({ size = 36, height, ...props }: IconSvgProps) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 16 16"
    width={size || height}
    {...props}
  >
    <path
      d="M9.407 2.568c-.35-.757-1.468-.757-1.817 0L6.227 5.521l-3.335.335c-.858.087-1.2 1.109-.562 1.662L4.825 9.68l-.7 3.162c-.18.81.723 1.444 1.47 1.028l2.904-1.618 2.904 1.618c.747.416 1.65-.219 1.47-1.028l-.7-3.16 2.497-2.163c.639-.553.296-1.575-.562-1.662l-3.339-.335-1.362-2.953Z"
      fill="currentColor"
    />
  </svg>
)
