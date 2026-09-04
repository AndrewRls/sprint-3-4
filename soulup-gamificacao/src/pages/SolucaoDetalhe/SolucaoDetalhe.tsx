import { Link, useParams } from 'react-router-dom'

interface Solucao {
  titulo: string
  descricao: string
}

const solucoes: Record<string, Solucao> = {
  '1': {
    titulo: 'Missões',
    descricao:
      'As missões são desafios que ajudam o usuário a manter o foco, realizar suas atividades e acompanhar seu progresso dentro da SoulUp.',
  },
  '2': {
    titulo: 'Pontuação',
    descricao:
      'A pontuação é obtida conforme o usuário realiza atividades e missões, permitindo acompanhar sua evolução dentro da plataforma.',
  },
  '3': {
    titulo: 'Ranking',
    descricao:
      'O ranking permite comparar o desempenho dos usuários e estimula uma competição saudável.',
  },
  '4': {
    titulo: 'Níveis',
    descricao:
      'Os níveis representam a evolução do usuário conforme ele acumula pontos e completa suas atividades.',
  },
  '5': {
    titulo: 'Recompensas',
    descricao:
      'As recompensas incentivam o usuário a continuar realizando suas atividades e alcançando seus objetivos.',
  },
  '6': {
    titulo: 'Progresso',
    descricao:
      'O acompanhamento do progresso permite visualizar a evolução do usuário ao longo de sua jornada.',
  },
}

function SolucaoDetalhe() {
  const { id } = useParams<{ id: string }>()

  const solucao = id ? solucoes[id] : undefined

  if (!solucao) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4">
        <section className="w-full max-w-2xl rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 text-center shadow-xl">
          <h1 className="text-4xl font-black">Solução não encontrada</h1>

          <p className="mt-4">
            Não encontramos uma solução para o identificador informado.
          </p>

          <Link
            to="/solucao"
            className="mt-6 inline-block rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Voltar para soluções
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">
      <section className="mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 text-center shadow-xl md:p-12">
          <h1 className="text-4xl font-black md:text-5xl">
            {solucao.titulo}
          </h1>

          <p className="mt-6 text-base leading-relaxed md:text-xl">
            {solucao.descricao}
          </p>

          <Link
            to="/solucao"
            className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Voltar para soluções
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SolucaoDetalhe