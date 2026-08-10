import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from 'lucide-react';
import { Achievement, Content, Project, TechCategory, Testimonial, Timeline, Talk } from './types';

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Portfólio Pessoal — Artur Bomtempo',
        description:
            'Site pessoal desenvolvido para apresentar minha trajetória, habilidades e principais projetos.',
        image: 'https://github.com/user-attachments/assets/bb40b211-79a4-45ea-8ba9-5f1bac978299',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `Este portfólio foi desenvolvido com o objetivo de apresentar de forma clara e profissional minhas principais habilidades, experiências, projetos e iniciativas na área de tecnologia. A plataforma reúne informações sobre minha trajetória, minha atuação em projetos acadêmicos e profissionais, além de destacar conteúdos como workshops, premiações e publicações.

A construção do site foi pensada para refletir minha identidade como desenvolvedor, oferecendo uma navegação fluida, moderna e acessível.

Principais características:
- Seções dedicadas a projetos, carreira, educação e conquistas
- Interface responsiva e organizada, com foco em clareza e experiência do usuário
- Estrutura modular que facilita a manutenção e a expansão do conteúdo
- Design limpo e coerente, reforçando profissionalismo e identidade visual
- Conteúdo escrito de forma autoral para transmitir autenticidade e segurança

Um projeto pessoal que consolida meu domínio em desenvolvimento front-end moderno e apresenta meu trabalho de forma profissional.`,
        allTechs: ['React', 'TypeScript', 'Zod', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://www.arturbomtempo.dev/',
        githubUrl: 'https://github.com/arturbomtempo-dev/portfolio',
    },
    {
        id: 'gdg-bh-2025',
        title: 'GDG Belo Horizonte 2025 Website',
        description:
            'Site oficial do Google Developers Group Belo Horizonte, apresentando eventos, palestras e informações da comunidade.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/refs/heads/main/resources/screenshots/gdgbh25.png',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `Este projeto consiste no desenvolvimento do novo site oficial do Google Developers Group (GDG) Belo Horizonte para o ano de 2025. A plataforma apresenta os eventos da comunidade, palestras anteriores, informações institucionais e conteúdos sobre a organização, oferecendo uma experiência moderna e acessível para desenvolvedores interessados no ecossistema do GDG.

Minha contribuição esteve diretamente ligada ao desenvolvimento do front-end, garantindo uma interface clara, responsiva e alinhada com a identidade visual da comunidade.

Principais características:
- Página oficial com informações atualizadas sobre o GDG Belo Horizonte
- Seção dedicada a eventos e encontros da comunidade
- Histórico de palestras e conteúdos já apresentados
- Interface moderna e responsiva baseada em componentes reutilizáveis
- Estrutura pensada para destacar informações relevantes e facilitar navegação

Um projeto desenvolvido em colaboração para fortalecer a presença digital de uma das principais comunidades de tecnologia da região.`,
        allTechs: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://gdgbh.com.br/',
        githubUrl: 'https://github.com/gdg-bh/site-oficial',
    },
    {
        id: 'link-in-bio',
        title: 'Link in Bio',
        description:
            'Projeto didático desenvolvido para ensinar conceitos básicos de React, TypeScript e Styled Components.',
        image: 'https://github.com/user-attachments/assets/30e30fe2-0958-41e6-b6d9-71e385d66316',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `Este projeto foi criado como parte de um tutorial no YouTube com o objetivo de ensinar, de forma prática e acessível, os fundamentos de React, TypeScript e Styled Components. A aplicação demonstra o processo completo de construção de um Link in Bio — uma página que centraliza links importantes, como redes sociais, portfólio e informações de contato.

Principais características:
- Exibição de perfil com nome, foto e breve descrição
- Lista de links totalmente personalizável
- Ícones de redes sociais com acesso direto
- Interface responsiva e adaptada para uso em dispositivos móveis
- Projeto criado com foco educacional, guiando iniciantes na construção de aplicações com React

Uma solução simples e funcional, ideal para quem deseja aprender desenvolvimento front-end moderno enquanto cria sua própria página de links.`,
        allTechs: ['React', 'TypeScript', 'Styled Components', 'Vite'],
        liveUrl: 'https://www.links.arturbomtempo.dev/',
        githubUrl: 'https://github.com/arturbomtempo-dev/link-in-bio-react-youtube-tutorial',
    },
    {
        id: 'studio-ghibli-api',
        title: 'Studio Ghibli API React App',
        description:
            'Aplicação desenvolvida como projeto didático para ensinar React durante a Escola de Férias da PUC Minas.',
        image: 'https://github.com/user-attachments/assets/208932f4-4060-49f7-9bb7-f4d3247f0d78',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `Projeto desenvolvido para a Escola de Férias de Ciência da Computação da PUC Minas, em 2025, com o objetivo de ensinar alunos iniciantes a construir aplicações completas em React. A aplicação consome dados da Studio Ghibli API para exibir uma coleção de filmes, oferecendo uma experiência prática e guiada sobre desenvolvimento front-end moderno.

Principais características:
- Listagem dos filmes do Studio Ghibli com informações gerais
- Navegação fluida entre páginas e seções da aplicação
- Interface organizada, responsiva e fácil de entender para iniciantes
- Projeto utilizado como base para ensinar fundamentos essenciais de React
- Abordagem orientada à prática, com foco em construção de componentes, rotas e consumo de APIs

Um projeto com propósito educacional, criado para facilitar o aprendizado de desenvolvimento web moderno por meio de um exemplo real e envolvente.`,
        allTechs: [
            'React',
            'TypeScript',
            'Axios',
            'React Router DOM',
            'React Icons',
            'Tailwind CSS',
            'Prettier',
        ],
        liveUrl: 'https://studio-ghibli-react.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/react-app-workshop',
    },
    {
        id: 'devfest-bh-2024',
        title: 'DevFest BH 2024 Website',
        description:
            'Site oficial desenvolvido para o maior evento de tecnologia de Belo Horizonte, promovido pelo Google Developers Group.',
        image: 'https://github.com/user-attachments/assets/1b43e564-ae07-4bdf-a6ec-92f5884e2b12',
        cardTechs: ['Next.js', 'TypeScript'],
        fullDescription: `Plataforma desenvolvida por mim e parte da equipe WebTech Network para o Google Developers Group Belo Horizonte, servindo como o site oficial do DevFest BH 2024 — o maior evento de tecnologia da cidade. O objetivo foi criar uma experiência completa para participantes, com informações, agenda, localização, parceiros e link de inscrição.

Principais características:
- Página oficial do evento com identidade visual própria e conteúdo atualizado
- Acesso à página de inscrição e direcionamento para o sistema de credenciamento
- Exibição de programação completa, palestras e trilhas do evento
- Seções dedicadas para patrocinadores, media kit e informações institucionais
- Contagem regressiva dinâmica e informações essenciais para participantes
- Interface responsiva, rápida e otimizada para SEO
- Desenvolvido em colaboração com equipe multidisciplinar do WebTech Network

Um projeto de grande impacto, entregue em parceria com o GDG BH, com foco em qualidade, performance e experiência do usuário.`,
        allTechs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://demo-devfestbh-2024.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/devfest-bh-website',
    },
    {
        id: 'planner',
        title: 'plann.er',
        description:
            'Plataforma completa de itinerários de viagem desenvolvida durante o NLW Journey da Rocketseat.',
        image: 'https://github.com/user-attachments/assets/18dbb5f1-7a6b-4972-b26a-6a742fe5bf66',
        cardTechs: ['Node.js', 'React', 'TypeScript'],
        fullDescription: `Projeto desenvolvido durante o evento NLW Journey, da Rocketseat, com o objetivo de consolidar conceitos de desenvolvimento web moderno, tanto no front-end quanto no back-end. A plataforma simula um sistema completo de organização de viagens, permitindo gerenciar participantes, atividades e detalhes do itinerário.

Principais características:
- Cadastro de viagens e criação de convites personalizados
- Registro e listagem de atividades da viagem
- Confirmação de presença e gerenciamento de participantes
- Exibição detalhada das informações da viagem
- API estruturada com validação, autenticação por links e envios de email
- Interface moderna, responsiva e fácil de navegar

O projeto apresenta um conjunto sólido de funcionalidades core, com rotas backend completas, e serviu como um estudo aprofundado de arquitetura web, integração front-back e boas práticas com TypeScript.`,
        allTechs: [
            'Node.js',
            'TypeScript',
            'Fastify',
            'Prisma',
            'React',
            'Axios',
            'Tailwind CSS',
            'Nodemailer',
            'Day.js',
            'Zod',
        ],
        liveUrl: '#',
        githubUrl: 'https://github.com/arturbomtempo-dev/plann.er',
    },
    {
        id: 'craftapi',
        title: 'CraftAPI',
        description:
            'Aplicação criada para listar mobs, itens e minérios de Minecraft consumindo uma API própria.',
        image: 'https://github.com/user-attachments/assets/ad0c5022-a10e-49c1-9fab-2a29ea027c59',
        cardTechs: ['React', 'Node.js'],
        fullDescription: `Projeto desenvolvido na disciplina de Frameworks do curso técnico de desenvolvimento web e mobile, com foco em consolidar os estudos sobre React Hooks e consumo de APIs. A aplicação exibe informações detalhadas sobre mobs, equipamentos e minérios do Minecraft, utilizando uma API desenvolvida pela própria dupla responsável pelo projeto.

Principais características:
- Listagem completa de mobs, itens e minérios do Minecraft
- Exibição de detalhes ao selecionar cada elemento
- Integração direta com uma API própria construída exclusivamente para o projeto
- Interface responsiva e organizada para facilitar navegação
- Projeto criado em dupla, unindo front-end e back-end em um ecossistema unificado

Um projeto essencial para reforçar práticas de React, lógica de consumo de APIs e desenvolvimento colaborativo.`,
        allTechs: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Express.js', 'MongoDB'],
        liveUrl: 'https://craft-api.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/craft-api',
    },
    {
        id: 'in-kids',
        title: 'I&N Kids',
        description:
            'Plataforma criada para ajudar pais a reduzirem o tempo de tela das crianças e incentivarem atividades offline.',
        image: 'https://github.com/user-attachments/assets/82627220-3445-4de3-a4e1-908f432034a9',
        cardTechs: ['HTML', 'CSS', 'JavaScript'],
        fullDescription: `O I&N Kids foi desenvolvido durante o primeiro período da faculdade, com foco no aprendizado inicial de desenvolvimento front-end. A plataforma tem como objetivo auxiliar pais a encontrarem alternativas saudáveis e educativas para reduzir o tempo de tela das crianças, promovendo atividades offline e maior interação familiar.

Principais características:
- Conteúdos e orientações para diminuir o uso excessivo de dispositivos
- Atividades offline elaboradas para diferentes faixas etárias
- Interface simples, intuitiva e acessível para pais e responsáveis
- Incentivo ao equilíbrio entre tecnologia e vida ativa
- Projeto construído em equipe como parte de um trabalho interdisciplinar

Uma aplicação importante para consolidar fundamentos de front-end e boas práticas de desenvolvimento no início da trajetória acadêmica.`,
        allTechs: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'jQuery',
            'Node.js',
            'TypeScript',
            'Express.js',
            'MongoDB',
            'Blip',
        ],
        liveUrl: 'https://iandn-kids.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/iandn-kids',
    },
    {
        id: 'christmas-chat',
        title: 'Christmas Chat',
        description:
            'Chatbot e website interativo criado para compartilhar mensagens de Natal e Ano Novo de forma personalizada.',
        image: 'https://github.com/ArturColen/ChristmasChat/assets/96635074/080a1c76-0275-4834-a3ad-afa1c220f698',
        cardTechs: ['TypeScript', 'Node.js', 'Blip'],
        fullDescription: `Projeto desenvolvido para permitir o compartilhamento de mensagens natalinas de maneira interativa, combinando um chatbot com um site temático. Cada usuário acessa o conteúdo por meio de um código único, que recupera seus dados na API e exibe uma página personalizada.

Principais características:
- Chatbot interativo com opções temáticas e conteúdo festivo
- Página personalizada gerada a partir de um código fornecido pelo usuário
- Fluxos conversacionais que incluem quiz, playlist e envio de mensagens
- Integração completa entre chatbot, API e site principal
- Experiência pensada para ser divertida, intuitiva e acessível

Um projeto marcante que uniu criação de interfaces, lógica de APIs e design de experiências conversacionais.`,
        allTechs: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Blip',
        ],
        liveUrl:
            'https://artur-bomtempo-colen-4htrp.chat.blip.ai/?appKey=bmF0YWxpbmE6NzJiZGE3MDYtMmY3ZS00Y2NmLWFlMzItNzQ2NTBlMDZlOGNh',
        githubUrl: 'https://github.com/arturbomtempo-dev/christmas-chat',
    },
    {
        id: 'netflix-homepage',
        title: "Netflix's Homepage",
        description:
            'Clone da página inicial da Netflix desenvolvido para consolidar fundamentos de Front-end.',
        image: 'https://user-images.githubusercontent.com/96635074/208282907-fa614507-2d83-4b1f-a7be-cc038cabeb61.png',
        cardTechs: ['Node.js'],
        fullDescription: `Projeto desenvolvido em uma aula da Digital Innovation One com o objetivo de praticar conceitos essenciais de Front-end e introduzir estudos iniciais com Node.js. A aplicação recria a página inicial da Netflix, exibindo listas de filmes categorizados.

Principais características:
- Interface inspirada no layout original da Netflix
- Seções de filmes organizadas por categorias
- Design responsivo e compatível com diferentes dispositivos
- Estrutura ideal para consolidar conhecimentos de front-end e lógica básica

Um projeto simples, porém fundamental no processo de evolução no desenvolvimento web.`,
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        liveUrl: 'https://netflix-artur.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/netflix-clone',
    },
    {
        id: 'inverted-world',
        title: 'Inverted World Landing Page',
        description:
            'Landing page temática inspirada na 4ª temporada de Stranger Things, criada durante a Front-end Week da DIO.',
        image: 'https://user-images.githubusercontent.com/96635074/195481231-2a82fd4e-3547-42e8-9556-df96160db140.png',
        cardTechs: ['JavaScript'],
        fullDescription: `Projeto desenvolvido durante a Front-end Week da Digital Innovation One, com o objetivo de criar uma landing page temática sobre a 4ª temporada de Stranger Things e reforçar conceitos fundamentais de HTML, CSS e JavaScript.

Principais características:
- Página dedicada ao universo da série, com foco no Mundo Invertido
- Conteúdo apresentado de forma visualmente atraente e responsiva
- Formulário integrado a um banco de dados para armazenamento de mensagens
- Animações e seções interativas que enriquecem a navegação

Um projeto ideal para aprimorar conhecimentos de front-end e integração básica com serviços externos.`,
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        liveUrl: 'https://inverted-world-artur-bomtempo.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/inverted-world',
    },
    {
        id: 'christmas-website',
        title: 'Christmas Website',
        description:
            'Site interativo criado para transmitir o significado do Natal de forma leve e envolvente.',
        image: 'https://user-images.githubusercontent.com/96635074/209454790-2a5ffb1c-d8cd-4c59-8d80-1ef847e91517.png',
        cardTechs: ['JavaScript'],
        fullDescription: `Projeto desenvolvido com o objetivo de criar uma página temática e interativa para compartilhar o significado do Natal de forma criativa.

Principais características:
- Layout temático com animações suaves e efeitos de rolagem
- Seções informativas apresentadas de maneira envolvente
- Efeitos visuais que enriquecem a experiência do usuário
- Navegação simples, intuitiva e responsiva

Um projeto focado em aprimorar habilidades de front-end, animações e construção de interfaces mais dinâmicas.`,
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Parallax', 'GSAP', 'ScrollReveal'],
        liveUrl: 'https://christmas22.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/christmas-website',
    },
    {
        id: 'goodtimegpt',
        title: 'ChatGPT Clone',
        description:
            'Clone funcional do ChatGPT construído para estudo de desenvolvimento web e integração com APIs de IA.',
        image: 'https://github.com/ArturColen/GoodtimeGPT/assets/96635074/6a770738-16dc-4bb0-b20d-8d71539519e2',
        cardTechs: ['React', 'Next.js', 'Node.js'],
        fullDescription: `Projeto desenvolvido como parte de um curso da B7Web com o objetivo de aprofundar conhecimentos em JavaScript, TypeScript e desenvolvimento web moderno. A aplicação reproduz o comportamento do ChatGPT, consumindo a API da OpenAI para gerar respostas em tempo real.

Principais características:
- Interface intuitiva inspirada na experiência do ChatGPT
- Comunicação em tempo real com a API da OpenAI
- Histórico de mensagens e fluxo de conversa contínuo
- Layout moderno e responsivo
- Projeto ideal para consolidar fundamentos de integração com APIs e construção de UIs reativas

Obs.: para executar localmente, é necessário configurar uma chave da API da OpenAI no arquivo .env.`,
        allTechs: [
            'JavaScript',
            'TypeScript',
            'Node.js',
            'React',
            'Next.js',
            'Tailwind CSS',
            'OpenAI API',
        ],
        liveUrl: 'https://goodtimegpt.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/GoodtimeGPT.git',
    },
    {
        id: 'rocketpay',
        title: 'RocketPay',
        description: 'Gerador de cartão virtual desenvolvido durante o Explorer Lab da Rocketseat.',
        image: 'https://user-images.githubusercontent.com/96635074/196974349-1f579c57-7789-4409-a135-1e31bb68363b.png',
        cardTechs: ['JavaScript'],
        fullDescription: `Projeto desenvolvido durante o Explorer Lab da Rocketseat, focado no aprimoramento de lógica e manipulação do DOM em JavaScript.

Principais características:
- Geração dinâmica de um cartão de crédito virtual
- Validação e formatação automática dos dados inseridos
- Interface simples, responsiva e intuitiva
- Aplicação de máscaras em tempo real para inputs

Um projeto pequeno, mas fundamental no início da minha jornada, consolidando conceitos importantes de JavaScript e desenvolvimento front-end.`,
        allTechs: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://rocketpay-smoky.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/rocket-pay',
    },
];

