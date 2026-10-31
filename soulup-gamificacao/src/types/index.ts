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

// =====================================================================
// Tipos da API Java (back-end SoulUp: usuários e posts)
// =====================================================================

// Union Type: nível calculado no front a partir dos pontos do usuário
export type NivelRanking = 'Bronze' | 'Prata' | 'Ouro'

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
  endereco: Endereco | null
  // A API devolve a senha no login. O front nunca deve guardá-la.
  senha?: string | null
}

// Usuário logado no front = usuário da API sem a senha
export type UsuarioLogado = Omit<UsuarioApi, 'senha'>

export interface Credenciais {
  email: string
  senha: string
}

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

// Post que vem da API = dados do post + campos gerados (Intersection Type)
export type Post = NovoPost & PostIdentificado