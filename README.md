# 🏢 API RESTful de Cadastro de Departamentos e Funcionários

Esta é uma API RESTful para gerenciar departamentos e funcionários de uma empresa. Desenvolvida com **Node.js**, **TypeScript**, **Express** e **MongoDB** (via **Mongoose**), permite realizar operações de **CRUD** (Create, Read, Update, Delete) para as duas entidades.

---

## 🚀 Funcionalidades

- ✅ Criar, listar, buscar, atualizar e deletar departamentos
- ✅ Criar, listar, buscar, atualizar e deletar funcionários

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Estrutura de Pastas

```
estudoTS/
├── src/
│   ├── controllers/         # Lógica das rotas (Departamentos e Funcionários)
│   ├── interfaces/          # Tipos TypeScript
│   ├── middlewares/         # Middlewares (handler, errorHandler)
│   ├── models/              # Schemas do Mongoose
│   ├── repositories/        # Acesso ao banco (Departamentos e Funcionários)
│   ├── routes/              # Rotas REST
│   ├── app.ts               # Configuração do Express
│   ├── db.ts                # Conexão com o MongoDB
│   └── index.ts             # Ponto de entrada
├── dist/                    # Arquivos compilados
├── .env                     # Variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📬 Endpoints da API

### Departamentos

- **GET** `/departamentos` — Lista todos os departamentos
- **GET** `/departamentos/:id` — Busca um departamento por ID
- **POST** `/departamentos` — Cria um novo departamento  
  **Body (JSON):**
  ```json
  {
    "nome": "Departamento de TI",
    "endereco": "Rua das Flores, 123"
  }
  ```
- **PUT** `/departamentos/:id` — Atualiza um departamento
- **DELETE** `/departamentos/:id` — Remove um departamento

---

### Funcionários

- **GET** `/funcionarios` — Lista todos os funcionários
- **GET** `/funcionarios/:id` — Busca um funcionário por ID
- **POST** `/funcionarios` — Cria um novo funcionário  
  **Body (JSON):**
  ```json
  {
    "nome": "Maria Souza",
    "cargo": "Analista",
    "departamentoId": "id_do_departamento"
  }
  ```
- **PUT** `/funcionarios/:id` — Atualiza um funcionário
- **DELETE** `/funcionarios/:id` — Remove um funcionário

---

## ▶️ Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` com sua string de conexão MongoDB.
3. Compile o projeto:
   ```bash
   npx tsc
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
   Ou, para desenvolvimento automático:
   ```bash
   npx ts-node-dev src/index.ts
   ```

---

## 📝 Observações

- Não esqueça de criar o banco de dados no MongoDB antes de rodar a API.
- O projeto já está configurado para não enviar `node_modules` e arquivos sensíveis ao GitHub.

---

Feito com 💻 por [Seu Nome]
