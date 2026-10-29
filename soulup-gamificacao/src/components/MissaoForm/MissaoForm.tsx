import { useForm } from 'react-hook-form'
import Button from '../Button/Button'
import type { NovaMissao } from '../../types'

interface MissaoFormProps {
  valoresIniciais?: NovaMissao
  textoBotao: string
  enviando: boolean
  erro?: string
  onEnviar: (dados: NovaMissao) => void
}

const valoresPadrao: NovaMissao = {
  titulo: '',
  descricao: '',
  pontos: 10,
  dificuldade: 'FACIL',
  concluida: false,
}

const classeInput =
  'w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600'

function MissaoForm({
  valoresIniciais = valoresPadrao,
  textoBotao,
  enviando,
  erro,
  onEnviar,
}: MissaoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NovaMissao>({ defaultValues: valoresIniciais })

  return (
    <form
      onSubmit={handleSubmit(onEnviar)}
      className="space-y-5 rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-lg md:p-10"
    >
      <div>
        <label htmlFor="titulo" className="mb-2 block font-bold">
          Título
        </label>
        <input
          id="titulo"
          type="text"
          className={classeInput}
          {...register('titulo', {
            required: 'O título é obrigatório',
            minLength: { value: 3, message: 'Mínimo de 3 caracteres' },
          })}
        />
        {errors.titulo && (
          <p className="mt-2 text-sm font-semibold text-red-600">
            {errors.titulo.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="descricao" className="mb-2 block font-bold">
          Descrição
        </label>
        <textarea
          id="descricao"
          rows={4}
          className={`${classeInput} resize-y`}
          {...register('descricao', {
            required: 'A descrição é obrigatória',
          })}
        />
        {errors.descricao && (
          <p className="mt-2 text-sm font-semibold text-red-600">
            {errors.descricao.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pontos" className="mb-2 block font-bold">
            Pontos
          </label>
          <input
            id="pontos"
            type="number"
            className={classeInput}
            {...register('pontos', {
              valueAsNumber: true,
              required: 'Informe os pontos',
              min: { value: 1, message: 'Mínimo de 1 ponto' },
            })}
          />
          {errors.pontos && (
            <p className="mt-2 text-sm font-semibold text-red-600">
              {errors.pontos.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="dificuldade" className="mb-2 block font-bold">
            Dificuldade
          </label>
          <select
            id="dificuldade"
            className={classeInput}
            {...register('dificuldade')}
          >
            <option value="FACIL">Fácil</option>
            <option value="MEDIA">Média</option>
            <option value="DIFICIL">Difícil</option>
          </select>
        </div>
      </div>

      <label className="flex items-center gap-3 font-bold">
        <input
          type="checkbox"
          className="h-5 w-5"
          {...register('concluida')}
        />
        Missão concluída
      </label>

      {erro && (
        <p
          role="alert"
          className="rounded-lg bg-red-100 p-4 text-center font-semibold text-red-800"
        >
          {erro}
        </p>
      )}

      <Button type="submit" disabled={enviando}>
        {enviando ? 'Salvando...' : textoBotao}
      </Button>
    </form>
  )
}

export default MissaoForm