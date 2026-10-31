import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useAuth } from '../../hooks/useAuth'
import { ROTAS } from '../../routes/rotas'
import { usuarioService } from '../../services/usuarioService'
import type { NovoUsuario } from '../../types'

interface CadastroFormData {
  nome: string
  cpf: string
  apelido: string
  email: string
  sexo: string
  idade: number
  senha: string
  confirmarSenha: string
  cep: string
  logradouro: string
  numero: string
  bairro: string
  localidade: string
  estado: string
}

const classeInput =
  'w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-blue-600'

interface CampoProps {
  id: string
  rotulo: string
  erro?: string
  children: ReactNode
}

// Rótulo + campo + mensagem de erro (evita repetir o mesmo bloco 14 vezes)
function Campo({ id, rotulo, erro, children }: CampoProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-bold">
        {rotulo}
      </label>
      {children}
      {erro && (
        <p className="mt-2 text-sm font-semibold text-red-600">{erro}</p>
      )}
    </div>
  )
}

function Cadastro() {
  const navigate = useNavigate()
  const { entrar } = useAuth()
  const [erroCadastro, setErroCadastro] = useState('')
  const [enviando, setEnviando] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<CadastroFormData>({ defaultValues: { sexo: '' } })

  async function onSubmit(data: CadastroFormData) {
    setEnviando(true)
    setErroCadastro('')

    const novo: NovoUsuario = {
      nome: data.nome.trim(),
      cpf: data.cpf,
      apelido: data.apelido.trim(),
      email: data.email.trim(),
      sexo: data.sexo,
      idade: data.idade,
      senha: data.senha,
      // O back-end exige os contadores no JSON, mesmo zerados
      pontos: 0,
      curtidas: 0,
      qntPosts: 0,
      seguidores: 0,
      seguindo: 0,
      endereco: {
        cep: data.cep,
        logradouro: data.logradouro.trim(),
        numero: data.numero.trim(),
        bairro: data.bairro.trim(),
        localidade: data.localidade.trim(),
        estado: data.estado.trim().toUpperCase(),
      },
    }

    try {
      await usuarioService.cadastrar(novo)
    } catch (erro) {
      setErroCadastro(
        erro instanceof Error ? erro.message : 'Não foi possível cadastrar.',
      )
      setEnviando(false)
      return
    }

    // A API responde 201 mesmo quando o banco recusa o cadastro.
    // Entrar logo em seguida confirma que a conta realmente existe.
    try {
      await entrar({ email: novo.email, senha: novo.senha })
      navigate(ROTAS.solucao, { replace: true })
    } catch {
      setErroCadastro(
        'Não foi possível concluir o cadastro. Verifique se o CPF ou o e-mail já estão cadastrados.',
      )
      setEnviando(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10">
      <section className="w-full max-w-2xl rounded-2xl border-2 border-blue-600 bg-[#b1f8f6] p-6 shadow-xl md:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black">Criar conta</h1>

          <p className="mt-3 text-gray-700">Faça seu cadastro na SoulUp</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <h2 className="text-xl font-black">Dados pessoais</h2>

          <Campo id="nome" rotulo="Nome" erro={errors.nome?.message}>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              className={classeInput}
              {...register('nome', {
                required: 'O nome é obrigatório',
                minLength: {
                  value: 3,
                  message: 'O nome deve ter pelo menos 3 caracteres',
                },
              })}
            />
          </Campo>

          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="cpf" rotulo="CPF" erro={errors.cpf?.message}>
              <input
                id="cpf"
                type="text"
                inputMode="numeric"
                maxLength={11}
                placeholder="Somente números"
                className={classeInput}
                {...register('cpf', {
                  required: 'O CPF é obrigatório',
                  pattern: {
                    value: /^\d{11}$/,
                    message: 'O CPF deve ter 11 números (sem pontos ou traço)',
                  },
                })}
              />
            </Campo>

            <Campo id="apelido" rotulo="Apelido" erro={errors.apelido?.message}>
              <input
                id="apelido"
                type="text"
                placeholder="Como quer ser chamado"
                className={classeInput}
                {...register('apelido', {
                  required: 'O apelido é obrigatório',
                })}
              />
            </Campo>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="sexo" rotulo="Sexo" erro={errors.sexo?.message}>
              <select
                id="sexo"
                className={classeInput}
                {...register('sexo', { required: 'Selecione uma opção' })}
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </Campo>

            <Campo id="idade" rotulo="Idade" erro={errors.idade?.message}>
              <input
                id="idade"
                type="number"
                placeholder="Sua idade"
                className={classeInput}
                {...register('idade', {
                  valueAsNumber: true,
                  required: 'Informe sua idade',
                  min: { value: 1, message: 'Idade inválida' },
                  max: { value: 120, message: 'Idade inválida' },
                })}
              />
            </Campo>
          </div>

          <h2 className="pt-2 text-xl font-black">Endereço</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="cep" rotulo="CEP" erro={errors.cep?.message}>
              <input
                id="cep"
                type="text"
                inputMode="numeric"
                maxLength={8}
                placeholder="Somente números"
                className={classeInput}
                {...register('cep', {
                  required: 'O CEP é obrigatório',
                  pattern: {
                    value: /^\d{8}$/,
                    message: 'O CEP deve ter 8 números',
                  },
                })}
              />
            </Campo>

            <Campo id="numero" rotulo="Número" erro={errors.numero?.message}>
              <input
                id="numero"
                type="text"
                placeholder="Número da casa"
                className={classeInput}
                {...register('numero', { required: 'Informe o número' })}
              />
            </Campo>
          </div>

          <Campo
            id="logradouro"
            rotulo="Rua"
            erro={errors.logradouro?.message}
          >
            <input
              id="logradouro"
              type="text"
              placeholder="Nome da rua"
              className={classeInput}
              {...register('logradouro', { required: 'Informe a rua' })}
            />
          </Campo>

          <div className="grid gap-5 sm:grid-cols-3">
            <Campo id="bairro" rotulo="Bairro" erro={errors.bairro?.message}>
              <input
                id="bairro"
                type="text"
                className={classeInput}
                {...register('bairro', { required: 'Informe o bairro' })}
              />
            </Campo>

            <Campo
              id="localidade"
              rotulo="Cidade"
              erro={errors.localidade?.message}
            >
              <input
                id="localidade"
                type="text"
                className={classeInput}
                {...register('localidade', { required: 'Informe a cidade' })}
              />
            </Campo>

            <Campo id="estado" rotulo="Estado (UF)" erro={errors.estado?.message}>
              <input
                id="estado"
                type="text"
                maxLength={2}
                placeholder="SP"
                className={`${classeInput} uppercase`}
                {...register('estado', {
                  required: 'Informe o estado',
                  pattern: {
                    value: /^[A-Za-z]{2}$/,
                    message: 'Use a sigla com 2 letras',
                  },
                })}
              />
            </Campo>
          </div>

          <h2 className="pt-2 text-xl font-black">Acesso</h2>

          <Campo id="email" rotulo="E-mail" erro={errors.email?.message}>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className={classeInput}
              {...register('email', {
                required: 'O e-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Digite um e-mail válido',
                },
              })}
            />
          </Campo>

          <div className="grid gap-5 sm:grid-cols-2">
            <Campo id="senha" rotulo="Senha" erro={errors.senha?.message}>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className={classeInput}
                {...register('senha', {
                  required: 'A senha é obrigatória',
                  minLength: {
                    value: 6,
                    message: 'A senha deve ter pelo menos 6 caracteres',
                  },
                })}
              />
            </Campo>

            <Campo
              id="confirmarSenha"
              rotulo="Confirmar senha"
              erro={errors.confirmarSenha?.message}
            >
              <input
                id="confirmarSenha"
                type="password"
                placeholder="Digite a senha novamente"
                className={classeInput}
                {...register('confirmarSenha', {
                  required: 'Confirme sua senha',
                  validate: (value) =>
                    value === getValues('senha') || 'As senhas não coincidem',
                })}
              />
            </Campo>
          </div>

          {erroCadastro && (
            <p
              role="alert"
              className="rounded-lg bg-red-100 p-4 text-center font-semibold text-red-800"
            >
              {erroCadastro}
            </p>
          )}

          {enviando && (
            <p role="status" className="text-center text-sm font-semibold">
              Conectando ao servidor... na primeira vez pode levar até 1 minuto.
            </p>
          )}

          <Button type="submit" disabled={enviando}>
            {enviando ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">Já possui uma conta?</p>

          <Link
            to={ROTAS.login}
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