import { Route, Routes } from 'react-router-dom'

import { AddSpaceAddress, AddSpaceCreate } from '@/pages/Space'
import { IndexPage } from '@/pages/index'

function App() {
  return (
    <Routes>
      {/* initial */}
      <Route element={<IndexPage />} path="/" />

      {/* announcement */}
      <Route element={<AddSpaceCreate />} path="/announcement" />

      {/* add space */}
      <Route element={<AddSpaceAddress />} path="/add-space/create" />
      <Route element={<AddSpaceAddress />} path="/add-space/address" />
      <Route element={<AddSpaceAddress />} path="/add-space/address" />
    </Routes>
  )
}

export default App
