import { icons, LucideProps } from 'lucide-react'

export type IconProps = {
  name: keyof typeof icons
  width?: LucideProps['width']
  height?: LucideProps['height']
  size?: LucideProps['size']
  strokeWidth?: LucideProps['strokeWidth']
}