export const contents: Content[] = [
    {
        type: 'newsletter',
        title: 'Automação de Processos',
        description: 'Como automatizar tarefas repetitivas para ganhar produtividade no dia a dia.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQGmY4FMbcE33g/article-cover_image-shrink_720_1280/B4DZqXh54pG8AM-/0/1763478846119?e=1766016000&v=beta&t=z2t8azcXmyaae8sHcp5H77cKNSDVRp_-flkgf_-waUs',
        url: 'https://www.linkedin.com/pulse/automa%C3%A7%C3%A3o-de-processos-o-poder-fazer-computador-por-voc%C3%AA-bomtempo-8qtgf/',
        platform: 'LinkedIn',
        date: '2025-11-18',
    },
    {
        type: 'newsletter',
        title: 'Além da Tecnologia',
        description: 'A importância de dominar fundamentos antes de escolher stacks e frameworks.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQH6c888A3glCg/article-cover_image-shrink_720_1280/B4DZqEJk36HwAI-/0/1763153701095?e=1766016000&v=beta&t=iZlgyCMBXZu6yj5y7oFuhBAMcIG-jts9OD4OUpVfons',
        url: 'https://www.linkedin.com/pulse/al%C3%A9m-da-tecnologia-por-que-dominar-fundamentos-vale-mais-bomtempo-8q0lf/',
        platform: 'LinkedIn',
        date: '2025-11-14',
    },
    {
        type: 'newsletter',
        title: 'Segurança além do óbvio',
        description:
            'Como pequenas brechas de segurança podem gerar grandes riscos em aplicações reais.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQE1on-G0TWjOg/article-cover_image-shrink_720_1280/B4DZpZtHILGsAQ-/0/1762441595349?e=1766016000&v=beta&t=A4_zmBWQBwuZQhi5S_UubiiK5jOpldNt0B54cRy34QE',
        url: 'https://www.linkedin.com/pulse/seguran%C3%A7a-al%C3%A9m-do-%C3%B3bvio-pequenas-brechas-grandes-artur-bomtempo-colen-glulf/',
        platform: 'LinkedIn',
        date: '2025-11-06',
    },
    {
        type: 'newsletter',
        title: 'Design Patterns e Boas Soluções',
        description:
            'Reflexões sobre como padrões de projeto influenciam a escrita de códigos mais eficientes e sustentáveis.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQFPPGoftiRMIA/article-cover_image-shrink_720_1280/B4DZo104fBHsAI-/0/1761839654632?e=1766016000&v=beta&t=gEGmYMpz22XcB2vV4AgWytQFGStG1RCt-6TujhXHsSg',
        url: 'https://www.linkedin.com/pulse/design-patterns-e-o-que-eles-nos-ensinam-sobre-boas-bomtempo-colen-ji2se/',
        platform: 'LinkedIn',
        date: '2025-10-30',
    },
    {
        type: 'article',
        title: 'Autenticação de APIs com JWT e Bcrypt',
        description: 'Guia completo de autenticação em Node.js e Express usando JWT e Bcrypt.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*I50MOlC9LSdL9nW_FRgh4g.png',
        url: 'https://medium.com/@arturbomtempo/autentica%C3%A7%C3%A3o-de-apis-em-node-js-com-jwt-e-bcrypt-2e1564d264d9',
        platform: 'Medium',
        date: '2025-08-19',
    },
    {
        type: 'video',
        title: 'Curso de Programação Modular em Java',
        description:
            'Fundamentos de modularidade, POO e boas práticas em Java com exercícios práticos.',
        thumbnail:
            'https://i.ytimg.com/vi/VYdPnCauekk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLC9vXYZwgrhSPMAlxa9QvDYybppgQ',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5hIR_G3m-DJjcDMNKMUypkH&si=DLFn9qAjuQFBW4Tj',
        platform: 'YouTube',
        date: '2025-08-14',
    },
    {
        type: 'video',
        title: 'Curso de JavaScript para Iniciantes',
        description:
            'Fundamentos de JavaScript explicados de forma prática, com exercícios e projetos.',
        thumbnail:
            'https://i.ytimg.com/vi/LrKqcRCD_zw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLBrupGGUSBvDjFswW-slSpuWGFwUg',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5huodqseyXgkQanu_CEtsUq&si=e_nciQcHwoLUG_MY',
        platform: 'YouTube',
        date: '2025-07-11',
    },
    {
        type: 'video',
        title: 'Lives de Programação Orientada a Objetos',
        description:
            'Aulas ao vivo explicando os principais conceitos de POO com exemplos práticos.',
        thumbnail:
            'https://i.ytimg.com/vi/DvZatfx5X4w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLCJQavzpa4l38nZ6EMpdnu_f6vPjQ',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5jhpxHFU0SFfYf_Z3UbpUbY&si=8Uljc9fsCvsT_cuL',
        platform: 'YouTube',
        date: '2025-06-29',
    },
    {
        type: 'video',
        title: 'Playlist de Árvore Binária de Busca',
        description:
            'Série de aulas sobre ABB com teoria e exercícios práticos implementados em Java.',
        thumbnail:
            'https://i.ytimg.com/vi/JUtUEIAO2O8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLBUd-gMKr3bdpNW2Jcd20xBm6Oetw',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5gf5vwnGKIy9Jh2AUXds-rm&si=rfCvGVGFH1NStX9n',
        platform: 'YouTube',
        date: '2025-06-19',
    },
    {
        type: 'article',
        title: 'Árvore Binária de Busca em Java',
        description:
            'Explicação prática e didática sobre o funcionamento e implementação de ABB em Java.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WtQFGUbk2zDZLP4S3SXrOw.png',
        url: 'https://medium.com/@arturbomtempo/entendendo-a-%C3%A1rvore-bin%C3%A1ria-de-busca-com-java-teoria-e-pr%C3%A1tica-9171bf57da07',
        platform: 'Medium',
        date: '2025-06-16',
    },
    {
        type: 'article',
        title: 'API REST com Spring Boot',
        description:
            'Guia introdutório para criar um CRUD completo usando Spring Boot e boas práticas.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*mIKsH2nx_9gFpMZhFY_c9w.png',
        url: 'https://medium.com/@arturbomtempo/construindo-uma-api-rest-com-spring-boot-a7e9b4e04380',
        platform: 'Medium',
        date: '2025-05-05',
    },
    {
        type: 'article',
        title: 'Noções de Complexidade',
        description:
            'Introdução clara à eficiência dos algoritmos, com exemplos práticos e explicação intuitiva.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*UhlQvYhXjY2agLv21SjO8g.png',
        url: 'https://medium.com/@arturbomtempo/noções-de-complexidade-entendendo-a-eficiência-dos-algoritmos-50d515235765',
        platform: 'Medium',
        date: '2025-03-15',
    },
    {
        type: 'video',
        title: 'Projeto Link In Bio',
        description:
            'Aula prática mostrando como criar uma aplicação em React com Vite passo a passo.',
        thumbnail:
            'https://i.ytimg.com/vi/f_1wsIr-hQw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLCiDuxgWTMt3rV9bAK0Td_2VvHf7g',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5jyuQ0c1w2e3CYH3HB4DBOd&si=Rmt2dfCMfwDdswUf',
        platform: 'YouTube',
        date: '2025-02-13',
    },
    {
        type: 'article',
        title: 'Desenvolvendo APIs com TypeScript',
        description:
            'Guia prático para configurar APIs em Node.js com TypeScript sem precisar gerar a pasta "dist".',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*GkZYXSAtTeO5cgWWdzD8oQ.jpeg',
        url: 'https://medium.com/@arturbomtempo/developing-apis-with-typescript-simplify-your-workflow-without-distribution-directories-e5c03b03769a',
        platform: 'Medium',
        date: '2024-05-21',
    },
];

