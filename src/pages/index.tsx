import { title } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'

const IndexPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Endereço</span>
        </div>

        <div className="mt-8" />
      </section>
    </DefaultLayout>
  )
}

export default IndexPage
