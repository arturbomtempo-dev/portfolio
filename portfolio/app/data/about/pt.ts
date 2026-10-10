import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from '@lucide/vue';
import type { AboutContent } from '~/types/about';

export const ABOUT_CONTENT_PT: AboutContent = {
    achievements: [
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
                'Melhor Trabalho Interdisciplinar do 1º período no curso de Ciência da Computação na PUC Minas',
                'Melhor Trabalho Interdisciplinar do 2º período no curso de Engenharia de Software na PUC Minas',
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
    ],
    techCategories: [
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
                'Express.js',
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
    ],
    testimonials: [
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
            text: 'Pela experiência que tenho com o Artur, posso afirmar com segurança que ele é um excelente profissional e aluno. Muito esforçado e dedicado, ele busca aprender e evoluir diariamente, requisitos de grande importância para a área de tecnologia. Além disso, possui uma base lógica sólida e habilidades de desenvolvimento de software bem consolidadas.',
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
            name: 'Thiago Porto',
            role: 'Analista de Dados no Vidas Vividas',
            image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/thiago-porto.jpg',
            text: 'No período em que o Artur estagiou conosco no Vidas, foi perceptível sua eficiência, solucionando de maneira eficaz todas as demandas que lhe eram atribuídas. Sou grato por ter tido a oportunidade de tê-lo como companheiro de trabalho. Sua simpatia e empatia permitiram um ótimo convívio.',
        },
        {
            name: 'Aquila Faria',
            role: 'Designer & Videomaker no Vidas Vividas',
            image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/aquila.jpg',
            text: 'Artur se mostrou bastante coerente e responsável com seu trabalho durante o período em que esteve no Vidas. Realmente é, e continuará se tornando, um grande profissional!',
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
    ],
    timeline: {
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
    },
};
