import { Route, Routes } from 'react-router-dom'

import { AnnouncementPage } from '@/pages/Announcement'
import { AddSpaceCreatePage } from '@/pages/AddSpace'
import { IndexPage } from '@/pages/index'

function App() {
  return (
    <Routes>
      {/* initial */}
      <Route element={<IndexPage />} path="/" />

      {/* announcement */}
      <Route element={<AnnouncementPage />} path="/announcement" />

      {/* add space */}
      <Route element={<AddSpaceCreatePage />} path="/add-space/create" />
      <Route element={<AddSpaceCreatePage />} path="/add-space/address" />
      <Route element={<AddSpaceCreatePage />} path="/add-space/address" />
    </Routes>
  )
}

export default App
