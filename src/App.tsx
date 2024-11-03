import { Route, Routes } from 'react-router-dom'

import { HomeSearch } from '@/pages/Home'
import { AddListing, Listings } from '@/pages/Listings'
import { AddSpace } from '@/pages/Space'

function App() {
  return (
    <Routes>
      <Route element={<HomeSearch />} path="/" />

      <Route element={<Listings />} path="/listing" />

      <Route element={<AddListing />} path="/listing/create" />

      <Route
        element={<AddSpace selectedKey="address" />}
        path="/add-space/address"
      />
      <Route
        element={<AddSpace selectedKey="about" />}
        path="/add-space/about"
      />
      <Route
        element={<AddSpace selectedKey="photos" />}
        path="/add-space/photos"
      />
      <Route
        element={<AddSpace selectedKey="availability" />}
        path="/add-space/availability"
      />
      <Route
        element={<AddSpace selectedKey="activities" />}
        path="/add-space/activities"
      />
    </Routes>
  )
}

export default App
