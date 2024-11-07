import { DefaultNavbar, FilterBar } from '@/components'
import { Layout } from '@/ui'

type DefaultLayoutProps = {
  children: React.ReactNode
  fixed?: boolean
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Layout>
      <Layout.Header fixed>
        <DefaultNavbar />
        <FilterBar />
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer />
    </Layout>
  )
}
