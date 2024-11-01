/* eslint-disable no-console */
import { AnnouncementLayout } from '@/layouts'
import { Container } from '@/ui'
import { SpaceAddressForm, Stepper } from '@/components'

type AddSpaceProps = {
  key: string
}

export const AddSpace = ({ key }: AddSpaceProps) => {
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
      name: 'Fotos',
      value: 'photos',
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
        <Stepper items={ADD_SPACE_DATA} selectedKey={key} />
      </Container>
    </AnnouncementLayout>
  )
}
