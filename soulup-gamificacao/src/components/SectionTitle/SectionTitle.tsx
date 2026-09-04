interface SectionTitleProps {
  titulo: string
  descricao?: string
}

function SectionTitle({ titulo, descricao }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-black md:text-6xl">
        {titulo}
      </h1>

      {descricao && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-xl">
          {descricao}
        </p>
      )}
    </div>
  )
}

export default SectionTitle