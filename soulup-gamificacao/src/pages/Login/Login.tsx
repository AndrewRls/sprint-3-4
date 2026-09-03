import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

interface LoginFormData {
  email: string
  senha: string
}

function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  function onSubmit(data: LoginFormData) {
    console.log('Dados do login:', data)

    // Como ainda não temos banco/API,
    // apenas simulamos o login.
    navigate('/solucao')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-xl md:p-10">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black">Login</h1>

          <p className="mt-3 text-gray-700">
            Entre na sua conta SoulUp
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

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

          {/* Botão */}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-700"
          >
            Entrar
          </button>

        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Ainda não possui uma conta?
          </p>

          <Link
            to="/cadastro"
            className="mt-2 inline-block font-bold text-purple-700 hover:underline"
          >
            Criar uma conta
          </Link>
        </div>

      </section>
    </div>
  )
}

export default Login