import { Link } from 'react-router-dom'
import { ROTAS } from '../../routes/rotas'

function NaoEncontrado() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4">
      <section className="w-full max-w-2xl rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-8 text-center shadow-xl">
        <h1 className="text-5xl font-black">404</h1>
        <p className="mt-4 text-lg">
          Ops! A página que você procura não existe ou foi movida.
        </p>
        <Link
          to={ROTAS.home}
          className="mt-6 inline-block rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
        >
          Voltar para o início
        </Link>
      </section>
    </div>
  )
}

export default NaoEncontrado