import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Integrantes from './pages/Integrantes/Integrantes'
import Sobre from './pages/Sobre/Sobre'
import FAQ from './pages/FAQ/FAQ'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/solucao" element={<Solucao />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App