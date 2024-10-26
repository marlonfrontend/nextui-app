import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Container } from '@/ui'

export const IndexPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <div className="p-10">
          <div className="text-4xl text-center">Endereço</div>
        </div>
      </Container>
    </DefaultLayout>
  )
}
