import { Link, useLocation } from 'react-router-dom'
import { Carregando, MensagemErro, Vazio } from '../../components/Feedback/Feedback'
import MissaoCard from '../../components/MissaoCard/MissaoCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useMissoes } from '../../hooks/useMissoes'
import { ROTAS } from '../../routes/rotas'
import type { EstadoAviso } from '../../types'

interface Conceito {
  titulo: string
  descricao: string
}

const conceitos: Conceito[] = [
  {
    titulo: 'Missões 🗒️',
    descricao:
      'Realize missões e desafios para avançar dentro da plataforma e manter sua rotina mais organizada.',
  },
  {
    titulo: 'Pontuação 💯',
    descricao:
      'Acumule pontos conforme realiza suas atividades e evolua dentro do sistema.',
  },
  {
    titulo: 'Ranking 🏆',
    descricao:
      'Compare seu desempenho e acompanhe sua evolução através do ranking da plataforma.',
  },
  {
    titulo: 'Níveis 📈',
    descricao:
      'Conforme você completa suas atividades, sua evolução permite alcançar novos níveis.',
  },
  {
    titulo: 'Recompensas 🎁',
    descricao:
      'O sistema de recompensas incentiva a continuidade e torna o progresso mais divertido.',
  },
  {
    titulo: 'Progresso 🚀',
    descricao:
      'Acompanhe seus resultados e visualize sua evolução ao longo da jornada.',
  },
]

function Solucao() {
  const { estado, recarregar } = useMissoes()
  const location = useLocation()
  const aviso = (location.state as EstadoAviso | null)?.aviso

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">
      <section className="mx-auto max-w-7xl">
        <SectionTitle
          titulo="Nossa Solução"
          descricao="A SoulUp utiliza a gamificação para transformar tarefas e objetivos em uma experiência mais dinâmica, motivadora e envolvente."
        />

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conceitos.map((conceito) => (
            <article
              key={conceito.titulo}
              className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg"
            >
              <h2 className="mb-4 text-2xl font-bold">{conceito.titulo}</h2>
              <p className="leading-relaxed">{conceito.descricao}</p>
            </article>
          ))}
        </div>

        <h2 className="mb-6 text-center text-3xl font-black md:text-4xl">
          Missões cadastradas
        </h2>

        {aviso && (
          <p
            role="status"
            className="mx-auto mb-6 max-w-xl rounded-lg bg-green-100 p-4 text-center font-semibold text-green-800"
          >
            {aviso}
          </p>
        )}

        <div className="mb-8 flex justify-center">
          <Link
            to={ROTAS.novaMissao}
            className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            + Nova missão
          </Link>
        </div>

        {estado.status === 'carregando' && (
          <Carregando texto="Carregando missões..." />
        )}

        {estado.status === 'erro' && (
          <MensagemErro mensagem={estado.mensagem} onTentarNovamente={recarregar} />
        )}

        {estado.status === 'sucesso' && estado.dados.length === 0 && (
          <Vazio mensagem="Nenhuma missão cadastrada ainda. Crie a primeira!" />
        )}

        {estado.status === 'sucesso' && estado.dados.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {estado.dados.map((missao) => (
              <MissaoCard key={missao.id} missao={missao} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Solucao