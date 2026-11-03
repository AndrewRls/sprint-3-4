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
  novoPost: '/solucao/nova',
  login: '/login',
  cadastro: '/cadastro',
  // rota dinâmica: o padrão (para o <Route>) e a função que monta o link
  padraoDetalhePost: '/solucao/:id',
  detalhePost: (id: number | string) => `/solucao/${id}`,
} as const