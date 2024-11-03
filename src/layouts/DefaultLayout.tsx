import { ScrollShadow } from '@nextui-org/react'

import { DefaultNavbar } from '@/components'
import { Button, Divider, Icon, Layout } from '@/ui'

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header>
        <DefaultNavbar />
        <div className="flex items-center gap-5 border-b border-divider backdrop-blur-lg p-3 bg-background/70">
          <div className="flex gap-4">
            <Button color="default" size="md">
              Preço
            </Button>
            <Button color="default" size="md">
              Convidados
            </Button>
            <Button
              color="default"
              size="md"
              startContent={<Icon name="Settings2" size={18} />}
            >
              Filtros
            </Button>
          </div>
          <Divider className="h-[45px]" orientation="vertical" />
          <ScrollShadow className="w-full" orientation="horizontal">
            <div className="justify-start gap-4 flex">
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
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Baile
              </div>
              <div className="cursor-pointer py-2 px-3 border rounded-full text-sm hover:border-black transition-all duration-250">
                Restaurantes
              </div>
            </div>
          </ScrollShadow>
        </div>
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer />
    </Layout>
  )
}
