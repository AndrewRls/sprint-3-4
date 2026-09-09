Descrição:

SoulUp é uma plataforma web voltada para produtividade, organização e desenvolvimento pessoal, que utiliza elementos de gamificação para transformar as atividades do dia a dia em uma experiência mais dinâmica e motivadora.

Através de missões, pontuação, níveis, ranking e recompensas, o usuário é incentivado a manter uma rotina mais organizada, reduzir a procrastinação e acompanhar sua evolução pessoal de forma simples e envolvente.

Este repositório contém a continuação do projeto SoulUp, desenvolvida para a entrega das Sprints 3 e 4.

Tecnologias Utilizadas:

O projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

React — biblioteca para construção da interface
TypeScript — tipagem estática para o JavaScript
Vite — bundler e ambiente de desenvolvimento
React Router DOM — gerenciamento de rotas da aplicação
React Hook Form — gerenciamento e validação de formulários
Tailwind CSS — estilização utilitária da interface
ESLint — padronização e qualidade do código
Git & GitHub — versionamento e hospedagem do código



Estrutura de Pastas do Projeto:

sprint-3-4/
└── soulup-gamificacao/
    ├── public/                     # Arquivos públicos estáticos
    ├── src/
    │   ├── assets/
    │   │   └── imagens/            # Imagens, ícones e logos do projeto
    │   ├── components/
    │   │   ├── Button/             # Componente de botão reutilizável
    │   │   ├── Card/                # Componente de card reutilizável
    │   │   ├── Footer/              # Rodapé da aplicação
    │   │   ├── Header/              # Cabeçalho / menu de navegação
    │   │   ├── MainLayout/          # Layout base das páginas
    │   │   └── SectionTitle/        # Título padrão das seções
    │   ├── pages/
    │   │   ├── Cadastro/            # Página de cadastro de usuário
    │   │   ├── Contato/             # Página de contato
    │   │   ├── FAQ/                  # Perguntas frequentes
    │   │   ├── Home/                 # Página inicial
    │   │   ├── Integrantes/          # Página com a equipe do projeto
    │   │   ├── Login/                 # Página de autenticação
    │   │   ├── Sobre/                 # Página sobre a SoulUp
    │   │   ├── Solucao/               # Listagem das soluções/missões
    │   │   └── SolucaoDetalhe/        # Detalhe de uma solução/missão
    │   ├── App.tsx                    # Definição das rotas da aplicação
    │   ├── main.tsx                   # Ponto de entrada da aplicação
    │   └── index.css                  # Estilos globais
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    └── vite.config.ts


