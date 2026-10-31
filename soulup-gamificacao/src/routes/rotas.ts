// Todas as rotas do projeto em um único lugar (evita strings soltas)
export const ROTAS = {
  home: '/',
  sobre: '/sobre',
  integrantes: '/integrantes',
  faq: '/faq',
  contato: '/contato',
  solucao: '/solucao',
  ranking: '/ranking',
  perfil: '/perfil',
  novaMissao: '/solucao/nova',
  novoPost: '/solucao/nova',
  login: '/login',
  cadastro: '/cadastro',
  // rotas dinâmicas (recebem parâmetro)
  detalheMissao: (id: number | string) => `/solucao/${id}`,
  editarMissao: (id: number | string) => `/solucao/${id}/editar`,
  detalhePost: (id: number | string) => `/solucao/${id}`,
} as const