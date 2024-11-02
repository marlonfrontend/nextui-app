import { DefaultNavbar } from '@/components'
import { Chip, Layout } from '@/ui'

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header>
        <DefaultNavbar />
        <div className="border-b p-5 bg-white">
          <Chip size="sm">Casamento</Chip>
        </div>
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer />
    </Layout>
  )
}
