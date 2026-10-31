import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useAuth } from '../../hooks/useAuth'
import { useRanking } from '../../hooks/useRanking'
import { ROTAS } from '../../routes/rotas'
import { usuarioService } from '../../services/usuarioService'
import type { EstadoLogin } from '../../types'
import { calcularNivel, estiloNivel } from '../../utils/nivel'

function Perfil() {
  const navigate = useNavigate()
  const { usuario, sair } = useAuth()
  const { estado } = useRanking()
  const [excluindo, setExcluindo] = useState(false)
  const [erro, setErro] = useState('')

  // A rota já é protegida, mas o TypeScript precisa tratar o caso sem login
  if (!usuario) return null

  const cpf = usuario.cpf

  // Os números mais recentes vêm do ranking. Se ainda não chegaram, usa os do login.
  const atual =
    estado.status === 'sucesso'
      ? estado.dados.find((pessoa) => pessoa.cpf === cpf)
      : undefined
  const dados = atual ?? usuario
  const nivel = calcularNivel(dados.pontos)

  async function excluir() {
    if (
      !window.confirm(
        'Tem certeza? Sua conta será excluída e essa ação não pode ser desfeita.',
      )
    ) {
      return
    }

    setExcluindo(true)
    setErro('')

    try {
      // DELETE /usuarios/{cpf}
      await usuarioService.excluir(cpf)

      const aviso: EstadoLogin = { mensagem: 'Conta excluída com sucesso.' }
      navigate(ROTAS.login, { replace: true, state: aviso })
      sair()
    } catch (e) {
      const mensagem =
        e instanceof Error ? e.message : 'Não foi possível excluir a conta.'
      setErro(
        `${mensagem} Se você já publicou posts, o banco pode impedir a exclusão.`,
      )
      setExcluindo(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">
      <section className="mx-auto max-w-2xl">
        <SectionTitle titulo="Meu perfil" />

        <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-lg md:p-10">
          <header className="mb-6 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-600 text-3xl font-bold text-white"
            >
              {(dados.apelido || dados.nome).charAt(0).toUpperCase()}
            </span>

            <div className="min-w-0">
              <h2 className="truncate text-2xl font-black">
                {dados.apelido || dados.nome}
              </h2>
              <p className="truncate text-gray-700">{dados.nome}</p>
              <p className="truncate text-sm text-gray-700">{dados.email}</p>
            </div>
          </header>

          <div className="mb-6 flex flex-wrap gap-3 font-bold">
            <span className="rounded-full bg-purple-600 px-4 py-1 text-white">
              {dados.pontos} pts
            </span>
            <span className={`rounded-full px-4 py-1 ${estiloNivel[nivel]}`}>
              {nivel}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="rounded-lg bg-white p-3">
              <dt className="text-sm text-gray-700">Posts</dt>
              <dd className="text-xl font-black">{dados.qntPosts}</dd>
            </div>
            <div className="rounded-lg bg-white p-3">
              <dt className="text-sm text-gray-700">Curtidas</dt>
              <dd className="text-xl font-black">{dados.curtidas}</dd>
            </div>
            <div className="rounded-lg bg-white p-3">
              <dt className="text-sm text-gray-700">Seguidores</dt>
              <dd className="text-xl font-black">{dados.seguidores}</dd>
            </div>
            <div className="rounded-lg bg-white p-3">
              <dt className="text-sm text-gray-700">Seguindo</dt>
              <dd className="text-xl font-black">{dados.seguindo}</dd>
            </div>
          </dl>
        </article>

        <article className="mt-8 rounded-2xl border-2 border-red-600 bg-red-100 p-6 text-center">
          <h2 className="text-xl font-black text-red-800">Zona de perigo</h2>
          <p className="mt-2 text-red-800">
            Excluir a conta apaga seus dados da SoulUp. Essa ação não pode ser
            desfeita.
          </p>

          {erro && (
            <p
              role="alert"
              className="mt-4 rounded-lg bg-white p-3 font-semibold text-red-800"
            >
              {erro}
            </p>
          )}

          <button
            type="button"
            onClick={excluir}
            disabled={excluindo}
            className="mt-4 rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {excluindo ? 'Excluindo...' : 'Excluir minha conta'}
          </button>
        </article>
      </section>
    </div>
  )
}

export default Perfil