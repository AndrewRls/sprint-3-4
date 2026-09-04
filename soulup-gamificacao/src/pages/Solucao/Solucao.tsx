import { Link } from 'react-router-dom'

function Solucao() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">

      <section className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black md:text-6xl">
            Nossa Solução
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-xl">
            A SoulUp utiliza a gamificação para transformar tarefas e
            objetivos em uma experiência mais dinâmica, motivadora e
            envolvente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Missões 🗒️
            </h2>

            <p className="leading-relaxed">
              Realize missões e desafios para avançar dentro da
              plataforma e manter sua rotina mais organizada.
            </p>

            <Link
              to="/solucao/1"
              className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Ver detalhes
            </Link>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Pontuação 💯
            </h2>

            <p className="leading-relaxed">
              Acumule pontos conforme realiza suas atividades e
              evolua dentro do sistema.
            </p>

            <Link
              to="/solucao/2"
              className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Ver detalhes
            </Link>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Ranking 🏆
            </h2>

            <p className="leading-relaxed">
              Compare seu desempenho e acompanhe sua evolução
              através do ranking da plataforma.
            </p>

            <Link
              to="/solucao/3"
              className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Ver detalhes
            </Link>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Níveis 📈
            </h2>

            <p className="leading-relaxed">
              Conforme você completa suas atividades, sua evolução
              permite alcançar novos níveis.
            </p>

            <Link
              to="/solucao/4"
              className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Ver detalhes
            </Link>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Recompensas 🎁
            </h2>

            <p className="leading-relaxed">
              O sistema de recompensas incentiva a continuidade e
              torna o progresso mais divertido.
            </p>

            <Link
              to="/solucao/5"
              className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Ver detalhes
            </Link>
          </article>

          <article className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">
              Progresso 🚀
            </h2>

            <p className="leading-relaxed">
              Acompanhe seus resultados e visualize sua evolução
              ao longo da jornada.
            </p>

            <Link
              to="/solucao/6"
              className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
            >
              Ver detalhes
            </Link>
          </article>

        </div>

      </section>
    </div>
  )
}

export default Solucao