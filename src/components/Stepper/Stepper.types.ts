type StepperItem = {
  name: string
  value: string
  component: React.ReactNode
}

export type StepperProps = {
  items: StepperItem[]
}