export const achievements: Achievement[] = [
    {
        icon: Trophy,
        title: 'Prêmios e Reconhecimentos',
        description: 'Destaques acadêmicos e profissionais',
        fullDescription:
            'Ao longo da minha trajetória acadêmica, profissional e voluntária, tive a oportunidade de participar de iniciativas e projetos que resultaram em alguns prêmios e reconhecimentos. Cada conquista representa momentos importantes de aprendizado e evolução, reforçando meu compromisso com dedicação e melhoria contínua.',
        details: [
            '7x premiado como "The Best of the Class" no Colégio Cotemig, por maior média global do semestre',
            '1º lugar no programa Cotemig Startups com a equipe QuickFood Technologies',
            'Certificação de Membro Níveis 1, 2 e 3 do WebTech Network',
            'Melhor Trabalho Interdisciplinar do 1º período no curso de Ciência da Computação – PUC Minas',
            'Melhor Trabalho Interdisciplinar do 2º período no curso de Engenharia de Software – PUC Minas',
            '1º lugar na competição interna de aprendizado na White Wall',
            '2x reconhecido como Voluntário Destaque da Comunicação na Igreja Batista Central',
        ],
    },
    {
        icon: Users,
        title: '4+ Anos',
        description: 'Anos de Experiência',
        fullDescription:
            'Minha trajetória na tecnologia começou em 2021 e desde então venho acumulando experiências valiosas em diversas áreas do desenvolvimento de software. Trabalhei com diferentes tecnologias, metodologias e equipes, sempre buscando entregar soluções de qualidade e aprender continuamente.',
        details: [
            'Experiência em desenvolvimento full stack com foco em React e Node.js',
            'Atuação em startups e empresas de médio e grande porte',
            'Trabalho com metodologias ágeis (Scrum, Kanban)',
            'Experiência em liderança técnica e mentoria de desenvolvedores',
            'Participação em projetos de diferentes segmentos e complexidades',
        ],
    },
    {
        icon: Presentation,
        title: '7+ Palestras',
        description: 'Compartilhando conhecimento e formando novos talentos',
        fullDescription:
            'Tenho grande interesse por ensino e pela troca de conhecimento. Ao longo da minha trajetória, ministrei palestras, workshops e encontros educativos em eventos de diferentes tamanhos, sempre buscando contribuir com a formação de novos profissionais e incentivar a comunidade a evoluir em conjunto.',
        details: [
            'Workshops por dois anos consecutivos no DevFest BH, maior evento de tecnologia da cidade, promovido pelo Google Developers Group.',
            'Palestras na Escola de Férias de Ciência da Computação da PUC Minas',
            'Encontros e formações como Chapter Lead no WebTech Network',
            'Jornada Back-end do WebTech Network em parceria com a LEVTY, com mais de 500 inscritos',
            'Professor voluntário de HTML, CSS, Python e Scratch no projeto Code Club',
        ],
    },
];

