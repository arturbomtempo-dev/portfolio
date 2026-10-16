import type { SpeakingEvent } from '~/types/event';

export const EVENTS_PT: SpeakingEvent[] = [
    {
        id: 'io-extended-bh-2025',
        type: 'talk',
        title: 'O que há de novo no ecossistema web do Google',
        eventName: 'Google I/O Extended Belo Horizonte 2025',
        location: 'Belo Horizonte, MG',
        date: '2025-07-19',
        description:
            'Palestra sobre os principais anúncios do Google I/O para desenvolvedores web e como aplicá-los em projetos reais.',
        fullDescription:
            'Apresentei, no Google I/O Extended Belo Horizonte, um panorama das principais novidades anunciadas pelo Google para o desenvolvimento web, com foco no que já pode ser aplicado no dia a dia de quem constrói aplicações modernas.\n\nA palestra combinou contexto, demonstrações ao vivo e recomendações práticas para que cada participante saísse com próximos passos claros.\n\nPrincipais tópicos abordados:\n- Novas APIs da plataforma web e seu suporte nos navegadores\n- Ferramentas de desempenho e as métricas Core Web Vitals\n- Recursos de inteligência artificial integrados ao navegador\n- Como adotar as novidades de forma gradual e segura',
        topics: ['Web', 'Performance', 'Google I/O', 'Inteligência Artificial'],
        image: '/images/events/io-extended-bh-2025.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-1.webp',
                alt: 'Foto 1 de Google I/O Extended Belo Horizonte 2025',
            },
            {
                src: '/images/events/placeholders/photo-2.webp',
                alt: 'Foto 2 de Google I/O Extended Belo Horizonte 2025',
            },
            {
                src: '/images/events/placeholders/photo-3.webp',
                alt: 'Foto 3 de Google I/O Extended Belo Horizonte 2025',
            },
            {
                src: '/images/events/placeholders/photo-4.webp',
                alt: 'Foto 4 de Google I/O Extended Belo Horizonte 2025',
            },
        ],
        eventUrl: 'https://gdgbh.com.br/',
    },
    {
        id: 'curso-javascript-para-iniciantes',
        type: 'course',
        title: 'Curso de JavaScript para Iniciantes',
        eventName: 'Canal Artur Bomtempo no YouTube',
        location: 'Online',
        date: '2025-07-11',
        description:
            'Curso gratuito e prático que apresenta os fundamentos de JavaScript para quem está começando na programação.',
        fullDescription:
            'Criei um curso gratuito de JavaScript para iniciantes, publicado no YouTube, com o objetivo de tornar o primeiro contato com a programação mais simples, prático e acolhedor.\n\nCada aula combina explicação conceitual com exercícios guiados, para que os alunos pratiquem desde o primeiro momento.\n\nPrincipais tópicos abordados:\n- Variáveis, tipos de dados e operadores\n- Estruturas condicionais e de repetição\n- Funções, arrays e objetos\n- Manipulação do DOM com projetos práticos',
        topics: ['JavaScript', 'Lógica de Programação', 'Front-end', 'Iniciantes'],
        image: '/images/events/curso-javascript-para-iniciantes.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-5.webp',
                alt: 'Foto 1 de Canal Artur Bomtempo no YouTube',
            },
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 2 de Canal Artur Bomtempo no YouTube',
            },
            {
                src: '/images/events/placeholders/photo-1.webp',
                alt: 'Foto 3 de Canal Artur Bomtempo no YouTube',
            },
        ],
        recordingUrl:
            'https://youtube.com/playlist?list=PLeBlAOvjkM5huodqseyXgkQanu_CEtsUq&si=e_nciQcHwoLUG_MY',
    },
    {
        id: 'lives-programacao-orientada-a-objetos',
        type: 'course',
        title: 'Lives de Programação Orientada a Objetos',
        eventName: 'Canal Artur Bomtempo no YouTube',
        location: 'Online',
        date: '2025-06-29',
        description:
            'Série de aulas ao vivo explicando os pilares da orientação a objetos com exemplos práticos em Java.',
        fullDescription:
            'Conduzi uma série de aulas ao vivo sobre Programação Orientada a Objetos, pensada para estudantes que estavam cursando a disciplina na faculdade e queriam reforçar os conceitos com prática.\n\nAs lives tiveram espaço aberto para perguntas, o que permitiu adaptar os exemplos às principais dúvidas da turma.\n\nPrincipais tópicos abordados:\n- Classes, objetos e encapsulamento\n- Herança e polimorfismo\n- Interfaces e classes abstratas\n- Boas práticas de modelagem orientada a objetos',
        topics: ['Java', 'Orientação a Objetos', 'Boas Práticas'],
        image: '/images/events/lives-programacao-orientada-a-objetos.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-2.webp',
                alt: 'Foto 1 de Canal Artur Bomtempo no YouTube',
            },
            {
                src: '/images/events/placeholders/photo-4.webp',
                alt: 'Foto 2 de Canal Artur Bomtempo no YouTube',
            },
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 3 de Canal Artur Bomtempo no YouTube',
            },
        ],
        recordingUrl:
            'https://youtube.com/playlist?list=PLeBlAOvjkM5jhpxHFU0SFfYf_Z3UbpUbY&si=8Uljc9fsCvsT_cuL',
    },
    {
        id: 'escola-de-ferias-puc-minas-2025',
        type: 'workshop',
        title: 'Workshop de React com Studio Ghibli API',
        eventName: 'Escola de Férias de Ciência da Computação da PUC Minas',
        location: 'PUC Minas, Belo Horizonte, MG',
        date: '2025-01-22',
        description:
            'Workshop prático de React para alunos iniciantes, construindo uma aplicação real que consome a Studio Ghibli API.',
        fullDescription:
            'Ministrei um workshop prático de React durante a Escola de Férias de Ciência da Computação da PUC Minas, voltado para alunos iniciantes que desejavam aprender os fundamentos do desenvolvimento front-end moderno.\n\nAo longo do workshop, os participantes construíram, passo a passo, uma aplicação completa em React que consome a Studio Ghibli API para exibir uma coleção de filmes, unindo teoria e prática em um exemplo real e envolvente.\n\nPrincipais tópicos abordados:\n- Fundamentos de React e componentização\n- Consumo de APIs externas com Axios\n- Roteamento com React Router DOM\n- Boas práticas de organização de projetos para iniciantes',
        topics: ['React', 'TypeScript', 'APIs', 'Front-end'],
        image: '/images/events/escola-de-ferias-puc-minas-2025.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-3.webp',
                alt: 'Foto 1 de Escola de Férias de Ciência da Computação da PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-1.webp',
                alt: 'Foto 2 de Escola de Férias de Ciência da Computação da PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-5.webp',
                alt: 'Foto 3 de Escola de Férias de Ciência da Computação da PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-2.webp',
                alt: 'Foto 4 de Escola de Férias de Ciência da Computação da PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 5 de Escola de Férias de Ciência da Computação da PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-4.webp',
                alt: 'Foto 6 de Escola de Férias de Ciência da Computação da PUC Minas',
            },
        ],
        repositoryUrl: 'https://github.com/arturbomtempo-dev/react-app-workshop',
    },
    {
        id: 'devfest-bh-2024',
        type: 'talk',
        title: 'Interfaces acessíveis com React na prática',
        eventName: 'DevFest Belo Horizonte 2024',
        location: 'Belo Horizonte, MG',
        date: '2024-11-23',
        description:
            'Palestra sobre como construir interfaces React acessíveis desde o início, sem comprometer o design nem a produtividade.',
        fullDescription:
            'No DevFest Belo Horizonte 2024, apresentei como incorporar acessibilidade ao processo de desenvolvimento de interfaces em React, tratando o tema como parte da qualidade do produto e não como uma etapa final.\n\nA apresentação trouxe exemplos de componentes reais, erros comuns e ferramentas que ajudam a validar a acessibilidade de forma contínua.\n\nPrincipais tópicos abordados:\n- HTML semântico e papéis ARIA\n- Navegação por teclado e gerenciamento de foco\n- Contraste, tipografia e estados visuais\n- Testes automatizados de acessibilidade',
        topics: ['React', 'Acessibilidade', 'Front-end', 'UX'],
        image: '/images/events/devfest-bh-2024.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 1 de DevFest Belo Horizonte 2024',
            },
            {
                src: '/images/events/placeholders/photo-3.webp',
                alt: 'Foto 2 de DevFest Belo Horizonte 2024',
            },
            {
                src: '/images/events/placeholders/photo-2.webp',
                alt: 'Foto 3 de DevFest Belo Horizonte 2024',
            },
            {
                src: '/images/events/placeholders/photo-5.webp',
                alt: 'Foto 4 de DevFest Belo Horizonte 2024',
            },
        ],
        eventUrl: 'https://gdgbh.com.br/',
        repositoryUrl: 'https://github.com/arturbomtempo-dev/devfest-bh-website',
    },
    {
        id: 'webtech-network-formacoes',
        type: 'workshop',
        title: 'Formações técnicas da comunidade WebTech Network',
        eventName: 'WebTech Network',
        location: 'Online',
        date: '2024-05-18',
        description:
            'Workshops e mentorias técnicas como Chapter Lead, formando novos desenvolvedores em back-end, front-end e boas práticas.',
        fullDescription:
            'Como Chapter Lead do WebTech Network, conduzo encontros, workshops e mentorias técnicas voltados à formação de novos desenvolvedores dentro da comunidade.\n\nOs encontros abrangem desde fundamentos de programação até tópicos mais avançados de back-end, front-end, bancos de dados e versionamento, sempre com foco em conteúdo prático e aplicável.\n\nPrincipais tópicos abordados:\n- Fundamentos de back-end e front-end\n- Bancos de dados e versionamento com Git\n- Boas práticas de desenvolvimento e arquitetura de software\n- Orientação técnica em projetos da comunidade',
        topics: ['Mentoria', 'Back-end', 'Front-end', 'Boas Práticas'],
        image: '/images/events/webtech-network-formacoes.webp',
        gallery: [
            { src: '/images/events/placeholders/photo-4.webp', alt: 'Foto 1 de WebTech Network' },
            { src: '/images/events/placeholders/photo-5.webp', alt: 'Foto 2 de WebTech Network' },
            { src: '/images/events/placeholders/photo-1.webp', alt: 'Foto 3 de WebTech Network' },
        ],
    },
];
