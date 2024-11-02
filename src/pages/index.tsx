import { DefaultLayout } from '@/layouts'
import { Search } from '@/components'

export const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap py-20 w-full justify-center">
        <div>
          <h2 className="text-center my-12 text-4xl font-medium">
            Encontre um espaço que cumpra sua objetivo
          </h2>

          <Search />
        </div>
      </div>
    </DefaultLayout>
  )
}
