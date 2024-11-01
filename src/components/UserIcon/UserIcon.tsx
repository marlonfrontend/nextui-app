import { IconSvgProps } from '@/types'

export const UserIcon = ({ size = 36, height, ...props }: IconSvgProps) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 16 16"
    width={size || height}
    {...props}
  >
    <path
      d="M5 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.688 9.876C4.005 9.331 5.91 9 8 9c2.09 0 3.995.33 5.312.877a1.286 1.286 0 0 1 .586 1.894A6.995 6.995 0 0 1 8 15a6.995 6.995 0 0 1-5.898-3.23 1.286 1.286 0 0 1 .586-1.894Z"
      fill="currentColor"
    />
  </svg>
)
