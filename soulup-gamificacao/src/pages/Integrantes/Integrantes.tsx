import bryan from '../../assets/imagens/img-05-bryan-foto.png'
import luis from '../../assets/imagens/img-06-luis-foto.png'
import andrew from '../../assets/imagens/img-07-andrew-foto.png'
import igor from '../../assets/imagens/img-08-igor-foto.jpg'
import github from '../../assets/imagens/img-10-github.png'
import linkedin from '../../assets/imagens/img-09-linkedin.png'
import SectionTitle from '../../components/SectionTitle/SectionTitle'


interface Integrante {
  nome: string
  cargo: string
  imagem: string
  github: string
  linkedin: string
}

const integrantes: Integrante[] = [
  {
    nome: 'Bryan',
    cargo: 'Desenvolvedor',
    imagem: bryan,
    github: 'https://github.com/BryanC0staDev',
    linkedin: 'https://www.linkedin.com/in/bryan-costa-silva/'
  },
  {
    nome: 'Luis',
    cargo: 'Desenvolvedor',
    imagem: luis,
    github: 'https://github.com/luishdev0',
    linkedin: 'https://www.linkedin.com/in/luis-rondao'
  },
  {
    nome: 'Andrew',
    cargo: 'Desenvolvedor',
    imagem: andrew,
    github: 'https://github.com/AndrewRls',
    linkedin: 'https://www.linkedin.com/in/andrew-rls'
  },
  {
    nome: 'Igor',
    cargo: 'Desenvolvedor',
    imagem: igor,
    github: 'https://github.com/igorblacconaro',
    linkedin: 'https://www.linkedin.com/in/igorblacconaro'
  },
]

function Integrantes() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">

      <section className="mx-auto max-w-6xl">

        <SectionTitle
          titulo="Integrantes"
          descricao="Conheça a equipe responsável pelo desenvolvimento da SoulUp."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {integrantes.map((integrante) => (
            <article
              key={integrante.nome}
              className="flex flex-col items-center rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={integrante.imagem}
                alt={`Foto de ${integrante.nome}`}
                className="mb-6 h-40 w-40 rounded-full border-2 border-blue-600 object-cover"
              />

              <h2 className="text-2xl font-bold">
                {integrante.nome}
              </h2>

              <p className="mt-2 text-base">
                {integrante.cargo}
              </p>

               
                <a href={integrante.github} target="_blank" rel="noopener noreferrer" className="mt-4 flex gap-4">
                  <img src={github} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                </a>
                 <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 flex gap-4">
                  <img src={linkedin} alt="linkedin" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                </a>
            </article>


          ))}

        </div>

      </section>

    </div>
  )
}

export default Integrantes