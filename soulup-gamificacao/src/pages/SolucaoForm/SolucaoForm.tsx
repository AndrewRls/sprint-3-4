import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Carregando, MensagemErro } from '../../components/Feedback/Feedback'
import MissaoForm from '../../components/MissaoForm/MissaoForm'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useMissao } from '../../hooks/useMissoes'
import { ROTAS } from '../../routes/rotas'
import { missaoService } from '../../services/missaoService'
import type { EstadoAviso, Missao, NovaMissao } from '../../types'

const classeFundo =
  'min-h-screen bg-linear-to-r from-[#fbfcf7] to-[#55d4cf] px-4 py-10 md:px-8'

interface FormularioProps {
  id?: string
  missao?: Missao
}

// Serve para criar (POST) e para editar (PUT)
function Formulario({ id, missao }: FormularioProps) {
  const navigate = useNavigate()
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')

  async function enviar(dados: NovaMissao) {
    setEnviando(true)
    setErro('')

    try {
      if (id) {
        await missaoService.atualizar(id, dados)
        const aviso: EstadoAviso = { aviso: 'Missão atualizada com sucesso!' }
        navigate(ROTAS.solucao, { state: aviso })
      } else {
        await missaoService.criar(dados)
        const aviso: EstadoAviso = { aviso: 'Missão criada com sucesso!' }
        navigate(ROTAS.solucao, { state: aviso })
      }
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível salvar.')
      setEnviando(false)
    }
  }

  return (
    <MissaoForm
      valoresIniciais={missao}
      textoBotao={id ? 'Salvar alterações' : 'Criar missão'}
      enviando={enviando}
      erro={erro}
      onEnviar={enviar}
    />
  )
}

function FormularioEdicao({ id }: { id: string }) {
  const { estado, recarregar } = useMissao(id)

  if (estado.status === 'carregando') return <Carregando texto="Carregando missão..." />
  if (estado.status === 'erro') {
    return <MensagemErro mensagem={estado.mensagem} onTentarNovamente={recarregar} />
  }

  return <Formulario id={id} missao={estado.dados} />
}

function SolucaoForm() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className={classeFundo}>
      <section className="mx-auto max-w-2xl">
        <SectionTitle titulo={id ? 'Editar missão' : 'Nova missão'} />
        {id ? <FormularioEdicao id={id} /> : <Formulario />}
      </section>
    </div>
  )
}

export default SolucaoForm