import { DefaultNavbar } from '@/components'
import { Layout } from '@/ui'

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header>
        <DefaultNavbar />
        {/* <div className="border-b p-3 bg-white">
          <div className="justify-center gap-4 flex">
            <div className="cursor-pointer inline-flex items-center gap-2 py-2 px-3 border-black rounded-full text-sm hover:border-black transition-all duration-250 bg-black text-white">
              <Icon name="Check" size={16} />
              Casamento
            </div>
            <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
              Formatura
            </div>
            <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
              Baile
            </div>
            <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
              Restaurantes
            </div>
          </div>
        </div> */}
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer />
    </Layout>
  )
}
