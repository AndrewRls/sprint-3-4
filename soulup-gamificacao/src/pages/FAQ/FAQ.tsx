import { useState } from 'react'

interface Pergunta {
  pergunta: string
  resposta: string
}

const perguntas: Pergunta[] = [
  {
    pergunta: 'O que é a SoulUp?',
    resposta:
      'A SoulUp é uma plataforma que utiliza gamificação para ajudar na produtividade, organização e desenvolvimento pessoal.',
  },
  {
    pergunta: 'Como funciona a gamificação?',
    resposta:
      'A plataforma utiliza elementos como missões, pontos, níveis, rankings e recompensas para tornar a realização de atividades mais dinâmica e motivadora.',
  },
  {
    pergunta: 'O que são as missões?',
    resposta:
      'As missões são atividades e desafios que o usuário pode realizar para avançar dentro da plataforma e acompanhar seu progresso.',
  },
  {
    pergunta: 'Como funciona a pontuação?',
    resposta:
      'O usuário acumula pontos conforme realiza atividades e missões. A pontuação representa seu progresso dentro da plataforma.',
  },
  {
    pergunta: 'Existe um ranking?',
    resposta:
      'Sim. O ranking permite acompanhar o desempenho dos usuários e estimula uma competição saudável.',
  },
  {
    pergunta: 'Meus dados ficam protegidos?',
    resposta:
      'A SoulUp busca utilizar as informações dos usuários de maneira segura, permitindo o gerenciamento dos dados pessoais dentro da plataforma.',
  },
]

function FAQ() {
  const [aberta, setAberta] = useState<number | null>(null)

  function alternarPergunta(index: number) {
    if (aberta === index) {
      setAberta(null)
    } else {
      setAberta(index)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">

      <section className="mx-auto max-w-4xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black md:text-6xl">
            FAQ
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-xl">
            Encontre respostas para as principais dúvidas sobre a
            SoulUp.
          </p>
        </div>

        <div className="flex flex-col gap-4">

          {perguntas.map((item, index) => (
            <div
              key={item.pergunta}
              className="overflow-hidden rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] shadow-md"
            >

              <button
                type="button"
                onClick={() => alternarPergunta(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold transition hover:bg-[#9ceceb]"
              >
                <span>{item.pergunta}</span>

                <span className="text-2xl">
                  {aberta === index ? '−' : '+'}
                </span>
              </button>

              {aberta === index && (
                <div className="border-t border-blue-600 px-5 py-4">
                  <p className="leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default FAQ