import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/[..movieId]';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
  )
}

export default App
