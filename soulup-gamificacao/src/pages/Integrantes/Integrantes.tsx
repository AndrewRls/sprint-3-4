import bryan from '../../assets/imagens/img-05-bryan-foto.png'
import luis from '../../assets/imagens/img-06-luis-foto.png'
import andrew from '../../assets/imagens/img-07-andrew-foto.png'
import igor from '../../assets/imagens/img-08-igor-foto.jpg'

interface Integrante {
  nome: string
  cargo: string
  imagem: string
}

const integrantes: Integrante[] = [
  {
    nome: 'Bryan',
    cargo: 'Desenvolvedor',
    imagem: bryan,
  },
  {
    nome: 'Luis',
    cargo: 'Desenvolvedor',
    imagem: luis,
  },
  {
    nome: 'Andrew',
    cargo: 'Desenvolvedor',
    imagem: andrew,
  },
  {
    nome: 'Igor',
    cargo: 'Desenvolvedor',
    imagem: igor,
  },
]

function Integrantes() {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">

      <section className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black md:text-6xl">
            Integrantes
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-xl">
            Conheça a equipe responsável pelo desenvolvimento da
            SoulUp.
          </p>
        </div>

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
            </article>
          ))}

        </div>

      </section>

    </div>
  )
}

export default Integrantes