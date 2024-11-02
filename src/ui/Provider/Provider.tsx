import { NextUIProvider } from '@nextui-org/system'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { ProviderProps } from './Provider.types'

export const Provider = ({ children }: ProviderProps) => {
  const navigate = useNavigate()

  return (
    <NextUIProvider navigate={navigate}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
