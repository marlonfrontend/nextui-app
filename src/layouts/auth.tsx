import { Navbar } from '@/ui'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <div className="w-full h-1 relative bg-gray-100 dark:bg-white/10">
        <div className="w-[44%] absolute left-0 h-1 top-0 bg-black dark:bg-white" />
      </div>
      <main className="w-full flex-grow pt-16">{children}</main>
    </div>
  )
}

export default AuthLayout
