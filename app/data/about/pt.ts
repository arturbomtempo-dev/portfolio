import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from '@lucide/vue';
import type { AboutContent } from '~/types/about';
import { CAREER_START_YEAR } from '~/utils/yearsOfExperience';

export function createAboutContentPt(yearsOfExperience: number, talkCount: number): AboutContent {
    return {
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
                    'Melhor Trabalho Interdisciplinar do 2º, 3º e 4º períodos no curso de Engenharia de Software na PUC Minas',
                    '1º lugar na competição interna de aprendizado na Wiv',
                    '2x reconhecido como Voluntário Destaque da Comunicação na Igreja Batista Central',
                ],
            },
            {
                icon: Users,
                title: `${yearsOfExperience}+ Anos`,
                description: 'Anos de Experiência',
                fullDescription: `Minha trajetória na tecnologia começou em ${CAREER_START_YEAR} e, ao longo desses ${yearsOfExperience} anos, venho acumulando experiências valiosas em diversas áreas do desenvolvimento de software. Trabalhei com diferentes tecnologias, metodologias e equipes, sempre buscando entregar soluções de qualidade e aprender continuamente.`,
                details: [
                    'Experiência em desenvolvimento full stack com React e Node.js, além de .NET, Spring Boot, Python e Vue.js',
                    'Experiência em startups e empresas de médio e grande porte',
                    'Trabalho com metodologias ágeis (Scrum, Kanban)',
                    'Experiência em liderança técnica e mentoria de desenvolvedores',
                    'Participação em projetos de diferentes segmentos e complexidades',
                ],
            },
            {
                icon: Presentation,
                title: `${talkCount}+ Palestras`,
                description: 'Compartilhando conhecimento e formando novos talentos',
                fullDescription:
                    'Tenho grande interesse por ensino e pela troca de conhecimento. Ao longo da minha trajetória, ministrei palestras, workshops e encontros educativos em eventos de diferentes tamanhos, sempre buscando contribuir com a formação de novos profissionais e incentivar a comunidade a evoluir em conjunto.',
                details: [
                    'Workshops por dois anos consecutivos no DevFest BH, maior evento de tecnologia da cidade, promovido pelo Google Developers Group.',
                    'Palestras na Escola de Férias de Ciência da Computação da PUC Minas',
                    'Encontros e formações como Chapter Lead no WebTech Network',
                    'Apresentações técnicas na dti digital, em formatos como Techshot e Knowledge Transfer',
                    'Palestras e cursos em instituições e eventos como a ASSPROM, o World Creativity Day e os 10 anos de Engenharia de Software da PUC Minas',
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
                    'Vue.js',
                    'Nuxt.js',
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
                techs: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Firebase', 'Supabase'],
            },
            {
                icon: Smartphone,
                title: 'Mobile',
                techs: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
            },
        ],
        testimonials: [
            {
                name: 'João Paulo Aramuni',
                role: 'Professor na PUC Minas',
                image: '/images/testimonials/joao-paulo-aramuni.webp',
                text: 'O Artur foi meu aluno nas disciplinas de Projeto de Software e Laboratório de Desenvolvimento de Software, destacando-se como um dos estudantes mais proativos e diferenciados da turma. Desde o início, demonstrou curiosidade acima da média, maturidade técnica e uma postura altamente colaborativa [...]. Fora da sala de aula, seu currículo impressiona: atua como Chapter Lead no WebTech PUC Minas, produz conteúdo para desenvolvedores e participa como palestrante em eventos da área [...]. É um talento raro em formação, com enorme potencial para se destacar rapidamente na área de tecnologia.',
            },
            {
                name: 'Eduardo Michetti',
                role: 'Desenvolvedor de Software na dti digital | MRV',
                image: '/images/testimonials/eduardo-michetti.webp',
                text: 'Excelente profissional e pessoa, que sempre atua nas tarefas com muita dedicação e competência. Está sempre disposto a compartilhar conhecimento e igualmente receptivo a aprender e a receber contribuições quando necessário.',
            },
            {
                name: 'Sâmeck Zanela Costa',
                role: 'Professor no Cotemig',
                image: '/images/testimonials/sameck-zanela-costa.webp',
                text: 'Tive o prazer de ser professor do Artur na disciplina de Banco de Dados e o recomendo com total segurança. Ele sempre se destacou pela rapidez em absorver conceitos complexos e pelo forte engajamento em buscar conhecimento além da sala de aula. Com um perfil proativo e autodidata, manteve um desempenho acadêmico excelente, sempre entregando resultados acima da média [...]. É um profissional com enorme potencial técnico e uma curva de aprendizado acelerada.',
            },
            {
                name: 'Lucas Ricardo',
                role: 'Squad Lead na dti digital | MRV',
                image: '/images/testimonials/lucas-ricardo.webp',
                text: 'Uma ascensão incrível na trajetória de desenvolvimento. O Artur manda muito bem! É muito competente e profissional.',
            },
            {
                name: 'Vitor Hugo Marcelino Santos',
                role: 'Desenvolvedor de Software na Squadra Digital | MRV',
                image: '/images/testimonials/vitor-hugo-marcelino-santos.webp',
                text: 'O Artur é um excelente profissional, sempre muito comprometido e responsável, e dá conta de tudo o que lhe é proposto.',
            },
            {
                name: 'Hugo de Paula',
                role: 'Professor na PUC Minas',
                image: '/images/testimonials/hugo-de-paula.webp',
                text: 'O Artur é um profissional dedicado, organizado, estudioso e muito competente. Preza pela qualidade dos sistemas que desenvolve e busca se aprofundar nas tecnologias que domina. Um ótimo profissional!',
            },
            {
                name: 'Eduarda Vieira',
                role: 'Desenvolvedora Web no WebTech Network',
                image: '/images/testimonials/eduarda-vieira.webp',
                text: 'Durante o segundo semestre de Engenharia de Software, tive a oportunidade de acompanhar de perto o progresso e aprendizado do Artur Bomtempo. Desde que o conheci, ele sempre demonstrou muito engajamento e disposição para ensinar e ajudar os colegas, unindo uma base técnica sólida com experiência de mercado e boas práticas. Seu raciocínio lógico, dedicação e comprometimento são diferenciais claros. Ele aprende com facilidade [...] e se adapta rapidamente aos desafios. Trabalhar com ele em projetos tem sido muito enriquecedor, tanto pela qualidade técnica que entrega quanto pela forma colaborativa e comprometida com que atua em equipe.',
            },
            {
                name: 'Arthur Chagas',
                role: 'CTO na QuickFood Technologies',
                image: '/images/testimonials/arthur-chagas.webp',
                text: 'É com grande satisfação que recomendo o Artur para oportunidades na área de programação. Durante nosso tempo de trabalho e estudo juntos, pude observar suas habilidades técnicas excepcionais e seu compromisso com a excelência. Artur é um programador talentoso, capaz de resolver problemas de forma criativa e colaborar efetivamente em equipe. Sua ética de trabalho e sua comunicação clara o tornam um colega valioso em qualquer projeto. Não hesito em recomendá-lo e tenho certeza de que ele continuará a alcançar sucesso em sua carreira.',
            },
            {
                name: 'Pedro Félix',
                role: 'Artificial Intelligence Intern na Hotmart',
                image: '/images/testimonials/pedro-felix.webp',
                text: 'O Artur é extremamente dedicado e sempre demonstrou empenho e máxima dedicação em todas as tarefas, sejam elas simples ou complexas.',
            },
            {
                name: 'Lucas Sena',
                role: 'Desenvolvedor de Software na Samsung',
                image: '/images/testimonials/lucas-sena.webp',
                text: 'Pela experiência que tenho com o Artur, posso afirmar com segurança que ele é um excelente profissional e aluno. Muito esforçado e dedicado, ele busca aprender e evoluir diariamente, requisitos de grande importância para a área de tecnologia. Além disso, possui uma base lógica sólida e habilidades de desenvolvimento de software bem consolidadas.',
            },
            {
                name: 'Letícia França',
                role: 'Designer no WebTech Network',
                image: '/images/testimonials/leticia-franca.webp',
                text: 'Acompanho o Artur desde a metade de 2023, no Ensino Médio Técnico em Informática. Ele sempre se mostrou muito esforçado, empenhado e estudioso. Ao longo desse período, desenvolvemos uma grande amizade [...]. Ele tem toda a minha admiração pela perseverança e pela paixão pelo que faz. É uma satisfação tê-lo como meu grande parceiro em projetos!',
            },
            {
                name: 'Henrique Braga',
                role: 'Co-Founder no Vidas Vividas',
                image: '/images/testimonials/henrique-braga.webp',
                text: 'Artur trabalhou comigo no Vidas Vividas e demonstrou ser muito focado no que faz, executando tudo com muita dedicação. Acima de todo o bom trabalho, sua maior característica é ter princípios e ser uma pessoa relevante no ambiente de trabalho.',
            },
            {
                name: 'Pedro Henrique Oliveira',
                role: 'Co-Founder no Vidas Vividas',
                image: '/images/testimonials/pedro-henrique-oliveira.webp',
                text: 'Ter o Artur no nosso time foi um grande prazer. Sempre disposto a aprender e a se dedicar às atividades! Desejo todo sucesso!',
            },
            {
                name: 'Thiago Porto',
                role: 'Analista de Dados no Vidas Vividas',
                image: '/images/testimonials/thiago-porto.webp',
                text: 'No período em que o Artur estagiou conosco no Vidas, foi perceptível sua eficiência, solucionando de maneira eficaz todas as demandas que lhe eram atribuídas. Sou grato por ter tido a oportunidade de tê-lo como companheiro de trabalho. Sua simpatia e empatia permitiram um ótimo convívio.',
            },
            {
                name: 'Aquila Faria',
                role: 'Designer & Videomaker no Vidas Vividas',
                image: '/images/testimonials/aquila-faria.webp',
                text: 'Artur se mostrou bastante coerente e responsável com seu trabalho durante o período em que esteve no Vidas. Realmente é, e continuará se tornando, um grande profissional!',
            },
            {
                name: 'Paulo Henrique',
                role: 'Professor no Colégio Cotemig',
                image: '/images/testimonials/paulo-henrique.webp',
                text: 'Um aluno e profissional extremamente interessado e proativo, focado na resolução de problemas e com grande interesse em inovação. Excelente desenvolvedor e sempre aprendendo novas linguagens!',
            },
            {
                name: 'Eduardo Gonçalves',
                role: 'Professor no Cotemig',
                image: '/images/testimonials/eduardo-goncalves.webp',
                text: 'O meu ex-aluno Artur Bomtempo desempenhou de forma brilhante todas as tarefas de programação ao longo do curso. Sempre atento e participativo, criou códigos muitas vezes além do solicitado pelos exercícios. Tranquilo e confiável, sei que será um programador talentoso e de grande valia para qualquer empresa, no Brasil ou até mesmo no exterior. Estarei sempre aqui para aplaudir sua caminhada pelo mundo da Tecnologia da Informação.',
            },
            {
                name: 'Mario Camargos',
                role: 'Professor no Cotemig',
                image: '/images/testimonials/mario-camargos.webp',
                text: 'O Artur Bomtempo é um aluno especial, sempre em destaque e ganhador invicto do prêmio ‘The Best’, promovido pelo Colégio Cotemig. Já desenvolveu grande parte de suas habilidades e competências como desenvolvedor, e é notável que terá uma carreira promissora. Ele se destaca pelo empenho, pelo bom raciocínio lógico e por sempre apresentar as melhores soluções. Outro diferencial é que está constantemente buscando ampliar seu conhecimento, participando de todos os cursos possíveis, dentro e fora da escola, o que o mantém sempre em posição de destaque.',
            },
            {
                name: 'Artur Coelho',
                role: 'Professor no Cotemig',
                image: '/images/testimonials/artur-coelho.webp',
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
                        'No curso de Engenharia de Software, aprofundo meus conhecimentos em desenvolvimento e modelagem de sistemas de grande escala, buscando criar soluções de alta qualidade que sigam as melhores práticas do mercado. O currículo abrange disciplinas como Arquitetura de Software, Gerência de Projetos e Teste de Software, formando uma base sólida para soluções robustas e escaláveis.',
                    activities: [
                        'Arquitetura e modelagem de software (UML, requisitos e arquitetura)',
                        'Gerência de Projetos',
                        'Teste, qualidade e manutenção de software',
                        'Desenvolvimento Web com Spring Boot e Node.js',
                        'Estruturas de Dados e Programação Orientada a Objetos',
                        'Melhor Trabalho Interdisciplinar do 2º, 3º e 4º períodos',
                    ],
                },
                {
                    year: '2024',
                    title: 'Bacharelado em Ciência da Computação',
                    institution: 'PUC Minas',
                    description:
                        'Durante o curso de Ciência da Computação, desenvolvi uma base sólida em computação, com ênfase em algoritmos e estruturas de dados. Depois, optei pela transferência para Engenharia de Software, para alinhar meus estudos aos meus objetivos profissionais e ampliar minhas competências na área.',
                    activities: [
                        'Algoritmos e Estruturas de Dados, Programação Orientada a Objetos e Desenvolvimento Web',
                        'Projeto de extensão ensinando programação para adolescentes em uma escola',
                        'Participação no WebTech Network, com iniciativas tecnológicas e organização de palestras',
                        'Monitoria de laboratório em Algoritmos e Estruturas de Dados I e Desenvolvimento de Interfaces Web',
                        'Liderança da equipe que concorreu ao prêmio de Equipe Destaque no Trabalho Interdisciplinar I, focado em front-end',
                        'Certificação de Membro Nível 1 no WebTech Network',
                    ],
                },
                {
                    year: '2021 - 2023',
                    title: 'Técnico em Informática',
                    institution: 'Colégio Cotemig',
                    description:
                        'Durante o curso técnico no Colégio Cotemig, especializei-me na criação de sistemas web e mobile, adquirindo conhecimentos sólidos em desenvolvimento de aplicações para plataformas digitais, com base em lógica de programação e fundamentos de computação.',
                    activities: [
                        'Lógica de programação em C#, bancos de dados relacionais e desenvolvimento web e mobile (Kotlin e Swift)',
                        'Atuação no projeto Code Club (abril a julho de 2023), ajudando crianças a iniciar seus estudos em informática e programação',
                        'Participação na primeira fase do V Desafio do Conhecimento da USP (2021), representando o Cotemig',
                        '7x premiado como "The Best of the Class" (2021 a 2023), pela maior média do semestre',
                        'Equipe Destaque no Cotemig Startups (2023), com a melhor média geral do programa',
                    ],
                },
            ],
            professional: [
                {
                    year: '2026 - o momento',
                    title: 'Software Engineer Intern',
                    company: 'Hotmart',
                    description:
                        'Como Software Engineer Intern, atuo no desenvolvimento de soluções de software, participando das diferentes etapas do ciclo de desenvolvimento, desde o entendimento e a análise de requisitos até a modelagem, implementação e manutenção de sistemas. A experiência envolve a aplicação de boas práticas de engenharia de software, buscando desenvolver soluções eficientes, escaláveis e alinhadas às necessidades do negócio.',
                    activities: [
                        'Entendimento e análise de requisitos junto ao time',
                        'Modelagem e implementação de novas funcionalidades',
                        'Manutenção e evolução de sistemas em produção',
                        'Aplicação de boas práticas de engenharia de software',
                        'Desenvolvimento de soluções eficientes, escaláveis e alinhadas ao negócio',
                    ],
                },
                {
                    year: '2025 - 2026',
                    title: 'Software Developer',
                    company: 'dti digital',
                    description:
                        'Fiz parte da Enterprise Inari, tendo a MRV como cliente. Minha principal responsabilidade era o suporte e a manutenção dos sistemas da empresa, com foco em .NET no back-end e React.js no front-end. Essa experiência foi uma oportunidade valiosa de aprendizado e evolução, permitindo ampliar meus conhecimentos em tecnologias modernas de desenvolvimento de software.',
                    activities: [
                        'Manutenção e evolução de aplicações com .NET no back-end',
                        'Implementação de funcionalidades e correções usando React.js',
                        'Suporte técnico aos sistemas da MRV dentro da Enterprise Inari',
                        'Colaboração em ambiente ágil com foco em qualidade e eficiência',
                        'Apresentação de um Techshot sobre Minimal APIs, construindo uma API .NET do zero para os times da dti',
                        'Condução de um Knowledge Transfer sobre Docker, da teoria à prática',
                        'Participação no Security Champions, aprendendo sobre segurança em projetos de software e aplicando esses conhecimentos no projeto Catálogo de Peças da MRV',
                    ],
                },
                {
                    year: '2024 - o momento',
                    title: 'Chapter Lead & Desenvolvedor Full Stack',
                    company: 'WebTech Network',
                    description:
                        'Como Chapter Lead no WebTech Network, projeto de extensão da PUC Minas que reúne alunos e professores na criação de soluções digitais, lidero iniciativas de formação e mentoria com foco em Back-end, orientando alunos e apoiando empresas parceiras. A função veio da minha trajetória no projeto, marcada pelo desempenho na Jornada Back-end, em parceria com a LEVTY, e pela atuação como Desenvolvedor Full Stack com React.js, Next.js, Java e Spring Boot.',
                    activities: [
                        'Direção da criação de materiais institucionais de Back-end, Front-end, Bancos de Dados e Versionamento para a capacitação de novos integrantes',
                        'Mentoria na Jornada Back-end, auxiliando alunos na criação de APIs com Node.js, Express, Docker, Knex e PostgreSQL',
                        'Mentoria da equipe Clockit no desenvolvimento de um sistema de ponto eletrônico para a PUC Minas',
                        'Desenvolvimento do site do DevFest BH 2024, o maior evento de tecnologia da cidade',
                        'Definição da arquitetura inicial de projetos e desenvolvimento de interfaces e APIs',
                        'Condução de workshops de Spring Boot e de introdução ao front-end para jovens da ASSPROM, com o projeto Elas++',
                    ],
                },
                {
                    year: '2024 - o momento',
                    title: 'Monitor Acadêmico',
                    company: 'PUC Minas',
                    description:
                        'Auxilio estudantes de Ciência da Computação, Engenharia de Software, Engenharia da Computação e Ciência de Dados em Algoritmos e Estruturas de Dados I e II, Desenvolvimento de Interfaces Web e Programação Modular. Atualmente, sou monitor de Teoria dos Grafos e Computabilidade, desenvolvendo materiais de apoio, aulas em vídeo e uma ferramenta para visualizar a execução de algoritmos de grafos.',
                    activities: [
                        'Monitoria atual de Teoria dos Grafos e Computabilidade, com algoritmos como buscas em largura e profundidade e Dijkstra',
                        'Lógica de programação, resolução de problemas e estruturas de dados, como listas, pilhas, filas e árvores',
                        'Programação orientada a objetos em Java, princípios SOLID, modularização e design patterns',
                        'Desenvolvimento web com HTML, CSS, JavaScript, JSON e AJAX, além de testes unitários',
                        'Criação do Graph Labs, de materiais complementares e de aulas em vídeo para o YouTube',
                        'Esclarecimento de dúvidas, orientação em exercícios e apoio em projetos',
                    ],
                },
                {
                    year: '2024',
                    title: 'Desenvolvedor Full Stack',
                    company: 'PUCTec',
                    description:
                        'Como Desenvolvedor Full Stack no PUCTec, hub de inovação e negócios da PUC Minas, fui responsável pela implementação de soluções no front-end e no back-end das aplicações, com um papel importante no desenvolvimento das startups apoiadas pelo projeto. Minha atuação ia da criação de interfaces intuitivas e funcionais à construção da arquitetura de servidores, garantindo soluções escaláveis e eficientes.',
                    activities: [
                        'Implementação de funcionalidades no front-end e no back-end das aplicações',
                        'Desenvolvimento de soluções para as startups apoiadas pelo hub',
                        'Criação de interfaces intuitivas e funcionais',
                        'Construção e manutenção da arquitetura de servidores',
                        'Foco em soluções escaláveis e eficientes',
                    ],
                },
                {
                    year: '2023-2024',
                    title: 'CXO & Desenvolvedor Full Stack',
                    company: 'QuickFood Technologies',
                    description:
                        'Responsável pela experiência do usuário e pelo desenvolvimento full stack da plataforma da startup. Com a QuickFood Technologies, conquistamos o 1º lugar na 12ª edição do programa Cotemig Startups, em reconhecimento à inovação da solução e à capacidade da equipe de resolver problemas reais com tecnologia, desenvolvendo soluções escaláveis em um ambiente competitivo.',
                    activities: [
                        'Desenvolvimento front-end e back-end do sistema',
                        'Construção e manutenção do chatbot usando Blip e JavaScript',
                        'Criação de fluxos conversacionais focados em eficiência e UX',
                        'Aprimoramento contínuo da usabilidade e performance da plataforma',
                        'Colaboração no planejamento de produto e definição de soluções',
                        '1º lugar na 12ª edição do programa Cotemig Startups',
                    ],
                },
                {
                    year: '2023-2024',
                    title: 'Desenvolvedor de Chatbot',
                    company: 'Wiv',
                    description:
                        'A Wiv, antiga White Wall, é especializada no desenvolvimento de aplicações conversacionais e algoritmos customizados de inteligência artificial. Como desenvolvedor, trabalhei na criação e na manutenção de chatbots com a plataforma Blip e JavaScript, contribuindo com a criação dos fluxos para garantir a melhor experiência possível a quem interage com a conversa.',
                    activities: [
                        'Criação e manutenção de chatbots com Blip e JavaScript',
                        'Construção de fluxos conversacionais focados na experiência do usuário',
                        'Integração com APIs REST e recursos externos',
                        'Colaboração em times remotos com Git e GitHub',
                        '1º lugar na competição interna de aprendizado da empresa',
                    ],
                },
                {
                    year: '2023',
                    title: 'Desenvolvedor Web',
                    company: 'Vidas Empreendimentos',
                    description:
                        'Como Desenvolvedor Web na Vidas Empreendimentos, fui responsável pela criação de sites e chatbots e pelo apoio no web design das soluções tecnológicas da empresa. Também trabalhei com gestão ágil de tarefas, documentação de processos para a arquitetura de software e técnicas de jornada e experiência do cliente.',
                    activities: [
                        'Criação de sites com WordPress e HTML/CSS',
                        'Desenvolvimento de chatbots para WhatsApp',
                        'Apoio no web design das soluções tecnológicas',
                        'Gerenciamento de tarefas no formato ágil',
                        'Elaboração de fluxogramas de processos para a arquitetura de software',
                        'Estudo e aplicação de técnicas de jornada e experiência do cliente',
                    ],
                },
            ],
        },
    };
}
