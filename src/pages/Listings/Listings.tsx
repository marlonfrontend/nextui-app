import { Pagination } from '@nextui-org/react'

import { DefaultLayout } from '@/layouts'
import { Grid, Flex } from '@/ui'
import { SpaceCard } from '@/components'
import { LISTING_DATA } from '@/constants'

export const Listings = () => {
  return (
    <DefaultLayout headerFilterable>
      <Flex className="flex flex-wrap">
        <Flex className="flex-1 p-5 pb-0">
          <Grid gap={5}>
            {LISTING_DATA.map((item, i) => (
              <Grid.Col key={i} span={4}>
                <SpaceCard thumbnail={item.thumbnail} title={item.title} />
              </Grid.Col>
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
        </Flex>
        <div className="h-screen w-[600px] bg-gray-100 dark:bg-[#121212] ml-5 top-0 sticky" />
      </Flex>
    </DefaultLayout>
  )
}
