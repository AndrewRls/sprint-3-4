function Sobre() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">

      <section className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black md:text-6xl">
            Sobre a SoulUp
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-xl">
            Conheça melhor a SoulUp e entenda como nossa solução utiliza
            a gamificação para tornar a organização e o desenvolvimento
            pessoal mais motivadores.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">
              Quem somos?
            </h2>

            <p className="leading-relaxed">
              A SoulUp é uma solução voltada para produtividade,
              organização e desenvolvimento pessoal. A plataforma
              utiliza elementos de gamificação para transformar
              atividades do dia a dia em uma experiência mais
              dinâmica e envolvente.
            </p>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">
              Nosso objetivo
            </h2>

            <p className="leading-relaxed">
              Nosso objetivo é ajudar os usuários a manterem uma
              rotina mais organizada, reduzindo a procrastinação
              e incentivando a realização de tarefas e hábitos
              através de desafios, pontos, níveis e recompensas.
            </p>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">
              Gamificação
            </h2>

            <p className="leading-relaxed">
              A gamificação é utilizada para tornar o processo
              mais interativo. O usuário pode realizar missões,
              acumular pontos, subir de nível e acompanhar seu
              desempenho através do ranking.
            </p>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">
              Desenvolvimento pessoal
            </h2>

            <p className="leading-relaxed">
              A proposta da SoulUp é incentivar pequenas ações
              constantes que contribuam para a evolução pessoal,
              tornando o acompanhamento dos objetivos mais
              simples e motivador.
            </p>
          </article>

        </div>

      </section>

    </div>
  )
}

export default Sobre