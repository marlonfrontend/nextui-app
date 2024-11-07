import { SpaceCardProps } from './SpaceCard.types'

import { Card, Image } from '@/ui'
import { StarIcon, UserIcon } from '@/components'

export const SpaceCard = ({ title }: SpaceCardProps) => {
  return (
    <Card
      className="w-auto rounded-none bg-transparent"
      classNames={{ body: 'px-0 bg-transparent' }}
      shadow="none"
    >
      <Card.Body>
        <div className="flex flex-wrap gap-3">
          <Image
            src="https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/kyrrfk3qesumfsyfq1ko"
            width={300}
          />
          <div className="flex-1 relative cursor-pointer">
            <div className="font-medium cursor-pointer">{title}</div>
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
            <div className="text-lg font-medium">
              R$ 1000 <span className="font-normal text-sm">/dia</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
