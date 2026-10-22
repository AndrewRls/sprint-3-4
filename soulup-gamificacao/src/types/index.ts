// ---------- Tipos de união (Union Types) ----------
export type Dificuldade = 'FACIL' | 'MEDIA' | 'DIFICIL'

// Estado de qualquer requisição à API (união discriminada)
export type EstadoRequisicao<T> =
  | { status: 'carregando' }
  | { status: 'erro'; mensagem: string }
  | { status: 'sucesso'; dados: T }

// ---------- Interfaces ----------
// Campos que o usuário preenche ao criar/editar uma missão
export interface MissaoBase {
  titulo: string
  descricao: string
  pontos: number
  dificuldade: Dificuldade
  concluida: boolean
}

// Campo que o back-end (Java) gera
export interface Identificavel {
  id: number
}

export interface Usuario {
  nome: string
  email: string
}

export interface EstadoLogin {
  mensagem?: string
  origem?: string
}

export interface EstadoAviso {
  aviso?: string
}

// ---------- Tipos de interseção (Intersection Types) ----------
// Missão que vem da API = dados da missão + id
export type Missao = MissaoBase & Identificavel

// Dados enviados no POST/PUT (ainda não possuem id)
export type NovaMissao = MissaoBase

// Usuário salvo no cadastro = usuário + senha
export type UsuarioCadastro = Usuario & { senha: string }