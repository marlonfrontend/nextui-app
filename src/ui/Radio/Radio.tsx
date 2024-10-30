import {
  Radio as AppRadio,
  RadioGroup as AppRadioGroup
} from '@nextui-org/react'

import { RadioProps, RadioGroupProps } from './Radio.types'

export const Radio = ({ ...props }: RadioProps) => {
  return <AppRadio {...props} />
}

export const RadioGroup = ({ ...props }: RadioGroupProps) => {
  return <AppRadioGroup {...props} />
}
