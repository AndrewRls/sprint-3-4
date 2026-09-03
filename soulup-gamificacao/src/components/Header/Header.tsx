import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/imagens/img-01-logo.svg'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  useEffect(() => {
  function verificarTamanhoTela() {
    if (window.innerWidth >= 768) {
      setMenuAberto(false)
    }
  }

  window.addEventListener('resize', verificarTamanhoTela)

  return () => {
    window.removeEventListener('resize', verificarTamanhoTela)
  }
}, [])

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <header className="w-full bg-black px-6 py-4 shadow-md">
      <nav className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" onClick={() => setMenuAberto(false)}>
            <img
              src={logo}
              alt="Logo da SoulUP"
              className="w-32"
            />
          </Link>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={alternarMenu}
            className="text-3xl text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuAberto ? '✕' : '☰'}
          </button>

          {/* Menu desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className="text-white transition hover:text-purple-400"
            >
              Home
            </Link>

            <Link
              to="/solucao"
              className="text-white transition hover:text-purple-400"
            >
              Solução
            </Link>

            <Link
              to="/sobre"
              className="text-white transition hover:text-purple-400"
            >
              Sobre
            </Link>

            <Link
              to="/integrantes"
              className="text-white transition hover:text-purple-400"
            >
              Integrantes
            </Link>

            <Link
              to="/contato"
              className="text-white transition hover:text-purple-400"
            >
              Contato
            </Link>

            <Link
              to="/faq"
              className="text-white transition hover:text-purple-400"
            >
              FAQ
            </Link>

            <Link
              to="/login"
              className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4 md:hidden">

            <Link
              to="/"
              onClick={() => setMenuAberto(false)}
              className="text-white transition hover:text-purple-400"
            >
              Home
            </Link>

            <Link
              to="/solucao"
              onClick={() => setMenuAberto(false)}
              className="text-white transition hover:text-purple-400"
            >
              Solução
            </Link>

            <Link
              to="/sobre"
              onClick={() => setMenuAberto(false)}
              className="text-white transition hover:text-purple-400"
            >
              Sobre
            </Link>

            <Link
              to="/integrantes"
              onClick={() => setMenuAberto(false)}
              className="text-white transition hover:text-purple-400"
            >
              Integrantes
            </Link>

            <Link
              to="/contato"
              onClick={() => setMenuAberto(false)}
              className="text-white transition hover:text-purple-400"
            >
              Contato
            </Link>

            <Link
              to="/faq"
              onClick={() => setMenuAberto(false)}
              className="text-white transition hover:text-purple-400"
            >
              FAQ
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuAberto(false)}
              className="rounded-lg bg-purple-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-purple-700"
            >
              Login
            </Link>

          </div>
        )}

      </nav>
    </header>
  )
}

export default Header