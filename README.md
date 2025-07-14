# 🧩 ts-fullstack-desafio-final

> Monorepo fullstack TypeScript com tudo que você precisa para criar um sistema moderno, escalável e tipado de ponta a ponta.

![CI](https://img.shields.io/github/actions/workflow/status/gpterruya/ts-fullstack-desafio-final/ci.yml?branch=main&label=CI&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Monorepo](https://img.shields.io/badge/structure-monorepo-blue?style=flat-square)

---

## 🚀 Tecnologias incluídas

- 📦 **pnpm + TurboRepo** (monorepo)
- 🧠 **TypeScript** compartilhado entre frontend, backend, sdk e cli
- ⚙️ **Backend** com Express
- 🧪 **Vitest** para testes unitários
- 🧼 **ESLint** + **Prettier** com integração no CI
- 💻 **Frontend** com Vite + React
- 🧰 **CLI Generator** interativo com `prompts`
- 🛠️ **CI/CD com GitHub Actions**

---

## 📁 Estrutura

├── apps
│ ├── backend # API Express
│ └── frontend # App React (Vite)
├── packages
│ ├── cli # CLI gerador de rotas
│ ├── sdk # Funções para consumir a API
│ └── types # Tipos compartilhados (ex: Usuario, Produto)
├── .github
│ └── workflows # CI com build + lint + test
├── turbo.json
└── pnpm-workspace.yaml

## 🛠️ Instalação

```bash
git clone https://github.com/<SEU_USUARIO>/ts-fullstack-desafio-final.git
cd ts-fullstack-desafio-final
pnpm install
```

## 🎯 Scripts úteis

| Comando       | Descrição                            |
| ------------- | ------------------------------------ |
| `pnpm dev`    | Rodar backend e frontend em paralelo |
| `pnpm build`  | Build de todos os pacotes via Turbo  |
| `pnpm lint`   | Lint do código com ESLint            |
| `pnpm format` | Formatar o código com Prettier       |
| `pnpm test`   | Executa os testes com Vitest         |
| `pnpm cli`    | Executa o CLI generator              |

## 🧪 Testes

```bash
pnpm test
```

## 🤖 CLI Generator

Cria novas rotas para o backend com base em input do usuário.

```bash
pnpm cli
```

Exemplo:

```bash
? Qual o nome da nova rota? listarProdutos
✅ Rota criada: apps/backend/src/listarProdutos.ts
```

## 🔄 GitHub Actions

O projeto já vem com um pipeline CI que roda:

- `pnpm lint`
- `pnpm prettier --check .`
- `pnpm build`
- `pnpm test`

Toda vez que houver `push` ou `pull` request para a branch main.

## 🧑‍💻 Como usar como template

1. Clique no botão [Use this template]
2. Escolha um nome para seu repositório
3. Clone e comece a criar!

## 📝 Licença

MIT © Gabriel Porto Terruya
