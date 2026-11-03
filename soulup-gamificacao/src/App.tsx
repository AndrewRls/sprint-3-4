import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import AuthProvider from './context/AuthProvider'
import MainLayout from './components/MainLayout/MainLayout'
import RotaProtegida from './components/RotaProtegida/RotaProtegida'
import { ROTAS } from './routes/rotas'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Integrantes from './pages/Integrantes/Integrantes'
import FAQ from './pages/FAQ/FAQ'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'
import SolucaoDetalhe from './pages/SolucaoDetalhe/SolucaoDetalhe'
import SolucaoForm from './pages/SolucaoForm/SolucaoForm'
import Ranking from './pages/Ranking/Ranking'
import Perfil from './pages/Perfil/Perfil'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainLayout>
          <Routes>
            {/* Rotas estáticas */}
            <Route path={ROTAS.home} element={<Home />} />
            <Route path={ROTAS.sobre} element={<Sobre />} />
            <Route path={ROTAS.integrantes} element={<Integrantes />} />
            <Route path={ROTAS.faq} element={<FAQ />} />
            <Route path={ROTAS.contato} element={<Contato />} />
            <Route path={ROTAS.login} element={<Login />} />
            <Route path={ROTAS.cadastro} element={<Cadastro />} />

            {/* Solução (consome a API Java) */}
            <Route path={ROTAS.solucao} element={<Solucao />} />
            <Route path={ROTAS.ranking} element={<Ranking />} />

            {/* Rotas protegidas: exigem login */}
            <Route
              path={ROTAS.novoPost}
              element={
                <RotaProtegida>
                  <SolucaoForm />
                </RotaProtegida>
              }
            />
            <Route
              path={ROTAS.perfil}
              element={
                <RotaProtegida>
                  <Perfil />
                </RotaProtegida>
              }
            />

            {/* Rota dinâmica (parâmetro :id) */}
            <Route path={ROTAS.padraoDetalhePost} element={<SolucaoDetalhe />} />

            {/* Redirecionamentos e página 404 */}
            <Route path="/home" element={<Navigate to={ROTAS.home} replace />} />
            <Route path="/posts" element={<Navigate to={ROTAS.solucao} replace />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App