# 🎮 SoulUp – Gamificação (Sprint 4)

Aplicação web **SPA** desenvolvida para a disciplina de **Front-End Design Engineering (FIAP)**.
A SoulUp usa gamificação (posts, pontos, níveis e ranking) para incentivar produtividade, organização e desenvolvimento pessoal.

Na Sprint 4 o front-end passou a **consumir a API REST em Java (Spring Boot), publicada na nuvem**, com cadastro e login reais, mural de posts, ranking de usuários, perfil e exclusão de conta.

<p align="center">
  <img src="soulup-gamificacao/src/assets/imagens/img-01-logo.png" alt="Logo SoulUp" width="220" />
</p>

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| React + Vite | Base da SPA |
| TypeScript | Tipagem estática (interfaces, union e intersection types) |
| Tailwind CSS | Estilização e responsividade (`xs:`, `sm:`, `md:`, `lg:`, `xl:`) |
| React Router DOM | Rotas estáticas, dinâmicas (`/solucao/:id`), redirecionamentos e rotas protegidas |
| React Hook Form | Formulários e validações |
| Fetch API | Consumo da API Java (sem bibliotecas externas) |
| Java + Spring Boot | API REST (back-end) |
| Oracle | Banco de dados |
| Render | Hospedagem da API |
| Vercel | Deploy do front-end |
| Git / GitHub | Versionamento colaborativo |

---

## 📂 Estrutura de Pastas

```bash
📁 sprint-3-4
┣ 📄 README.md
┣ 🖼️ Fluxograma.png
┗ 📂 soulup-gamificacao
  ┣ 📂 public                  # favicon
  ┣ 📂 src
  ┃ ┣ 📂 assets/imagens
  ┃ ┣ 📂 components            # Header, Footer, Card, Button, SectionTitle, MainLayout,
  ┃ ┃                          # PostCard, PostForm, Feedback (loading/erro/vazio), RotaProtegida
  ┃ ┣ 📂 context               # AuthContext + AuthProvider (useContext)
  ┃ ┣ 📂 hooks                 # useRequisicao, usePosts/usePost, useRanking, useAuth
  ┃ ┣ 📂 pages                 # Home, Sobre, Integrantes, FAQ, Contato, Solucao, SolucaoDetalhe,
  ┃ ┃                          # SolucaoForm, Ranking, Perfil, Login, Cadastro, NaoEncontrado
  ┃ ┣ 📂 routes                # rotas.ts (todas as rotas em um só lugar)
  ┃ ┣ 📂 services              # api.ts (fetch), postService.ts, usuarioService.ts, authService.ts
  ┃ ┣ 📂 types                 # interfaces e tipos (Union / Intersection)
  ┃ ┣ 📂 utils                 # nivel.ts (nível pelo número de pontos)
  ┃ ┣ 📄 App.tsx
  ┃ ┣ 📄 main.tsx
  ┃ ┗ 📄 index.css
  ┣ 📄 .env.example            # modelo da variável VITE_API_URL
  ┣ 📄 vercel.json             # rewrite para SPA na Vercel
  ┣ 📄 index.html
  ┣ 📄 package.json
  ┗ 📄 vite.config.ts
```

---

## ✨ Funcionalidades

- 🏠 Páginas: Home, Sobre, Integrantes, FAQ e Contato
- 🎯 **Solução (integrada à API Java):**
  - `/solucao` – mural de posts da comunidade (**GET /posts**)
  - `/solucao/:id` – detalhe de um post, com rota dinâmica
  - `/solucao/nova` – publicar um post (**POST /posts**) 🔒
  - `/ranking` – ranking de usuários com nível Bronze, Prata ou Ouro (**GET /usuarios/ranking**)
  - `/perfil` – dados da conta e exclusão da conta (**DELETE /usuarios/{cpf}**) 🔒
- 🔐 Cadastro (**POST /usuarios**) e login (**POST /usuarios/login**) reais, com redirecionamento e mensagens personalizadas (🔒 = exige login)
- ⏳ Tratamento de **carregando**, **erro** e **lista vazia**
- 🧭 Página 404 e redirecionamentos (`/home` → `/`, `/posts` → `/solucao`)
- 📱 Totalmente responsivo com Tailwind

---

## 🖼️ Imagens do Projeto

