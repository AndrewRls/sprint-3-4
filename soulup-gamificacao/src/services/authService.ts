import type { UsuarioCadastro, UsuarioLogado } from '../types'

const CHAVE_SESSAO = 'soulup_usuario_logado'

// TEMPORÁRIO: cadastro local antigo, usado pela página Cadastro atual.
// Será removido no commit da página Cadastro.
const CHAVE_USUARIOS = 'soulup_usuarios'

function lerUsuarios(): UsuarioCadastro[] {
  try {
    const salvo = localStorage.getItem(CHAVE_USUARIOS)
    return salvo ? (JSON.parse(salvo) as UsuarioCadastro[]) : []
  } catch {
    return []
  }
}

export const authService = {
  // Guarda só a sessão do usuário (a senha nunca chega até aqui)
  salvarSessao(usuario: UsuarioLogado): void {
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario))
  },

  obterSessao(): UsuarioLogado | null {
    try {
      const salvo = localStorage.getItem(CHAVE_SESSAO)
      if (!salvo) return null

      const sessao = JSON.parse(salvo) as Partial<UsuarioLogado>

      // Sessões antigas (sem CPF) não servem para a API: exige novo login
      if (typeof sessao.cpf !== 'string') {
        localStorage.removeItem(CHAVE_SESSAO)
        return null
      }

      return sessao as UsuarioLogado
    } catch {
      return null
    }
  },

  sair(): void {
    localStorage.removeItem(CHAVE_SESSAO)
  },

  // TEMPORÁRIO: será removido no commit da página Cadastro
  cadastrar(novo: UsuarioCadastro): 'ok' | 'email-existe' {
    const usuarios = lerUsuarios()
    if (usuarios.some((u) => u.email === novo.email)) return 'email-existe'
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify([...usuarios, novo]))
    return 'ok'
  },
}