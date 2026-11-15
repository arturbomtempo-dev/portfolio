import type { RoadmapCopy } from '~/types/roadmap';

export const ROADMAP_COPY_PT: RoadmapCopy = {
    fundamentals: {
        logic: {
            title: 'Lógica de programação',
            description:
                'Variáveis, condições, laços e funções. É a base de qualquer linguagem e de qualquer área.',
        },
        git: {
            title: 'Git e GitHub',
            description:
                'Versionar o código, trabalhar em equipe e mostrar seus projetos para o mercado.',
        },
        terminal: {
            title: 'Terminal',
            description: 'Navegar entre pastas, rodar comandos e scripts sem medo da tela preta.',
        },
        web: {
            title: 'Como a web funciona',
            description: 'Cliente e servidor, HTTP, DNS e o que acontece quando você abre um site.',
        },
        english: {
            title: 'Inglês técnico',
            description:
                'A maioria das documentações, cursos e vagas está em inglês. Saber ler bem já ajuda muito.',
        },
        ai: {
            title: 'IA como aliada',
            description:
                'Use assistentes de IA para tirar dúvidas e revisar código, mas sempre entenda o que eles geram.',
        },
    },
    areas: {
        'front-end': {
            title: 'Front-end',
            summary: 'Constrói a interface e a experiência de quem usa o sistema.',
            description:
                'O desenvolvedor front-end cria tudo o que a pessoa vê e com o que interage no navegador: telas, componentes, formulários e animações. Também garante que a aplicação seja rápida, acessível, responsiva em qualquer tela e bem posicionada nos mecanismos de busca, além de consumir as APIs do back-end e organizar o estado da aplicação.',
            myth: 'Front-end não é só "fazer tela bonita". Envolve arquitetura de componentes, performance, acessibilidade, SEO, segurança no navegador e testes. Hoje, muitos frameworks de front-end também rodam código no servidor.',
            responsibilities: [
                'Transformar designs em interfaces responsivas e acessíveis',
                'Criar componentes reutilizáveis e organizar o estado da aplicação',
                'Integrar a interface com APIs, tratando carregamentos e erros',
                'Otimizar a performance, o SEO e a experiência no celular',
                'Escrever testes e garantir que tudo funcione em diferentes navegadores',
            ],
            aiImpact:
                'Ferramentas de IA já geram componentes e telas a partir de descrições e imagens. Por isso, o diferencial está em entender a arquitetura, revisar o código gerado e cuidar dos detalhes que fazem uma boa experiência: acessibilidade, performance e consistência.',
            steps: {
                foundations: {
                    title: 'Fundamentos da web',
                    description:
                        'Estruture páginas com HTML semântico, estilize com CSS e adicione interatividade com JavaScript. Versione tudo com Git desde o primeiro projeto.',
                },
                styling: {
                    title: 'Layout e responsividade',
                    description:
                        'Domine Flexbox e Grid, crie layouts que funcionem do celular ao desktop e conheça um framework de estilos como o Tailwind CSS.',
                },
                typescript: {
                    title: 'TypeScript e ferramentas',
                    description:
                        'Adicione tipos ao JavaScript e conheça o ecossistema: gerenciador de pacotes, bundler e ferramentas de qualidade de código.',
                },
                framework: {
                    title: 'Um framework moderno',
                    description:
                        'Escolha um caminho e aprofunde. Componentes, props e estado se repetem em todos, então trocar de framework depois fica bem mais fácil.',
                },
                data: {
                    title: 'Dados e estado',
                    description:
                        'Consuma APIs, trate carregamentos e erros, faça cache das requisições e use um estado global apenas quando ele for realmente necessário.',
                },
                quality: {
                    title: 'Qualidade e publicação',
                    description:
                        'Teste componentes e fluxos completos, meça a performance e publique seus projetos para que o mercado possa vê-los.',
                },
            },
            options: { react: 'React e Next.js', vue: 'Vue e Nuxt', angular: 'Angular' },
        },
        'back-end': {
            title: 'Back-end',
            summary: 'Cuida das regras de negócio, dos dados e da segurança por trás da aplicação.',
            description:
                'O desenvolvedor back-end constrói a parte do sistema que roda no servidor: APIs, regras de negócio, autenticação, integrações com outros serviços, filas e processamento de dados. Ele garante que as informações sejam salvas e entregues com segurança, desempenho e consistência, mesmo com milhares de pessoas usando o sistema ao mesmo tempo.',
            myth: 'Back-end não é só "o banco de dados". O banco é uma parte do trabalho, que também envolve desenhar APIs, proteger dados, integrar sistemas, lidar com muitos acessos e manter tudo funcionando em produção.',
            responsibilities: [
                'Criar e documentar APIs usadas pelo front-end, por apps e por outros sistemas',
                'Implementar regras de negócio, autenticação e autorização',
                'Modelar e otimizar o acesso ao banco de dados',
                'Integrar serviços externos, como pagamentos e e-mails',
                'Monitorar, escalar e corrigir problemas em produção',
            ],
            aiImpact:
                'A IA acelera a criação de endpoints, consultas e testes, e muitas empresas já integram modelos de linguagem aos próprios produtos. Cada vez mais, quem trabalha com back-end desenha essas integrações, cuidando de custos, segurança e da qualidade das respostas.',
            steps: {
                fundamentals: {
                    title: 'Fundamentos da web',
                    description:
                        'Entenda HTTP, métodos, status codes, JSON e o modelo REST. Pratique no terminal e no Linux, onde a maioria dos servidores roda.',
                },
                language: {
                    title: 'Uma linguagem e um framework',
                    description:
                        'Comece criando uma API simples, com um CRUD completo. Escolha um ecossistema e vá fundo nele antes de partir para outro.',
                },
                databases: {
                    title: 'Bancos de dados',
                    description:
                        'Aprenda SQL de verdade, modelagem relacional e como usar um ORM sem perder o controle das consultas. Conheça também um banco NoSQL.',
                },
                auth: {
                    title: 'Autenticação e segurança',
                    description:
                        'Implemente login com tokens, proteja senhas com hash, entenda o OAuth e conheça as vulnerabilidades mais comuns em aplicações web.',
                },
                tests: {
                    title: 'Testes e arquitetura',
                    description:
                        'Escreva testes unitários e de integração e organize o código em camadas, aplicando os princípios da seção de arquiteturas desta página.',
                },
                deploy: {
                    title: 'Publicação e escala',
                    description:
                        'Coloque a aplicação em containers, automatize o deploy, use cache e filas para lidar com mais acessos e publique na nuvem.',
                },
            },
            options: {
                node: 'JavaScript e Node.js',
                python: 'Python',
                java: 'Java',
                dotnet: 'C# e .NET',
            },
        },
        'full-stack': {
            title: 'Full Stack',
            summary: 'Transita entre front-end e back-end para entregar funcionalidades completas.',
            description:
                'O desenvolvedor full stack atua nos dois lados da aplicação: constrói a interface, cria as APIs e conecta tudo ao banco de dados. É muito valorizado em startups e times pequenos, porque consegue levar uma funcionalidade da ideia até a produção. Em empresas grandes, costuma ter uma especialidade principal e conhecer bem a outra ponta.',
            myth: 'Full stack não significa saber tudo de tudo. Na prática, é ter uma base sólida nos dois lados e saber aprofundar onde o projeto precisa, sem tentar dominar todas as tecnologias ao mesmo tempo.',
            responsibilities: [
                'Desenvolver funcionalidades de ponta a ponta, da tela ao banco de dados',
                'Definir como o front-end e o back-end vão se comunicar',
                'Tomar decisões de arquitetura em projetos menores',
                'Publicar e manter aplicações em produção',
                'Fazer a ponte entre as áreas técnicas e de produto',
            ],
            aiImpact:
                'Com assistentes de IA, uma pessoa consegue construir e publicar produtos completos cada vez mais rápido. Isso valoriza ainda mais quem entende o sistema como um todo e sabe avaliar se o que foi gerado é seguro, escalável e fácil de manter.',
            steps: {
                front: {
                    title: 'Base de front-end',
                    description:
                        'Siga as primeiras etapas da trilha de front-end: HTML, CSS, JavaScript e TypeScript bem praticados.',
                },
                framework: {
                    title: 'Um framework de interface',
                    description:
                        'Escolha um ecossistema completo, que já traga roteamento, renderização no servidor e boas convenções.',
                },
                back: {
                    title: 'Back-end com a mesma linguagem',
                    description:
                        'Usar JavaScript ou TypeScript nos dois lados reduz a curva de aprendizado. Crie APIs com Node.js e um framework como Express ou NestJS.',
                },
                database: {
                    title: 'Banco de dados e ORM',
                    description:
                        'Modele os dados da aplicação, aprenda SQL e use um ORM para integrar o banco ao código com segurança de tipos.',
                },
                'server-routes': {
                    title: 'Front-end e back-end no mesmo projeto',
                    description:
                        'Use os recursos de servidor do Next.js ou do Nuxt para criar páginas e APIs juntas e entenda quando vale separar os dois lados.',
                },
                deploy: {
                    title: 'Publicação',
                    description:
                        'Publique projetos completos, com banco de dados, autenticação e deploy automatizado. É o melhor portfólio que você pode ter.',
                },
            },
            options: { react: 'React e Next.js', vue: 'Vue e Nuxt' },
        },
        mobile: {
            title: 'Mobile',
            summary: 'Desenvolve aplicativos para celulares Android e iOS.',
            description:
                'O desenvolvedor mobile cria os aplicativos que usamos no dia a dia, lidando com recursos do aparelho, como câmera, localização, notificações e armazenamento offline. Existem dois caminhos principais. No desenvolvimento nativo, o app é feito com a linguagem oficial de cada plataforma, Kotlin no Android e Swift no iOS, com acesso total aos recursos e a melhor performance. No híbrido, ou multiplataforma, um único código gera apps para os dois sistemas, com frameworks como React Native e Flutter, o que economiza tempo e é a escolha de muitas empresas hoje.',
            myth: 'Híbrido não é sinônimo de app lento. React Native e Flutter entregam interfaces de alta performance e são usados em apps de grandes empresas. O nativo segue ideal quando o app depende muito de recursos específicos do aparelho.',
            responsibilities: [
                'Criar telas e fluxos pensados para toque e telas pequenas',
                'Integrar câmera, localização, notificações e outros recursos do aparelho',
                'Consumir APIs e manter o app funcionando mesmo sem internet',
                'Publicar e atualizar o app na Google Play e na App Store',
                'Acompanhar falhas e a performance em diferentes aparelhos',
            ],
            aiImpact:
                'A IA ajuda a gerar telas e lógicas repetitivas, mas publicar um app ainda exige cuidado com a experiência em diferentes aparelhos, permissões, performance e as regras das lojas. Recursos de IA rodando no próprio celular também são uma tendência crescente.',
            steps: {
                fundamentals: {
                    title: 'Uma base de programação',
                    description:
                        'Antes do mobile, tenha uma base sólida de programação. Se você vier do front-end, JavaScript e TypeScript já abrem o caminho do React Native.',
                },
                path: {
                    title: 'Nativo ou multiplataforma',
                    description:
                        'Escolha um caminho. O multiplataforma é uma ótima porta de entrada; o nativo é o caminho para quem quer se especializar em uma plataforma.',
                },
                app: {
                    title: 'Fundamentos de um app',
                    description:
                        'Navegação entre telas, gerenciamento de estado, consumo de APIs e armazenamento local para funcionar sem internet.',
                },
                device: {
                    title: 'Recursos do aparelho',
                    description:
                        'Câmera, localização, notificações push e autenticação, respeitando as permissões e a privacidade de quem usa o app.',
                },
                publish: {
                    title: 'Publicação',
                    description:
                        'Gere as versões de produção, publique na Google Play e na App Store e automatize as próximas atualizações.',
                },
            },
            options: {
                android: 'Nativo Android',
                ios: 'Nativo iOS',
                'react-native': 'Multiplataforma com React Native',
                flutter: 'Multiplataforma com Flutter',
            },
        },
        database: {
            title: 'Banco de Dados (DBA)',
            summary: 'Garante que os dados estejam seguros, organizados e disponíveis.',
            description:
                'O DBA (Database Administrator) e os especialistas em banco de dados cuidam de onde ficam as informações mais valiosas de uma empresa. Eles modelam as estruturas, otimizam consultas lentas, definem permissões, configuram backups e replicação e garantem que os dados estejam sempre disponíveis, mesmo diante de falhas.',
            myth: 'Banco de dados não é só "guardar informação". Uma consulta mal escrita ou um índice faltando pode derrubar um sistema inteiro, e perder dados por falta de backup é um dos piores problemas que uma empresa pode ter.',
            responsibilities: [
                'Modelar e evoluir a estrutura dos bancos de dados',
                'Otimizar consultas e criar índices',
                'Configurar backups, replicação e planos de recuperação',
                'Controlar acessos e proteger dados sensíveis',
                'Monitorar a saúde e o crescimento dos bancos',
            ],
            aiImpact:
                'A IA já sugere consultas e otimizações, e os bancos vetoriais ganharam espaço com as aplicações de IA. Entender a fundo como os dados são armazenados e acessados continua essencial para revisar essas sugestões e manter tudo seguro.',
            steps: {
                sql: {
                    title: 'SQL',
                    description:
                        'Domine consultas, junções, agregações e subconsultas em um banco relacional como PostgreSQL ou MySQL.',
                },
                modeling: {
                    title: 'Modelagem de dados',
                    description:
                        'Aprenda normalização, relacionamentos e como desenhar diagramas que representem bem o negócio.',
                },
                performance: {
                    title: 'Performance',
                    description:
                        'Entenda índices, planos de execução e transações para deixar as consultas rápidas e consistentes.',
                },
                nosql: {
                    title: 'NoSQL',
                    description:
                        'Conheça bancos de documentos, de chave-valor e colunares e saiba quando cada um faz sentido.',
                },
                operations: {
                    title: 'Operação e nuvem',
                    description:
                        'Backups, replicação, alta disponibilidade, segurança e bancos gerenciados na nuvem.',
                },
            },
            options: {},
        },
        'devops-cloud': {
            title: 'DevOps e Cloud',
            summary: 'Automatiza as entregas e mantém a infraestrutura estável e escalável.',
            description:
                'O profissional de DevOps e Cloud faz a ponte entre o desenvolvimento e a operação. Ele automatiza testes e deploys, configura a infraestrutura na nuvem, coloca as aplicações em containers e monitora tudo para que o sistema continue no ar, rápido e seguro. Áreas próximas são SRE (Site Reliability Engineering) e Platform Engineering.',
            myth: 'DevOps não é um cargo que "só faz deploy". É uma cultura de automação e colaboração, que envolve infraestrutura como código, observabilidade, segurança e redução de custos.',
            responsibilities: [
                'Criar pipelines de integração e entrega contínuas (CI/CD)',
                'Provisionar a infraestrutura na nuvem como código',
                'Gerenciar containers e orquestradores',
                'Monitorar aplicações e responder a incidentes',
                'Otimizar os custos e a segurança da infraestrutura',
            ],
            aiImpact:
                'A IA ajuda a escrever scripts, pipelines e configurações, e times de plataforma já operam a infraestrutura de modelos de IA. Saber analisar logs, entender redes e desenhar sistemas confiáveis continua sendo o que diferencia o profissional.',
            steps: {
                linux: {
                    title: 'Linux e redes',
                    description:
                        'Use o terminal com confiança, automatize tarefas com Bash e entenda processos, permissões, DNS e conexões remotas.',
                },
                containers: {
                    title: 'Containers',
                    description:
                        'Empacote aplicações com Docker e suba ambientes completos com Docker Compose.',
                },
                'ci-cd': {
                    title: 'CI/CD',
                    description: 'Automatize testes, builds e deploys a cada alteração no código.',
                },
                cloud: {
                    title: 'Nuvem',
                    description:
                        'Aprenda os serviços principais de um provedor: computação, armazenamento, redes e permissões. Comece por um e depois os outros ficam familiares.',
                },
                orchestration: {
                    title: 'Orquestração e infraestrutura como código',
                    description:
                        'Gerencie containers em escala com Kubernetes e descreva a infraestrutura em código com Terraform.',
                },
                observability: {
                    title: 'Observabilidade',
                    description:
                        'Colete métricas, logs e traces para descobrir problemas antes dos usuários.',
                },
            },
            options: {},
        },
        cybersecurity: {
            title: 'Cibersegurança',
            summary: 'Protege sistemas, dados e pessoas contra ataques.',
            description:
                'O profissional de cibersegurança identifica vulnerabilidades, protege sistemas e responde a ataques. A área é ampla: há quem simule ataques para encontrar falhas antes dos criminosos (red team e pentest), quem monitore e defenda a infraestrutura (blue team) e quem trabalhe com os desenvolvedores para criar software seguro desde o início (AppSec).',
            myth: 'Cibersegurança não é só "hacker invadindo sistemas". Grande parte do trabalho é prevenção: configurar bem, monitorar, conscientizar pessoas e garantir que o código e a infraestrutura nasçam seguros.',
            responsibilities: [
                'Encontrar e corrigir vulnerabilidades em sistemas e aplicações',
                'Monitorar alertas e responder a incidentes de segurança',
                'Definir políticas de acesso e de proteção de dados',
                'Realizar testes de invasão autorizados',
                'Conscientizar os times sobre boas práticas de segurança',
            ],
            aiImpact:
                'A IA é usada tanto pelos defensores, para detectar ameaças e analisar alertas mais rápido, quanto pelos atacantes, para criar golpes mais convincentes. Isso aumenta a procura por profissionais que entendam os fundamentos e saibam proteger também as próprias aplicações de IA.',
            steps: {
                foundations: {
                    title: 'Fundamentos de TI',
                    description:
                        'Redes, sistemas operacionais e linha de comando. Não dá para proteger o que você não entende.',
                },
                security: {
                    title: 'Fundamentos de segurança',
                    description:
                        'Confidencialidade, integridade e disponibilidade, criptografia, controle de acesso e as vulnerabilidades mais comuns na web.',
                },
                tools: {
                    title: 'Ferramentas',
                    description:
                        'Analise o tráfego de rede, mapeie serviços e teste aplicações em ambientes de laboratório.',
                },
                path: {
                    title: 'Uma especialização',
                    description:
                        'Ataque, defesa ou segurança de aplicações. Pratique em plataformas legais de desafios, como Hack The Box e TryHackMe.',
                },
                certifications: {
                    title: 'Certificações',
                    description:
                        'Certificações ajudam a validar o conhecimento e são muito valorizadas na área.',
                },
            },
            options: {
                'red-team': 'Red team e pentest',
                'blue-team': 'Blue team e defesa',
                appsec: 'Segurança de aplicações',
            },
        },
        'ai-data': {
            title: 'Dados e Inteligência Artificial',
            summary: 'Transforma dados em decisões e cria soluções com inteligência artificial.',
            description:
                'Essa área reúne várias carreiras. O analista de dados transforma informações em relatórios e respostas para o negócio. O cientista de dados cria modelos estatísticos e de machine learning. O engenheiro de dados constrói os pipelines que levam os dados de um lugar a outro. E o engenheiro de IA integra modelos de linguagem, agentes e buscas inteligentes aos produtos.',
            myth: 'Trabalhar com IA não é só usar um chatbot. Envolve dados de qualidade, estatística, avaliação de resultados, controle de custos e muita engenharia para levar um modelo do experimento a um produto confiável.',
            responsibilities: [
                'Coletar, limpar e analisar dados',
                'Criar dashboards e indicadores para o negócio',
                'Treinar e avaliar modelos de machine learning',
                'Integrar modelos de linguagem e agentes às aplicações',
                'Construir pipelines de dados confiáveis',
            ],
            aiImpact:
                'É a área que mais cresce com a IA generativa. Além de treinar modelos, hoje é comum construir aplicações com modelos de linguagem, usando técnicas como RAG, agentes e protocolos como o MCP, sempre medindo a qualidade das respostas.',
            steps: {
                python: {
                    title: 'Python e matemática',
                    description:
                        'Python com bibliotecas de dados, além de estatística, álgebra linear e probabilidade no nível necessário.',
                },
                analysis: {
                    title: 'Análise de dados',
                    description:
                        'Consultas SQL, notebooks, visualização de dados e ferramentas de BI para responder perguntas reais.',
                },
                ml: {
                    title: 'Machine learning',
                    description:
                        'Modelos supervisionados e não supervisionados, avaliação de resultados e redes neurais.',
                },
                llm: {
                    title: 'Aplicações com IA generativa',
                    description:
                        'Integre modelos de linguagem por APIs, construa sistemas de RAG com bancos vetoriais e crie agentes que usam ferramentas.',
                },
                mlops: {
                    title: 'Produção e MLOps',
                    description:
                        'Versione modelos e dados, monitore os resultados e coloque soluções de IA em produção com segurança.',
                },
            },
            options: {},
        },
        qa: {
            title: 'Qualidade e Testes (QA)',
            summary: 'Garante que o software funcione como esperado antes de chegar às pessoas.',
            description:
                'O profissional de QA (Quality Assurance) planeja e executa testes para encontrar problemas antes dos usuários. Hoje, a área é muito técnica: envolve automação de testes de interface e de API, testes de performance e a integração dessas verificações aos pipelines, para que cada alteração seja validada automaticamente.',
            myth: 'QA não é só "clicar no sistema procurando erros". O foco é prevenir problemas, definir critérios de qualidade com o time e automatizar o máximo possível.',
            responsibilities: [
                'Planejar estratégias e casos de teste',
                'Automatizar testes de interface, de API e de performance',
                'Integrar os testes aos pipelines de CI/CD',
                'Registrar e acompanhar a correção de bugs',
                'Definir critérios de aceite com o time de produto',
            ],
            aiImpact:
                'A IA já gera casos de teste e scripts de automação a partir de requisitos. O papel de QA evolui para definir o que realmente precisa ser testado, avaliar a cobertura e testar também sistemas com IA, cujas respostas nem sempre são iguais.',
            steps: {
                fundamentals: {
                    title: 'Fundamentos de testes',
                    description:
                        'Tipos e níveis de teste, como escrever bons casos de teste e como reportar bugs com clareza.',
                },
                programming: {
                    title: 'Lógica e programação',
                    description:
                        'Uma linguagem é essencial para automatizar. JavaScript, TypeScript e Python são ótimas opções.',
                },
                e2e: {
                    title: 'Automação de interface',
                    description:
                        'Automatize fluxos completos no navegador, como cadastro, login e compra.',
                },
                api: {
                    title: 'Testes de API e performance',
                    description:
                        'Valide respostas, contratos e o comportamento do sistema sob carga.',
                },
                ci: {
                    title: 'Testes no pipeline',
                    description:
                        'Rode os testes automaticamente a cada alteração e acompanhe relatórios de qualidade.',
                },
            },
            options: {},
        },
        'it-support': {
            title: 'Suporte de TI',
            summary: 'Mantém computadores, redes e sistemas funcionando para as pessoas.',
            description:
                'O profissional de suporte de TI ajuda pessoas e empresas a usar a tecnologia sem problemas: configura computadores e acessos, resolve falhas, cuida da rede e dos sistemas internos e registra os atendimentos. É uma ótima porta de entrada, que desenvolve comunicação, raciocínio para resolver problemas e uma visão prática de infraestrutura, e pode levar a carreiras em redes, cloud, DevOps e segurança.',
            myth: 'Suporte não é só "formatar computador". Envolve redes, identidade e acessos, ferramentas na nuvem, automação de tarefas e muito contato com pessoas.',
            responsibilities: [
                'Atender chamados e resolver problemas dos usuários',
                'Configurar computadores, contas e permissões',
                'Manter redes, impressoras e sistemas internos',
                'Documentar soluções e processos',
                'Automatizar tarefas repetitivas',
            ],
            aiImpact:
                'Chatbots e IA já resolvem dúvidas simples e organizam os chamados. O suporte passa a focar nos problemas mais complexos, na automação e no atendimento humano, que continua fazendo diferença.',
            steps: {
                hardware: {
                    title: 'Hardware e sistemas operacionais',
                    description:
                        'Componentes do computador e instalação e manutenção dos principais sistemas operacionais.',
                },
                networks: {
                    title: 'Redes',
                    description:
                        'Endereçamento, roteadores, switches e como diagnosticar problemas de conexão.',
                },
                service: {
                    title: 'Gestão de serviços',
                    description:
                        'Como registrar, priorizar e resolver chamados seguindo boas práticas de atendimento.',
                },
                identity: {
                    title: 'Identidade e ferramentas na nuvem',
                    description:
                        'Gerencie contas, permissões e as ferramentas de produtividade da empresa.',
                },
                automation: {
                    title: 'Automação',
                    description:
                        'Automatize tarefas repetitivas e dê os primeiros passos rumo a cloud e DevOps.',
                },
            },
            options: {},
        },
    },
    principles: {
        'clean-code': {
            title: 'Clean Code',
            summary: 'Escrever código fácil de ler e de mudar.',
            details:
                'Nomes claros, funções pequenas, uma responsabilidade por trecho e nada de duplicação desnecessária. Código é lido muito mais vezes do que é escrito.',
            whenToLearn: 'Desde os primeiros projetos.',
        },
        solid: {
            title: 'SOLID',
            summary: 'Cinco princípios para um código orientado a objetos mais flexível.',
            details:
                'Responsabilidade única, aberto para extensão e fechado para modificação, substituição de Liskov, segregação de interfaces e inversão de dependências. Juntos, ajudam a criar classes pequenas, desacopladas e fáceis de testar.',
            whenToLearn: 'Depois de entender a orientação a objetos.',
        },
        'design-patterns': {
            title: 'Design Patterns',
            summary: 'Soluções conhecidas para problemas que se repetem.',
            details:
                'Padrões como Strategy, Factory, Observer, Adapter e Singleton dão nome a soluções testadas e facilitam a comunicação no time. O segredo é reconhecer o problema antes de aplicar o padrão.',
            whenToLearn:
                'Quando você já tiver alguns projetos e começar a notar problemas repetidos.',
        },
        tdd: {
            title: 'TDD',
            summary: 'Escrever o teste antes do código.',
            details:
                'O Test-Driven Development segue um ciclo curto: escreva um teste que falha, faça o mínimo para ele passar e depois refatore. O resultado é um código testado desde o início e com um design mais simples.',
            whenToLearn: 'Depois de aprender a escrever testes automatizados.',
        },
        'clean-architecture': {
            title: 'Clean Architecture',
            summary: 'Separar as regras de negócio dos detalhes técnicos.',
            details:
                'O código é organizado em camadas, e as regras de negócio ficam no centro, sem depender de frameworks, do banco de dados ou da interface. Assim, trocar uma tecnologia não exige reescrever o sistema.',
            whenToLearn: 'Quando os seus projetos começarem a crescer.',
        },
        sdd: {
            title: 'SDD',
            summary: 'Especificar antes de gerar o código com IA.',
            details:
                'O Spec-Driven Development é uma prática recente, impulsionada pelos agentes de IA: primeiro se escreve uma especificação clara, com requisitos, comportamento e critérios de aceite, e só depois a implementação é gerada e validada a partir dela. A especificação vira a fonte da verdade do projeto.',
            whenToLearn: 'Ao usar agentes de IA para desenvolver.',
        },
        hexagonal: {
            title: 'Arquitetura Hexagonal',
            summary: 'O núcleo da aplicação conversa com o mundo por portas e adaptadores.',
            details:
                'Também chamada de Ports and Adapters, isola o domínio por meio de interfaces, as portas. Banco de dados, APIs e filas viram adaptadores plugáveis, o que facilita os testes e a troca de tecnologias.',
            whenToLearn: 'Depois de entender bem as camadas e a inversão de dependências.',
        },
        ddd: {
            title: 'DDD',
            summary: 'Modelar o software a partir do negócio.',
            details:
                'O Domain-Driven Design aproxima desenvolvedores e especialistas do negócio com uma linguagem comum, divide sistemas grandes em contextos delimitados e coloca as regras do domínio no centro do código.',
            whenToLearn: 'Ao trabalhar em sistemas com regras de negócio complexas.',
        },
        microservices: {
            title: 'Monolito e microsserviços',
            summary: 'Uma aplicação única ou vários serviços independentes.',
            details:
                'Monolitos são mais simples de construir e operar e são a melhor escolha para a maioria dos projetos no início. Microsserviços permitem escalar times e partes do sistema de forma independente, mas trazem complexidade de rede, de dados e de monitoramento.',
            whenToLearn: 'Depois de ter experiência com sistemas em produção.',
        },
    },
    tips: [
        'Escolha uma área para começar, mas não tenha medo de mudar. Os fundamentos que você aprende servem para todas.',
        'Construa projetos desde cedo. Eles fixam o conteúdo muito mais do que só assistir a cursos.',
        'Publique seu código no GitHub e compartilhe o que aprendeu. Projetos reais mostram mais do que uma lista de certificados.',
        'Consistência vence intensidade: um pouco todos os dias rende mais do que maratonas de fim de semana.',
        'Participe de comunidades, eventos e projetos de extensão. Muitas oportunidades vêm das pessoas que você conhece.',
        'Use a IA para aprender mais rápido, não para pular etapas. Entender o que o código faz continua sendo o seu diferencial.',
    ],
};