### Fluxograma da solução
![Fluxograma da solução](Fluxograma.png)

### Ícones e telas
<p>
  <img src="soulup-gamificacao/src/assets/imagens/img-04-ranking.jpg" alt="Ranking" height="120" />
  <img src="soulup-gamificacao/src/assets/imagens/img-12-pontuacao.jpg" alt="Pontuação" height="120" />
  <img src="soulup-gamificacao/src/assets/imagens/img-14-login.jpg" alt="Login" height="120" />
</p>

---

## ▶️ Como Usar

### 🔗 Links do projeto

| Item | Link |
|---|---|
| 💻 Repositório GitHub | https://github.com/AndrewRls/sprint-3-4 |
| 🌐 Deploy na Vercel | **PREENCHER: https://SEU-PROJETO.vercel.app** |
| 🎥 Vídeo no YouTube | **PREENCHER: https://youtu.be/XXXXXXXX** |
| ☕ API Java publicada (Render) | https://soulup-projeto-gamefica-o.onrender.com |
| ☕ Repositório do back-end | **PREENCHER: link do GitHub do projeto Java** |

> A API usa o plano gratuito do Render: na **primeira requisição** ela pode levar até 1 minuto para "acordar".

### 🛠️ Executar localmente

```bash
# 1. Clonar
git clone https://github.com/AndrewRls/sprint-3-4.git
cd sprint-3-4/soulup-gamificacao

# 2. Configurar a URL da API
cp .env.example .env      # no Windows: copy .env.example .env
# edite o .env: VITE_API_URL=https://soulup-projeto-gamefica-o.onrender.com

# 3. Instalar e rodar
npm install
npm run dev               # http://localhost:5173
```

### 🔌 Endpoints consumidos

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/posts` | Listar posts (mural) e localizar um post para o detalhe |
| POST | `/posts` | Publicar um post |
| POST | `/usuarios` | Cadastrar usuário |
| POST | `/usuarios/login` | Entrar na conta |
| GET | `/usuarios/ranking` | Ranking de usuários |
| DELETE | `/usuarios/{cpf}` | Excluir a própria conta |

### ☁️ Deploy na Vercel

1. Importe o repositório na Vercel.
2. **Root Directory:** `soulup-gamificacao`.
3. Em *Environment Variables*, crie `VITE_API_URL` com a URL da API: `https://soulup-projeto-gamefica-o.onrender.com` (sem barra no final).
4. Faça o deploy. O `vercel.json` garante que rotas como `/solucao/1` funcionem ao recarregar a página.

---

## 👥 Autores e Créditos

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|---|
| <img src="soulup-gamificacao/src/assets/imagens/img-07-andrew-foto.png" width="70" alt="Andrew" /> | Andrew Rodrigues Lima da Silva | 573777 | 1TDSPF | [AndrewRls](https://github.com/AndrewRls) | [LinkedIn](https://www.linkedin.com/in/andrew-rls) |
| <img src="soulup-gamificacao/src/assets/imagens/img-05-bryan-foto.png" width="70" alt="Bryan" /> | Bryan Costa Silva | 569439 | 1TDSPF | [BryanC0staDev](https://github.com/BryanC0staDev) | [LinkedIn](https://www.linkedin.com/in/bryan-costa-silva/) |
| <img src="soulup-gamificacao/src/assets/imagens/img-06-luis-foto.png" width="70" alt="Luis" /> | Luis Henrique Rondão Mendonça | 569797 | 1TDSPF | [luishdev0](https://github.com/luishdev0) | [LinkedIn](https://www.linkedin.com/in/luis-rondao) |
| <img src="soulup-gamificacao/src/assets/imagens/img-08-igor-foto.jpg" width="70" alt="Igor" /> | Igor Blacconaro Santos | 572033 | 1TDSPF | [igorblacconaro](https://github.com/igorblacconaro) | [LinkedIn](https://www.linkedin.com/in/igorblacconaro) |

---

## 📞 Contato

Dúvidas ou sugestões? Use a página **Contato** da aplicação ou fale com a equipe pelos GitHub e LinkedIn listados acima.

**PREENCHER:** e-mail de contato do grupo.

---

## 🎓 Instituição

**FIAP** – Disciplina: Front-End Design Engineering – Sprint 4
Projeto desenvolvido para fins acadêmicos.