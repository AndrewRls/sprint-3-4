// Camada única de comunicação HTTP com a API Java (usa fetch nativo, sem Axios)
const BASE_URL: string = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

type Metodo = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface OpcoesRequisicao {
  metodo?: Metodo
  corpo?: object
  sinal?: AbortSignal
}

export class ApiError extends Error {
  status: number

  constructor(mensagem: string, status: number) {
    super(mensagem)
    this.name = 'ApiError'
    this.status = status
  }
}

function mensagemPorStatus(status: number): string {
  if (status === 404) return 'Registro não encontrado.'
  if (status === 400 || status === 422) return 'Os dados enviados são inválidos.'
  if (status === 401 || status === 403) return 'Você não tem permissão para esta ação.'
  if (status >= 500) return 'Erro no servidor. Tente novamente em instantes.'
  return 'Não foi possível concluir a operação.'
}

export async function requisicao<T>(
  caminho: string,
  { metodo = 'GET', corpo, sinal }: OpcoesRequisicao = {},
): Promise<T> {
  if (!BASE_URL) {
    throw new ApiError('URL da API não configurada (variável VITE_API_URL).', 0)
  }

  let resposta: Response

  try {
    resposta = await fetch(`${BASE_URL}${caminho}`, {
      method: metodo,
      headers: corpo ? { 'Content-Type': 'application/json' } : undefined,
      body: corpo ? JSON.stringify(corpo) : undefined,
      signal: sinal,
    })
  } catch (erro) {
    if (erro instanceof DOMException && erro.name === 'AbortError') {
      throw erro
    }
    throw new ApiError(
      'Não foi possível conectar ao servidor. Verifique sua conexão.',
      0,
    )
  }

  if (!resposta.ok) {
    throw new ApiError(mensagemPorStatus(resposta.status), resposta.status)
  }

  // DELETE normalmente responde 204 (sem corpo)
  const texto = await resposta.text()
  return (texto ? JSON.parse(texto) : undefined) as T
}