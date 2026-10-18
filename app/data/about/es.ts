import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from '@lucide/vue';
import type { AboutContent } from '~/types/about';
import { CAREER_START_YEAR } from '~/utils/yearsOfExperience';

export function createAboutContentEs(yearsOfExperience: number, talkCount: number): AboutContent {
    return {
        achievements: [
            {
                icon: Trophy,
                title: 'Premios y Reconocimientos',
                description: 'Destacados académicos y profesionales',
                fullDescription:
                    'A lo largo de mi trayectoria académica, profesional y voluntaria, tuve la oportunidad de participar en iniciativas y proyectos que resultaron en algunos premios y reconocimientos. Cada conquista representa momentos importantes de aprendizaje y evolución, reforzando mi compromiso con dedicación y mejora continua.',
                details: [
                    '7x premiado como "The Best of the Class" en Colégio Cotemig, por mayor promedio global del semestre',
                    '1º lugar en el programa Cotemig Startups con el equipo QuickFood Technologies',
                    'Certificación de Miembro Niveles 1, 2 y 3 del WebTech Network',
                    'Mejor Trabajo Interdisciplinario del 1º período en Ciencias de la Computación en la PUC Minas',
                    'Mejor Trabajo Interdisciplinario del 2º, 3º y 4º períodos en Ingeniería de Software en la PUC Minas',
                    '1º lugar en la competición interna de aprendizaje en White Wall',
                    '2x reconocido como Voluntario Destacado de Comunicación en la Iglesia Bautista Central',
                ],
            },
            {
                icon: Users,
                title: `${yearsOfExperience}+ Años`,
                description: 'Años de Experiencia',
                fullDescription: `Mi trayectoria en la tecnología comenzó en ${CAREER_START_YEAR} y, a lo largo de estos ${yearsOfExperience} años, vengo acumulando experiencias valiosas en diversas áreas del desarrollo de software. Trabajé con diferentes tecnologías, metodologías y equipos, siempre buscando entregar soluciones de calidad y aprender continuamente.`,
                details: [
                    'Experiencia en desarrollo full stack con React y Node.js, además de .NET, Spring Boot, Python y Vue.js',
                    'Experiencia en startups y empresas de mediano y gran porte',
                    'Trabajo con metodologías ágiles (Scrum, Kanban)',
                    'Experiencia en liderazgo técnico y mentoría de desarrolladores',
                    'Participación en proyectos de diferentes segmentos y complejidades',
                ],
            },
            {
                icon: Presentation,
                title: `${talkCount}+ Charlas`,
                description: 'Compartiendo conocimiento y formando nuevos talentos',
                fullDescription:
                    'Tengo gran interés por la enseñanza y el intercambio de conocimiento. A lo largo de mi trayectoria, dicté charlas, workshops y encuentros educativos en eventos de diferentes tamaños, siempre buscando contribuir con la formación de nuevos profesionales e incentivar a la comunidad a evolucionar en conjunto.',
                details: [
                    'Workshops por dos años consecutivos en DevFest BH, mayor evento de tecnología de la ciudad, promovido por Google Developers Group',
                    'Charlas en la Escuela de Vacaciones de Ciencias de la Computación de PUC Minas',
                    'Encuentros y formaciones como Chapter Lead en WebTech Network',
                    'Presentaciones técnicas en dti digital, en formatos como Techshot y Knowledge Transfer',
                    'Charlas y cursos en instituciones y eventos como ASSPROM, el World Creativity Day y los 10 años de Ingeniería de Software de la PUC Minas',
                    'Jornada Back-end del WebTech Network en asociación con LEVTY, con más de 500 inscriptos',
                    'Profesor voluntario de HTML, CSS, Python y Scratch en el proyecto Code Club',
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
                title: 'Base de Datos',
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
                role: 'Profesor en PUC Minas',
                image: '/images/testimonials/joao-paulo-aramuni.webp',
                text: 'Artur fue mi alumno en las asignaturas de Proyecto de Software y Laboratorio de Desarrollo de Software, destacándose como uno de los estudiantes más proactivos y diferenciados de la clase. Desde el inicio, demostró una curiosidad por encima del promedio, madurez técnica y una actitud altamente colaborativa [...]. Fuera del aula, su currículum impresiona: actúa como Chapter Lead en WebTech PUC Minas, produce contenido para desarrolladores y participa como ponente en eventos del área [...]. Es un talento poco común en formación, con un enorme potencial para destacarse rápidamente en el área de tecnología.',
            },
            {
                name: 'Eduardo Michetti',
                role: 'Desarrollador de Software en dti digital | MRV',
                image: '/images/testimonials/eduardo-michetti.webp',
                text: 'Excelente profesional y persona, que siempre realiza sus tareas con mucha dedicación y competencia. Está siempre dispuesto a compartir conocimiento e igualmente receptivo a aprender y a recibir contribuciones cuando es necesario.',
            },
            {
                name: 'Sâmeck Zanela Costa',
                role: 'Profesor en Cotemig',
                image: '/images/testimonials/sameck-zanela-costa.webp',
                text: 'Tuve el placer de ser profesor de Artur en la asignatura de Bases de Datos y lo recomiendo con total seguridad. Siempre se destacó por la rapidez para absorber conceptos complejos y por su fuerte compromiso en buscar conocimiento más allá del aula. Con un perfil proactivo y autodidacta, mantuvo un desempeño académico excelente, entregando siempre resultados por encima del promedio [...]. Es un profesional con un enorme potencial técnico y una curva de aprendizaje acelerada.',
            },
            {
                name: 'Lucas Ricardo',
                role: 'Squad Lead en dti digital | MRV',
                image: '/images/testimonials/lucas-ricardo.webp',
                text: 'Un ascenso increíble en su trayectoria como desarrollador. ¡Artur lo hace muy bien! Es muy competente y profesional.',
            },
            {
                name: 'Vitor Hugo Marcelino Santos',
                role: 'Desarrollador de Software en Squadra Digital | MRV',
                image: '/images/testimonials/vitor-hugo-marcelino-santos.webp',
                text: 'Artur es un excelente profesional, siempre muy comprometido y responsable, y cumple con todo lo que se le propone.',
            },
            {
                name: 'Hugo de Paula',
                role: 'Profesor en PUC Minas',
                image: '/images/testimonials/hugo-de-paula.webp',
                text: 'Artur es un profesional dedicado, organizado, estudioso y muy competente. Valora la calidad de los sistemas que desarrolla y busca profundizar en las tecnologías que domina. ¡Un profesional excelente!',
            },
            {
                name: 'Eduarda Vieira',
                role: 'Desarrolladora Web en WebTech Network',
                image: '/images/testimonials/eduarda-vieira.webp',
                text: 'Durante el segundo semestre de Ingeniería de Software, tuve la oportunidad de seguir de cerca el progreso y aprendizaje de Artur Bomtempo. Desde que lo conocí, siempre ha demostrado mucho compromiso y disposición para enseñar y ayudar a los compañeros, combinando una base técnica sólida con experiencia de mercado y buenas prácticas. Su raciocinio lógico, dedicación y compromiso son diferenciales claros. Aprende con facilidad [...] y se adapta rápidamente a los desafíos. Trabajar con él en proyectos ha sido muy enriquecedor, tanto por la calidad técnica que entrega como por la forma colaborativa y comprometida con la que actúa en equipo.',
            },
            {
                name: 'Arthur Chagas',
                role: 'CTO en QuickFood Technologies',
                image: '/images/testimonials/arthur-chagas.webp',
                text: 'Es con gran satisfacción que recomiendo a Artur para oportunidades en el área de programación. Durante nuestro tiempo de trabajo y estudio juntos, pude observar sus habilidades técnicas excepcionales y su compromiso con la excelencia. Artur es un programador talentoso, capaz de resolver problemas de forma creativa y colaborar efectivamente en equipo. Su ética de trabajo y su comunicación clara lo hacen un colega valioso en cualquier proyecto. No dudo en recomendarlo y estoy seguro de que continuará alcanzando éxito en su carrera.',
            },
            {
                name: 'Pedro Félix',
                role: 'Pasante de Inteligencia Artificial en Hotmart',
                image: '/images/testimonials/pedro-felix.webp',
                text: 'Artur es extremadamente dedicado y siempre ha demostrado empeño y máxima dedicación en todas las tareas, sean simples o complejas.',
            },
            {
                name: 'Lucas Sena',
                role: 'Desarrollador de Software en Samsung',
                image: '/images/testimonials/lucas-sena.webp',
                text: 'Por la experiencia que tengo con Artur, puedo afirmar con seguridad que es un excelente profesional y estudiante. Muy esforzado y dedicado, busca aprender y evolucionar diariamente, requisitos de gran importancia para el área de tecnología. Además, posee una base lógica sólida y habilidades de desarrollo de software bien consolidadas.',
            },
            {
                name: 'Letícia França',
                role: 'Diseñadora en WebTech Network',
                image: '/images/testimonials/leticia-franca.webp',
                text: 'Acompaño a Artur desde mediados de 2023, en la Enseñanza Media Técnica en Informática. Siempre se ha mostrado muy esforzado, comprometido y estudioso. A lo largo de este período, desarrollamos una gran amistad [...]. Tiene toda mi admiración por su perseverancia y pasión por lo que hace. ¡Es una satisfacción tenerlo como mi gran compañero en proyectos!',
            },
            {
                name: 'Henrique Braga',
                role: 'Co-Fundador en Vidas Vividas',
                image: '/images/testimonials/henrique-braga.webp',
                text: 'Artur trabajó conmigo en Vidas Vividas y demostró ser muy enfocado en lo que hace, ejecutando todo con mucha dedicación. Por encima de todo el buen trabajo, su mayor característica es tener principios y ser una persona relevante en el ambiente de trabajo.',
            },
            {
                name: 'Pedro Henrique Oliveira',
                role: 'Co-Fundador en Vidas Vividas',
                image: '/images/testimonials/pedro-henrique-oliveira.webp',
                text: '¡Tener a Artur en nuestro equipo fue un gran placer. Siempre dispuesto a aprender y a dedicarse a las actividades! ¡Le deseo todo el éxito!',
            },
            {
                name: 'Thiago Porto',
                role: 'Analista de Datos en Vidas Vividas',
                image: '/images/testimonials/thiago-porto.webp',
                text: 'En el período en que Artur hizo prácticas con nosotros en Vidas, fue perceptible su eficiencia, resolviendo de manera eficaz todas las demandas que le eran asignadas. Estoy agradecido por haber tenido la oportunidad de tenerlo como compañero de trabajo. Su simpatía y empatía permitieron una excelente convivencia.',
            },
            {
                name: 'Aquila Faria',
                role: 'Diseñador & Videomaker en Vidas Vividas',
                image: '/images/testimonials/aquila-faria.webp',
                text: 'Artur se mostró bastante coherente y responsable con su trabajo durante el período en que estuvo en Vidas. ¡Realmente es, y continuará siendo, un gran profesional!',
            },
            {
                name: 'Paulo Henrique',
                role: 'Profesor en Cotemig',
                image: '/images/testimonials/paulo-henrique.webp',
                text: 'Un estudiante y profesional extremadamente interesado y proactivo, enfocado en la resolución de problemas y con gran interés en innovación. ¡Excelente desarrollador y siempre aprendiendo nuevos lenguajes!',
            },
            {
                name: 'Eduardo Gonçalves',
                role: 'Profesor en Cotemig',
                image: '/images/testimonials/eduardo-goncalves.webp',
                text: 'Mi ex alumno Artur Bomtempo desempeñó de forma brillante todas las tareas de programación a lo largo del curso. Siempre atento y participativo, creó códigos muchas veces más allá de lo solicitado por los ejercicios. Tranquilo y confiable, sé que será un programador talentoso y de gran valor para cualquier empresa, en Brasil o incluso en el extranjero. Siempre estaré aquí para aplaudir su camino por el mundo de la Tecnología de la Información.',
            },
            {
                name: 'Mario Camargos',
                role: 'Profesor en Cotemig',
                image: '/images/testimonials/mario-camargos.webp',
                text: 'Artur Bomtempo es un estudiante especial, siempre destacado y ganador invicto del premio "The Best", promovido por el Colégio Cotemig. Ya ha desarrollado gran parte de sus habilidades y competencias como desarrollador, y es notable que tendrá una carrera prometedora. Se destaca por su empeño, buen raciocinio lógico y por siempre presentar las mejores soluciones. Otro diferencial es que está constantemente buscando ampliar su conocimiento, participando de todos los cursos posibles, dentro y fuera de la escuela, lo que lo mantiene siempre en posición destacada.',
            },
            {
                name: 'Artur Coelho',
                role: 'Profesor en Cotemig',
                image: '/images/testimonials/artur-coelho.webp',
                text: 'Estudiante muy dedicado y comprometido con las actividades propuestas, con facilidad en el área técnica y excelentes valores personales. Tiene todo para crecer personal y profesionalmente.',
            },
        ],
        timeline: {
            education: [
                {
                    year: '2025 - presente',
                    title: 'Licenciatura en Ingeniería de Software',
                    institution: 'PUC Minas',
                    description:
                        'Formación enfocada en el desarrollo y modelado de software, con énfasis en análisis, arquitectura, requisitos, calidad y fundamentos matemáticos aplicados.',
                    activities: [
                        'Desarrollo Web con Spring Boot y Node.js',
                        'Modelado de Software (UML, requisitos y arquitectura)',
                        'Calidad, pruebas y mantenimiento de software',
                        'Estructuras de Datos y Programación Orientada a Objetos',
                        'Fundamentos de Sistemas Operativos',
                    ],
                },
                {
                    year: '2024',
                    title: 'Licenciatura en Ciencias de la Computación',
                    institution: 'PUC Minas',
                    description:
                        'Formación enfocada en fundamentos teóricos y prácticos de la computación, con énfasis en algoritmos, estructuras de datos, POO y principios de ingeniería de software.',
                    activities: [
                        'Algoritmos y Estructuras de Datos',
                        'Programación Orientada a Objetos',
                        'Introducción a la Ingeniería de Software',
                        'Desarrollo Web con HTML, CSS, JavaScript y Java (Spark)',
                        'Programación con Arduino',
                    ],
                },
                {
                    year: '2021 - 2023',
                    title: 'Técnico en Informática',
                    institution: 'Colégio Cotemig',
                    description:
                        'Formación técnica enfocada en el desarrollo práctico de aplicaciones web y móviles, con profundización en lógica de programación y fundamentos de computación.',
                    activities: [
                        'Lógica de Programación en C#',
                        'Desarrollo Web con HTML, CSS y JavaScript',
                        'Modelado y creación de bases de datos relacionales',
                        'Introducción al desarrollo móvil (Kotlin y Swift)',
                        'Fundamentos de Redes de Computadores',
                    ],
                },
            ],
            professional: [
                {
                    year: '2026 - presente',
                    title: 'Pasante de Ingeniería de Software',
                    company: 'Hotmart',
                    description:
                        'Como Pasante de Ingeniería de Software, trabajo en el desarrollo de soluciones de software, participando en las diferentes etapas del ciclo de desarrollo, desde la comprensión y el análisis de requisitos hasta el modelado, la implementación y el mantenimiento de sistemas. La experiencia implica aplicar buenas prácticas de ingeniería de software, buscando desarrollar soluciones eficientes, escalables y alineadas con las necesidades del negocio.',
                    activities: [
                        'Comprensión y análisis de requisitos junto al equipo',
                        'Modelado e implementación de nuevas funcionalidades',
                        'Mantenimiento y evolución de sistemas en producción',
                        'Aplicación de buenas prácticas de ingeniería de software',
                        'Desarrollo de soluciones eficientes, escalables y alineadas con el negocio',
                    ],
                },
                {
                    year: '2025 - 2026',
                    title: 'Desarrollador de Software',
                    company: 'dti digital',
                    description:
                        'Formé parte de la Enterprise Inari, con MRV como cliente. Mi principal responsabilidad era el soporte y el mantenimiento de los sistemas de la empresa, con foco en .NET en el back-end y React.js en el front-end. Esta experiencia fue una valiosa oportunidad de aprendizaje y evolución, que me permitió ampliar mis conocimientos en tecnologías modernas de desarrollo de software.',
                    activities: [
                        'Mantenimiento y evolución de aplicaciones con .NET en el backend',
                        'Implementación de funcionalidades y correcciones usando React.js',
                        'Soporte técnico a los sistemas de MRV dentro de Enterprise Inari',
                        'Colaboración en ambiente ágil con enfoque en calidad y eficiencia',
                        'Presentación de un Techshot sobre Minimal APIs, construyendo una API .NET desde cero para los equipos de dti',
                        'Conducción de un Knowledge Transfer sobre Docker, de la teoría a la práctica',
                        'Participación en Security Champions, aprendiendo sobre seguridad en proyectos de software y aplicando esos conocimientos en el proyecto Catálogo de Piezas de MRV',
                    ],
                },
                {
                    year: '2024 - presente',
                    title: 'Chapter Lead & Desarrollador Full Stack',
                    company: 'WebTech Network',
                    description:
                        'Liderazgo técnico y desarrollo full stack en proyectos e iniciativas de formación dentro de WebTech.',
                    activities: [
                        'Desarrollo de interfaces y APIs con React.js, Next.js, Java y Spring Boot',
                        'Definición de arquitectura e implementación de soluciones digitales para proyectos internos y socios',
                        'Creación de materiales técnicos y estructurados de aprendizaje para nuevos integrantes',
                        'Mentoría en Backend, Frontend, bases de datos y control de versiones',
                        'Conducción de workshops, charlas y orientación técnica en proyectos como DevFest, ASSPROM y Journey Backend',
                    ],
                },
                {
                    year: '2024 - presente',
                    title: 'Monitor Académico',
                    company: 'PUC Minas',
                    description:
                        'Ayudo a estudiantes de Ciencias de la Computación, Ingeniería de Software, Ingeniería de la Computación y Ciencia de Datos en Algoritmos y Estructuras de Datos I y II, Desarrollo de Interfaces Web y Programación Modular. Actualmente, soy monitor de Teoría de Grafos y Computabilidad, desarrollando materiales de apoyo, clases en video y una herramienta para visualizar la ejecución de algoritmos de grafos.',
                    activities: [
                        'Monitoría actual de Teoría de Grafos y Computabilidad, con algoritmos como búsqueda en anchura y en profundidad y Dijkstra',
                        'Lógica de programación, resolución de problemas y estructuras de datos, como listas, pilas, colas y árboles',
                        'Programación orientada a objetos en Java, principios SOLID, modularización y design patterns',
                        'Desarrollo web con HTML, CSS, JavaScript, JSON y AJAX, además de pruebas unitarias',
                        'Creación de Graph Labs, de materiales complementarios y de clases en video para YouTube',
                        'Aclaración de dudas, orientación en ejercicios y apoyo en proyectos',
                    ],
                },
                {
                    year: '2024',
                    title: 'Desarrollador Full Stack',
                    company: 'PUCTec',
                    description:
                        'Desarrollo full stack de soluciones digitales para startups apoyadas por el hub de innovación.',
                    activities: [
                        'Implementación de funcionalidades en frontend y backend',
                        'Creación de interfaces intuitivas y funcionales',
                        'Construcción y mantenimiento de la arquitectura de servidores',
                        'Apoyo técnico en el desarrollo de soluciones escalables',
                    ],
                },
                {
                    year: '2023-2024',
                    title: 'CXO & Desarrollador Full Stack',
                    company: 'QuickFood Technologies',
                    description:
                        'Responsable de la experiencia del usuario y del desarrollo full stack de la plataforma de la startup.',
                    activities: [
                        'Desarrollo frontend y backend del sistema',
                        'Construcción y mantenimiento del chatbot usando Blip y JavaScript',
                        'Creación de flujos conversacionales enfocados en eficiencia y UX',
                        'Mejora continua de la usabilidad y rendimiento de la plataforma',
                        'Colaboración en la planificación de producto y definición de soluciones',
                    ],
                },
                {
                    year: '2023-2024',
                    title: 'Desarrollador de Chatbot',
                    company: 'White Wall',
                    description:
                        'Desarrollo y mantenimiento de chatbots y flujos conversacionales para diferentes clientes.',
                    activities: [
                        'Creación y mantenimiento de chatbots usando Blip y JavaScript',
                        'Construcción de flujos conversacionales enfocados en UX',
                        'Integración con APIs REST y recursos externos',
                        'Colaboración en equipos remotos utilizando Git y GitHub',
                    ],
                },
                {
                    year: '2023',
                    title: 'Desarrollador Web',
                    company: 'Vidas Empreendimentos',
                    description:
                        'Trabajo en el desarrollo de sitios web y soluciones digitales para clientes del área de marketing.',
                    activities: [
                        'Creación de sitios web en WordPress y HTML/CSS',
                        'Desarrollo de chatbots para WhatsApp',
                        'Apoyo en diseño web y UX de las soluciones digitales',
                        'Gestión de tareas usando metodologías ágiles',
                        'Elaboración de diagramas de flujo y documentación de procesos',
                    ],
                },
            ],
        },
    };
}
