# 🧑‍💼 API RESTful de Cadastro de Pessoas

Esta é uma API RESTful para gerenciar um cadastro de pessoas. Desenvolvida com **Node.js**, **Express** e **MongoDB** (via **Mongoose**), permite realizar as operações de **CRUD** (Create, Read, Update, Delete) em registros de pessoas.

---

## 🚀 Funcionalidades

- ✅ Criar uma nova pessoa
- ✅ Listar todas as pessoas
- ✅ Buscar uma pessoa por ID
- ✅ Atualizar os dados de uma pessoa
- ✅ Deletar uma pessoa

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Estrutura de Pastas

api-cadastro-pessoas/  
├── index.js → Ponto de entrada da aplicação  
├── db.js → Conexão com o MongoDB via Mongoose  
├── .env → Variáveis de ambiente  
├── package.json → Dependências do projeto  
├── models/ → Schemas do Mongoose  
│ └── Pessoa.js → Schema da entidade Pessoa  
├── routes/ → Rotas REST da aplicação  
│ └── pessoa.routes.js → Rotas para cadastro de pessoas

---

## 📬 Endpoints da API

### 🔍 Obter todas as pessoas

**GET** `/pessoas`  
Retorna uma lista com todas as pessoas cadastradas.

---

### 🔍 Obter uma pessoa por ID

**GET** `/pessoas/:id`  
Retorna os dados de uma pessoa específica pelo seu ID.

---

### ➕ Criar uma nova pessoa

**POST** `/pessoas`  
Cadastra uma nova pessoa no banco de dados.

**Body (JSON):**

```json
{
  "nome": "João Silva",
  "idade": 35,
  "email": "joao@email.com"
}
```
