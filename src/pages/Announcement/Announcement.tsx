import { cn } from '@nextui-org/react'

import { AnnouncementLayout } from '@/layouts/AnnouncementLayout'
import { Button, Radio, RadioGroup } from '@/ui'

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex flex-1 m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        )
      }}
    >
      {children}
    </Radio>
  )
}

export const AnnouncementPage = () => {
  return (
    <AnnouncementLayout>
      <div className="flex h-full">
        <div className="flex-1 p-10">
          <div className="text-3xl font-medium text-center">
            Comece selecionando o que deseja?
          </div>
          <div className="flex flex-col items-center gap-20 justify-center my-20">
            <RadioGroup orientation="horizontal">
              <CustomRadio description="Up to 20 items" value="free">
                Free
              </CustomRadio>
              <CustomRadio
                description="Unlimited items. $10 per month."
                value="pro"
              >
                Pro
              </CustomRadio>
              <CustomRadio
                description="24/7 support. Contact us for pricing."
                value="enterprise"
              >
                Enterprise
              </CustomRadio>
            </RadioGroup>
            <Button color="primary" size="lg">
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </AnnouncementLayout>
  )
}
