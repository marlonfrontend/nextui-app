import { DefaultNavbar } from '@/components'
import { Layout } from '@/ui'

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header>
        <DefaultNavbar />
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>
    </Layout>
  )
}
