import ranking from '../../assets/imagens/img-04-ranking.jpg'
import missoes from '../../assets/imagens/img-16-business.jpg'
import pontuacao from '../../assets/imagens/img-12-pontuacao.jpg'
import login from '../../assets/imagens/img-14-login.jpg'
import dadosPessoais from '../../assets/imagens/img-15-dados-pessoais.jpg'
import fundoSoulUp from '../../assets/imagens/fundo_SoulUp.png'
import Card from '../../components/Card/Card'


function Home() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf]">

      {/* Seção inicial */}
      <section
        className="min-h-[95vh] rounded-[20px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fundoSoulUp})`,
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

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">

  <Card
    titulo="Ranking"
    emoji="🥇"
    imagem={ranking}
    descricao="O ranking permite acompanhar o desempenho dos usuários e estimula uma competição saudável."
  />

  <Card
    titulo="Missões"
    emoji="🗒️"
    imagem={missoes}
    descricao="As missões apresentam desafios que ajudam o usuário a manter o foco e acompanhar seu progresso."
  />

  <Card
    titulo="Pontos"
    emoji="➕💯"
    imagem={pontuacao}
    descricao="Os pontos são conquistados conforme o usuário realiza atividades, permitindo avançar de nível e conquistar recompensas."
  />

  <Card
    titulo="Login"
    emoji="🔐"
    imagem={login}
    descricao="O sistema permite um acesso rápido e seguro à plataforma."
  />

  <Card
    titulo="Dados Pessoais"
    emoji="🎲👨‍🦲"
    imagem={dadosPessoais}
    descricao="O usuário pode gerenciar suas informações pessoais de maneira segura e utilizar esses dados para personalizar sua experiência."
  />

</div>

    </div>
  )
}

export default Home