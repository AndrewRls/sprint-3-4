import type { UsuarioLogado } from '../types'

const CHAVE_SESSAO = 'soulup_usuario_logado'

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
}