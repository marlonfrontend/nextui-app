import { DefaultLayout } from '@/layouts'
import { Search } from '@/components'
import { Text } from '@/ui'

export const HomeSearch = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap flex-col py-20 w-full justify-center">
        <Text className="text-center my-12 text-4xl font-medium">
          Encontre um espaço que cumpra sua objetivo
        </Text>
        <Search />
        {/* <div className="flex flex-wrap gap-4">
            <div className='relative before:bottom-0 before:w-full h-48 w-40 rounded-xl bg-cover bg-no-repeat bg-[url("https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/kyrrfk3qesumfsyfq1ko")] before:content-[""] before:h-36 before:absolute before:bg-gradient-to-t overflow-hidden before:from-[#000]/90 before:to-[#000]/0'>
              <div className=" absolute bottom-0 p-3">
                <span className=" block text-white text-sm">
                  Espaço Maggiore
                </span>
                <span className="block text-white/70 text-xs">Blumenau</span>
              </div>
            </div>
            <div className='relative before:bottom-0 before:w-full h-48 w-40 rounded-xl bg-cover bg-no-repeat bg-[url("https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/xjdbsxjtcyom2zhhondm")] before:content-[""] before:h-36 before:absolute before:bg-gradient-to-t overflow-hidden before:from-[#000]/90 before:to-[#000]/0'>
              <div className=" absolute bottom-0 p-3">
                <span className=" block text-white text-sm">
                  Espaço Maggiore
                </span>
                <span className="block text-white/70 text-xs">Blumenau</span>
              </div>
            </div>
            <div className='relative before:bottom-0 before:w-full h-48 w-40 rounded-xl bg-cover bg-no-repeat bg-[url("https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/ovkeaur63te0tpifw0sk")] before:content-[""] before:h-36 before:absolute before:bg-gradient-to-t overflow-hidden before:from-[#000]/90 before:to-[#000]/0'>
              <div className=" absolute bottom-0 p-3">
                <span className=" block text-white text-sm">
                  Espaço Maggiore
                </span>
                <span className="block text-white/70 text-xs">Blumenau</span>
              </div>
            </div>
          </div> */}
      </div>
    </DefaultLayout>
  )
}
