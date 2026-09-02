import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>Home</h1>
}

function Integrantes() {
  return <h1>Integrantes</h1>
}

function Sobre() {
  return <h1>Sobre</h1>
}

function FAQ() {
  return <h1>FAQ</h1>
}

function Contato() {
  return <h1>Contato</h1>
}

function Solucao() {
  return <h1>Solução</h1>
}

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