export const techCategories: TechCategory[] = [
    {
        icon: Palette,
        title: 'Front-end',
        techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.js',
            'Next.js',
            'Vite',
            'Tailwind CSS',
            'jQuery',
            'Bootstrap',
            'Sass',
            'styled-components',
        ],
    },
    {
        icon: Server,
        title: 'Back-end',
        techs: [
            'Node.js',
            'Express,js',
            'NestJS',
            'Java',
            'Spring Boot',
            'Maven',
            'PHP',
            'Python',
            'Django',
            'TypeScript',
            'Prisma',
            'C#',
            '.NET',
        ],
    },
    {
        icon: Database,
        title: 'Banco de Dados',
        techs: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
    },
    {
        icon: Smartphone,
        title: 'Mobile',
        techs: ['Swift', 'Kotlin'],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: 'Hugo de Paula',
        role: 'Professor na PUC Minas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/hugo.jpg',
        text: 'O Artur é um profissional dedicado, organizado, estudioso e muito competente. Preza pela qualidade dos sistemas que desenvolve e busca se aprofundar nas tecnologias que domina. Um ótimo profissional!',
    },
    {
        name: 'Eduarda Vieira',
        role: 'Desenvolvedora Web no WebTech Network',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/eduarda-vieira.png',
        text: 'Durante o segundo semestre de Engenharia de Software, tive a oportunidade de acompanhar de perto o progresso e aprendizado do Artur Bomtempo. Desde que o conheci, ele sempre demonstrou muito engajamento e disposição para ensinar e ajudar os colegas, unindo uma base técnica sólida com experiência de mercado e boas práticas. Seu raciocínio lógico, dedicação e comprometimento são diferenciais claros. Ele aprende com facilidade [...] e se adapta rapidamente aos desafios. Trabalhar com ele em projetos tem sido muito enriquecedor, tanto pela qualidade técnica que entrega quanto pela forma colaborativa e comprometida com que atua em equipe.',
    },
    {
        name: 'Arthur Chagas',
        role: 'CTO na QuickFood Technologies',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/arthur-chagas.png',
        text: 'É com grande satisfação que recomendo o Artur para oportunidades na área de programação. Durante nosso tempo de trabalho e estudo juntos, pude observar suas habilidades técnicas excepcionais e seu compromisso com a excelência. Artur é um programador talentoso, capaz de resolver problemas de forma criativa e colaborar efetivamente em equipe. Sua ética de trabalho e sua comunicação clara o tornam um colega valioso em qualquer projeto. Não hesito em recomendá-lo e tenho certeza de que ele continuará a alcançar sucesso em sua carreira.',
    },
    {
        name: 'Pedro Félix',
        role: 'Artificial Intelligence Intern na Hotmart',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/pedro-felix.jpg',
        text: 'O Artur é extremamente dedicado e sempre demonstrou empenho e máxima dedicação em todas as tarefas, sejam elas simples ou complexas.',
    },
    {
        name: 'Lucas Sena',
        role: 'Desenvolvedor de Software na Samsung',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/lucas-sena.png',
        text: 'Pela experiência que tenho com o Artur, posso afirmar com segurança que ele é um excelente profissional e aluno. Muito esforçado e dedicado, ele busca aprender e evoluir diariamente — requisitos de grande importância para a área de tecnologia. Além disso, possui uma base lógica sólida e habilidades de desenvolvimento de software bem consolidadas.',
    },
    {
        name: 'Letícia França',
        role: 'Designer no WebTech Network',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/leticia-franca.jpg',
        text: 'Acompanho o Artur desde a metade de 2023, no Ensino Médio Técnico em Informática. Ele sempre se mostrou muito esforçado, empenhado e estudioso. Ao longo desse período, desenvolvemos uma grande amizade [...]. Ele tem toda a minha admiração pela perseverança e pela paixão pelo que faz. É uma satisfação tê-lo como meu grande parceiro em projetos!',
    },
    {
        name: 'Henrique Braga',
        role: 'Co-Founder no Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/henrique-braga.png',
        text: 'Artur trabalhou comigo no Vidas Vividas e demonstrou ser muito focado no que faz, executando tudo com muita dedicação. Acima de todo o bom trabalho, sua maior característica é ter princípios e ser uma pessoa relevante no ambiente de trabalho.',
    },
    {
        name: 'Pedro Henrique Oliveira',
        role: 'Co-Founder no Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/pedro-oliveira.jpg',
        text: 'Ter o Artur no nosso time foi um grande prazer. Sempre disposto a aprender e a se dedicar às atividades! Desejo todo sucesso!',
    },
    {
        name: 'Thiago porto',
        role: 'Analista de Dados no Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/thiago-porto.jpg',
        text: 'No período em que o Artur estagiou conosco no Vidas, foi perceptível sua eficiência, solucionando de maneira eficaz todas as demandas que lhe eram atribuídas. Sou grato por ter tido a oportunidade de tê-lo como companheiro de trabalho. Sua simpatia e empatia permitiram um ótimo convívio.',
    },
    {
        name: 'Aquila Faria',
        role: 'Designer & Videomaker no Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/aquila.jpg',
        text: 'Artur se mostrou bastante coerente e responsável com seu trabalho durante o período em que esteve no Vidas. Realmente é — e continuará se tornando — um grande profissional!',
    },
    {
        name: 'Paulo Henrique',
        role: 'Professor no Colégio Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/paulo-henrique.jpg',
        text: 'Um aluno e profissional extremamente interessado e proativo, focado na resolução de problemas e com grande interesse em inovação. Excelente desenvolvedor e sempre aprendendo novas linguagens!',
    },
    {
        name: 'Eduardo Gonçalves',
        role: 'Professor no Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/eduardo-goncalves.jpg',
        text: 'O meu ex-aluno Artur Bomtempo desempenhou de forma brilhante todas as tarefas de programação ao longo do curso. Sempre atento e participativo, criou códigos muitas vezes além do solicitado pelos exercícios. Tranquilo e confiável, sei que será um programador talentoso e de grande valia para qualquer empresa, no Brasil ou até mesmo no exterior. Estarei sempre aqui para aplaudir sua caminhada pelo mundo da Tecnologia da Informação.',
    },
    {
        name: 'Mario Camargos',
        role: 'Professor no Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/mario-camargos.jpg',
        text: 'O Artur Bomtempo é um aluno especial, sempre em destaque e ganhador invicto do prêmio ‘The Best’, promovido pelo Colégio Cotemig. Já desenvolveu grande parte de suas habilidades e competências como desenvolvedor, e é notável que terá uma carreira promissora. Ele se destaca pelo empenho, pelo bom raciocínio lógico e por sempre apresentar as melhores soluções. Outro diferencial é que está constantemente buscando ampliar seu conhecimento, participando de todos os cursos possíveis, dentro e fora da escola, o que o mantém sempre em posição de destaque.',
    },
    {
        name: 'Artur Coelho',
        role: 'Professor no Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/artur-coelho.png',
        text: 'Aluno muito dedicado e comprometido com as atividades propostas, com facilidade na área técnica e ótimos valores pessoais. Tem tudo para crescer pessoal e profissionalmente.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2025 - o momento',
            title: 'Bacharelado em Engenharia de Software',
            institution: 'PUC Minas',
            description:
                'Formação voltada para o desenvolvimento e modelagem de software, com ênfase em análise, arquitetura, requisitos, qualidade e fundamentos matemáticos aplicados.',
            activities: [
                'Desenvolvimento Web com Spring Boot e Node.js',
                'Modelagem de Software (UML, requisitos e arquitetura)',
                'Qualidade, testes e manutenção de software',
                'Estruturas de Dados e Programação Orientada a Objetos',
                'Fundamentos de Sistemas Operacionais',
            ],
        },
        {
            year: '2024',
            title: 'Bacharelado em Ciência da Computação',
            institution: 'PUC Minas',
            description:
                'Formação voltada para fundamentos teóricos e práticos da computação, com ênfase em algoritmos, estruturas de dados, POO e princípios de engenharia de software.',
            activities: [
                'Algoritmos e Estruturas de Dados',
                'Programação Orientada a Objetos',
                'Introdução à Engenharia de Software',
                'Desenvolvimento Web com HTML, CSS, JavaScript e Java (Spark)',
                'Programação com Arduino',
            ],
        },
        {
            year: '2021 - 2023',
            title: 'Técnico em Informática',
            institution: 'Colégio Cotemig',
            description:
                'Formação técnica focada no desenvolvimento prático de aplicações webe mobile, com aprofundamento em lógica de programação e fundamentos de computação.',
            activities: [
                'Lógica de Programação em C#',
                'Desenvolvimento Web com HTML, CSS e JavaScript',
                'Modelagem e criação de bancos de dados relacionais',
                'Introdução ao desenvolvimento mobile (Kotlin e Swift)',
                'Fundamentos de Redes de Computadores',
            ],
        },
    ],
    professional: [
        {
            year: '2025 - o momento',
            title: 'Software Developer',
            company: 'dti digital',
            description:
                'Atuação no suporte e manutenção de sistemas corporativos para o cliente MRV.',
            activities: [
                'Manutenção e evolução de aplicações com .NET no back-end',
                'Implementação de funcionalidades e correções usando React.js',
                'Suporte técnico aos sistemas da MRV dentro da Enterprise Inari',
                'Colaboração em ambiente ágil com foco em qualidade e eficiência',
            ],
        },
        {
            year: '2024 - o momento',
            title: 'Chapter Lead & Desenvolvedor Full Stack',
            company: 'WebTech Network',
            description:
                'Liderança técnica e desenvolvimento full stack em projetos e iniciativas de formação dentro do WebTech.',
            activities: [
                'Desenvolvimento de interfaces e APIs com React.js, Next.js, Java e Spring Boot',
                'Definição de arquitetura e implementação de soluções digitais para projetos internos e parceiros',
                'Criação de materiais técnicos e estruturados de aprendizado para novos integrantes',
                'Mentoria em Back-end, Front-end, bancos de dados e versionamento',
                'Condução de workshops, palestras e orientação técnica em projetos como DevFest, ASSPROM e Journey Back-end',
            ],
        },
        {
            year: '2025',
            title: 'Monitor de Programação e Algoritmos',
            company: 'PUC Minas',
            description:
                'Apoio aos estudantes no aprendizado de Java, lógica, POO e estruturas de dados, atuando como monitor nas disciplinas de Algoritmos e Estruturas de Dados I e II e Programação Modular.',
            activities: [
                'Orientação em Java e Programação Orientada a Objetos',
                'Auxílio em lógica, algoritmos e implementação em C e C++',
                'Suporte em estruturas de dados e técnicas de ordenação',
                'Aplicação de princípios SOLID, Design Patterns e testes com JUnit',
                'Acompanhamento de exercícios, projetos e esclarecimento de dúvidas',
            ],
        },
        {
            year: '2024',
            title: 'Desenvolvedor Full Stack',
            company: 'PUCTec',
            description:
                'Desenvolvimento full stack de soluções digitais para startups apoiadas pelo hub de inovação.',
            activities: [
                'Implementação de funcionalidades no front-end e back-end',
                'Criação de interfaces intuitivas e funcionais',
                'Construção e manutenção da arquitetura de servidores',
                'Apoio técnico no desenvolvimento de soluções escaláveis',
            ],
        },
        {
            year: '2023-2024',
            title: 'CXO & Desenvolvedor Full Stack',
            company: 'QuickFood Technologies',
            description:
                'Responsável pela experiência do usuário e pelo desenvolvimento full stack da plataforma da startup.',
            activities: [
                'Desenvolvimento front-end e back-end do sistema',
                'Construção e manutenção do chatbot usando Blip e JavaScript',
                'Criação de fluxos conversacionais focados em eficiência e UX',
                'Aprimoramento contínuo da usabilidade e performance da plataforma',
                'Colaboração no planejamento de produto e definição de soluções',
            ],
        },
        {
            year: '2023-2024',
            title: 'Desenvolvedor de Chatbot',
            company: 'White Wall',
            description:
                'Desenvolvimento e manutenção de chatbots e fluxos conversacionais para diferentes clientes.',
            activities: [
                'Criação e manutenção de chatbots usando Blip e JavaScript',
                'Construção de fluxos conversacionais focados em UX',
                'Integração com APIs REST e recursos externos',
                'Colaboração em times remotos utilizando Git e GitHub',
            ],
        },
        {
            year: '2023',
            title: 'Desenvolvedor Web',
            company: 'Vidas Empreendimentos',
            description:
                'Atuação no desenvolvimento de sites e soluções digitais para clientes da área de marketing.',
            activities: [
                'Criação de sites em WordPress e HTML/CSS',
                'Desenvolvimento de chatbots para WhatsApp',
                'Apoio no web design e UX das soluções digitais',
                'Gerenciamento de tarefas usando metodologias ágeis',
                'Elaboração de fluxogramas e documentação de processos',
            ],
        },
    ],
};

