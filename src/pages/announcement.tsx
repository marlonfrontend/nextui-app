import AnnouncementLayout from '@/layouts/announcement'
import { Container } from '@/ui'

const AnnouncementPage = () => {
  return (
    <AnnouncementLayout>
      <Container>
        <div className="p-10">
          <div className="text-4xl text-center">Endereço</div>
        </div>
      </Container>
    </AnnouncementLayout>
  )
}

export default AnnouncementPage
