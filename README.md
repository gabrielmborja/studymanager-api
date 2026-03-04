# StudyManager API
Este projeto consiste em uma API RESTful desenvolvida para o gerenciamento de uma plataforma de estudos, abrangendo o controle de usuários, catálogo de cursos e o fluxo de matrículas de alunos.

A aplicação foi construída sob os princípios de Arquitetura Limpa e Clean Code, visando a separação de responsabilidades, facilidade de manutenção e escalabilidade do sistema.

Tecnologias e Ferramentas
Runtime: Node.js

Framework: Express

ORM: Prisma (PostgreSQL)

Linguagem: JavaScript (ES6+)

# Estrutura do Projeto
A organização do código foi dividida em camadas lógicas para garantir que as regras de negócio sejam independentes da infraestrutura e das rotas de acesso.

# Organização de Pastas
src/routes: Definição dos pontos de entrada e métodos HTTP.

src/controllers: Processamento de requisições e formatação de respostas.

src/services: Camada de inteligência onde residem as regras de negócio e validações.

src/repositories: Camada de persistência responsável pela comunicação direta com o banco de dados.

src/config: Configurações globais e instâncias de conexão.

# Justificativa da Arquitetura
A separação em camadas como Controllers, Services e Repositories foi adotada para isolar a lógica de negócio das preocupações de infraestrutura. Os Services garantem que validações complexas, como a unicidade de e-mails e o impedimento de matrículas duplicadas, ocorram antes de qualquer interação com o banco. Já os Repositories abstraem as consultas do Prisma, permitindo que a aplicação seja mais testável e menos dependente de uma implementação específica de banco de dados.

# Funcionalidades do Sistema
Gestão de Usuários e Cursos
A API fornece um CRUD completo para ambas as entidades, permitindo a criação, listagem, busca individual, atualização de dados e exclusão de registros.

# Sistema de Matrículas
O fluxo de matrículas possui validações integradas para garantir a consistência dos dados:

Verificação obrigatória da existência do usuário e do curso antes da vinculação.

Bloqueio de matrículas duplicadas para o mesmo par de usuário e curso.

Manutenção da integridade referencial, impedindo a exclusão de usuários que possuam vínculos ativos no sistema.

# Consulta Relacional
A API disponibiliza um endpoint específico para a recuperação do perfil do aluno:

GET /users/:id/courses: Retorna os dados cadastrais do usuário populados com a lista completa de cursos em que ele está matriculado, utilizando carregamento relacional via ORM.

# Padrões de Qualidade
Respostas Padronizadas
Todas as rotas retornam um objeto JSON consistente, facilitando a integração com sistemas front-end:

JSON
{
  "success": true,
  "message": "Descrição da operação realizada",
  "data": { ... }
}
Clean Code e Tratamento de Erros
Nomenclatura clara: Funções e variáveis nomeadas por intenção, tornando o código autoexplicativo.

Tratamento de exceções: Uso de blocos try/catch em todas as camadas para capturar erros e retornar códigos HTTP apropriados (200, 201, 400, 404), sem expor detalhes sensíveis da infraestrutura.

# Instruções para Execução
1.Realize o clone do repositório.

2.Instale as dependências utilizando o comando: npm install.

3.Configure a variável DATABASE_URL no arquivo .env.

4.Execute as migrations do banco de dados: npx prisma migrate dev.

5.Inicie o servidor em modo de desenvolvimento: npm run dev.
