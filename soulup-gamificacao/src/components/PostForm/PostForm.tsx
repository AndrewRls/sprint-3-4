import { useForm, useWatch } from 'react-hook-form'
import Button from '../Button/Button'

const LIMITE = 280

interface PostFormData {
  conteudo: string
}

interface PostFormProps {
  enviando: boolean
  erro?: string
  onEnviar: (conteudo: string) => void
}

function PostForm({ enviando, erro, onEnviar }: PostFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostFormData>({ defaultValues: { conteudo: '' } })

  // Acompanha o texto digitado para mostrar o contador de caracteres
  const conteudo = useWatch({ control, name: 'conteudo' })

  return (
    <form
      onSubmit={handleSubmit((dados) => onEnviar(dados.conteudo.trim()))}
      className="space-y-5 rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-lg md:p-10"
    >
      <div>
        <label htmlFor="conteudo" className="mb-2 block font-bold">
          O que você quer compartilhar?
        </label>

        <textarea
          id="conteudo"
          rows={6}
          maxLength={LIMITE}
          placeholder="Escreva sua conquista, dica ou novidade..."
          className="w-full resize-y rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
          {...register('conteudo', {
            required: 'Escreva algo para publicar',
            validate: (valor) =>
              valor.trim().length > 0 || 'Escreva algo para publicar',
            maxLength: {
              value: LIMITE,
              message: `O post pode ter no máximo ${LIMITE} caracteres`,
            },
          })}
        />

        <p className="mt-2 text-right text-sm font-semibold">
          {conteudo.length}/{LIMITE}
        </p>

        {errors.conteudo && (
          <p className="mt-1 text-sm font-semibold text-red-600">
            {errors.conteudo.message}
          </p>
        )}
      </div>

      {erro && (
        <p
          role="alert"
          className="rounded-lg bg-red-100 p-4 text-center font-semibold text-red-800"
        >
          {erro}
        </p>
      )}

      <Button type="submit" disabled={enviando}>
        {enviando ? 'Publicando...' : 'Publicar'}
      </Button>
    </form>
  )
}

export default PostForm