import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../../components/PostForm/PostForm'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useAuth } from '../../hooks/useAuth'
import { ROTAS } from '../../routes/rotas'
import { postService } from '../../services/postService'
import type { EstadoAviso } from '../../types'

function SolucaoForm() {
  const navigate = useNavigate()
  const { usuario } = useAuth()
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')

  async function enviar(conteudo: string) {
    if (!usuario) {
      setErro('Faça login para publicar.')
      return
    }

    setEnviando(true)
    setErro('')

    try {
      // POST /posts: o autor é o CPF de quem está logado
      await postService.criar({ conteudo, cpfUsuario: usuario.cpf })
      const aviso: EstadoAviso = { aviso: 'Post publicado com sucesso!' }
      navigate(ROTAS.solucao, { state: aviso })
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível publicar.')
      setEnviando(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8">
      <section className="mx-auto max-w-2xl">
        <SectionTitle
          titulo="Novo post"
          descricao="Compartilhe com a comunidade SoulUp."
        />

        <PostForm enviando={enviando} erro={erro} onEnviar={enviar} />
      </section>
    </div>
  )
}

export default SolucaoForm