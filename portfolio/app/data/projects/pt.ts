import type { Project } from '~/types/project';

export const PROJECTS_PT: Project[] = [
    {
        id: 'portfolio',
        title: 'Portfólio Pessoal de Artur Bomtempo',
        description:
            'Site pessoal desenvolvido para apresentar minha trajetória, habilidades e principais projetos.',
        image: 'https://github.com/user-attachments/assets/bb40b211-79a4-45ea-8ba9-5f1bac978299',
        cardTechs: ['React', 'TypeScript'],
        fullDescription:
            'Este portfólio foi desenvolvido com o objetivo de apresentar de forma clara e profissional minhas principais habilidades, experiências, projetos e iniciativas na área de tecnologia. A plataforma reúne informações sobre minha trajetória, minha atuação em projetos acadêmicos e profissionais, além de destacar conteúdos como workshops, premiações e publicações.\n\nA construção do site foi pensada para refletir minha identidade como desenvolvedor, oferecendo uma navegação fluida, moderna e acessível.\n\nPrincipais características:\n- Seções dedicadas a projetos, carreira, educação e conquistas\n- Interface responsiva e organizada, com foco em clareza e experiência do usuário\n- Estrutura modular que facilita a manutenção e a expansão do conteúdo\n- Design limpo e coerente, reforçando profissionalismo e identidade visual\n- Conteúdo escrito de forma autoral para transmitir autenticidade e segurança\n\nUm projeto pessoal que consolida meu domínio em desenvolvimento front-end moderno e apresenta meu trabalho de forma profissional.',
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
        fullDescription:
            'Este projeto consiste no desenvolvimento do novo site oficial do Google Developers Group (GDG) Belo Horizonte para o ano de 2025. A plataforma apresenta os eventos da comunidade, palestras anteriores, informações institucionais e conteúdos sobre a organização, oferecendo uma experiência moderna e acessível para desenvolvedores interessados no ecossistema do GDG.\n\nMinha contribuição esteve diretamente ligada ao desenvolvimento do front-end, garantindo uma interface clara, responsiva e alinhada com a identidade visual da comunidade.\n\nPrincipais características:\n- Página oficial com informações atualizadas sobre o GDG Belo Horizonte\n- Seção dedicada a eventos e encontros da comunidade\n- Histórico de palestras e conteúdos já apresentados\n- Interface moderna e responsiva baseada em componentes reutilizáveis\n- Estrutura pensada para destacar informações relevantes e facilitar navegação\n\nUm projeto desenvolvido em colaboração para fortalecer a presença digital de uma das principais comunidades de tecnologia da região.',
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
        fullDescription:
            'Este projeto foi criado como parte de um tutorial no YouTube com o objetivo de ensinar, de forma prática e acessível, os fundamentos de React, TypeScript e Styled Components. A aplicação demonstra o processo completo de construção de um Link in Bio, uma página que centraliza links importantes, como redes sociais, portfólio e informações de contato.\n\nPrincipais características:\n- Exibição de perfil com nome, foto e breve descrição\n- Lista de links totalmente personalizável\n- Ícones de redes sociais com acesso direto\n- Interface responsiva e adaptada para uso em dispositivos móveis\n- Projeto criado com foco educacional, guiando iniciantes na construção de aplicações com React\n\nUma solução simples e funcional, ideal para quem deseja aprender desenvolvimento front-end moderno enquanto cria sua própria página de links.',
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
        fullDescription:
            'Projeto desenvolvido para a Escola de Férias de Ciência da Computação da PUC Minas, em 2025, com o objetivo de ensinar alunos iniciantes a construir aplicações completas em React. A aplicação consome dados da Studio Ghibli API para exibir uma coleção de filmes, oferecendo uma experiência prática e guiada sobre desenvolvimento front-end moderno.\n\nPrincipais características:\n- Listagem dos filmes do Studio Ghibli com informações gerais\n- Navegação fluida entre páginas e seções da aplicação\n- Interface organizada, responsiva e fácil de entender para iniciantes\n- Projeto utilizado como base para ensinar fundamentos essenciais de React\n- Abordagem orientada à prática, com foco em construção de componentes, rotas e consumo de APIs\n\nUm projeto com propósito educacional, criado para facilitar o aprendizado de desenvolvimento web moderno por meio de um exemplo real e envolvente.',
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
        fullDescription:
            'Plataforma desenvolvida por mim e parte da equipe WebTech Network para o Google Developers Group Belo Horizonte, servindo como o site oficial do DevFest BH 2024, o maior evento de tecnologia da cidade. O objetivo foi criar uma experiência completa para participantes, com informações, agenda, localização, parceiros e link de inscrição.\n\nPrincipais características:\n- Página oficial do evento com identidade visual própria e conteúdo atualizado\n- Acesso à página de inscrição e direcionamento para o sistema de credenciamento\n- Exibição de programação completa, palestras e trilhas do evento\n- Seções dedicadas para patrocinadores, media kit e informações institucionais\n- Contagem regressiva dinâmica e informações essenciais para participantes\n- Interface responsiva, rápida e otimizada para SEO\n- Desenvolvido em colaboração com equipe multidisciplinar do WebTech Network\n\nUm projeto de grande impacto, entregue em parceria com o GDG BH, com foco em qualidade, performance e experiência do usuário.',
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
        fullDescription:
            'Projeto desenvolvido durante o evento NLW Journey, da Rocketseat, com o objetivo de consolidar conceitos de desenvolvimento web moderno, tanto no front-end quanto no back-end. A plataforma simula um sistema completo de organização de viagens, permitindo gerenciar participantes, atividades e detalhes do itinerário.\n\nPrincipais características:\n- Cadastro de viagens e criação de convites personalizados\n- Registro e listagem de atividades da viagem\n- Confirmação de presença e gerenciamento de participantes\n- Exibição detalhada das informações da viagem\n- API estruturada com validação, autenticação por links e envios de email\n- Interface moderna, responsiva e fácil de navegar\n\nO projeto apresenta um conjunto sólido de funcionalidades core, com rotas backend completas, e serviu como um estudo aprofundado de arquitetura web, integração front-back e boas práticas com TypeScript.',
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
        githubUrl: 'https://github.com/arturbomtempo-dev/plann.er',
    },
    {
        id: 'craftapi',
        title: 'CraftAPI',
        description:
            'Aplicação criada para listar mobs, itens e minérios de Minecraft consumindo uma API própria.',
        image: 'https://github.com/user-attachments/assets/ad0c5022-a10e-49c1-9fab-2a29ea027c59',
        cardTechs: ['React', 'Node.js'],
        fullDescription:
            'Projeto desenvolvido na disciplina de Frameworks do curso técnico de desenvolvimento web e mobile, com foco em consolidar os estudos sobre React Hooks e consumo de APIs. A aplicação exibe informações detalhadas sobre mobs, equipamentos e minérios do Minecraft, utilizando uma API desenvolvida pela própria dupla responsável pelo projeto.\n\nPrincipais características:\n- Listagem completa de mobs, itens e minérios do Minecraft\n- Exibição de detalhes ao selecionar cada elemento\n- Integração direta com uma API própria construída exclusivamente para o projeto\n- Interface responsiva e organizada para facilitar navegação\n- Projeto criado em dupla, unindo front-end e back-end em um ecossistema unificado\n\nUm projeto essencial para reforçar práticas de React, lógica de consumo de APIs e desenvolvimento colaborativo.',
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
        fullDescription:
            'O I&N Kids foi desenvolvido durante o primeiro período da faculdade, com foco no aprendizado inicial de desenvolvimento front-end. A plataforma tem como objetivo auxiliar pais a encontrarem alternativas saudáveis e educativas para reduzir o tempo de tela das crianças, promovendo atividades offline e maior interação familiar.\n\nPrincipais características:\n- Conteúdos e orientações para diminuir o uso excessivo de dispositivos\n- Atividades offline elaboradas para diferentes faixas etárias\n- Interface simples, intuitiva e acessível para pais e responsáveis\n- Incentivo ao equilíbrio entre tecnologia e vida ativa\n- Projeto construído em equipe como parte de um trabalho interdisciplinar\n\nUma aplicação importante para consolidar fundamentos de front-end e boas práticas de desenvolvimento no início da trajetória acadêmica.',
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
        fullDescription:
            'Projeto desenvolvido para permitir o compartilhamento de mensagens natalinas de maneira interativa, combinando um chatbot com um site temático. Cada usuário acessa o conteúdo por meio de um código único, que recupera seus dados na API e exibe uma página personalizada.\n\nPrincipais características:\n- Chatbot interativo com opções temáticas e conteúdo festivo\n- Página personalizada gerada a partir de um código fornecido pelo usuário\n- Fluxos conversacionais que incluem quiz, playlist e envio de mensagens\n- Integração completa entre chatbot, API e site principal\n- Experiência pensada para ser divertida, intuitiva e acessível\n\nUm projeto marcante que uniu criação de interfaces, lógica de APIs e design de experiências conversacionais.',
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
        fullDescription:
            'Projeto desenvolvido em uma aula da Digital Innovation One com o objetivo de praticar conceitos essenciais de Front-end e introduzir estudos iniciais com Node.js. A aplicação recria a página inicial da Netflix, exibindo listas de filmes categorizados.\n\nPrincipais características:\n- Interface inspirada no layout original da Netflix\n- Seções de filmes organizadas por categorias\n- Design responsivo e compatível com diferentes dispositivos\n- Estrutura ideal para consolidar conhecimentos de front-end e lógica básica\n\nUm projeto simples, porém fundamental no processo de evolução no desenvolvimento web.',
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
        fullDescription:
            'Projeto desenvolvido durante a Front-end Week da Digital Innovation One, com o objetivo de criar uma landing page temática sobre a 4ª temporada de Stranger Things e reforçar conceitos fundamentais de HTML, CSS e JavaScript.\n\nPrincipais características:\n- Página dedicada ao universo da série, com foco no Mundo Invertido\n- Conteúdo apresentado de forma visualmente atraente e responsiva\n- Formulário integrado a um banco de dados para armazenamento de mensagens\n- Animações e seções interativas que enriquecem a navegação\n\nUm projeto ideal para aprimorar conhecimentos de front-end e integração básica com serviços externos.',
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
        fullDescription:
            'Projeto desenvolvido com o objetivo de criar uma página temática e interativa para compartilhar o significado do Natal de forma criativa.\n\nPrincipais características:\n- Layout temático com animações suaves e efeitos de rolagem\n- Seções informativas apresentadas de maneira envolvente\n- Efeitos visuais que enriquecem a experiência do usuário\n- Navegação simples, intuitiva e responsiva\n\nUm projeto focado em aprimorar habilidades de front-end, animações e construção de interfaces mais dinâmicas.',
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
        fullDescription:
            'Projeto desenvolvido como parte de um curso da B7Web com o objetivo de aprofundar conhecimentos em JavaScript, TypeScript e desenvolvimento web moderno. A aplicação reproduz o comportamento do ChatGPT, consumindo a API da OpenAI para gerar respostas em tempo real.\n\nPrincipais características:\n- Interface intuitiva inspirada na experiência do ChatGPT\n- Comunicação em tempo real com a API da OpenAI\n- Histórico de mensagens e fluxo de conversa contínuo\n- Layout moderno e responsivo\n- Projeto ideal para consolidar fundamentos de integração com APIs e construção de UIs reativas\n\nObs.: para executar localmente, é necessário configurar uma chave da API da OpenAI no arquivo .env.',
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
        fullDescription:
            'Projeto desenvolvido durante o Explorer Lab da Rocketseat, focado no aprimoramento de lógica e manipulação do DOM em JavaScript.\n\nPrincipais características:\n- Geração dinâmica de um cartão de crédito virtual\n- Validação e formatação automática dos dados inseridos\n- Interface simples, responsiva e intuitiva\n- Aplicação de máscaras em tempo real para inputs\n\nUm projeto pequeno, mas fundamental no início da minha jornada, consolidando conceitos importantes de JavaScript e desenvolvimento front-end.',
        allTechs: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://rocketpay-smoky.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/rocket-pay',
    },
];
