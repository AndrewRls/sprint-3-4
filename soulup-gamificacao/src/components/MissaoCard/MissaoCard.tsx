import { Link } from 'react-router-dom'
import { ROTAS } from '../../routes/rotas'
import { rotularDificuldade } from '../../utils/dificuldade'
import type { Missao } from '../../types'

interface MissaoCardProps {
  missao: Missao
}

function MissaoCard({ missao }: MissaoCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="mb-2 text-2xl font-bold">{missao.titulo}</h2>

      <p className="mb-4 flex-1 leading-relaxed">{missao.descricao}</p>

      <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold">
        <span className="rounded-full bg-purple-600 px-3 py-1 text-white">
          {missao.pontos} pts
        </span>
        <span className="rounded-full bg-blue-950 px-3 py-1 text-white">
          {rotularDificuldade(missao.dificuldade)}
        </span>
        <span
          className={`rounded-full px-3 py-1 ${
            missao.concluida
              ? 'bg-green-200 text-green-900'
              : 'bg-yellow-200 text-yellow-900'
          }`}
        >
          {missao.concluida ? 'Concluída' : 'Pendente'}
        </span>
      </div>

      <Link
        to={ROTAS.detalheMissao(missao.id)}
        className="inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
      >
        Ver detalhes
      </Link>
    </article>
  )
}

export default MissaoCard