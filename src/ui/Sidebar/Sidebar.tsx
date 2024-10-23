import { Image } from '../Image'
import { Icon } from '../Icon'
import { Dropdown } from '../Dropdown'
import { Button } from '../Button'

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

      <div>
        <Dropdown>
          <Dropdown.Trigger>
            <Button variant="bordered">Open Menu</Button>
          </Dropdown.Trigger>
          <Dropdown.Menu
            aria-label="Dropdown menu with shortcut"
            variant="flat"
          >
            <Dropdown.Item key="new" shortcut="⌘N">
              New file
            </Dropdown.Item>
            <Dropdown.Item key="copy" shortcut="⌘C">
              Copy link
            </Dropdown.Item>
            <Dropdown.Item key="edit" shortcut="⌘⇧E">
              Edit file
            </Dropdown.Item>
            <Dropdown.Item
              key="delete"
              className="text-danger"
              color="danger"
              shortcut="⌘⇧D"
            >
              Delete file
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </aside>
  )
}
