import { Carregando, MensagemErro, Vazio } from '../../components/Feedback/Feedback'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useAuth } from '../../hooks/useAuth'
import { useRanking } from '../../hooks/useRanking'
import { calcularNivel, estiloNivel } from '../../utils/nivel'

const medalhas = ['🥇', '🥈', '🥉']

function Ranking() {
  const { estado, recarregar } = useRanking()
  const { usuario } = useAuth()

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">
      <section className="mx-auto max-w-4xl">
        <SectionTitle
          titulo="Ranking 🏆"
          descricao="Os usuários da SoulUp com mais pontos. Complete desafios e suba de posição!"
        />

        {estado.status === 'carregando' && (
          <Carregando texto="Carregando ranking... na primeira vez o servidor pode levar até 1 minuto para acordar." />
        )}

        {estado.status === 'erro' && (
          <MensagemErro mensagem={estado.mensagem} onTentarNovamente={recarregar} />
        )}

        {estado.status === 'sucesso' && estado.dados.length === 0 && (
          <Vazio mensagem="O ranking ainda está vazio." />
        )}

        {estado.status === 'sucesso' && estado.dados.length > 0 && (
          <ol className="space-y-4">
            {[...estado.dados]
              .sort((a, b) => b.pontos - a.pontos)
              .map((pessoa, indice) => {
                const nivel = calcularNivel(pessoa.pontos)
                const souEu = usuario !== null && usuario.cpf === pessoa.cpf

                return (
                  <li
                    key={pessoa.cpf}
                    className={`flex flex-col gap-3 rounded-2xl border-2 p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between ${
                      souEu
                        ? 'border-purple-600 bg-white'
                        : 'border-blue-600 bg-[#b1f8f6]'
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="w-12 shrink-0 text-center text-2xl font-black">
                        {medalhas[indice] ?? `${indice + 1}º`}
                      </span>

                      <div className="min-w-0">
                        <h2 className="truncate text-xl font-bold">
                          {pessoa.apelido || pessoa.nome}
                          {souEu && (
                            <span className="ml-2 rounded-full bg-purple-600 px-2 py-0.5 text-xs font-bold text-white">
                              Você
                            </span>
                          )}
                        </h2>

                        <p className="text-sm text-gray-700">
                          {pessoa.qntPosts} posts • {pessoa.curtidas} curtidas •{' '}
                          {pessoa.seguidores} seguidores
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-bold sm:shrink-0">
                      <span className="rounded-full bg-purple-600 px-4 py-1 text-white">
                        {pessoa.pontos} pts
                      </span>
                      <span
                        className={`rounded-full px-4 py-1 ${estiloNivel[nivel]}`}
                      >
                        {nivel}
                      </span>
                    </div>
                  </li>
                )
              })}
          </ol>
        )}
      </section>
    </div>
  )
}

export default Ranking