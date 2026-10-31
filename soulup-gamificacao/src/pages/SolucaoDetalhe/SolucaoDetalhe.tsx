import { Link, useParams } from 'react-router-dom'
import { Carregando, MensagemErro } from '../../components/Feedback/Feedback'
import { useAuth } from '../../hooks/useAuth'
import { usePost } from '../../hooks/usePosts'
import { ROTAS } from '../../routes/rotas'

const classeFundo =
  'min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8'

function SolucaoDetalhe() {
  const { id = '' } = useParams<{ id: string }>()
  const { usuario } = useAuth()
  const { estado, recarregar } = usePost(id)

  if (estado.status === 'carregando') {
    return (
      <div className={classeFundo}>
        <Carregando texto="Carregando post..." />
      </div>
    )
  }

  if (estado.status === 'erro') {
    return (
      <div className={classeFundo}>
        <MensagemErro mensagem={estado.mensagem} onTentarNovamente={recarregar} />
        <div className="mt-6 text-center">
          <Link
            to={ROTAS.solucao}
            className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Voltar para o mural
          </Link>
        </div>
      </div>
    )
  }

  const post = estado.dados
  const inicial = (post.nomeAutor || '?').charAt(0).toUpperCase()
  const ehAutor = usuario !== null && usuario.cpf === post.cpfUsuario

  return (
    <div className={classeFundo}>
      <section className="mx-auto max-w-3xl">
        <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 shadow-xl md:p-12">
          <header className="mb-6 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white"
            >
              {inicial}
            </span>

            <div className="min-w-0">
              <h1 className="truncate text-2xl font-black md:text-4xl">
                {post.nomeAutor}
              </h1>
              <p className="text-sm font-semibold text-gray-700">
                Post #{post.idPost}
              </p>
            </div>
          </header>

          <p className="text-base leading-relaxed whitespace-pre-line md:text-xl [overflow-wrap:anywhere]">
            {post.conteudo}
          </p>

          {ehAutor && (
            <p className="mt-6 inline-block rounded-full bg-green-200 px-4 py-1 text-sm font-semibold text-green-900">
              Você é o autor deste post
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:justify-center">
            <Link
              to={ROTAS.solucao}
              className="rounded-lg border-2 border-purple-600 px-6 py-3 text-center font-bold text-purple-700 transition hover:bg-purple-100"
            >
              Voltar ao mural
            </Link>

            <Link
              to={ROTAS.novoPost}
              className="rounded-lg bg-purple-600 px-6 py-3 text-center font-bold text-white transition hover:bg-purple-700"
            >
              + Novo post
            </Link>
          </div>
        </article>
      </section>
    </div>
  )
}

export default SolucaoDetalhe