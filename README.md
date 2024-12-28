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
- MySQL
- RESTful API

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Java JDK 11 ou superior
- MySQL
- Maven

## 🔧 Instalação

### Backend

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd PVD
```

2. Configure o banco de dados MySQL:
```bash
# Crie um banco de dados chamado 'pvd'
mysql -u root -p
CREATE DATABASE pvd;
```

3. Configure as credenciais do banco no arquivo `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/pvd
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

4. Execute o backend:
```bash
cd backend
mvn spring-boot:run
```

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

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Melhorias Futuras

- [ ] Implementar sistema de busca avançada
- [ ] Adicionar filtros por categoria
- [ ] Implementar sistema de usuários e permissões
- [ ] Adicionar relatórios e gráficos
- [ ] Implementar controle de estoque automático
- [ ] Adicionar suporte a imagens de produtos
