import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Perfil from './pages/Perfil/Perfil'
import AuthProvider from './context/AuthProvider'
import MainLayout from './components/MainLayout/MainLayout'
import RotaProtegida from './components/RotaProtegida/RotaProtegida'
import { ROTAS } from './routes/rotas'
import Ranking from './pages/Ranking/Ranking'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Integrantes from './pages/Integrantes/Integrantes'
import FAQ from './pages/FAQ/FAQ'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'
import SolucaoDetalhe from './pages/SolucaoDetalhe/SolucaoDetalhe'
import SolucaoForm from './pages/SolucaoForm/SolucaoForm'
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

            {/* Solução (consome a API) */}
            <Route path={ROTAS.solucao} element={<Solucao />} />
            <Route path={ROTAS.ranking} element={<Ranking />} />
            <Route
              path={ROTAS.perfil}
              element={
                <RotaProtegida>
                  <Perfil />
                </RotaProtegida>
              }
            />
            <Route
              path={ROTAS.novaMissao}
              element={
                <RotaProtegida>
                  <SolucaoForm />
                </RotaProtegida>
              }
            />

            {/* Rotas dinâmicas (parâmetro :id) */}
            <Route path="/solucao/:id" element={<SolucaoDetalhe />} />
            <Route
              path="/solucao/:id/editar"
              element={
                <RotaProtegida>
                  <SolucaoForm />
                </RotaProtegida>
              }
            />

            {/* Redirecionamentos e página 404 */}
            <Route path="/home" element={<Navigate to={ROTAS.home} replace />} />
            <Route path="/missoes" element={<Navigate to={ROTAS.solucao} replace />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App