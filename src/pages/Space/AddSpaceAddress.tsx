/* eslint-disable no-console */
import { AnnouncementLayout } from '@/layouts'
import { Container } from '@/ui'
import { SpaceAddressForm, Stepper } from '@/components'

export const AddSpaceAddress = () => {
  const ADD_SPACE_DATA = [
    {
      name: 'Localização',
      value: 'address',
      component: <SpaceAddressForm />
    },
    {
      name: 'Configuração',
      value: 'config',
      component: <SpaceAddressForm />
    },
    {
      name: 'Sobre o espaço',
      value: 'about',
      component: <SpaceAddressForm />
    },
    {
      name: 'Disponibilidade',
      value: 'availability',
      component: <SpaceAddressForm />
    },
    {
      name: 'Atividades',
      value: 'activities',
      component: <SpaceAddressForm />
    }
  ]

  return (
    <AnnouncementLayout>
      <Container>
        <Stepper items={ADD_SPACE_DATA} selectedKey={'address'} />
      </Container>
    </AnnouncementLayout>
  )
}