// Conteúdo inicial baseado nas palestras, workshops e cursos já mencionados no site.
// Datas, locais e links foram preenchidos com as informações disponíveis — revise e
// complete com os dados exatos de cada evento. As imagens marcadas como "placeholder"
// devem ser substituídas por fotos reais dos eventos (uma `gallery: [...]` opcional
// pode ser adicionada a qualquer item para exibir múltiplas fotos na página de detalhes).
export const talks: Talk[] = [
    {
        id: 'escola-ferias-puc-minas',
        type: 'workshop',
        title: 'Workshop de React com Studio Ghibli API',
        event: 'Escola de Férias de Ciência da Computação — PUC Minas',
        location: 'PUC Minas, Belo Horizonte, MG',
        date: '2025',
        description:
            'Workshop prático de React para alunos iniciantes, construindo uma aplicação real que consome a Studio Ghibli API.',
        fullDescription: `Ministrei um workshop prático de React durante a Escola de Férias de Ciência da Computação da PUC Minas, voltado para alunos iniciantes que desejavam aprender os fundamentos do desenvolvimento front-end moderno.

Ao longo do workshop, os participantes construíram, passo a passo, uma aplicação completa em React que consome a Studio Ghibli API para exibir uma coleção de filmes — unindo teoria e prática em um exemplo real e envolvente.

Principais tópicos abordados:
- Fundamentos de React e componentização
- Consumo de APIs externas com Axios
- Roteamento com React Router DOM
- Boas práticas de organização de projetos para iniciantes`,
        topics: ['React', 'TypeScript', 'APIs', 'Front-end'],
        image: 'https://github.com/user-attachments/assets/208932f4-4060-49f7-9bb7-f4d3247f0d78',
        url: 'https://studio-ghibli-react.vercel.app/',
    },
    {
        id: 'formacoes-webtech-network',
        type: 'talk',
        title: 'Formações, Workshops e Mentorias Técnicas',
        event: 'WebTech Network',
        location: 'Online',
        date: '2024 - o momento',
        description:
            'Condução de encontros, workshops e mentorias técnicas como Chapter Lead, formando novos desenvolvedores em back-end, front-end e boas práticas.',
        fullDescription: `Como Chapter Lead do WebTech Network, conduzo regularmente encontros, workshops e mentorias técnicas voltados à formação de novos desenvolvedores dentro da comunidade.

Esses encontros abrangem desde fundamentos de programação até tópicos mais avançados de back-end, front-end, bancos de dados e versionamento, sempre com foco em conteúdo prático e aplicável.

Principais tópicos abordados:
- Fundamentos de Back-end e Front-end
- Bancos de dados e versionamento com Git
- Boas práticas de desenvolvimento e arquitetura de software
- Orientação técnica em projetos como DevFest, ASSPROM e Jornada Back-end`,
        topics: ['Mentoria', 'Back-end', 'Front-end', 'Boas Práticas'],
        // Placeholder — substituir pela imagem oficial do evento.
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'jornada-backend-webtech-levty',
        type: 'course',
        title: 'Jornada Back-end',
        event: 'WebTech Network x LEVTY',
        location: 'Online',
        date: '2024',
        description:
            'Formação intensiva sobre desenvolvimento back-end, organizada em parceria entre o WebTech Network e a LEVTY, reunindo mais de 500 inscritos.',
        fullDescription: `A Jornada Back-end foi uma iniciativa de formação promovida pelo WebTech Network em parceria com a LEVTY, com o objetivo de introduzir e aprofundar conceitos essenciais de desenvolvimento back-end para uma audiência de mais de 500 inscritos.

Como Chapter Lead do WebTech Network, atuei na condução técnica do conteúdo, apresentando conceitos, boas práticas e exemplos práticos ao longo do evento.

Principais tópicos abordados:
- Fundamentos de APIs REST e arquitetura back-end
- Boas práticas de organização e estruturação de código
- Autenticação, segurança e tratamento de erros
- Integração entre back-end e banco de dados
- Dicas de carreira e próximos passos para quem está começando`,
        topics: ['Back-end', 'APIs REST', 'Node.js', 'Boas Práticas', 'Carreira'],
        // Placeholder — substituir pela imagem oficial do evento.
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'workshops-devfest-bh',
        type: 'workshop',
        title: 'Workshops de React',
        event: 'DevFest BH — Google Developers Group Belo Horizonte',
        location: 'Belo Horizonte, MG',
        date: '2023 - 2024',
        description:
            'Workshops práticos de React ministrados por dois anos consecutivos no maior evento de tecnologia de Belo Horizonte, promovido pelo Google Developers Group.',
        fullDescription: `Durante dois anos consecutivos, tive a oportunidade de ministrar workshops práticos de React no DevFest BH, o maior evento de tecnologia de Belo Horizonte, promovido pelo Google Developers Group (GDG BH).

Os workshops foram pensados para desenvolvedores de diferentes níveis de experiência, com foco em consolidar conceitos fundamentais de React através da construção de aplicações reais durante o próprio evento.

Principais tópicos abordados:
- Fundamentos de componentes, props e estado em React
- Hooks essenciais (useState, useEffect, entre outros)
- Boas práticas de organização de projetos front-end
- Construção de uma aplicação prática do início ao fim`,
        topics: ['React', 'JavaScript', 'TypeScript', 'Front-end'],
        image: 'https://github.com/user-attachments/assets/1b43e564-ae07-4bdf-a6ec-92f5884e2b12',
        url: 'https://gdgbh.com.br/',
    },
    {
        id: 'code-club-voluntariado',
        type: 'course',
        title: 'Professor Voluntário',
        event: 'Code Club',
        location: 'Belo Horizonte, MG',
        date: 'Atividade contínua',
        description:
            'Aulas voluntárias de HTML, CSS, Python e Scratch para crianças e jovens, incentivando os primeiros passos no mundo da programação.',
        fullDescription: `Como professor voluntário do projeto Code Club, ministro aulas introdutórias de programação para crianças e jovens, com o objetivo de despertar o interesse pela tecnologia desde cedo e tornar o aprendizado acessível e divertido.

As aulas abordam desde lógica de programação com Scratch até fundamentos de desenvolvimento web com HTML e CSS, além de uma introdução ao Python, sempre com uma abordagem lúdica e prática.

Principais tópicos abordados:
- Lógica de programação com Scratch
- Fundamentos de HTML e CSS
- Introdução à programação com Python
- Estímulo à criatividade e ao pensamento computacional`,
        topics: ['Scratch', 'HTML', 'CSS', 'Python', 'Educação'],
        // Placeholder — substituir pela imagem oficial do evento.
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    },
];

