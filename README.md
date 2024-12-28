# Sistema de Gestão de Produtos (PVD)

Sistema web para gestão de produtos com funcionalidades de cadastro, edição, exclusão e visualização de produtos, incluindo cálculo automático de margem de lucro.

## 🚀 Funcionalidades

### Produtos
- Listagem de produtos com cards visuais
- Cadastro de novos produtos
- Edição de produtos existentes
- Exclusão de produtos
- Visualização detalhada
- Cálculo automático de margem de lucro
- Categorização de produtos

### Interface
- Design responsivo e moderno
- Cards interativos com efeito hover
- Modais para detalhes e edição
- Feedback visual para todas as ações
- Confirmação antes de excluir produtos

## 🛠️ Tecnologias Utilizadas

### Frontend
- React.js
- Material-UI (MUI)
- React Hooks
- Fetch API

### Backend
- Java Spring Boot
- H2 Database (in-memory)
- RESTful API

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Java JDK 11 ou superior
- Maven

## 🔧 Instalação

### Backend

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd PVD
```

2. Execute o backend:
```bash
cd backend
mvn spring-boot:run
```

O banco de dados H2 será criado automaticamente em memória quando a aplicação iniciar.
Você pode acessar o console do H2 em `http://localhost:8080/h2-console` com as seguintes credenciais:
- JDBC URL: jdbc:h2:mem:productdb
- Username: sa
- Password: [deixe em branco]

### Frontend

1. Instale as dependências:
```bash
cd frontend
npm install
```

2. Execute o frontend:
```bash
npm start
```

O sistema estará disponível em `http://localhost:3000`

## 📦 Estrutura do Projeto

```
PVD/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 💻 Como Usar

### Cadastro de Produtos
1. Clique no botão "Novo Produto"
2. Preencha os campos:
   - Nome do produto
   - Categoria
   - Preço de custo
   - Preço de venda
   - Quantidade em estoque
3. A margem de lucro será calculada automaticamente
4. Clique em "Cadastrar"

### Visualização e Edição
1. Clique em um card de produto para ver os detalhes
2. Para editar:
   - Clique no botão "Editar"
   - Faça as alterações necessárias
   - Clique em "Salvar"

### Exclusão
1. Abra os detalhes do produto
2. Clique no botão "Excluir"
3. Confirme a exclusão no diálogo

## 🔍 Funcionalidades Detalhadas

### Margem de Lucro
- Calculada automaticamente: (Preço de Venda - Preço de Custo) / Preço de Custo * 100
- Exibida em porcentagem e valor absoluto
- Atualizada em tempo real durante edição

### Categorias Disponíveis
- Eletrônicos
- Vestuário
- Alimentos
- Bebidas
- Limpeza
- Higiene
- Móveis
- Decoração
- Outros
