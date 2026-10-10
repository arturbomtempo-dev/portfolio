import type { Project } from '~/types/project';

export const PROJECTS_ES: Project[] = [
    {
        id: 'portfolio',
        title: 'Portafolio Personal de Artur Bomtempo',
        description:
            'Sitio personal desarrollado para presentar mi trayectoria, habilidades y principales proyectos.',
        image: 'https://github.com/user-attachments/assets/bb40b211-79a4-45ea-8ba9-5f1bac978299',
        cardTechs: ['React', 'TypeScript'],
        fullDescription:
            'Este portafolio fue desarrollado con el objetivo de presentar de forma clara y profesional mis principales habilidades, experiencias, proyectos e iniciativas en el área de tecnología. La plataforma reúne informaciones sobre mi trayectoria, mi actuación en proyectos académicos y profesionales, además de destacar contenidos como workshops, premios y publicaciones.\n\nLa construcción del sitio fue pensada para reflejar mi identidad como desarrollador, ofreciendo una navegación fluida, moderna y accesible.\n\nCaracterísticas principales:\n- Secciones dedicadas a proyectos, carrera, educación y logros\n- Interfaz responsive y organizada, con enfoque en claridad y experiencia del usuario\n- Estructura modular que facilita el mantenimiento y la expansión del contenido\n- Diseño limpio y coherente, reforzando profesionalismo e identidad visual\n- Contenido escrito de forma autoral para transmitir autenticidad y seguridad\n\nUn proyecto personal que consolida mi dominio en desarrollo front-end moderno y presenta mi trabajo de forma profesional.',
        allTechs: ['React', 'TypeScript', 'Zod', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://www.arturbomtempo.dev/',
        githubUrl: 'https://github.com/arturbomtempo-dev/portfolio',
    },
    {
        id: 'gdg-bh-2025',
        title: 'Sitio Web de GDG Belo Horizonte 2025',
        description:
            'Sitio oficial del Google Developers Group Belo Horizonte, presentando eventos, charlas e informaciones de la comunidad.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/refs/heads/main/resources/screenshots/gdgbh25.png',
        cardTechs: ['React', 'TypeScript'],
        fullDescription:
            'Este proyecto consiste en el desarrollo del nuevo sitio oficial del Google Developers Group (GDG) Belo Horizonte para el año 2025. La plataforma presenta los eventos de la comunidad, charlas anteriores, informaciones institucionales y contenidos sobre la organización, ofreciendo una experiencia moderna y accesible para desarrolladores interesados en el ecosistema del GDG.\n\nMi contribución estuvo directamente vinculada al desarrollo del front-end, garantizando una interfaz clara, responsive y alineada con la identidad visual de la comunidad.\n\nCaracterísticas principales:\n- Página oficial con informaciones actualizadas sobre el GDG Belo Horizonte\n- Sección dedicada a eventos y encuentros de la comunidad\n- Histórico de charlas y contenidos ya presentados\n- Interfaz moderna y responsive basada en componentes reutilizables\n- Estructura pensada para destacar informaciones relevantes y facilitar la navegación\n\nUn proyecto desarrollado en colaboración para fortalecer la presencia digital de una de las principales comunidades de tecnología de la región.',
        allTechs: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://gdgbh.com.br/',
        githubUrl: 'https://github.com/gdg-bh/site-oficial',
    },
    {
        id: 'link-in-bio',
        title: 'Link in Bio',
        description:
            'Proyecto didáctico desarrollado para enseñar conceptos básicos de React, TypeScript y Styled Components.',
        image: 'https://github.com/user-attachments/assets/30e30fe2-0958-41e6-b6d9-71e385d66316',
        cardTechs: ['React', 'TypeScript'],
        fullDescription:
            'Este proyecto fue creado como parte de un tutorial en YouTube con el objetivo de enseñar, de forma práctica y accesible, los fundamentos de React, TypeScript y Styled Components. La aplicación demuestra el proceso completo de construcción de un Link in Bio, una página que centraliza enlaces importantes, como redes sociales, portafolio e informaciones de contacto.\n\nCaracterísticas principales:\n- Exhibición de perfil con nombre, foto y breve descripción\n- Lista de enlaces totalmente personalizable\n- Iconos de redes sociales con acceso directo\n- Interfaz responsive y adaptada para uso en dispositivos móviles\n- Proyecto creado con enfoque educacional, guiando principiantes en la construcción de aplicaciones con React\n\nUna solución simple y funcional, ideal para quien desea aprender desarrollo front-end moderno mientras crea su propia página de enlaces.',
        allTechs: ['React', 'TypeScript', 'Styled Components', 'Vite'],
        liveUrl: 'https://www.links.arturbomtempo.dev/',
        githubUrl: 'https://github.com/arturbomtempo-dev/link-in-bio-react-youtube-tutorial',
    },
    {
        id: 'studio-ghibli-api',
        title: 'Aplicación React de API de Studio Ghibli',
        description:
            'Aplicación desarrollada como proyecto didáctico para enseñar React durante la Escuela de Vacaciones de PUC Minas.',
        image: 'https://github.com/user-attachments/assets/208932f4-4060-49f7-9bb7-f4d3247f0d78',
        cardTechs: ['React', 'TypeScript'],
        fullDescription:
            'Proyecto desarrollado para la Escuela de Vacaciones de Ciencias de la Computación de PUC Minas, en 2025, con el objetivo de enseñar a estudiantes principiantes a construir aplicaciones completas en React. La aplicación consume datos de la Studio Ghibli API para exhibir una colección de películas, ofreciendo una experiencia práctica y guiada sobre desarrollo front-end moderno.\n\nCaracterísticas principales:\n- Listado de las películas de Studio Ghibli con informaciones generales\n- Navegación fluida entre páginas y secciones de la aplicación\n- Interfaz organizada, responsive y fácil de entender para principiantes\n- Proyecto utilizado como base para enseñar fundamentos esenciales de React\n- Abordaje orientado a la práctica, con enfoque en construcción de componentes, rutas y consumo de APIs\n\nUn proyecto con propósito educacional, creado para facilitar el aprendizaje de desarrollo web moderno a través de un ejemplo real y envolvente.',
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
        title: 'Sitio Web de DevFest BH 2024',
        description:
            'Sitio oficial desarrollado para el mayor evento de tecnología de Belo Horizonte, promovido por el Google Developers Group.',
        image: 'https://github.com/user-attachments/assets/1b43e564-ae07-4bdf-a6ec-92f5884e2b12',
        cardTechs: ['Next.js', 'TypeScript'],
        fullDescription:
            'Plataforma desarrollada por mí y parte del equipo WebTech Network para el Google Developers Group Belo Horizonte, sirviendo como el sitio oficial del DevFest BH 2024, el mayor evento de tecnología de la ciudad. El objetivo fue crear una experiencia completa para participantes, con informaciones, agenda, ubicación, socios y enlace de inscripción.\n\nCaracterísticas principales:\n- Página oficial del evento con identidad visual propia y contenido actualizado\n- Acceso a la página de inscripción y direccionamiento al sistema de acreditación\n- Exhibición de programación completa, charlas y pistas del evento\n- Secciones dedicadas para patrocinadores, media kit e informaciones institucionales\n- Cuenta regresiva dinámica e informaciones esenciales para participantes\n- Interfaz responsive, rápida y optimizada para SEO\n- Desarrollado en colaboración con equipo multidisciplinar de WebTech Network\n\nUn proyecto de gran impacto, entregado en sociedad con el GDG BH, con enfoque en calidad, rendimiento y experiencia del usuario.',
        allTechs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://demo-devfestbh-2024.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/devfest-bh-website',
    },
    {
        id: 'planner',
        title: 'plann.er',
        description:
            'Plataforma completa de itinerarios de viaje desarrollada durante el NLW Journey de Rocketseat.',
        image: 'https://github.com/user-attachments/assets/18dbb5f1-7a6b-4972-b26a-6a742fe5bf66',
        cardTechs: ['Node.js', 'React', 'TypeScript'],
        fullDescription:
            'Proyecto desarrollado durante el evento NLW Journey, de Rocketseat, con el objetivo de consolidar conceptos de desarrollo web moderno, tanto en el front-end como en el back-end. La plataforma simula un sistema completo de organización de viajes, permitiendo gestionar participantes, actividades y detalles del itinerario.\n\nCaracterísticas principales:\n- Registro de viajes y creación de invitaciones personalizadas\n- Registro y listado de actividades del viaje\n- Confirmación de presencia y gestión de participantes\n- Exhibición detallada de las informaciones del viaje\n- API estructurada con validación, autenticación por enlaces y envíos de email\n- Interfaz moderna, responsive y fácil de navegar\n\nEl proyecto presenta un conjunto sólido de funcionalidades core, con rutas backend completas, y sirvió como un estudio profundo de arquitectura web, integración front-back y buenas prácticas con TypeScript.',
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
            'Aplicación creada para listar mobs, ítems y minerales de Minecraft consumiendo una API propia.',
        image: 'https://github.com/user-attachments/assets/ad0c5022-a10e-49c1-9fab-2a29ea027c59',
        cardTechs: ['React', 'Node.js'],
        fullDescription:
            'Proyecto desarrollado en la disciplina de Frameworks del curso técnico de desarrollo web y móvil, con enfoque en consolidar los estudios sobre React Hooks y consumo de APIs. La aplicación exhibe informaciones detalladas sobre mobs, equipamientos y minerales de Minecraft, utilizando una API desarrollada por la propia dupla responsable del proyecto.\n\nCaracterísticas principales:\n- Listado completo de mobs, ítems y minerales de Minecraft\n- Exhibición de detalles al seleccionar cada elemento\n- Integración directa con una API propia construida exclusivamente para el proyecto\n- Interfaz responsive y organizada para facilitar la navegación\n- Proyecto creado en dupla, uniendo front-end y back-end en un ecosistema unificado\n\nUn proyecto esencial para reforzar prácticas de React, lógica de consumo de APIs y desarrollo colaborativo.',
        allTechs: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Express.js', 'MongoDB'],
        liveUrl: 'https://craft-api.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/craft-api',
    },
    {
        id: 'in-kids',
        title: 'I&N Kids',
        description:
            'Plataforma creada para ayudar a padres a reducir el tiempo de pantalla de los niños e incentivar actividades offline.',
        image: 'https://github.com/user-attachments/assets/82627220-3445-4de3-a4e1-908f432034a9',
        cardTechs: ['HTML', 'CSS', 'JavaScript'],
        fullDescription:
            'El I&N Kids fue desarrollado durante el primer período de la facultad, con enfoque en el aprendizaje inicial de desarrollo front-end. La plataforma tiene como objetivo auxiliar a padres a encontrar alternativas saludables y educativas para reducir el tiempo de pantalla de los niños, promoviendo actividades offline y mayor interacción familiar.\n\nCaracterísticas principales:\n- Contenidos y orientaciones para disminuir el uso excesivo de dispositivos\n- Actividades offline elaboradas para diferentes grupos de edad\n- Interfaz simple, intuitiva y accesible para padres y responsables\n- Incentivo al equilibrio entre tecnología y vida activa\n- Proyecto construido en equipo como parte de un trabajo interdisciplinar\n\nUna aplicación importante para consolidar fundamentos de front-end y buenas prácticas de desarrollo en el inicio de la trayectoria académica.',
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
            'Chatbot y sitio web interactivo creado para compartir mensajes de Navidad y Año Nuevo de forma personalizada.',
        image: 'https://github.com/ArturColen/ChristmasChat/assets/96635074/080a1c76-0275-4834-a3ad-afa1c220f698',
        cardTechs: ['TypeScript', 'Node.js', 'Blip'],
        fullDescription:
            'Proyecto desarrollado para permitir el compartir mensajes navideños de manera interactiva, combinando un chatbot con un sitio temático. Cada usuario accede al contenido por medio de un código único, que recupera sus datos en la API y exhibe una página personalizada.\n\nCaracterísticas principales:\n- Chatbot interactivo con opciones temáticas y contenido festivo\n- Página personalizada generada a partir de un código proporcionado por el usuario\n- Flujos conversacionales que incluyen quiz, playlist y envío de mensajes\n- Integración completa entre chatbot, API y sitio principal\n- Experiencia pensada para ser divertida, intuitiva y accesible\n\nUn proyecto marcante que unió creación de interfaces, lógica de APIs y diseño de experiencias conversacionales.',
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
        title: 'Página Inicial de Netflix',
        description:
            'Clon de la página inicial de Netflix desarrollado para consolidar fundamentos de Front-end.',
        image: 'https://user-images.githubusercontent.com/96635074/208282907-fa614507-2d83-4b1f-a7be-cc038cabeb61.png',
        cardTechs: ['Node.js'],
        fullDescription:
            'Proyecto desarrollado en una clase de Digital Innovation One con el objetivo de practicar conceptos esenciales de Front-end e introducir estudios iniciales con Node.js. La aplicación recrea la página inicial de Netflix, exhibiendo listas de películas categorizadas.\n\nCaracterísticas principales:\n- Interfaz inspirada en el layout original de Netflix\n- Secciones de películas organizadas por categorías\n- Diseño responsive y compatible con diferentes dispositivos\n- Estructura ideal para consolidar conocimientos de front-end y lógica básica\n\nUn proyecto simple, pero fundamental en el proceso de evolución en el desarrollo web.',
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        liveUrl: 'https://netflix-artur.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/netflix-clone',
    },
    {
        id: 'inverted-world',
        title: 'Landing Page de Mundo Invertido',
        description:
            'Landing page temática inspirada en la 4ª temporada de Stranger Things, creada durante la Front-end Week de DIO.',
        image: 'https://user-images.githubusercontent.com/96635074/195481231-2a82fd4e-3547-42e8-9556-df96160db140.png',
        cardTechs: ['JavaScript'],
        fullDescription:
            'Proyecto desarrollado durante la Front-end Week de Digital Innovation One, con el objetivo de crear una landing page temática sobre la 4ª temporada de Stranger Things y reforzar conceptos fundamentales de HTML, CSS y JavaScript.\n\nCaracterísticas principales:\n- Página dedicada al universo de la serie, con enfoque en el Mundo Invertido\n- Contenido presentado de forma visualmente atractiva y responsive\n- Formulario integrado a una base de datos para almacenamiento de mensajes\n- Animaciones y secciones interactivas que enriquecen la navegación\n\nUn proyecto ideal para mejorar conocimientos de front-end e integración básica con servicios externos.',
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        liveUrl: 'https://inverted-world-artur-bomtempo.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/inverted-world',
    },
    {
        id: 'christmas-website',
        title: 'Sitio Web de Navidad',
        description:
            'Sitio interactivo creado para transmitir el significado de la Navidad de forma ligera y envolvente.',
        image: 'https://user-images.githubusercontent.com/96635074/209454790-2a5ffb1c-d8cd-4c59-8d80-1ef847e91517.png',
        cardTechs: ['JavaScript'],
        fullDescription:
            'Proyecto desarrollado con el objetivo de crear una página temática e interactiva para compartir el significado de la Navidad de forma creativa.\n\nCaracterísticas principales:\n- Layout temático con animaciones suaves y efectos de scroll\n- Secciones informativas presentadas de manera envolvente\n- Efectos visuales que enriquecen la experiencia del usuario\n- Navegación simple, intuitiva y responsive\n\nUn proyecto enfocado en mejorar habilidades de front-end, animaciones y construcción de interfaces más dinámicas.',
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Parallax', 'GSAP', 'ScrollReveal'],
        liveUrl: 'https://christmas22.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/christmas-website',
    },
    {
        id: 'goodtimegpt',
        title: 'Clon de ChatGPT',
        description:
            'Clon funcional de ChatGPT construido para estudio de desarrollo web e integración con APIs de IA.',
        image: 'https://github.com/ArturColen/GoodtimeGPT/assets/96635074/6a770738-16dc-4bb0-b20d-8d71539519e2',
        cardTechs: ['React', 'Next.js', 'Node.js'],
        fullDescription:
            'Proyecto desarrollado como parte de un curso de B7Web con el objetivo de profundizar conocimientos en JavaScript, TypeScript y desarrollo web moderno. La aplicación reproduce el comportamiento de ChatGPT, consumiendo la API de OpenAI para generar respuestas en tiempo real.\n\nCaracterísticas principales:\n- Interfaz intuitiva inspirada en la experiencia de ChatGPT\n- Comunicación en tiempo real con la API de OpenAI\n- Histórico de mensajes y flujo de conversación continuo\n- Layout moderno y responsive\n- Proyecto ideal para consolidar fundamentos de integración con APIs y construcción de UIs reactivas\n\nObs.: para ejecutar localmente, es necesario configurar una clave de la API de OpenAI en el archivo .env.',
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
        description:
            'Generador de tarjeta virtual desarrollado durante el Explorer Lab de Rocketseat.',
        image: 'https://user-images.githubusercontent.com/96635074/196974349-1f579c57-7789-4409-a135-1e31bb68363b.png',
        cardTechs: ['JavaScript'],
        fullDescription:
            'Proyecto desarrollado durante el Explorer Lab de Rocketseat, enfocado en el perfeccionamiento de lógica y manipulación del DOM en JavaScript.\n\nCaracterísticas principales:\n- Generación dinámica de una tarjeta de crédito virtual\n- Validación y formateo automático de los datos insertados\n- Interfaz simple, responsive e intuitiva\n- Aplicación de máscaras en tiempo real para inputs\n\nUn proyecto pequeño, pero fundamental en el inicio de mi jornada, consolidando conceptos importantes de JavaScript y desarrollo front-end.',
        allTechs: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://rocketpay-smoky.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/rocket-pay',
    },
];
