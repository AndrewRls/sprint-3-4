import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/imagens/img-01-logo.png'
import { useAuth } from '../../hooks/useAuth'
import { ROTAS } from '../../routes/rotas'

interface LinkMenu {
  texto: string
  para: string
}

const links: LinkMenu[] = [
  { texto: 'Home', para: ROTAS.home },
  { texto: 'Solução', para: ROTAS.solucao },
  { texto: 'Sobre', para: ROTAS.sobre },
  { texto: 'Integrantes', para: ROTAS.integrantes },
  { texto: 'Contato', para: ROTAS.contato },
  { texto: 'FAQ', para: ROTAS.faq },
]

const classeLink = 'text-white transition hover:text-purple-400'
const classeBotao =
  'rounded-lg bg-purple-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-purple-700'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { usuario, sair } = useAuth()
  const navigate = useNavigate()

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

  function fecharMenu() {
    setMenuAberto(false)
  }

  function aoSair() {
    sair()
    fecharMenu()
    navigate(ROTAS.home)
  }

  const acaoConta = usuario ? (
    <button type="button" onClick={aoSair} className={classeBotao}>
      Sair ({usuario.nome.split(' ')[0]})
    </button>
  ) : (
    <Link to={ROTAS.login} onClick={fecharMenu} className={classeBotao}>
      Login
    </Link>
  )

  return (
    <header className="w-full bg-black px-6 py-4 shadow-md xl:px-12">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={ROTAS.home} onClick={fecharMenu}>
            <img src={logo} alt="Logo da SoulUP" className="w-32" />
          </Link>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            className="text-3xl text-white md:hidden"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
          >
            {menuAberto ? '✕' : '☰'}
          </button>

          {/* Menu desktop */}
          <div className="hidden items-center gap-6 md:flex xl:gap-8">
            {links.map((item) => (
              <Link key={item.para} to={item.para} className={classeLink}>
                {item.texto}
              </Link>
            ))}
            {acaoConta}
          </div>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4 md:hidden">
            {links.map((item) => (
              <Link
                key={item.para}
                to={item.para}
                onClick={fecharMenu}
                className={classeLink}
              >
                {item.texto}
              </Link>
            ))}
            {acaoConta}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header