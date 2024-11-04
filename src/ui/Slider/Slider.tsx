import { Slider as AppSlider } from '@nextui-org/react'

import { SliderProps } from './Slider.types'

export const Slider = ({ ...props }: SliderProps) => {
  return <AppSlider {...props} />
}
