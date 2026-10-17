import type { Talk } from '~/types/talk';

export const TALKS_PT: Talk[] = [
    {
        id: 'webtech-nuxt-workshop',
        type: 'workshop',
        title: 'Desenvolvimento web moderno com Nuxt.js',
        eventName: 'WebTech Network',
        location: 'PUC Minas Lourdes',
        date: '2026-10-08',
        description:
            'Workshop prático do WebTech Network sobre como desenvolver aplicações web modernas com Nuxt.js e Vue.js.',
        fullDescription:
            'Conduzi pelo WebTech Network um workshop prático sobre o desenvolvimento de aplicações web modernas com Nuxt.js e Vue.js, apresentando uma alternativa sólida ao ecossistema React e Next.js.\n\nAo longo do encontro, os participantes exploraram os principais recursos do Nuxt.js na construção de interfaces responsivas e na integração com APIs e serviços externos.\n\nPrincipais tópicos abordados:\n- Fundamentos de Vue.js e Nuxt.js\n- Principais recursos do Nuxt.js\n- Criação de interfaces responsivas\n- Integração com APIs e serviços externos',
        topics: ['Nuxt.js', 'Vue.js', 'Front-end'],
        image: '/images/talks/webtech-nuxt-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-nuxt-workshop/01.webp',
                alt: 'Foto 1 de WebTech Network',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/webtech-nuxt-workshop/02.webp',
                alt: 'Foto 2 de WebTech Network',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/webtech-nuxt-workshop/03.webp',
                alt: 'Foto 3 de WebTech Network',
                width: 1200,
                height: 1600,
            },
            {
                src: '/images/talks/webtech-nuxt-workshop/04.webp',
                alt: 'Foto 4 de WebTech Network',
                width: 1800,
                height: 2400,
            },
        ],
    },
    {
        id: 'dti-minimal-apis-techshot',
        type: 'talk',
        title: 'Minimal APIs: construindo APIs mais simples e eficientes',
        eventName: 'Techshot · dti digital',
        location: 'Online',
        date: '2026-08-25',
        description:
            'Techshot na dti digital sobre as Minimal APIs do ASP.NET Core, com a construção de uma API do zero em .NET.',
        fullDescription:
            'Conduzi um Techshot na dti digital sobre Minimal APIs, a abordagem do ASP.NET Core criada para desenvolver APIs HTTP de forma mais direta e com menos código, sem abrir mão dos recursos necessários para uma aplicação back-end.\n\nAlém de explicar como as Minimal APIs funcionam e compará-las ao desenvolvimento com Controllers, discutimos quando essa abordagem faz sentido, suas vantagens e limitações. Na parte prática, criamos uma API do zero em .NET e a evoluímos de uma implementação simples para uma estrutura organizada e próxima de um projeto real.\n\nPrincipais tópicos abordados:\n- O que são Minimal APIs e como funcionam\n- Comparação com APIs baseadas em Controllers\n- Endpoints, rotas e métodos HTTP\n- Organização de projetos com Minimal APIs',
        topics: ['.NET', 'ASP.NET Core', 'Minimal APIs', 'Back-end'],
        image: '/images/talks/dti-minimal-apis-techshot/cover.webp',
        gallery: [
            {
                src: '/images/talks/dti-minimal-apis-techshot/02.webp',
                alt: 'Foto 1 de Techshot · dti digital',
                width: 1206,
                height: 1334,
            },
            {
                src: '/images/talks/dti-minimal-apis-techshot/01.webp',
                alt: 'Foto 2 de Techshot · dti digital',
                width: 1206,
                height: 635,
            },
        ],
    },
    {
        id: 'webtech-days-ai-edition',
        type: 'workshop',
        title: 'Criando seu primeiro servidor MCP com banco de dados local',
        eventName: 'WebTech Days AI Edition',
        location: 'PUC Minas Lourdes',
        date: '2026-06-27',
        description:
            'Workshop no WebTech Days AI Edition sobre como conectar aplicações de IA a dados próprios com o Model Context Protocol.',
        fullDescription:
            'No WebTech Days AI Edition, conduzi ao lado de Cláudio Augusto Novaes Gontijo um workshop sobre o Model Context Protocol (MCP), uma das tecnologias que mais ganharam espaço no ecossistema de inteligência artificial.\n\nDurante o workshop, construímos com os participantes um servidor MCP integrado a um banco de dados local, mostrando na prática como conectar aplicações de IA aos próprios dados e criar soluções capazes de responder perguntas a partir de informações estruturadas.\n\nPrincipais tópicos abordados:\n- Conceitos e arquitetura do Model Context Protocol\n- Construção de um servidor MCP\n- Integração com um banco de dados local\n- Integração com modelos de linguagem',
        topics: ['MCP', 'Inteligência Artificial', 'LLMs', 'Banco de dados'],
        image: '/images/talks/webtech-days-ai-edition/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-days-ai-edition/02.webp',
                alt: 'Foto 1 de WebTech Days AI Edition',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/webtech-days-ai-edition/01.webp',
                alt: 'Foto 2 de WebTech Days AI Edition',
                width: 1800,
                height: 2400,
            },
        ],
    },
    {
        id: 'software-engineering-10-years-workshop',
        type: 'workshop',
        title: 'APIs com Spring Boot: do zero à integração',
        eventName: '10 anos de Engenharia de Software da PUC Minas',
        location: 'PUC Minas Lourdes',
        date: '2026-05-14',
        description:
            'Workshop na comemoração dos 10 anos do curso de Engenharia de Software da PUC Minas, com uma API REST integrada a um front-end em React.',
        fullDescription:
            'Na comemoração dos 10 anos do curso de Engenharia de Software da PUC Minas, conduzi uma nova edição do workshop "APIs com Spring Boot: do zero à integração", realizado anteriormente pelo WebTech Network.\n\nOs participantes construíram do zero uma API REST com Spring Boot, da criação dos endpoints à persistência com JPA, e a integraram a um front-end em React, entendendo na prática como back-end e front-end se comunicam em aplicações reais.\n\nPrincipais tópicos abordados:\n- Criação de endpoints REST com Spring Boot\n- Persistência de dados com JPA\n- Organização da aplicação em camadas\n- Integração da API com React',
        topics: ['Java', 'Spring Boot', 'JPA', 'React', 'APIs REST'],
        image: '/images/talks/software-engineering-10-years-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/software-engineering-10-years-workshop/01.webp',
                alt: 'Foto 1 de 10 anos de Engenharia de Software da PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/02.webp',
                alt: 'Foto 2 de 10 anos de Engenharia de Software da PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/03.webp',
                alt: 'Foto 3 de 10 anos de Engenharia de Software da PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/04.webp',
                alt: 'Foto 4 de 10 anos de Engenharia de Software da PUC Minas',
                width: 960,
                height: 960,
            },
        ],
    },
    {
        id: 'webtech-spring-boot-api-2026',
        type: 'workshop',
        title: 'Do zero à integração: criando uma API com Spring Boot',
        eventName: 'WebTech Network',
        location: 'PUC Minas Lourdes',
        date: '2026-05-09',
        description:
            'Workshop prático em que os participantes construíram uma API REST com Spring Boot e a integraram a um front-end em React.',
        fullDescription:
            'Conduzi pelo WebTech Network um workshop prático em que os participantes desenvolveram do zero uma API REST com Spring Boot, aplicando conceitos essenciais como criação de endpoints, persistência com JPA e organização em camadas.\n\nNa etapa final, a API foi integrada a um front-end em React, mostrando na prática como back-end e front-end se comunicam em aplicações reais. O encontro foi pensado para quem estava dando os primeiros passos no desenvolvimento back-end.\n\nPrincipais tópicos abordados:\n- Criação de endpoints REST com Spring Boot\n- Persistência de dados com JPA\n- Organização da aplicação em camadas\n- Integração da API com React',
        topics: ['Java', 'Spring Boot', 'JPA', 'React', 'APIs REST'],
        image: '/images/talks/webtech-spring-boot-api-2026/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-spring-boot-api-2026/01.webp',
                alt: 'Foto 1 de WebTech Network',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/webtech-spring-boot-api-2026/03.webp',
                alt: 'Foto 2 de WebTech Network',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/webtech-spring-boot-api-2026/02.webp',
                alt: 'Foto 3 de WebTech Network',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'world-creativity-day-2026',
        type: 'talk',
        title: 'Criatividade não é dom, é processo',
        eventName: 'World Creativity Day 2026 · BH Mais Criativa',
        location: 'Faculdade Cotemig',
        date: '2026-04-22',
        endDate: '2026-04-23',
        description:
            'Palestra no World Creativity Day 2026 sobre o que a tecnologia ensina a respeito de criar coisas do zero.',
        fullDescription:
            'No World Creativity Day 2026, o maior festival de criatividade do mundo, apresentei a palestra "Criatividade não é dom, é processo: o que a tecnologia me ensinou sobre criar coisas do zero", em uma programação promovida pelo movimento BH Mais Criativa.\n\nTambém participei do evento como embaixador e voluntário, compartilhando como a tecnologia e a inovação ganham força quando a criatividade é tratada como um processo que pode ser aprendido, praticado e aprimorado.\n\nPrincipais tópicos abordados:\n- Criatividade como processo, e não como dom\n- O que a tecnologia ensina sobre criar do zero\n- Inovação e tecnologia a serviço de novas ideias',
        topics: ['Criatividade', 'Inovação', 'Tecnologia'],
        image: '/images/talks/world-creativity-day-2026/cover.webp',
        gallery: [
            {
                src: '/images/talks/world-creativity-day-2026/01.webp',
                alt: 'Foto 1 de World Creativity Day 2026 · BH Mais Criativa',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/world-creativity-day-2026/03.webp',
                alt: 'Foto 2 de World Creativity Day 2026 · BH Mais Criativa',
                width: 837,
                height: 1116,
            },
            {
                src: '/images/talks/world-creativity-day-2026/02.webp',
                alt: 'Foto 3 de World Creativity Day 2026 · BH Mais Criativa',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'dti-docker-kt',
        type: 'talk',
        title: 'Introdução ao Docker: da teoria à prática',
        eventName: 'dti digital',
        location: 'Online',
        date: '2025-12-16',
        description:
            'Knowledge Transfer na dti digital sobre Docker, da base teórica a exemplos práticos com Docker Compose.',
        fullDescription:
            'Conduzi um Knowledge Transfer sobre Docker na dti digital, apresentando desde a base teórica até exemplos práticos de uso no dia a dia.\n\nO objetivo foi oferecer uma base sólida para que as pessoas entendessem como o Docker funciona e se sentissem seguras para aplicar esses conceitos em projetos reais dentro da empresa.\n\nPrincipais tópicos abordados:\n- Contêineres e imagens\n- Volumes e persistência de dados\n- Orquestração local com Docker Compose\n- Arquitetura geral do Docker',
        topics: ['Docker', 'Docker Compose', 'Contêineres'],
        image: '/images/talks/dti-docker-kt/cover.webp',
        gallery: [
            {
                src: '/images/talks/dti-docker-kt/01.webp',
                alt: 'Foto 1 de dti digital',
                width: 1206,
                height: 609,
            },
        ],
    },
    {
        id: 'devfest-bh-2025',
        type: 'workshop',
        title: 'Docker para iniciantes',
        eventName: 'DevFest Belo Horizonte 2025',
        location: 'PUC Minas Lourdes',
        date: '2025-11-08',
        description:
            'Workshop prático no DevFest Belo Horizonte 2025 sobre contêineres, dos conceitos fundamentais à criação de imagens e deploys.',
        fullDescription:
            'No DevFest Belo Horizonte 2025, um dos maiores eventos de tecnologia de Belo Horizonte, conduzi ao lado de Gabriel Nogueira o workshop "Docker para iniciantes", uma imersão prática no universo dos contêineres.\n\nO workshop percorreu desde os conceitos fundamentais até a criação e a otimização de imagens e o deploy de aplicações, para que os participantes saíssem prontos para levar o Docker aos próprios projetos.\n\nPrincipais tópicos abordados:\n- Conceitos fundamentais de contêineres\n- Criação e otimização de imagens\n- Execução de aplicações em contêineres\n- Deploy de aplicações com Docker',
        topics: ['Docker', 'Contêineres', 'DevOps'],
        image: '/images/talks/devfest-bh-2025/cover.webp',
        gallery: [
            {
                src: '/images/talks/devfest-bh-2025/02.webp',
                alt: 'Foto 1 de DevFest Belo Horizonte 2025',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/devfest-bh-2025/01.webp',
                alt: 'Foto 2 de DevFest Belo Horizonte 2025',
                width: 2400,
                height: 1600,
            },
        ],
    },
    {
        id: 'puc-minas-vacation-school-2025',
        type: 'workshop',
        title: 'Design Patterns em Java e aplicações modernas com React',
        eventName: '18ª Escola de Férias de Ciência da Computação da PUC Minas',
        location: 'PUC Minas Coração Eucarístico',
        date: '2025-07-30',
        endDate: '2025-07-31',
        description:
            'Uma palestra sobre Design Patterns em Java e uma oficina prática de React na 18ª Escola de Férias da PUC Minas.',
        fullDescription:
            'Na 18ª Escola de Férias de Ciência da Computação da PUC Minas, conduzi duas atividades. A primeira foi a palestra "Design Patterns em Java para aplicações escaláveis", apresentada ao lado de Eduarda Vieira Gonçalves, que mostrou na prática como os padrões de projeto transformam um código desorganizado em código profissional, escalável e sustentável.\n\nA segunda foi a oficina "Construindo aplicações modernas com ReactJS", em que os participantes estruturaram um projeto React com boas práticas de mercado, componentização e noções de arquitetura front-end, construindo uma aplicação que consome a Studio Ghibli API.\n\nPrincipais tópicos abordados:\n- Padrões de projeto na programação orientada a objetos\n- Design Patterns em Java para aplicações escaláveis\n- Estruturação de projetos em React\n- Componentização e arquitetura front-end',
        topics: ['Design Patterns', 'Java', 'React', 'Arquitetura front-end'],
        image: '/images/talks/puc-minas-vacation-school-2025/cover.webp',
        gallery: [
            {
                src: '/images/talks/puc-minas-vacation-school-2025/02.webp',
                alt: 'Foto 1 de 18ª Escola de Férias de Ciência da Computação da PUC Minas',
                width: 1206,
                height: 1276,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2025/03.webp',
                alt: 'Foto 2 de 18ª Escola de Férias de Ciência da Computação da PUC Minas',
                width: 960,
                height: 1280,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2025/01.webp',
                alt: 'Foto 3 de 18ª Escola de Férias de Ciência da Computação da PUC Minas',
                width: 1280,
                height: 960,
            },
        ],
    },
    {
        id: 'webtech-backend-journey',
        type: 'course',
        title: 'Journey Backend: mentoria em Node.js e Express',
        eventName: 'Journey Backend · WebTech Network e LEVTY',
        location: 'Online',
        date: '2025-07',
        endDate: '2025-09',
        description:
            'Programa do WebTech Network em parceria com a LEVTY para impulsionar quem estava começando no back-end com Node.js e Express.',
        fullDescription:
            'O Journey Backend foi um programa do WebTech Network em parceria com a LEVTY, criado para impulsionar a carreira de quem estava começando no desenvolvimento back-end com Node.js e Express. O programa contou com mais de 500 inscritos, e a abertura oficial reuniu mais de 200 pessoas simultaneamente.\n\nComo membro da Guilda Backend, acompanhei os participantes ao longo da jornada, tirando dúvidas, trocando experiências e preparando materiais de apoio para cada etapa do programa.\n\nPrincipais tópicos abordados:\n- Desenvolvimento back-end com Node.js\n- Criação de APIs com Express\n- Mentoria e suporte técnico aos participantes\n- Produção de materiais de apoio',
        topics: ['Node.js', 'Express', 'Back-end', 'Mentoria'],
        image: '/images/talks/webtech-backend-journey/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-backend-journey/02.webp',
                alt: 'Foto 1 de Journey Backend · WebTech Network e LEVTY',
                width: 1206,
                height: 1195,
            },
            {
                src: '/images/talks/webtech-backend-journey/01.webp',
                alt: 'Foto 2 de Journey Backend · WebTech Network e LEVTY',
                width: 1206,
                height: 570,
            },
        ],
    },
    {
        id: 'assprom-web-development-course',
        type: 'course',
        title: 'Curso de HTML, CSS, Bootstrap e GitHub para jovens aprendizes',
        eventName: 'WebTech Network, Elas++ e ASSPROM',
        location: 'PUC Minas Lourdes',
        date: '2025-05',
        description:
            'Curso introdutório de desenvolvimento web para os jovens aprendizes da ASSPROM, com aulas ao longo de quatro semanas.',
        fullDescription:
            'Ao lado de Eduarda Vieira Gonçalves, ministrei um curso introdutório de HTML, CSS, Bootstrap e GitHub para os jovens aprendizes da ASSPROM, em um projeto promovido pelo WebTech Network e pelo Elas++ em parceria com a associação.\n\nAo longo de quatro semanas de aulas, o objetivo foi apresentar os fundamentos do desenvolvimento web e ampliar a visão dos participantes sobre as possibilidades da área de tecnologia, até a apresentação das páginas criadas por eles.\n\nPrincipais tópicos abordados:\n- Estrutura de páginas com HTML\n- Estilização com CSS\n- Layouts responsivos com Bootstrap\n- Versionamento e publicação com Git e GitHub',
        topics: ['HTML', 'CSS', 'Bootstrap', 'GitHub'],
        image: '/images/talks/assprom-web-development-course/cover.webp',
        gallery: [
            {
                src: '/images/talks/assprom-web-development-course/01.webp',
                alt: 'Foto 1 de WebTech Network, Elas++ e ASSPROM',
                width: 1206,
                height: 891,
            },
            {
                src: '/images/talks/assprom-web-development-course/03.webp',
                alt: 'Foto 2 de WebTech Network, Elas++ e ASSPROM',
                width: 1206,
                height: 896,
            },
            {
                src: '/images/talks/assprom-web-development-course/04.webp',
                alt: 'Foto 3 de WebTech Network, Elas++ e ASSPROM',
                width: 1206,
                height: 894,
            },
            {
                src: '/images/talks/assprom-web-development-course/05.webp',
                alt: 'Foto 4 de WebTech Network, Elas++ e ASSPROM',
                width: 1206,
                height: 891,
            },
            {
                src: '/images/talks/assprom-web-development-course/06.webp',
                alt: 'Foto 5 de WebTech Network, Elas++ e ASSPROM',
                width: 1206,
                height: 888,
            },
            {
                src: '/images/talks/assprom-web-development-course/07.webp',
                alt: 'Foto 6 de WebTech Network, Elas++ e ASSPROM',
                width: 1206,
                height: 895,
            },
            {
                src: '/images/talks/assprom-web-development-course/02.webp',
                alt: 'Foto 7 de WebTech Network, Elas++ e ASSPROM',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'devfest-bh-2024',
        type: 'workshop',
        title: 'Workshop de React.js e Next.js',
        eventName: 'DevFest Belo Horizonte 2024',
        location: 'PUC Minas Lourdes',
        date: '2024-10-26',
        description:
            'Workshop no DevFest Belo Horizonte 2024, um dos maiores eventos de tecnologia da cidade, sobre os fundamentos de React.js e Next.js.',
        fullDescription:
            'No DevFest Belo Horizonte 2024, um dos maiores eventos de tecnologia de Belo Horizonte, conduzi, junto com Mariana Almeida, Nilson Deon e Alice Salin, todos membros do WebTech Network assim como eu, um workshop sobre os conceitos fundamentais de React.js e Next.js.\n\nOs participantes exploraram como esses frameworks se complementam e como utilizá-los para construir websites performáticos, bem organizados e eficientes.\n\nPrincipais tópicos abordados:\n- Componentização e props no React.js\n- Rotas e diferenciais do Next.js\n- Construção de websites com React.js e Next.js',
        topics: ['React.js', 'Next.js', 'Front-end'],
        image: '/images/talks/devfest-bh-2024/cover.webp',
        gallery: [
            {
                src: '/images/talks/devfest-bh-2024/01.webp',
                alt: 'Foto 1 de DevFest Belo Horizonte 2024',
                width: 1206,
                height: 895,
            },
            {
                src: '/images/talks/devfest-bh-2024/02.webp',
                alt: 'Foto 2 de DevFest Belo Horizonte 2024',
                width: 2400,
                height: 1599,
            },
        ],
    },
    {
        id: 'spring-mvc-full-stack-workshop',
        type: 'workshop',
        title: 'Workshop App Full Stack com Spring Boot e Spring MVC',
        location: 'PUC Minas Lourdes',
        date: '2024-09-06',
        description:
            'Laboratório prático em que os participantes desenvolveram uma aplicação full stack com Java, Spring Boot e Spring MVC.',
        fullDescription:
            'Conduzi, junto com Pedro Félix, um laboratório prático focado em Java com Spring Boot e Spring MVC, no qual os participantes desenvolveram, passo a passo, uma aplicação full stack completa.\n\nO workshop percorreu todas as camadas de uma aplicação web, da estrutura do projeto e da criação das APIs até a interface com o usuário e a persistência dos dados, sempre com foco em boas práticas.\n\nPrincipais tópicos abordados:\n- Fundamentos e estrutura do Spring Boot MVC\n- Criação e integração de APIs RESTful\n- Implementação de um front-end interativo\n- Integração com banco de dados e persistência',
        topics: ['Java', 'Spring Boot', 'Spring MVC', 'APIs REST', 'Full Stack'],
        image: '/images/talks/spring-mvc-full-stack-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/02.webp',
                alt: 'Foto 1 de Workshop App Full Stack com Spring Boot e Spring MVC',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/03.webp',
                alt: 'Foto 2 de Workshop App Full Stack com Spring Boot e Spring MVC',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/01.webp',
                alt: 'Foto 3 de Workshop App Full Stack com Spring Boot e Spring MVC',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'puc-minas-vacation-school-2024',
        type: 'workshop',
        title: 'Workshop de Pré-AEDS I',
        eventName: '17ª Escola de Férias de Ciência da Computação da PUC Minas',
        location: 'PUC Minas Coração Eucarístico',
        date: '2024-07-30',
        description:
            'Workshop de lógica de programação em C para quem estava prestes a cursar Algoritmos e Estruturas de Dados I.',
        fullDescription:
            'Na 17ª Escola de Férias de Ciência da Computação da PUC Minas, conduzi um workshop preparatório para Algoritmos e Estruturas de Dados I (AEDS I), uma das disciplinas mais importantes dos primeiros períodos da graduação.\n\nO workshop foi realizado a pedido da professora Rosilane, que identificou a necessidade de uma preparação para quem estava começando o curso. Utilizando a linguagem C, apresentei os fundamentos da lógica de programação de forma prática e acessível.\n\nPrincipais tópicos abordados:\n- Fundamentos de lógica de programação\n- Introdução à linguagem C\n- Preparação para a disciplina de AEDS I',
        topics: ['C', 'Lógica de Programação', 'Algoritmos'],
        image: '/images/talks/puc-minas-vacation-school-2024/cover.webp',
        gallery: [
            {
                src: '/images/talks/puc-minas-vacation-school-2024/02.webp',
                alt: 'Foto 1 de 17ª Escola de Férias de Ciência da Computação da PUC Minas',
                width: 960,
                height: 1280,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2024/01.webp',
                alt: 'Foto 2 de 17ª Escola de Férias de Ciência da Computação da PUC Minas',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'cotemig-code-club',
        type: 'course',
        title: 'Code Club: primeiros passos na programação para crianças',
        eventName: 'Code Club · Colégio Cotemig',
        location: 'Colégio Cotemig',
        date: '2023-04',
        endDate: '2023-07',
        description:
            'De abril a julho de 2023, conduzi aulas de HTML, CSS, Scratch e Python para crianças que davam os primeiros passos na programação.',
        fullDescription:
            'A 8ª edição do Code Club no Colégio Cotemig foi um projeto de ensino de programação para crianças, realizado de abril a julho de 2023. Comecei como mentorado, preparando-me para apresentar conteúdos e atuar como monitor, e acabei assumindo a condução das aulas como professor, auxiliando a professora responsável pelo projeto.\n\nNesse papel, planejei e conduzi aulas pensadas para despertar a curiosidade das crianças, com atividades práticas e linguagem acessível, para que cada uma construísse uma base sólida de lógica e criatividade.\n\nPrincipais tópicos abordados:\n- Lógica de programação com Scratch\n- Estrutura de páginas web com HTML\n- Estilização com CSS\n- Primeiros programas em Python',
        topics: ['Scratch', 'HTML', 'CSS', 'Python', 'Ensino de programação'],
        image: '/images/talks/cotemig-code-club/cover.webp',
        gallery: [
            {
                src: '/images/talks/cotemig-code-club/01.webp',
                alt: 'Foto 1 de Code Club · Colégio Cotemig',
                width: 1005,
                height: 1356,
            },
            {
                src: '/images/talks/cotemig-code-club/02.webp',
                alt: 'Foto 2 de Code Club · Colégio Cotemig',
                width: 1206,
                height: 676,
            },
        ],
    },
];
