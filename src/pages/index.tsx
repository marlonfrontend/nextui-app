import { DefaultLayout } from '@/layouts'
import { Container, Card, Image, Grid } from '@/ui'
import { StarIcon, UserIcon } from '@/components'

export const IndexPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <div className="p-10">
          <Grid gap={5}>
            <Grid.Col span={3}>
              <Card className="border w-auto" shadow="none">
                <Card.Body>
                  <Image
                    className="mb-3"
                    src="https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/kyrrfk3qesumfsyfq1ko"
                  />
                  <div className="font-medium">Espaço Maggiore</div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm inline-flex items-center gap-1">
                      <StarIcon width={15} />
                      <span>5.0</span>
                    </div>
                    <div className="text-sm inline-flex items-center gap-1">
                      <UserIcon width={15} />
                      <span>100 convidados</span>
                    </div>
                  </div>
                  <div className="font-medium">Apartir de R$ 2.000</div>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col span={3}>
              <Card className="border w-auto" shadow="none">
                <Card.Body>
                  <Image
                    className="mb-3"
                    src="https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/kyrrfk3qesumfsyfq1ko"
                  />
                  <div className="font-medium">Espaço Maggiore</div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm inline-flex items-center gap-1">
                      <StarIcon width={15} />
                      <span>5.0</span>
                    </div>
                    <div className="text-sm inline-flex items-center gap-1">
                      <UserIcon width={15} />
                      <span>100 convidados</span>
                    </div>
                  </div>
                  <div className="font-medium">Apartir de R$ 2.000</div>
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </DefaultLayout>
  )
}
