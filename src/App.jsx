import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Systems from './pages/Systems'
import Divisions from './pages/Divisions'
import Brandora from './pages/Brandora'
import InkForge from './pages/InkForge'
import Velano from './pages/Velano'
import Work from './pages/Work'
import Apply from './pages/Apply'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="systems" element={<Systems />} />
        <Route path="divisions" element={<Divisions />} />
        <Route path="brandora" element={<Brandora />} />
        <Route path="inkforge" element={<InkForge />} />
        <Route path="velano" element={<Velano />} />
        <Route path="work" element={<Work />} />
        <Route path="apply" element={<Apply />} />
      </Route>
    </Routes>
  )
}

export default App
