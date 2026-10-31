# 🎮 SoulUp – Gamificação (Sprint 4)

Aplicação web **SPA** desenvolvida para a disciplina de **Front-End Design Engineering (FIAP)**.
A SoulUp usa gamificação (missões, pontos, níveis, ranking e recompensas) para incentivar produtividade, organização e desenvolvimento pessoal.

Na Sprint 4 o front-end passou a **consumir a API REST em Java (Domain Driven Design)** publicada na nuvem, com listagem, detalhe, criação, edição e exclusão de **missões**.

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
| API REST Java (DDD) | Back-end publicado na nuvem |
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
  ┃ ┣ 📂 components            # Header, Footer, Card, Button, MissaoCard, MissaoForm,
  ┃ ┃                          # Feedback (loading/erro/vazio), RotaProtegida, MainLayout
  ┃ ┣ 📂 context               # AuthContext + AuthProvider (useContext)
  ┃ ┣ 📂 hooks                 # useRequisicao, useMissoes/useMissao, useAuth
  ┃ ┣ 📂 pages                 # Home, Sobre, Integrantes, FAQ, Contato, Solucao,
  ┃ ┃                          # SolucaoDetalhe, SolucaoForm, Login, Cadastro, NaoEncontrado
  ┃ ┣ 📂 routes                # rotas.ts (todas as rotas tipadas em um só lugar)
  ┃ ┣ 📂 services              # api.ts (fetch), missaoService.ts, authService.ts
  ┃ ┣ 📂 types                 # interfaces e tipos (Union / Intersection)
  ┃ ┣ 📂 utils
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
- 🎯 **Solução (integrada à API):**
  - `/solucao` – listagem de missões (**GET**)
  - `/solucao/:id` – detalhe da missão (**GET por id**) com exclusão (**DELETE**)
  - `/solucao/nova` – cadastro de missão (**POST**) 🔒
  - `/solucao/:id/editar` – edição de missão (**PUT**) 🔒
- 🔐 Login e cadastro, com redirecionamento e mensagens personalizadas (🔒 = exige login)
- ⏳ Tratamento de **carregando**, **erro** e **lista vazia**
- 🧭 Página 404 e redirecionamentos (`/home` → `/`, `/missoes` → `/solucao`)
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
| ☕ API Java publicada | **PREENCHER: https://SUA-API.exemplo.com** |

### 🛠️ Executar localmente

```bash
# 1. Clonar
git clone https://github.com/AndrewRls/sprint-3-4.git
cd sprint-3-4/soulup-gamificacao

# 2. Configurar a URL da API
cp .env.example .env      # edite VITE_API_URL com a URL da API publicada

# 3. Instalar e rodar
npm install
npm run dev               # http://localhost:5173
```

### 🔌 Endpoints consumidos

| Método | Endpoint | Uso |
|---|---|---|
| GET | `/missoes` | Listar missões |
| GET | `/missoes/{id}` | Detalhar missão |
| POST | `/missoes` | Criar missão |
| PUT | `/missoes/{id}` | Editar missão |
| DELETE | `/missoes/{id}` | Excluir missão |

### ☁️ Deploy na Vercel

1. Importe o repositório na Vercel.
2. **Root Directory:** `soulup-gamificacao`.
3. Em *Environment Variables*, crie `VITE_API_URL` com a URL pública (**https**) da API.
4. Deploy. O `vercel.json` garante que rotas como `/solucao/1` funcionem ao recarregar a página.

---

## 👥 Autores e Créditos

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|---|
| <img src="soulup-gamificacao/src/assets/imagens/img-07-andrew-foto.png" width="70" alt="Andrew" /> | Andrew Rodrigues Lima da Silva | 573777 | PREENCHER | [AndrewRls](https://github.com/AndrewRls) | [LinkedIn](https://www.linkedin.com/in/andrew-rls) |
| <img src="soulup-gamificacao/src/assets/imagens/img-05-bryan-foto.png" width="70" alt="Bryan" /> | Bryan Costa Silva | 569439 | PREENCHER | [BryanC0staDev](https://github.com/BryanC0staDev) | [LinkedIn](https://www.linkedin.com/in/bryan-costa-silva/) |
| <img src="soulup-gamificacao/src/assets/imagens/img-06-luis-foto.png" width="70" alt="Luis" /> | Luis Henrique Rondão Mendonça | 569797 | PREENCHER | [luishdev0](https://github.com/luishdev0) | [LinkedIn](https://www.linkedin.com/in/luis-rondao) |
| <img src="soulup-gamificacao/src/assets/imagens/img-08-igor-foto.jpg" width="70" alt="Igor" /> | Igor Blacconaro Santos | 572033 | PREENCHER | [igorblacconaro](https://github.com/igorblacconaro) | [LinkedIn](https://www.linkedin.com/in/igorblacconaro) |

---

## 📞 Contato

Dúvidas ou sugestões? Use a página **Contato** da aplicação ou fale com a equipe pelos GitHub/LinkedIn acima.

**PREENCHER:** e-mail de contato do grupo.

---

## 🎓 Instituição

**FIAP** – Disciplina: Front-End Design Engineering – Sprint 4
Projeto desenvolvido para fins acadêmicos.