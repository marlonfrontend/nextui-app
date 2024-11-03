import { useTheme } from 'next-themes'

import { Icon } from '@/ui'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <Icon name="Sun" strokeWidth={1.8} />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <Icon name="Moon" strokeWidth={1.8} />
        </button>
      )}
    </>
  )
}
