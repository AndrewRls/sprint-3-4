# 🎮 SoulUp – Gamificação (Sprint 4)

Aplicação web **SPA** desenvolvida para a disciplina de **Front-End Design Engineering (FIAP)**.
A SoulUp usa gamificação (posts, pontos, níveis e ranking) para incentivar produtividade, organização e desenvolvimento pessoal.

Na Sprint 4 o front-end passou a **consumir a API REST em Java (Spring Boot), publicada na nuvem**, com cadastro e login reais, mural de posts, ranking de usuários, perfil e exclusão de conta.


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
  ┣ 📂 public                  
  ┣ 📂 src
  ┃ ┣ 📂 assets/imagens
  ┃ ┣ 📂 components            
  ┃ ┃                          
  ┃ ┣ 📂 context               
  ┃ ┣ 📂 hooks               
  ┃ ┣ 📂 pages                 
  ┃ ┃                          
  ┃ ┣ 📂 routes                
  ┃ ┣ 📂 services              
  ┃ ┣ 📂 types                 
  ┃ ┣ 📂 utils                 
  ┃ ┣ 📄 App.tsx
  ┃ ┣ 📄 main.tsx
  ┃ ┗ 📄 index.css
  ┣ 📄 .env.example        
  ┣ 📄 vercel.json             
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



## ▶️ Como Usar

### 🔗 Links do projeto

| Item | Link |
|---|---|
| 💻 Repositório GitHub | https://github.com/AndrewRls/sprint-3-4 |
| 🌐 Deploy na Vercel | https://sprint-3-4-rho.vercel.app/ |
| 🎥 Vídeo no YouTube | https://youtu.be/gbdt93h_YNg|
| ☕ API Java publicada (Render) | https://soulup-projeto-gamefica-o.onrender.com |
| ☕ Repositório do back-end | https://github.com/BryanC0staDev/SoulUp-Projeto-Gamefica-o |

> A API usa o plano gratuito do Render: na **primeira requisição** ela pode levar até 1 minuto para "acordar".

### 🛠️ Executar localmente

```bash
# 1. Clonar
git clone https://github.com/AndrewRls/sprint-3-4.git
cd sprint-3-4/soulup-gamificacao

# 2. Configurar a URL da API
#renomear ou copiar o arquivo .env.example para .env
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



## 👥 Autores e Créditos

| Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|
| Andrew Rodrigues Lima da Silva | 573777 | 1TDSPF | [AndrewRls](https://github.com/AndrewRls) | [LinkedIn](https://www.linkedin.com/in/andrew-rls) |
| Bryan Costa Silva | 569439 | 1TDSPF | [BryanC0staDev](https://github.com/BryanC0staDev) | [LinkedIn](https://www.linkedin.com/in/bryan-costa-silva/) |
| Luis Henrique Rondão Mendonça | 569797 | 1TDSPO | [luishdev0](https://github.com/luishdev0) | [LinkedIn](https://www.linkedin.com/in/luis-rondao) |
| Igor Blacconaro Santos | 572033 | 1TDSPF | [igorblacconaro](https://github.com/igorblacconaro) | [LinkedIn](https://www.linkedin.com/in/igorblacconaro) |

---

## 📞 Contato

Dúvidas ou sugestões? Use a página **Contato** da aplicação ou fale com a equipe pelos GitHub e LinkedIn listados acima.


---

## 🎓 Instituição

**FIAP** – Disciplina: Front-End Design Engineering – Sprint 4
Projeto desenvolvido para fins acadêmicos.
