import { Image } from '../Image'
import { Icon } from '../Icon'
import { Avatar } from '../Avatar'

export const Sidebar = () => {
  return (
    <aside className="h-screen relative flex flex-col py-6 px-4 subpixel-antialiased bg-neutral-100">
      <Image radius="none" src="/logo.svg" width={140} />
      <nav className="flex-1">
        <ul className="flex flex-col mt-6">
          <li>
            <button className="flex items-center rounded-lg hover:bg-gray-200 transition-all duration-250 gap-4 w-full p-4">
              <Icon name="Monitor" size={20} />
              <span className="font-medium text-sm">Dashboard</span>
            </button>
          </li>
          <li>
            <button className="flex items-center rounded-lg hover:bg-gray-200 transition-all duration-250 gap-4 w-full p-4">
              <Icon name="CircleDollarSign" size={20} />
              <span className="font-medium text-sm">Vendas</span>
            </button>
          </li>
          <li>
            <button className="flex items-center rounded-lg hover:bg-gray-200 transition-all duration-250 gap-4 w-full p-4">
              <Icon name="Settings" size={20} />
              <span className="font-medium text-sm">Produtos</span>
            </button>
          </li>
        </ul>
      </nav>

      <button className="flex items-center rounded-lg hover:bg-gray-200 transition-all duration-250 gap-4 w-full p-4">
        <Avatar
          name="JD"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        John Doe
      </button>
    </aside>
  )
}
