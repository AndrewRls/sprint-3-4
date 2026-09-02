import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout/MainLayout'

import Home from './pages/Home/Home'
import Integrantes from './pages/Integrantes/Integrantes'
import Sobre from './pages/Sobre/Sobre'
import FAQ from './pages/FAQ/FAQ'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App