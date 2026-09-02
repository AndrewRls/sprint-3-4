import { Link } from 'react-router-dom'
import logo from '../../assets/imagens/img-01-logo.svg'

function Header() {
  return (
    <header className="w-full bg-black px-6 py-4 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        
        <Link to="/">
          <img
            src={logo}
            alt="Logo da SoulUP"
            className="w-32"
          />
        </Link>

        <div className="flex items-center gap-6">
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

      </nav>
    </header>
  )
}

export default Header