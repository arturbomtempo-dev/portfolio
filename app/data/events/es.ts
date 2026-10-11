import type { SpeakingEvent } from '~/types/event';

export const EVENTS_ES: SpeakingEvent[] = [
    {
        id: 'io-extended-bh-2025',
        type: 'talk',
        title: 'Novedades del ecosistema web de Google',
        eventName: 'Google I/O Extended Belo Horizonte 2025',
        location: 'Belo Horizonte, Brasil',
        date: '2025-07-19',
        description:
            'Charla sobre los principales anuncios de Google I/O para desarrolladores web y cómo aplicarlos en proyectos reales.',
        fullDescription:
            'En Google I/O Extended Belo Horizonte presenté un panorama de las principales novedades anunciadas por Google para el desarrollo web, con foco en lo que ya se puede aplicar en el día a día de quien construye aplicaciones modernas.\n\nLa charla combinó contexto, demostraciones en vivo y recomendaciones prácticas para que cada participante saliera con próximos pasos claros.\n\nPrincipales temas abordados:\n- Nuevas APIs de la plataforma web y su soporte en los navegadores\n- Herramientas de rendimiento y las métricas Core Web Vitals\n- Funciones de inteligencia artificial integradas en el navegador\n- Cómo adoptar las novedades de forma gradual y segura',
        topics: ['Web', 'Rendimiento', 'Google I/O', 'Inteligencia Artificial'],
        image: '/images/projects/gdg-bh-2025.webp',
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
        title: 'Curso de JavaScript para Principiantes',
        eventName: 'Canal de Artur Bomtempo en YouTube',
        location: 'Online',
        date: '2025-07-11',
        description:
            'Curso gratuito y práctico que presenta los fundamentos de JavaScript para quienes están comenzando a programar.',
        fullDescription:
            'Creé un curso gratuito de JavaScript para principiantes, publicado en YouTube, con el objetivo de hacer que el primer contacto con la programación sea más simple, práctico y acogedor.\n\nCada clase combina explicaciones conceptuales con ejercicios guiados, para que los alumnos practiquen desde el primer momento.\n\nPrincipales temas abordados:\n- Variables, tipos de datos y operadores\n- Estructuras condicionales y de repetición\n- Funciones, arrays y objetos\n- Manipulación del DOM con proyectos prácticos',
        topics: ['JavaScript', 'Lógica de Programación', 'Front-end', 'Principiantes'],
        image: '/images/contents/curso-de-javascript-para-iniciantes.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-5.webp',
                alt: 'Foto 1 de Canal de Artur Bomtempo en YouTube',
            },
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 2 de Canal de Artur Bomtempo en YouTube',
            },
            {
                src: '/images/events/placeholders/photo-1.webp',
                alt: 'Foto 3 de Canal de Artur Bomtempo en YouTube',
            },
        ],
        recordingUrl:
            'https://youtube.com/playlist?list=PLeBlAOvjkM5huodqseyXgkQanu_CEtsUq&si=e_nciQcHwoLUG_MY',
    },
    {
        id: 'lives-programacao-orientada-a-objetos',
        type: 'course',
        title: 'Clases en vivo de Programación Orientada a Objetos',
        eventName: 'Canal de Artur Bomtempo en YouTube',
        location: 'Online',
        date: '2025-06-29',
        description:
            'Serie de clases en vivo que explican los pilares de la orientación a objetos con ejemplos prácticos en Java.',
        fullDescription:
            'Conduje una serie de clases en vivo sobre Programación Orientada a Objetos, pensada para estudiantes que cursaban la asignatura en la universidad y querían reforzar los conceptos con práctica.\n\nLas clases tuvieron espacio abierto para preguntas, lo que permitió adaptar los ejemplos a las principales dudas del grupo.\n\nPrincipales temas abordados:\n- Clases, objetos y encapsulamiento\n- Herencia y polimorfismo\n- Interfaces y clases abstractas\n- Buenas prácticas de modelado orientado a objetos',
        topics: ['Java', 'Orientación a Objetos', 'Buenas Prácticas'],
        image: '/images/contents/lives-de-programacao-orientada-a-objetos.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-2.webp',
                alt: 'Foto 1 de Canal de Artur Bomtempo en YouTube',
            },
            {
                src: '/images/events/placeholders/photo-4.webp',
                alt: 'Foto 2 de Canal de Artur Bomtempo en YouTube',
            },
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 3 de Canal de Artur Bomtempo en YouTube',
            },
        ],
        recordingUrl:
            'https://youtube.com/playlist?list=PLeBlAOvjkM5jhpxHFU0SFfYf_Z3UbpUbY&si=8Uljc9fsCvsT_cuL',
    },
    {
        id: 'escola-de-ferias-puc-minas-2025',
        type: 'workshop',
        title: 'Taller de React con la Studio Ghibli API',
        eventName: 'Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
        location: 'PUC Minas, Belo Horizonte, Brasil',
        date: '2025-01-22',
        description:
            'Taller práctico de React para alumnos principiantes, construyendo una aplicación real que consume la Studio Ghibli API.',
        fullDescription:
            'Impartí un taller práctico de React durante la Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas, dirigido a alumnos principiantes que querían aprender los fundamentos del desarrollo front-end moderno.\n\nA lo largo del taller, los participantes construyeron, paso a paso, una aplicación completa en React que consume la Studio Ghibli API para mostrar una colección de películas, uniendo teoría y práctica en un ejemplo real y atractivo.\n\nPrincipales temas abordados:\n- Fundamentos de React y componentización\n- Consumo de APIs externas con Axios\n- Enrutamiento con React Router DOM\n- Buenas prácticas de organización de proyectos para principiantes',
        topics: ['React', 'TypeScript', 'APIs', 'Front-end'],
        image: '/images/projects/studio-ghibli-api.webp',
        gallery: [
            {
                src: '/images/events/placeholders/photo-3.webp',
                alt: 'Foto 1 de Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-1.webp',
                alt: 'Foto 2 de Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-5.webp',
                alt: 'Foto 3 de Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-2.webp',
                alt: 'Foto 4 de Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-6.webp',
                alt: 'Foto 5 de Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
            },
            {
                src: '/images/events/placeholders/photo-4.webp',
                alt: 'Foto 6 de Escuela de Vacaciones de Ciencias de la Computación de la PUC Minas',
            },
        ],
        repositoryUrl: 'https://github.com/arturbomtempo-dev/react-app-workshop',
    },
    {
        id: 'devfest-bh-2024',
        type: 'talk',
        title: 'Interfaces accesibles con React en la práctica',
        eventName: 'DevFest Belo Horizonte 2024',
        location: 'Belo Horizonte, Brasil',
        date: '2024-11-23',
        description:
            'Charla sobre cómo construir interfaces React accesibles desde el inicio, sin comprometer el diseño ni la productividad.',
        fullDescription:
            'En DevFest Belo Horizonte 2024 mostré cómo incorporar la accesibilidad al proceso de desarrollo de interfaces en React, tratándola como parte de la calidad del producto y no como una etapa final.\n\nLa presentación incluyó ejemplos de componentes reales, errores comunes y herramientas que ayudan a validar la accesibilidad de forma continua.\n\nPrincipales temas abordados:\n- HTML semántico y roles ARIA\n- Navegación por teclado y gestión del foco\n- Contraste, tipografía y estados visuales\n- Pruebas automatizadas de accesibilidad',
        topics: ['React', 'Accesibilidad', 'Front-end', 'UX'],
        image: '/images/projects/devfest-bh-2024.webp',
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
        title: 'Formaciones técnicas de la comunidad WebTech Network',
        eventName: 'WebTech Network',
        location: 'Online',
        date: '2024-05-18',
        description:
            'Talleres y mentorías técnicas como Chapter Lead, formando nuevos desarrolladores en back-end, front-end y buenas prácticas.',
        fullDescription:
            'Como Chapter Lead de WebTech Network, conduzco encuentros, talleres y mentorías técnicas orientados a la formación de nuevos desarrolladores dentro de la comunidad.\n\nLos encuentros abarcan desde fundamentos de programación hasta temas más avanzados de back-end, front-end, bases de datos y control de versiones, siempre con foco en contenido práctico y aplicable.\n\nPrincipales temas abordados:\n- Fundamentos de back-end y front-end\n- Bases de datos y control de versiones con Git\n- Buenas prácticas de desarrollo y arquitectura de software\n- Orientación técnica en proyectos de la comunidad',
        topics: ['Mentoría', 'Back-end', 'Front-end', 'Buenas Prácticas'],
        image: '/images/contents/design-patterns-e-boas-solucoes.webp',
        gallery: [
            { src: '/images/events/placeholders/photo-4.webp', alt: 'Foto 1 de WebTech Network' },
            { src: '/images/events/placeholders/photo-5.webp', alt: 'Foto 2 de WebTech Network' },
            { src: '/images/events/placeholders/photo-1.webp', alt: 'Foto 3 de WebTech Network' },
        ],
    },
];
