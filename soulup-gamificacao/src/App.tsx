import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout/MainLayout'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Integrantes from './pages/Integrantes/Integrantes'
import FAQ from './pages/FAQ/FAQ'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'
import SolucaoDetalhe from './pages/SolucaoDetalhe/SolucaoDetalhe'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          /* Páginas principais */
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />

          /* Solução */
          <Route path="/solucao" element={<Solucao />} />
          <Route
            path="/solucao/:id"
            element={<SolucaoDetalhe />}
          />

          /* Autenticação */
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App