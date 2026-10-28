import { useEffect, useState } from 'react'
import type { EstadoRequisicao } from '../types'

type Resultado<T> = Exclude<EstadoRequisicao<T>, { status: 'carregando' }>

// `buscar` precisa ser estável (useCallback) e `chave` identifica o que está sendo buscado
export function useRequisicao<T>(
  buscar: (sinal: AbortSignal) => Promise<T>,
  chave: string,
) {
  const [tentativa, setTentativa] = useState(0)
  const [guardado, setGuardado] = useState<{
    chave: string
    resultado: Resultado<T>
  } | null>(null)

  const chaveAtual = `${chave}#${tentativa}`

  useEffect(() => {
    const controle = new AbortController()

    buscar(controle.signal)
      .then((dados) =>
        setGuardado({
          chave: chaveAtual,
          resultado: { status: 'sucesso', dados },
        }),
      )
      .catch((erro: unknown) => {
        if (controle.signal.aborted) return
        const mensagem =
          erro instanceof Error ? erro.message : 'Erro inesperado.'
        setGuardado({
          chave: chaveAtual,
          resultado: { status: 'erro', mensagem },
        })
      })

    return () => controle.abort()
  }, [buscar, chaveAtual])

  // Enquanto o resultado guardado não for da busca atual, está carregando
  const estado: EstadoRequisicao<T> =
    guardado && guardado.chave === chaveAtual
      ? guardado.resultado
      : { status: 'carregando' }

  return { estado, recarregar: () => setTentativa((t) => t + 1) }
}