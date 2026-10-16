import type { Talk } from '~/types/talk';

export const TALKS_ES: Talk[] = [
    {
        id: 'webtech-nuxt-workshop',
        type: 'workshop',
        title: 'Desarrollo web moderno con Nuxt.js',
        eventName: 'WebTech Network',
        location: 'PUC Minas Lourdes',
        date: '2026-10-08',
        description:
            'Taller práctico de WebTech Network sobre cómo desarrollar aplicaciones web modernas con Nuxt.js y Vue.js.',
        fullDescription:
            'Conduje un taller práctico de WebTech Network sobre el desarrollo de aplicaciones web modernas con Nuxt.js y Vue.js, presentando una alternativa sólida al ecosistema de React y Next.js.\n\nA lo largo del encuentro, los participantes exploraron los principales recursos de Nuxt.js para construir interfaces responsivas e integrarse con APIs y servicios externos.\n\nPrincipales temas abordados:\n- Fundamentos de Vue.js y Nuxt.js\n- Principales recursos de Nuxt.js\n- Creación de interfaces responsivas\n- Integración con APIs y servicios externos',
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
        title: 'Minimal APIs: construyendo APIs más simples y eficientes',
        eventName: 'Techshot · dti digital',
        location: 'Online',
        date: '2026-08-25',
        description:
            'Techshot en dti digital sobre las Minimal APIs de ASP.NET Core, con la construcción de una API desde cero en .NET.',
        fullDescription:
            'Conduje un Techshot en dti digital sobre Minimal APIs, el enfoque de ASP.NET Core creado para desarrollar APIs HTTP de forma más directa y con menos código, sin renunciar a los recursos que necesita una aplicación back-end.\n\nAdemás de explicar cómo funcionan las Minimal APIs y compararlas con el desarrollo basado en Controllers, analizamos cuándo tiene sentido este enfoque, sus ventajas y sus limitaciones. En la parte práctica, creamos una API desde cero en .NET y la evolucionamos de una implementación simple a una estructura organizada y cercana a un proyecto real.\n\nPrincipales temas abordados:\n- Qué son las Minimal APIs y cómo funcionan\n- Comparación con APIs basadas en Controllers\n- Endpoints, rutas y métodos HTTP\n- Organización de proyectos con Minimal APIs',
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
        title: 'Creando tu primer servidor MCP con una base de datos local',
        eventName: 'WebTech Days AI Edition',
        location: 'PUC Minas Lourdes',
        date: '2026-06-27',
        description:
            'Taller en WebTech Days AI Edition sobre cómo conectar aplicaciones de IA a datos propios con el Model Context Protocol.',
        fullDescription:
            'En WebTech Days AI Edition conduje, junto a Cláudio Augusto Novaes Gontijo, un taller sobre el Model Context Protocol (MCP), una de las tecnologías que más espacio ha ganado en el ecosistema de la inteligencia artificial.\n\nDurante el taller construimos con los participantes un servidor MCP integrado a una base de datos local, mostrando en la práctica cómo conectar aplicaciones de IA a los datos propios y crear soluciones capaces de responder preguntas a partir de información estructurada.\n\nPrincipales temas abordados:\n- Conceptos y arquitectura del Model Context Protocol\n- Construcción de un servidor MCP\n- Integración con una base de datos local\n- Integración con modelos de lenguaje',
        topics: ['MCP', 'Inteligencia Artificial', 'LLMs', 'Bases de datos'],
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
        title: 'APIs con Spring Boot: desde cero hasta la integración',
        eventName: '10 años de Ingeniería de Software de la PUC Minas',
        location: 'PUC Minas Lourdes',
        date: '2026-05-14',
        description:
            'Taller en la celebración de los 10 años de la carrera de Ingeniería de Software de la PUC Minas, con una API REST integrada a un front-end en React.',
        fullDescription:
            'En la celebración de los 10 años de la carrera de Ingeniería de Software de la PUC Minas, conduje una nueva edición del taller "APIs con Spring Boot: desde cero hasta la integración", realizado anteriormente por WebTech Network.\n\nLos participantes construyeron desde cero una API REST con Spring Boot, desde la creación de los endpoints hasta la persistencia con JPA, y la integraron a un front-end en React, entendiendo en la práctica cómo se comunican el back-end y el front-end en aplicaciones reales.\n\nPrincipales temas abordados:\n- Creación de endpoints REST con Spring Boot\n- Persistencia de datos con JPA\n- Organización de la aplicación en capas\n- Integración de la API con React',
        topics: ['Java', 'Spring Boot', 'JPA', 'React', 'APIs REST'],
        image: '/images/talks/software-engineering-10-years-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/software-engineering-10-years-workshop/02.webp',
                alt: 'Foto 1 de 10 años de Ingeniería de Software de la PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/03.webp',
                alt: 'Foto 2 de 10 años de Ingeniería de Software de la PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/04.webp',
                alt: 'Foto 3 de 10 años de Ingeniería de Software de la PUC Minas',
                width: 960,
                height: 960,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/01.webp',
                alt: 'Foto 4 de 10 años de Ingeniería de Software de la PUC Minas',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'webtech-spring-boot-api-2026',
        type: 'workshop',
        title: 'Desde cero hasta la integración: creando una API con Spring Boot',
        eventName: 'WebTech Network',
        location: 'PUC Minas Lourdes',
        date: '2026-05-09',
        description:
            'Taller práctico en el que los participantes construyeron una API REST con Spring Boot y la integraron a un front-end en React.',
        fullDescription:
            'Conduje un taller práctico de WebTech Network en el que los participantes desarrollaron desde cero una API REST con Spring Boot, aplicando conceptos esenciales como la creación de endpoints, la persistencia con JPA y la organización en capas.\n\nEn la etapa final, la API se integró a un front-end en React, mostrando en la práctica cómo se comunican el back-end y el front-end en aplicaciones reales. El encuentro fue pensado para quienes estaban dando sus primeros pasos en el desarrollo back-end.\n\nPrincipales temas abordados:\n- Creación de endpoints REST con Spring Boot\n- Persistencia de datos con JPA\n- Organización de la aplicación en capas\n- Integración de la API con React',
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
        title: 'La creatividad no es un don, es un proceso',
        eventName: 'World Creativity Day 2026 · BH Mais Criativa',
        location: 'Faculdade Cotemig',
        date: '2026-04-22',
        endDate: '2026-04-23',
        description:
            'Charla en el World Creativity Day 2026 sobre lo que la tecnología enseña acerca de crear cosas desde cero.',
        fullDescription:
            'En el World Creativity Day 2026, el mayor festival de creatividad del mundo, presenté la charla "La creatividad no es un don, es un proceso: lo que la tecnología me enseñó sobre crear cosas desde cero", dentro de una programación promovida por el movimiento BH Mais Criativa.\n\nTambién participé en el evento como embajador y voluntario, compartiendo cómo la tecnología y la innovación ganan fuerza cuando la creatividad se trata como un proceso que se puede aprender, practicar y perfeccionar.\n\nPrincipales temas abordados:\n- La creatividad como proceso, y no como don\n- Lo que la tecnología enseña sobre crear desde cero\n- Innovación y tecnología al servicio de nuevas ideas',
        topics: ['Creatividad', 'Innovación', 'Tecnología'],
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
        title: 'Introducción a Docker: de la teoría a la práctica',
        eventName: 'dti digital',
        location: 'Online',
        date: '2025-11',
        description:
            'Knowledge Transfer en dti digital sobre Docker, desde la base teórica hasta ejemplos prácticos con Docker Compose.',
        fullDescription:
            'Conduje un Knowledge Transfer sobre Docker en dti digital, presentando desde la base teórica hasta ejemplos prácticos de uso en el día a día.\n\nEl objetivo fue ofrecer una base sólida para que las personas entendieran cómo funciona Docker y se sintieran seguras al aplicar estos conceptos en proyectos reales dentro de la empresa.\n\nPrincipales temas abordados:\n- Contenedores e imágenes\n- Volúmenes y persistencia de datos\n- Orquestación local con Docker Compose\n- Arquitectura general de Docker',
        topics: ['Docker', 'Docker Compose', 'Contenedores'],
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
        title: 'Docker para principiantes',
        eventName: 'DevFest Belo Horizonte 2025',
        location: 'PUC Minas Lourdes',
        date: '2025-11-08',
        description:
            'Taller práctico en DevFest Belo Horizonte 2025 sobre contenedores, desde los conceptos fundamentales hasta la creación de imágenes y los despliegues.',
        fullDescription:
            'En DevFest Belo Horizonte 2025, uno de los mayores eventos de tecnología de Belo Horizonte, conduje junto a Gabriel Nogueira el taller "Docker para principiantes", una inmersión práctica en el universo de los contenedores.\n\nEl taller recorrió desde los conceptos fundamentales hasta la creación y optimización de imágenes y el despliegue de aplicaciones, para que los participantes salieran preparados para llevar Docker a sus propios proyectos.\n\nPrincipales temas abordados:\n- Conceptos fundamentales de contenedores\n- Creación y optimización de imágenes\n- Ejecución de aplicaciones en contenedores\n- Despliegue de aplicaciones con Docker',
        topics: ['Docker', 'Contenedores', 'DevOps'],
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
        title: 'Design Patterns en Java y aplicaciones modernas con React',
        eventName: '18.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
        location: 'PUC Minas Coração Eucarístico',
        date: '2025-07-30',
        endDate: '2025-07-31',
        description:
            'Una charla sobre Design Patterns en Java y un taller práctico de React en la 18.ª Escuela de Vacaciones de la PUC Minas.',
        fullDescription:
            'En la 18.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas conduje dos actividades. La primera fue la charla "Design Patterns en Java para aplicaciones escalables", presentada junto a Eduarda Vieira Gonçalves, que mostró en la práctica cómo los patrones de diseño transforman un código desorganizado en código profesional, escalable y sostenible.\n\nLa segunda fue el taller "Construyendo aplicaciones modernas con ReactJS", en el que los participantes estructuraron un proyecto React con buenas prácticas del mercado, componentización y nociones de arquitectura front-end, construyendo una aplicación que consume la Studio Ghibli API.\n\nPrincipales temas abordados:\n- Patrones de diseño en la programación orientada a objetos\n- Design Patterns en Java para aplicaciones escalables\n- Estructuración de proyectos en React\n- Componentización y arquitectura front-end',
        topics: ['Design Patterns', 'Java', 'React', 'Arquitectura front-end'],
        image: '/images/talks/puc-minas-vacation-school-2025/cover.webp',
        gallery: [
            {
                src: '/images/talks/puc-minas-vacation-school-2025/02.webp',
                alt: 'Foto 1 de 18.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
                width: 1206,
                height: 1276,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2025/03.webp',
                alt: 'Foto 2 de 18.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
                width: 960,
                height: 1280,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2025/01.webp',
                alt: 'Foto 3 de 18.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
                width: 1280,
                height: 960,
            },
        ],
    },
    {
        id: 'webtech-backend-journey',
        type: 'course',
        title: 'Journey Backend: mentoría en Node.js y Express',
        eventName: 'Journey Backend · WebTech Network y LEVTY',
        location: 'Online',
        date: '2025-07',
        endDate: '2025-08',
        description:
            'Programa de WebTech Network en alianza con LEVTY para impulsar a quienes empezaban en el back-end con Node.js y Express.',
        fullDescription:
            'Journey Backend fue un programa de WebTech Network en alianza con LEVTY, creado para impulsar la carrera de quienes empezaban en el desarrollo back-end con Node.js y Express. La apertura oficial reunió a más de 200 personas de forma simultánea.\n\nComo miembro de la Guilda Backend, acompañé a los participantes a lo largo del programa, resolviendo dudas, compartiendo experiencias y preparando materiales de apoyo para cada etapa.\n\nPrincipales temas abordados:\n- Desarrollo back-end con Node.js\n- Creación de APIs con Express\n- Mentoría y soporte técnico a los participantes\n- Producción de materiales de apoyo',
        topics: ['Node.js', 'Express', 'Back-end', 'Mentoría'],
        image: '/images/talks/webtech-backend-journey/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-backend-journey/02.webp',
                alt: 'Foto 1 de Journey Backend · WebTech Network y LEVTY',
                width: 1206,
                height: 1195,
            },
            {
                src: '/images/talks/webtech-backend-journey/01.webp',
                alt: 'Foto 2 de Journey Backend · WebTech Network y LEVTY',
                width: 1206,
                height: 570,
            },
        ],
    },
    {
        id: 'assprom-web-development-course',
        type: 'course',
        title: 'Curso de HTML, CSS, Bootstrap y GitHub para jóvenes aprendices',
        eventName: 'WebTech Network, Elas++ y ASSPROM',
        location: 'PUC Minas Lourdes',
        date: '2025-05',
        description:
            'Curso introductorio de desarrollo web para los jóvenes aprendices de ASSPROM, con clases a lo largo de cuatro semanas.',
        fullDescription:
            'Junto a Eduarda Vieira Gonçalves, impartí un curso introductorio de HTML, CSS, Bootstrap y GitHub para los jóvenes aprendices de ASSPROM, en un proyecto promovido por WebTech Network y Elas++ en alianza con la asociación.\n\nA lo largo de cuatro semanas de clases, el objetivo fue presentar los fundamentos del desarrollo web y ampliar la visión de los participantes sobre las posibilidades del área de tecnología, hasta la presentación de las páginas que ellos mismos crearon.\n\nPrincipales temas abordados:\n- Estructura de páginas con HTML\n- Estilización con CSS\n- Layouts responsivos con Bootstrap\n- Control de versiones y publicación con Git y GitHub',
        topics: ['HTML', 'CSS', 'Bootstrap', 'GitHub'],
        image: '/images/talks/assprom-web-development-course/cover.webp',
        gallery: [
            {
                src: '/images/talks/assprom-web-development-course/01.webp',
                alt: 'Foto 1 de WebTech Network, Elas++ y ASSPROM',
                width: 1206,
                height: 891,
            },
            {
                src: '/images/talks/assprom-web-development-course/03.webp',
                alt: 'Foto 2 de WebTech Network, Elas++ y ASSPROM',
                width: 1206,
                height: 896,
            },
            {
                src: '/images/talks/assprom-web-development-course/04.webp',
                alt: 'Foto 3 de WebTech Network, Elas++ y ASSPROM',
                width: 1206,
                height: 894,
            },
            {
                src: '/images/talks/assprom-web-development-course/05.webp',
                alt: 'Foto 4 de WebTech Network, Elas++ y ASSPROM',
                width: 1206,
                height: 891,
            },
            {
                src: '/images/talks/assprom-web-development-course/06.webp',
                alt: 'Foto 5 de WebTech Network, Elas++ y ASSPROM',
                width: 1206,
                height: 888,
            },
            {
                src: '/images/talks/assprom-web-development-course/07.webp',
                alt: 'Foto 6 de WebTech Network, Elas++ y ASSPROM',
                width: 1206,
                height: 895,
            },
            {
                src: '/images/talks/assprom-web-development-course/02.webp',
                alt: 'Foto 7 de WebTech Network, Elas++ y ASSPROM',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'devfest-bh-2024',
        type: 'workshop',
        title: 'Taller de React.js y Next.js',
        eventName: 'DevFest Belo Horizonte 2024',
        location: 'PUC Minas Lourdes',
        date: '2024-10-26',
        description:
            'Taller en DevFest Belo Horizonte 2024, uno de los mayores eventos de tecnología de la ciudad, sobre los fundamentos de React.js y Next.js.',
        fullDescription:
            'En DevFest Belo Horizonte 2024, uno de los mayores eventos de tecnología de Belo Horizonte, conduje un taller sobre los conceptos fundamentales de React.js y Next.js.\n\nLos participantes exploraron cómo se complementan estos frameworks y cómo utilizarlos para construir sitios web rápidos, bien organizados y eficientes.\n\nPrincipales temas abordados:\n- Componentización y props en React.js\n- Rutas y diferenciales de Next.js\n- Construcción de sitios web con React.js y Next.js',
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
        title: 'Taller de aplicación Full Stack con Spring Boot y Spring MVC',
        location: 'PUC Minas Lourdes',
        date: '2024-09-06',
        description:
            'Laboratorio práctico en el que los participantes desarrollaron una aplicación full stack con Java, Spring Boot y Spring MVC.',
        fullDescription:
            'Conduje un laboratorio práctico centrado en Java con Spring Boot y Spring MVC, en el que los participantes desarrollaron, paso a paso, una aplicación full stack completa.\n\nEl taller recorrió todas las capas de una aplicación web, desde la estructura del proyecto y la creación de las APIs hasta la interfaz de usuario y la persistencia de los datos, siempre con foco en buenas prácticas.\n\nPrincipales temas abordados:\n- Fundamentos y estructura de Spring Boot MVC\n- Creación e integración de APIs RESTful\n- Implementación de un front-end interactivo\n- Integración con bases de datos y persistencia',
        topics: ['Java', 'Spring Boot', 'Spring MVC', 'APIs REST', 'Full Stack'],
        image: '/images/talks/spring-mvc-full-stack-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/02.webp',
                alt: 'Foto 1 de Taller de aplicación Full Stack con Spring Boot y Spring MVC',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/03.webp',
                alt: 'Foto 2 de Taller de aplicación Full Stack con Spring Boot y Spring MVC',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/01.webp',
                alt: 'Foto 3 de Taller de aplicación Full Stack con Spring Boot y Spring MVC',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'puc-minas-vacation-school-2024',
        type: 'workshop',
        title: 'Taller de Pre-AEDS I',
        eventName: '17.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
        location: 'PUC Minas Coração Eucarístico',
        date: '2024-07',
        description:
            'Taller de lógica de programación en C para quienes estaban por cursar Algoritmos y Estructuras de Datos I.',
        fullDescription:
            'En la 17.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas, conduje un taller preparatorio para Algoritmos y Estructuras de Datos I (AEDS I), una de las asignaturas más importantes de los primeros semestres de la carrera.\n\nEl taller se realizó a pedido de la profesora Rosilane, que identificó la necesidad de una preparación para quienes empezaban la carrera. Utilizando el lenguaje C, presenté los fundamentos de la lógica de programación de forma práctica y accesible.\n\nPrincipales temas abordados:\n- Fundamentos de lógica de programación\n- Introducción al lenguaje C\n- Preparación para la asignatura AEDS I',
        topics: ['C', 'Lógica de Programación', 'Algoritmos'],
        image: '/images/talks/puc-minas-vacation-school-2024/cover.webp',
        gallery: [
            {
                src: '/images/talks/puc-minas-vacation-school-2024/02.webp',
                alt: 'Foto 1 de 17.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
                width: 960,
                height: 1280,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2024/01.webp',
                alt: 'Foto 2 de 17.ª Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'cotemig-code-club',
        type: 'course',
        title: 'Code Club: primeros pasos en la programación para niños',
        eventName: 'Code Club · Colégio Cotemig',
        location: 'Colégio Cotemig',
        date: '2023-07',
        description:
            'Durante tres meses, impartí clases de HTML, CSS, Scratch y Python a niños que daban sus primeros pasos en la programación.',
        fullDescription:
            'Code Club fue un proyecto de enseñanza de programación para niños en el Colégio Cotemig, realizado a lo largo de tres meses y concluido en julio de 2023. Comencé como mentoreado, preparándome para presentar contenidos y actuar como monitor, y terminé asumiendo la conducción de las clases como profesor, apoyando a la profesora responsable del proyecto.\n\nEn ese rol, planifiqué y conduje clases pensadas para despertar la curiosidad de los niños, con actividades prácticas y un lenguaje accesible, para que cada uno construyera una base sólida de lógica y creatividad.\n\nPrincipales temas abordados:\n- Lógica de programación con Scratch\n- Estructura de páginas web con HTML\n- Estilización con CSS\n- Primeros programas en Python',
        topics: ['Scratch', 'HTML', 'CSS', 'Python', 'Enseñanza de programación'],
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
