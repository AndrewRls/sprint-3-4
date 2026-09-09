import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'

interface CadastroFormData {
  nome: string
  email: string
  senha: string
  confirmarSenha: string
}

function Cadastro() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroFormData>()

  const senha = watch('senha')

  function onSubmit(data: CadastroFormData) {
    console.log('Dados do cadastro:', data)

    // Como ainda não temos banco/API,
    // apenas simulamos o cadastro.
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-xl md:p-10">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black">
            Criar conta
          </h1>

          <p className="mt-3 text-gray-700">
            Faça seu cadastro na SoulUp
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Nome */}
          <div>
            <label
              htmlFor="nome"
              className="mb-2 block font-bold"
            >
              Nome
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              {...register('nome', {
                required: 'O nome é obrigatório',
                minLength: {
                  value: 3,
                  message: 'O nome deve ter pelo menos 3 caracteres',
                },
              })}
              className="w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />

            {errors.nome && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {errors.nome.message}
              </p>
            )}
          </div>

          {/* E-mail */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-bold"
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: 'O e-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Digite um e-mail válido',
                },
              })}
              className="w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />

            {errors.email && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Senha */}
          <div>
            <label
              htmlFor="senha"
              className="mb-2 block font-bold"
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              {...register('senha', {
                required: 'A senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'A senha deve ter pelo menos 6 caracteres',
                },
              })}
              className="w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />

            {errors.senha && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {errors.senha.message}
              </p>
            )}
          </div>

          {/* Confirmar senha */}
          <div>
            <label
              htmlFor="confirmarSenha"
              className="mb-2 block font-bold"
            >
              Confirmar senha
            </label>

            <input
              id="confirmarSenha"
              type="password"
              placeholder="Digite a senha novamente"
              {...register('confirmarSenha', {
                required: 'Confirme sua senha',
                validate: (value) =>
                  value === senha || 'As senhas não coincidem',
              })}
              className="w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600"
            />

            {errors.confirmarSenha && (
              <p className="mt-2 text-sm font-semibold text-red-600">
                {errors.confirmarSenha.message}
              </p>
            )}
          </div>

          {/* Botão */}
          <Button type="submit">
            Cadastrar
          </Button>

        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Já possui uma conta?
          </p>

          <Link
            to="/login"
            className="mt-2 inline-block font-bold text-purple-700 hover:underline"
          >
            Fazer login
          </Link>
        </div>

      </section>
    </div>
  )
}

export default Cadastro