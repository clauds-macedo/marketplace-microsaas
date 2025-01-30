  <h1>📌 MicroSaaS Architecture</h1>

  <p>Este repositório implementa uma arquitetura de MicroSaaS utilizando <strong>NestJS</strong>, com foco em escalabilidade, modularidade e desacoplamento entre os microsserviços. A comunicação entre os componentes do sistema é realizada via <strong>RabbitMQ</strong>, permitindo a orquestração eficiente dos fluxos de dados.</p>

  <h2>🚀 Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>NestJS</strong>: Framework para a construção de microsserviços altamente escaláveis.</li>
    <li><strong>RabbitMQ</strong>: Sistema de mensageria utilizado para comunicação assíncrona entre os serviços.</li>
    <li><strong>Docker</strong>: Utilizado para garantir a consistência e portabilidade dos ambientes de desenvolvimento e produção.</li>
    <li><strong>TypeScript</strong>: Linguagem de programação adotada para maior segurança em tempo de compilação e otimização de performance.</li>
  </ul>

  <h2>🏗️ Arquitetura</h2>
  <p>Este projeto segue o paradigma de <strong>arquitetura de microsserviços</strong>, onde cada serviço é isolado e independente, interagindo por meio de um barramento de mensageria (RabbitMQ). A comunicação entre os serviços é realizada de maneira assíncrona, permitindo alta escalabilidade e resiliência.</p>

  <h3>📂 Estrutura do Projeto</h3>
  <pre>
    📂 marketplace-microsaas/
    ├── 📂 apps/
    │   ├── 📂 api-gateway/         # Gateway central para roteamento de solicitações entre os serviços
    │   ├── 📂 services/
    │   │   ├── 📂 employee-service/  # Serviço dedicado ao gerenciamento de funcionários
    │   │   ├── 📂 contract-service/  # Serviço para a criação e gerenciamento de contratos
    ├── 📂 libs/                    # Bibliotecas compartilhadas entre os microsserviços
    ├── docker-compose.yml           # Configuração para orquestração de containers
    ├── package.json                 # Gerenciamento de dependências e scripts
    └── README.md                    # Documentação do projeto
  </pre>
  
  <h2>📚 Arquitetura Limpa</h2>
  <p>O sistema segue os princípios da <strong>Arquitetura Limpa</strong> (Clean Architecture), com o objetivo de promover um design robusto e de fácil manutenção. Ao dividir o sistema em camadas bem definidas, como entidades, casos de uso, controladores e gateways, a aplicação torna-se mais desacoplada, o que facilita a evolução e a substituição de partes do sistema sem afetar o restante da aplicação.</p>
  <p>A <strong>Clean Architecture</strong> também contribui para a **testabilidade**, permitindo que os diferentes componentes da aplicação sejam testados de forma independente. A separação clara entre responsabilidades facilita a evolução do sistema à medida que novas funcionalidades são adicionadas.</p>


  <h2>📌 Serviços</h2>
  <h3>1️⃣ API Gateway</h3>
  <ul>
    <li><strong>Porta:</strong> 3001</li>
    <li>Função principal: Orquestrar as requisições HTTP e redirecioná-las para os microsserviços corretos.</li>
    <li>Comunicação via <strong>RabbitMQ</strong> com os outros serviços.</li>
  </ul>

  <h3>2️⃣ Employee Service</h3>
  <ul>
    <li>Função principal: Gerenciar os dados e operações relacionados a funcionários.</li>
    <li>Após a criação de um funcionário, emite um evento <strong>create_employee</strong> para o <strong>Contract Service</strong> via RabbitMQ.</li>
  </ul>

  <h3>3️⃣ Contract Service</h3>
  <ul>
    <li>Função principal: Escutar os eventos <strong>create_employee</strong> e gerar contratos para os novos funcionários.</li>
    <li>Permite consultar contratos via <strong>get_contract</strong>.</li>
  </ul>

  <h2>🔄 Fluxo de Comunicação</h2>
  <ol>
    <li>O <strong>API Gateway</strong> recebe uma requisição <code>POST /employees</code>.</li>
    <li>Encaminha a requisição para o <strong>Employee Service</strong>, que processa a criação do funcionário.</li>
    <li>O <strong>Employee Service</strong> emite um evento <strong>create_employee</strong> para o <strong>Contract Service</strong> via <strong>RabbitMQ</strong>.</li>
    <li>O <strong>Contract Service</strong> escuta o evento e gera um contrato correspondente para o novo funcionário.</li>
  </ol>

  <h2>🛠️ Como Rodar o Projeto</h2>
  <h3>1️⃣ Pré-requisitos</h3>
  <ul>
    <li><strong>Node.js</strong> v18+ (com suporte completo para ES Modules e funcionalidades mais recentes)</li>
    <li><strong>Docker</strong> e <strong>Docker Compose</strong> (para gerenciar containers de forma eficiente)</li>
  </ul>

  <h3>2️⃣ Rodando o projeto com Docker</h3>
  <pre>
    docker-compose up --build
  </pre>
  <p>Este comando irá compilar os serviços e subir os containers necessários, incluindo o RabbitMQ.</p>

  <h3>3️⃣ Testando a API</h3>
  <h4>Criar um funcionário</h4>
  <pre>
    curl -X POST http://localhost:3001/employees \
         -H "Content-Type: application/json" \
         -d '{"name":"Fernanda","position":"Desenvolvedora","salary":8000}'
  </pre>
  <h4>Buscar um contrato</h4>
  <pre>
    curl -X GET http://localhost:3001/contracts/{employeeId}
  </pre>

  <h2>🐰 Verificando o RabbitMQ</h2>
  <p>Acesse o painel de gerenciamento do RabbitMQ em <code>http://localhost:15672/</code></p>
  <ul>
    <li><strong>Usuário:</strong> guest</li>
    <li><strong>Senha:</strong> guest</li>
  </ul>
  <p>Para listar as filas ativas, use o comando:</p>
  <pre>
    docker exec -it rabbitmq bash -c "rabbitmqctl list_queues name messages_ready messages_unacknowledged"
  </pre>

  <h2>🏆 Conclusão</h2>
  <p>Este repositório demonstra a implementação de uma arquitetura de microsserviços, comunicados de forma assíncrona via <strong>RabbitMQ</strong>. O projeto exemplifica a escalabilidade e o desacoplamento entre os serviços, possibilitando uma fácil expansão e manutenção.</p>
