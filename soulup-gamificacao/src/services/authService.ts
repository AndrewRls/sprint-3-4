import type { Usuario, UsuarioCadastro } from '../types'

// Autenticação simples guardada no navegador (demonstração).
// Se o back-end Java tiver endpoints de usuário, troque só este arquivo.
const CHAVE_USUARIOS = 'soulup_usuarios'
const CHAVE_SESSAO = 'soulup_usuario_logado'

function lerUsuarios(): UsuarioCadastro[] {
  try {
    const salvo = localStorage.getItem(CHAVE_USUARIOS)
    return salvo ? (JSON.parse(salvo) as UsuarioCadastro[]) : []
  } catch {
    return []
  }
}

export const authService = {
  cadastrar(novo: UsuarioCadastro): 'ok' | 'email-existe' {
    const usuarios = lerUsuarios()
    if (usuarios.some((u) => u.email === novo.email)) return 'email-existe'
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify([...usuarios, novo]))
    return 'ok'
  },

  entrar(email: string, senha: string): Usuario | null {
    const encontrado = lerUsuarios().find(
      (u) => u.email === email && u.senha === senha,
    )
    if (!encontrado) return null
    // a senha nunca vai para a sessão
    const sessao: Usuario = { nome: encontrado.nome, email: encontrado.email }
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(sessao))
    return sessao
  },

  sair(): void {
    localStorage.removeItem(CHAVE_SESSAO)
  },

  obterSessao(): Usuario | null {
    try {
      const salvo = localStorage.getItem(CHAVE_SESSAO)
      return salvo ? (JSON.parse(salvo) as Usuario) : null
    } catch {
      return null
    }
  },
}