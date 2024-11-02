import { Pagination } from '@nextui-org/react'

import { DefaultLayout } from '@/layouts'
import { Card, Image, Grid, Divider, Chip } from '@/ui'
import { StarIcon, UserIcon } from '@/components'

export const IndexPage = () => {
  const LISTING_DATA = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    }
  ]

  return (
    <DefaultLayout>
      <div className="flex flex-wrap">
        <div className="flex-1 p-5 pb-0">
          <Grid gap={3}>
            {LISTING_DATA.map((item, i) => (
              <>
                <Grid.Col key={i} span={12}>
                  <Card
                    className="w-auto rounded-none"
                    classNames={{ body: 'px-0' }}
                    shadow="none"
                  >
                    <Card.Body>
                      <div className="flex flex-wrap gap-4">
                        <Image
                          src="https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/kyrrfk3qesumfsyfq1ko"
                          width={300}
                        />
                        <div className="flex-1 relative cursor-pointer">
                          <Chip size="sm">Casamento</Chip>
                          <div className="text-lg font-medium mt-3 hover:underline cursor-pointer">
                            Espaço Maggiore
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm inline-flex items-center gap-1">
                              <StarIcon width={15} />
                              <span>5.0 (200 avaliações)</span>
                            </div>
                            <div className="text-sm inline-flex items-center gap-1">
                              <UserIcon width={15} />
                              <span>100 convidados</span>
                            </div>
                          </div>
                          <div className="absolute bottom-4">
                            {/* <div className="text-lg font-bold">
                              <span className="font-normal text-base">
                                Apartir de
                              </span>{' '}
                              R$ 20000{' '}
                              <span className="font-normal text-base">
                                /dia
                              </span>
                            </div> */}
                            <div className="text-lg font-bold">Consultar</div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Divider className="bg-gray-200" />
                </Grid.Col>
              </>
            ))}
          </Grid>
          <Pagination
            disableCursorAnimation
            showControls
            className="gap-2 my-12 mx-auto"
            classNames={{ wrapper: 'mx-auto' }}
            initialPage={1}
            radius="full"
            total={10}
            variant="light"
          />
        </div>
        <div className="h-screen w-[600px] bg-gray-100 ml-5 top-0 sticky" />
      </div>
    </DefaultLayout>
  )
}