export const ui = {
    nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        talks: 'Palestras',
        content: 'Conteúdos',
        contact: 'Contato',
        logo: 'Portfólio',
    },
    home: {
        greeting: 'Eu sou',
        role: 'Desenvolvedor de Software',
        description:
            'Sempre tive o desejo de gerar impacto na vida das pessoas — e encontrei no desenvolvimento de software uma forma de transformar isso em realidade.',
        aboutButton: 'Sobre mim',
        contactButton: 'Entre em Contato',
    },
    about: {
        title: 'Sobre Mim',
        description:
            'Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com mais de 4 anos de experiência, tenho me dedicado a construir aplicações web e mobile que fazem a diferença na vida das pessoas. Meu foco é sempre entregar código limpo, escalável e que atenda às necessidades reais dos usuários.',
        techTitle: 'Tecnologias',
        testimonialsTitle: 'Depoimentos',
        educationTitle: 'Educação',
        experienceTitle: 'Experiência Profissional',
    },
    projects: {
        title: 'Projetos',
        description:
            'Alguns dos projetos que desenvolvi ao longo da minha carreira. Cada um representa um desafio único e aprendizado contínuo.',
    },
    projectDetails: {
        backButton: 'Voltar para Projetos',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código',
        aboutTitle: 'Sobre o Projeto',
        techTitle: 'Tecnologias Utilizadas',
    },
    talks: {
        title: 'Palestras & Cursos',
        description:
            'Ao longo da minha trajetória, tive a oportunidade de compartilhar conhecimento em palestras, workshops e cursos para comunidades e instituições de ensino.',
        all: 'Todos',
        talk: 'Palestras',
        workshop: 'Workshops',
        course: 'Cursos',
        learnMore: 'Saiba mais',
    },
    talkDetails: {
        backButton: 'Voltar para Palestras & Cursos',
        aboutTitle: 'Sobre o evento',
        topicsTitle: 'Temas abordados',
        galleryTitle: 'Fotos',
        visitLink: 'Acessar link do evento',
        notFoundTitle: 'Evento não encontrado',
        notFoundMessage: 'O evento que você está procurando não existe ou foi removido.',
    },
    talkBadges: {
        talk: 'Palestra',
        workshop: 'Workshop',
        course: 'Curso',
    },
    content: {
        title: 'Conteúdos',
        description:
            'Compartilho conhecimento de forma gratuita sobre desenvolvimento web, boas práticas e tecnologias modernas.',
        all: 'Todos',
        videos: 'Vídeos',
        articles: 'Artigos',
        newsletters: 'Newsletters',
    },
    contact: {
        title: 'Entre em Contato',
        description:
            'Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo através dos canais abaixo.',
        email: 'E-mail',
        phone: 'Telefone',
        location: 'Localização',
        sendMessage: 'Enviar Mensagem',
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
    },
    notFound: {
        title: '404',
        heading: 'Página não encontrada',
        message: 'A página que você está procurando não existe ou foi movida.',
        backButton: 'Voltar para Home',
    },
    footer: {
        rights: '© {year} Artur Bomtempo. Todos os direitos reservados.',
    },
    siteTitle: 'Artur Bomtempo | Portfólio',
    contentBadges: {
        video: 'Vídeo',
        article: 'Artigo',
        newsletter: 'Newsletter',
    },
    toast: {
        messageSent: 'Mensagem enviada com sucesso!',
        thankYou: 'Obrigado pelo contato. Responderei em breve!',
        errorSending: 'Erro ao enviar mensagem',
        errorDescription: 'Por favor, tente novamente mais tarde.',
        sending: 'Enviando...',
    },
    validation: {
        nameRequired: 'O nome é obrigatório',
        nameMinLength: 'O nome deve ter no mínimo 5 caracteres',
        emailRequired: 'O e-mail é obrigatório',
        emailInvalid: 'Formato de e-mail inválido',
        messageRequired: 'A mensagem é obrigatória',
        messageMinLength: 'A mensagem deve ter no mínimo 50 caracteres',
    },
};
