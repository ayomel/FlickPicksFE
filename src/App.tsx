import { Routes, Route } from 'react-router-dom'
import { AppHeader } from '@/components/AppHeader'
import { Home } from './pages/Home'
import { MovieDetails } from './pages/MovieDetails'

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
