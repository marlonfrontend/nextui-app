import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/index'
import AnnouncementPage from '@/pages/announcement'
import DocsPage from '@/pages/docs'

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AnnouncementPage />} path="/announcement" />
      <Route element={<DocsPage />} path="/docs" />
    </Routes>
  )
}

export default App
