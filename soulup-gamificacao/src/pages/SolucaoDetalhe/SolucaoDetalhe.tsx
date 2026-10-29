import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Carregando, MensagemErro } from '../../components/Feedback/Feedback'
import { useAuth } from '../../hooks/useAuth'
import { useMissao } from '../../hooks/useMissoes'
import { ROTAS } from '../../routes/rotas'
import { missaoService } from '../../services/missaoService'
import type { EstadoAviso, EstadoLogin } from '../../types'
import { rotularDificuldade } from '../../utils/dificuldade'

const classeFundo =
  'min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8'

function SolucaoDetalhe() {
  const { id = '' } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { usuario } = useAuth()
  const { estado, recarregar } = useMissao(id)
  const [excluindo, setExcluindo] = useState(false)
  const [erroExclusao, setErroExclusao] = useState('')

  async function excluir() {
    if (!usuario) {
      const login: EstadoLogin = {
        mensagem: 'Faça login para excluir uma missão.',
        origem: ROTAS.detalheMissao(id),
      }
      navigate(ROTAS.login, { state: login })
      return
    }

    if (!window.confirm('Tem certeza que deseja excluir esta missão?')) return

    setExcluindo(true)
    setErroExclusao('')

    try {
      await missaoService.excluir(id)
      const aviso: EstadoAviso = { aviso: 'Missão excluída com sucesso!' }
      navigate(ROTAS.solucao, { state: aviso })
    } catch (erro) {
      setErroExclusao(
        erro instanceof Error ? erro.message : 'Não foi possível excluir.',
      )
      setExcluindo(false)
    }
  }

  if (estado.status === 'carregando') {
    return (
      <div className={classeFundo}>
        <Carregando texto="Carregando missão..." />
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
            Voltar para missões
          </Link>
        </div>
      </div>
    )
  }

  const missao = estado.dados

  return (
    <div className={classeFundo}>
      <section className="mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 text-center shadow-xl md:p-12">
          <h1 className="text-4xl font-black md:text-5xl">{missao.titulo}</h1>

          <p className="mt-6 text-base leading-relaxed md:text-xl">
            {missao.descricao}
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-3 font-semibold">
            <li className="rounded-full bg-purple-600 px-4 py-1 text-white">
              {missao.pontos} pontos
            </li>
            <li className="rounded-full bg-blue-950 px-4 py-1 text-white">
              Dificuldade: {rotularDificuldade(missao.dificuldade)}
            </li>
            <li
              className={`rounded-full px-4 py-1 ${
                missao.concluida
                  ? 'bg-green-200 text-green-900'
                  : 'bg-yellow-200 text-yellow-900'
              }`}
            >
              {missao.concluida ? 'Concluída' : 'Pendente'}
            </li>
          </ul>

          {erroExclusao && (
            <p
              role="alert"
              className="mt-6 rounded-lg bg-red-100 p-4 font-semibold text-red-800"
            >
              {erroExclusao}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:justify-center">
            <Link
              to={ROTAS.editarMissao(missao.id)}
              className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Editar
            </Link>

            <button
              type="button"
              onClick={excluir}
              disabled={excluindo}
              className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 disabled:opacity-60"
            >
              {excluindo ? 'Excluindo...' : 'Excluir'}
            </button>

            <Link
              to={ROTAS.solucao}
              className="rounded-lg border-2 border-purple-600 px-6 py-3 font-bold text-purple-700 transition hover:bg-purple-100"
            >
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolucaoDetalhe