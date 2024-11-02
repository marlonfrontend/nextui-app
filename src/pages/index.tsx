import { DefaultLayout } from '@/layouts'
import { Button, Form, Icon, Input } from '@/ui'

export const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap py-20 w-full justify-center">
        <div>
          <h2 className="text-center my-12 text-4xl font-medium">
            Encontre um espaço que cumpra sua objetivo
          </h2>

          <Form schema={undefined} onSubmit={() => console.log('a')}>
            <div className="relative">
              <Input
                endContent={
                  <Button
                    isIconOnly
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    color="primary"
                    size="lg"
                  >
                    <Icon name="Search" size={22} />
                  </Button>
                }
                label="Pesquisar"
                name="search"
                radius="full"
                size="lg"
              />
            </div>
          </Form>
        </div>
      </div>
    </DefaultLayout>
  )
}
