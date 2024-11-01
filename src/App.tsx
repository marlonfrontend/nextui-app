import { Route, Routes } from 'react-router-dom'

import { IndexPage } from '@/pages/index'
import { AddListing } from '@/pages/Listings'
import { AddSpace } from '@/pages/Space'

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />

      <Route element={<AddListing />} path="/listing/create" />

      <Route element={<AddSpace key="address" />} path="/add-space/address" />
      <Route element={<AddSpace key="about" />} path="/add-space/about" />
      <Route element={<AddSpace key="photos" />} path="/add-space/photos" />
      <Route
        element={<AddSpace key="availability" />}
        path="/add-space/availability"
      />
      <Route
        element={<AddSpace key="activities" />}
        path="/add-space/activities"
      />
    </Routes>
  )
}

export default App
