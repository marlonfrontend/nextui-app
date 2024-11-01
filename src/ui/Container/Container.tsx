import { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto py-12">{children}</div>
}
