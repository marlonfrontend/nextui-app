import { Image } from '../Image'

export const Sidebar = () => {
  return (
    <aside className="h-screen relative flex flex-col py-6 px-4 subpixel-antialiased bg-neutral-100">
      <Image radius="none" src="/logo.svg" width={140} />
      <nav>
        <ul className="flex flex-col mt-6">
          <li>
            <button className="flex items-center gap-4 w-full p-4">
              Dashboard
            </button>
          </li>
          <li>
            <button className="flex items-center gap-4 w-full p-4">
              Vendas
            </button>
          </li>
          <li>
            <button className="flex items-center gap-4 w-full p-4">
              Produtos
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
