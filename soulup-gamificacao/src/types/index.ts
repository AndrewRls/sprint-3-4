// =====================================================================
// Tipos da API Java (back-end SoulUp: usuários e posts)
// =====================================================================

// ---------- Tipos de união (Union Types) ----------

// Nível calculado no front a partir dos pontos do usuário
export type NivelRanking = 'Bronze' | 'Prata' | 'Ouro'

// Estado de qualquer requisição à API (união discriminada)
export type EstadoRequisicao<T> =
  | { status: 'carregando' }
  | { status: 'erro'; mensagem: string }
  | { status: 'sucesso'; dados: T }

// ---------- Interfaces ----------

export interface Endereco {
  cep: string
  logradouro: string
  numero: string
  bairro: string
  localidade: string
  estado: string
}

// Usuário exatamente como a API devolve (login e ranking)
export interface UsuarioApi {
  nome: string
  cpf: string
  apelido: string
  email: string
  sexo: string
  idade: number
  pontos: number
  curtidas: number
  qntPosts: number
  seguidores: number
  seguindo: number
  endereco: Endereco | null // pode vir nulo (ex.: no ranking)
  // A API devolve a senha no login. O front nunca deve guardá-la.
  senha?: string | null
}

export interface Credenciais {
  email: string
  senha: string
}

// Dados enviados ao criar um post (POST /posts)
export interface NovoPost {
  conteudo: string
  cpfUsuario: string
}

// Campos que o back-end gera para cada post
export interface PostIdentificado {
  idPost: number
  nomeAutor: string
}

// Estados enviados pela navegação (React Router)
export interface EstadoLogin {
  mensagem?: string
  origem?: string
}

export interface EstadoAviso {
  aviso?: string
}

// ---------- Tipos derivados e de interseção (Intersection Types) ----------

// Usuário logado no front = usuário da API sem a senha
export type UsuarioLogado = Omit<UsuarioApi, 'senha'>

// Post que vem da API = dados do post + campos gerados pelo back-end
export type Post = NovoPost & PostIdentificado

// Dados enviados no cadastro (POST /usuarios).
// O back-end exige todos os contadores no JSON, mesmo zerados.
export type NovoUsuario = Pick<
  UsuarioApi,
  | 'nome'
  | 'cpf'
  | 'apelido'
  | 'email'
  | 'sexo'
  | 'idade'
  | 'pontos'
  | 'curtidas'
  | 'qntPosts'
  | 'seguidores'
  | 'seguindo'
> & {
  senha: string
  endereco: Endereco
}