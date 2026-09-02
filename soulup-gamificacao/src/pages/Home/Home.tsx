import ranking from '../../assets/imagens/img-04-ranking.jpg'
import missoes from '../../assets/imagens/img-16-business.jpg'
import pontuacao from '../../assets/imagens/img-12-pontuacao.jpg'
import login from '../../assets/imagens/img-14-login.jpg'
import dadosPessoais from '../../assets/imagens/img-15-dados-pessoais.jpg'
import fundoSoulUp from '../../assets/imagens/fundo_SoulUp.png'
function Home() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf]">

      {/* Seção inicial */}
      <section
        className="min-h-[95vh] rounded-[20px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/imagens/fundo_SoulUp.png')",
        }}
      >

        {/* Título */}
        <div className="flex min-h-[330px] flex-col items-center justify-center px-[8%] py-[60px] text-center">

          <h1 className="mb-4 text-5xl font-black md:text-6xl">
            Soul-UP
          </h1>

          <p className="text-lg md:text-xl">
            Sempre em busca da melhor maneira de você economizar
          </p>

        </div>

        {/* Chamada */}
        <div className="flex items-start justify-center px-4 py-8">

          <div className="w-full max-w-3xl rounded-[20px] border-2 border-dashed border-[#0a3fec] bg-[#12c9d6cc] p-6 shadow-[1rem_1rem_0.5rem_rgba(0,0,0,0.3)] md:p-12">

            <h2 className="mb-6 text-3xl font-black md:text-5xl">
              GAMIFICAÇÃO
            </h2>

            <p className="text-base leading-relaxed md:text-xl">
              Na SoulUp, transformamos a experiência digital em algo
              envolvente e memorável. Nossa solução de gamificação foi
              desenvolvida para aumentar o engajamento, motivar ações e
              fortalecer a conexão entre sua marca e seus usuários. Com
              mecânicas inteligentes e personalizáveis, ajudamos você a
              tornar cada interação mais dinâmica, divertida e eficiente.
            </p>

          </div>

        </div>

      </section>

      {/* Cards */}
      <section className="flex flex-col gap-12 px-4 py-16 md:px-8">

        {/* Primeira linha */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-around">

          {/* Ranking */}
          <article className="flex min-h-[40rem] w-full max-w-[420px] flex-col items-center justify-center rounded-[20px] border-2 border-blue-600 bg-[#b1f8f6] p-4 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-2xl">

            <div className="mb-8 flex w-[80%] items-center justify-center rounded-[10px] border border-black bg-[#c5fdfd] p-5">
              <h2 className="text-2xl font-bold">
                Ranking 🥇
              </h2>
            </div>

            <img
              src={ranking}
              alt="Imagem representativa de primeiro e segundo lugar"
              className="mb-3 h-auto max-h-[200px] w-[80%] rounded-[10px] border border-black object-cover"
            />

            <p className="px-4 text-base leading-relaxed">
              Acompanhe sua posição e compare seu desempenho com outros
              usuários. O ranking estimula a competitividade saudável e
              incentiva a evolução contínua dentro da plataforma.
            </p>

          </article>

          {/* Missões */}
          <article className="flex min-h-[40rem] w-full max-w-[420px] flex-col items-center justify-center rounded-[20px] border-2 border-blue-600 bg-[#b1f8f6] p-4 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-2xl">

            <div className="mb-8 flex w-[80%] items-center justify-center rounded-[10px] border border-black bg-[#c5fdfd] p-5">
              <h2 className="text-2xl font-bold">
                Missões 🗒️
              </h2>
            </div>

            <img
              src={missoes}
              alt="Imagem representativa das missões"
              className="mb-3 h-auto max-h-[200px] w-[80%] rounded-[10px] border border-black object-cover"
            />

            <p className="px-4 text-base leading-relaxed">
              Complete desafios e atividades propostas para avançar na
              jornada. As missões são pensadas para engajar, orientar ações
              e recompensar o progresso de forma dinâmica.
            </p>

          </article>

          {/* Pontos */}
          <article className="flex min-h-[40rem] w-full max-w-[420px] flex-col items-center justify-center rounded-[20px] border-2 border-blue-600 bg-[#b1f8f6] p-4 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-2xl">

            <div className="mb-8 flex w-[80%] items-center justify-center rounded-[10px] border border-black bg-[#c5fdfd] p-5">
              <h2 className="text-2xl font-bold">
                Pontos ➕💯
              </h2>
            </div>

            <img
              src={pontuacao}
              alt="Imagem representativa da pontuação"
              className="mb-3 h-auto max-h-[200px] w-[80%] rounded-[10px] border border-black object-cover"
            />

            <p className="px-4 text-base leading-relaxed">
              Acumule pontos a cada interação realizada. Eles representam
              seu desempenho e podem ser utilizados para desbloquear
              benefícios, recompensas ou novos níveis.
            </p>

          </article>

        </div>

        {/* Segunda linha */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">

          {/* Login */}
          <article className="flex min-h-[40rem] w-full max-w-[420px] flex-col items-center justify-center rounded-[20px] border-2 border-blue-600 bg-[#b1f8f6] p-4 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-2xl">

            <div className="mb-8 flex w-[80%] items-center justify-center rounded-[10px] border border-black bg-[#c5fdfd] p-5">
              <h2 className="text-2xl font-bold">
                Login 🔐
              </h2>
            </div>

            <img
              src={login}
              alt="Imagem representativa do login"
              className="mb-3 h-auto max-h-[200px] w-[80%] rounded-[10px] border border-black object-cover"
            />

            <p className="px-4 text-base leading-relaxed">
              Faça seu acesso de forma rápida e segura para acompanhar seu
              progresso, participar das atividades e aproveitar todos os
              recursos disponíveis.
            </p>

          </article>

          {/* Dados pessoais */}
          <article className="flex min-h-[40rem] w-full max-w-[420px] flex-col items-center justify-center rounded-[20px] border-2 border-blue-600 bg-[#b1f8f6] p-4 text-center shadow-md transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-2xl">

            <div className="mb-8 flex w-[80%] items-center justify-center rounded-[10px] border border-black bg-[#c5fdfd] p-5">
              <h2 className="text-2xl font-bold">
                Dados Pessoais 🎲👨‍🦲
              </h2>
            </div>

            <img
              src={dadosPessoais}
              alt="Imagem representativa dos dados pessoais"
              className="mb-3 h-auto max-h-[200px] w-[80%] rounded-[10px] border border-black object-cover"
            />

            <p className="px-4 text-base leading-relaxed">
              Gerencie suas informações com total controle e segurança.
              Seus dados são protegidos e utilizados apenas para
              personalizar sua experiência na plataforma.
            </p>

          </article>

        </div>

      </section>

    </div>
  )
}

export default Home