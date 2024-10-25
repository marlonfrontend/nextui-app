import DefaultLayout from '@/layouts/default'
import { Container } from '@/ui'

const IndexPage = () => {
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

export default IndexPage
