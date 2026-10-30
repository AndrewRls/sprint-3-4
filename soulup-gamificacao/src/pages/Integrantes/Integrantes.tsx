import bryan from '../../assets/imagens/img-05-bryan-foto.png'
import luis from '../../assets/imagens/img-06-luis-foto.png'
import andrew from '../../assets/imagens/img-07-andrew-foto.png'
import igor from '../../assets/imagens/img-08-igor-foto.jpg'
import github from '../../assets/imagens/img-10-github.png'
import linkedin from '../../assets/imagens/img-09-linkedin.png'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

interface Integrante {
  nome: string
  rm: string
  turma: string
  cargo: string
  imagem: string
  github: string
  linkedin: string
}

// ⚠️ TROQUE pela turma real do grupo (ex.: '1TDSPZ')
const TURMA = '1TDSPF'

const integrantes: Integrante[] = [
  {
    nome: 'Bryan Costa Silva',
    rm: '569439',
    turma: TURMA,
    cargo: 'Desenvolvedor',
    imagem: bryan,
    github: 'https://github.com/BryanC0staDev',
    linkedin: 'https://www.linkedin.com/in/bryan-costa-silva/',
  },
  {
    nome: 'Luis Henrique Rondão Mendonça',
    rm: '569797',
    turma: TURMA,
    cargo: 'Desenvolvedor',
    imagem: luis,
    github: 'https://github.com/luishdev0',
    linkedin: 'https://www.linkedin.com/in/luis-rondao',
  },
  {
    nome: 'Andrew Rodrigues Lima da Silva',
    rm: '573777',
    turma: TURMA,
    cargo: 'Desenvolvedor',
    imagem: andrew,
    github: 'https://github.com/AndrewRls',
    linkedin: 'https://www.linkedin.com/in/andrew-rls',
  },
  {
    nome: 'Igor Blacconaro Santos',
    rm: '572033',
    turma: TURMA,
    cargo: 'Desenvolvedor',
    imagem: igor,
    github: 'https://github.com/igorblacconaro',
    linkedin: 'https://www.linkedin.com/in/igorblacconaro',
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {integrantes.map((integrante) => (
            <article
              key={integrante.rm}
              className="flex flex-col items-center rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={integrante.imagem}
                alt={`Foto de ${integrante.nome}`}
                className="mb-6 h-40 w-40 rounded-full border-2 border-blue-600 object-cover"
              />

              <h2 className="text-xl font-bold md:text-2xl">{integrante.nome}</h2>

              <p className="mt-2 text-base">{integrante.cargo}</p>

              <p className="mt-1 text-sm font-semibold">
                RM {integrante.rm} • Turma {integrante.turma}
              </p>

              <div className="mt-4 flex gap-4">
                <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src={github}
                    alt={`GitHub de ${integrante.nome}`}
                    className="h-8 w-8 transition-opacity hover:opacity-80"
                  />
                </a>
                <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt={`LinkedIn de ${integrante.nome}`}
                    className="h-8 w-8 transition-opacity hover:opacity-80"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Integrantes