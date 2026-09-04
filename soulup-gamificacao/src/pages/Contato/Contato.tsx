import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

function Contato() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">

      <section className="mx-auto max-w-3xl">

        <SectionTitle
          titulo="Entre em Contato"
          descricao="Tem alguma dúvida, sugestão ou deseja saber mais sobre a SoulUp? Envie uma mensagem para nossa equipe."
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-lg md:p-10"
        >

          <div className="mb-6">
            <label
              htmlFor="nome"
              className="mb-2 block font-bold"
            >
              Nome
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Digite seu nome"
              className="w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block font-bold"
            >
              E-mail
            </label>

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Digite seu e-mail"
              className="w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="mensagem"
              className="mb-2 block font-bold"
            >
              Mensagem
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={6}
              placeholder="Digite sua mensagem"
              className="w-full resize-y rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Enviar mensagem
          </button>

          {enviado && (
            <p className="mt-5 rounded-lg bg-green-100 p-4 text-center font-semibold text-green-800">
              Mensagem enviada com sucesso!
            </p>
          )}

        </form>

      </section>

    </div>
  )
}

export default Contato