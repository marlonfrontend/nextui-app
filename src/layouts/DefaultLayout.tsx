import { DefaultNavbar, FilterBar } from '@/components'
import { Layout } from '@/ui'

type DefaultLayoutProps = {
  children: React.ReactNode
  headerFixed?: boolean
  headerFilterable?: boolean
}

export const DefaultLayout = ({
  children,
  headerFixed = true,
  headerFilterable
}: DefaultLayoutProps) => {
  return (
    <Layout>
      <Layout.Header fixed={headerFixed}>
        <DefaultNavbar />
        {headerFilterable && <FilterBar />}
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer />
    </Layout>
  )
}
