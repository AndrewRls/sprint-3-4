interface CardProps {
  titulo: string
  descricao: string
  imagem: string
  emoji: string
}

function Card({ titulo, descricao, imagem, emoji }: CardProps) {
  return (
    <article className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-4 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl">

      <h3 className="mb-4 text-2xl font-black">
        {titulo} {emoji}
      </h3>

      <img
        src={imagem}
        alt={`Imagem representando ${titulo}`}
        className="mb-6 h-52 w-4/5 rounded-xl border border-black object-cover"
      />

      <p className="leading-relaxed">
        {descricao}
      </p>

    </article>
  )
}

export default Card