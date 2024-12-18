/* eslint-disable no-console */
import { AddSpaceProps } from './AddSpace.types'

import { DefaultLayout } from '@/layouts'
import { Container } from '@/ui'
import { SpaceAddressForm, SpacePhotosForm, Stepper } from '@/components'

export const AddSpace = ({ selectedKey }: AddSpaceProps) => {
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
      component: <SpacePhotosForm />
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
    <DefaultLayout>
      <Container>
        <Stepper items={ADD_SPACE_DATA} selectedKey={selectedKey} />
      </Container>
    </DefaultLayout>
  )
}
