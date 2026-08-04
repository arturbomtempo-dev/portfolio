import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from 'lucide-react';
import { Achievement, Content, Project, TechCategory, Testimonial, Timeline, Talk } from './types';

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Portafolio Personal — Artur Bomtempo',
        description:
            'Sitio personal desarrollado para presentar mi trayectoria, habilidades y principales proyectos.',
        image: 'https://github.com/user-attachments/assets/bb40b211-79a4-45ea-8ba9-5f1bac978299',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `Este portafolio fue desarrollado con el objetivo de presentar de forma clara y profesional mis principales habilidades, experiencias, proyectos e iniciativas en el área de tecnología. La plataforma reúne informaciones sobre mi trayectoria, mi actuación en proyectos académicos y profesionales, además de destacar contenidos como workshops, premios y publicaciones.

La construcción del sitio fue pensada para reflejar mi identidad como desarrollador, ofreciendo una navegación fluida, moderna y accesible.

Características principales:
- Secciones dedicadas a proyectos, carrera, educación y logros
- Interfaz responsive y organizada, con enfoque en claridad y experiencia del usuario
- Estructura modular que facilita el mantenimiento y la expansión del contenido
- Diseño limpio y coherente, reforzando profesionalismo e identidad visual
- Contenido escrito de forma autoral para transmitir autenticidad y seguridad

Un proyecto personal que consolida mi dominio en desarrollo front-end moderno y presenta mi trabajo de forma profesional.`,
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
        fullDescription: `Este proyecto consiste en el desarrollo del nuevo sitio oficial del Google Developers Group (GDG) Belo Horizonte para el año 2025. La plataforma presenta los eventos de la comunidad, charlas anteriores, informaciones institucionales y contenidos sobre la organización, ofreciendo una experiencia moderna y accesible para desarrolladores interesados en el ecosistema del GDG.

Mi contribución estuvo directamente vinculada al desarrollo del front-end, garantizando una interfaz clara, responsive y alineada con la identidad visual de la comunidad.

Características principales:
- Página oficial con informaciones actualizadas sobre el GDG Belo Horizonte
- Sección dedicada a eventos y encuentros de la comunidad
- Histórico de charlas y contenidos ya presentados
- Interfaz moderna y responsive basada en componentes reutilizables
- Estructura pensada para destacar informaciones relevantes y facilitar la navegación

Un proyecto desarrollado en colaboración para fortalecer la presencia digital de una de las principales comunidades de tecnología de la región.`,
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
        fullDescription: `Este proyecto fue creado como parte de un tutorial en YouTube con el objetivo de enseñar, de forma práctica y accesible, los fundamentos de React, TypeScript y Styled Components. La aplicación demuestra el proceso completo de construcción de un Link in Bio — una página que centraliza enlaces importantes, como redes sociales, portafolio e informaciones de contacto.

Características principales:
- Exhibición de perfil con nombre, foto y breve descripción
- Lista de enlaces totalmente personalizable
- Iconos de redes sociales con acceso directo
- Interfaz responsive y adaptada para uso en dispositivos móviles
- Proyecto creado con enfoque educacional, guiando principiantes en la construcción de aplicaciones con React

Una solución simple y funcional, ideal para quien desea aprender desarrollo front-end moderno mientras crea su propia página de enlaces.`,
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
        fullDescription: `Proyecto desarrollado para la Escuela de Vacaciones de Ciencias de la Computación de PUC Minas, en 2025, con el objetivo de enseñar a estudiantes principiantes a construir aplicaciones completas en React. La aplicación consume datos de la Studio Ghibli API para exhibir una colección de películas, ofreciendo una experiencia práctica y guiada sobre desarrollo front-end moderno.

Características principales:
- Listado de las películas de Studio Ghibli con informaciones generales
- Navegación fluida entre páginas y secciones de la aplicación
- Interfaz organizada, responsive y fácil de entender para principiantes
- Proyecto utilizado como base para enseñar fundamentos esenciales de React
- Abordaje orientado a la práctica, con enfoque en construcción de componentes, rutas y consumo de APIs

Un proyecto con propósito educacional, creado para facilitar el aprendizaje de desarrollo web moderno a través de un ejemplo real y envolvente.`,
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
        fullDescription: `Plataforma desarrollada por mí y parte del equipo WebTech Network para el Google Developers Group Belo Horizonte, sirviendo como el sitio oficial del DevFest BH 2024 — el mayor evento de tecnología de la ciudad. El objetivo fue crear una experiencia completa para participantes, con informaciones, agenda, ubicación, socios y enlace de inscripción.

Características principales:
- Página oficial del evento con identidad visual propia y contenido actualizado
- Acceso a la página de inscripción y direccionamiento al sistema de acreditación
- Exhibición de programación completa, charlas y pistas del evento
- Secciones dedicadas para patrocinadores, media kit e informaciones institucionales
- Cuenta regresiva dinámica e informaciones esenciales para participantes
- Interfaz responsive, rápida y optimizada para SEO
- Desarrollado en colaboración con equipo multidisciplinar de WebTech Network

Un proyecto de gran impacto, entregado en sociedad con el GDG BH, con enfoque en calidad, rendimiento y experiencia del usuario.`,
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
        fullDescription: `Proyecto desarrollado durante el evento NLW Journey, de Rocketseat, con el objetivo de consolidar conceptos de desarrollo web moderno, tanto en el front-end como en el back-end. La plataforma simula un sistema completo de organización de viajes, permitiendo gestionar participantes, actividades y detalles del itinerario.

Características principales:
- Registro de viajes y creación de invitaciones personalizadas
- Registro y listado de actividades del viaje
- Confirmación de presencia y gestión de participantes
- Exhibición detallada de las informaciones del viaje
- API estructurada con validación, autenticación por enlaces y envíos de email
- Interfaz moderna, responsive y fácil de navegar

El proyecto presenta un conjunto sólido de funcionalidades core, con rutas backend completas, y sirvió como un estudio profundo de arquitectura web, integración front-back y buenas prácticas con TypeScript.`,
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
            'Aplicación creada para listar mobs, ítems y minerales de Minecraft consumiendo una API propia.',
        image: 'https://github.com/user-attachments/assets/ad0c5022-a10e-49c1-9fab-2a29ea027c59',
        cardTechs: ['React', 'Node.js'],
        fullDescription: `Proyecto desarrollado en la disciplina de Frameworks del curso técnico de desarrollo web y móvil, con enfoque en consolidar los estudios sobre React Hooks y consumo de APIs. La aplicación exhibe informaciones detalladas sobre mobs, equipamientos y minerales de Minecraft, utilizando una API desarrollada por la propia dupla responsable del proyecto.

Características principales:
- Listado completo de mobs, ítems y minerales de Minecraft
- Exhibición de detalles al seleccionar cada elemento
- Integración directa con una API propia construida exclusivamente para el proyecto
- Interfaz responsive y organizada para facilitar la navegación
- Proyecto creado en dupla, uniendo front-end y back-end en un ecosistema unificado

Un proyecto esencial para reforzar prácticas de React, lógica de consumo de APIs y desarrollo colaborativo.`,
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
        fullDescription: `El I&N Kids fue desarrollado durante el primer período de la facultad, con enfoque en el aprendizaje inicial de desarrollo front-end. La plataforma tiene como objetivo auxiliar a padres a encontrar alternativas saludables y educativas para reducir el tiempo de pantalla de los niños, promoviendo actividades offline y mayor interacción familiar.

Características principales:
- Contenidos y orientaciones para disminuir el uso excesivo de dispositivos
- Actividades offline elaboradas para diferentes grupos de edad
- Interfaz simple, intuitiva y accesible para padres y responsables
- Incentivo al equilibrio entre tecnología y vida activa
- Proyecto construido en equipo como parte de un trabajo interdisciplinar

Una aplicación importante para consolidar fundamentos de front-end y buenas prácticas de desarrollo en el inicio de la trayectoria académica.`,
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
        fullDescription: `Proyecto desarrollado para permitir el compartir mensajes navideños de manera interactiva, combinando un chatbot con un sitio temático. Cada usuario accede al contenido por medio de un código único, que recupera sus datos en la API y exhibe una página personalizada.

Características principales:
- Chatbot interactivo con opciones temáticas y contenido festivo
- Página personalizada generada a partir de un código proporcionado por el usuario
- Flujos conversacionales que incluyen quiz, playlist y envío de mensajes
- Integración completa entre chatbot, API y sitio principal
- Experiencia pensada para ser divertida, intuitiva y accesible

Un proyecto marcante que unió creación de interfaces, lógica de APIs y diseño de experiencias conversacionales.`,
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
        fullDescription: `Proyecto desarrollado en una clase de Digital Innovation One con el objetivo de practicar conceptos esenciales de Front-end e introducir estudios iniciales con Node.js. La aplicación recrea la página inicial de Netflix, exhibiendo listas de películas categorizadas.

Características principales:
- Interfaz inspirada en el layout original de Netflix
- Secciones de películas organizadas por categorías
- Diseño responsive y compatible con diferentes dispositivos
- Estructura ideal para consolidar conocimientos de front-end y lógica básica

Un proyecto simple, pero fundamental en el proceso de evolución en el desarrollo web.`,
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
        fullDescription: `Proyecto desarrollado durante la Front-end Week de Digital Innovation One, con el objetivo de crear una landing page temática sobre la 4ª temporada de Stranger Things y reforzar conceptos fundamentales de HTML, CSS y JavaScript.

Características principales:
- Página dedicada al universo de la serie, con enfoque en el Mundo Invertido
- Contenido presentado de forma visualmente atractiva y responsive
- Formulario integrado a una base de datos para almacenamiento de mensajes
- Animaciones y secciones interactivas que enriquecen la navegación

Un proyecto ideal para mejorar conocimientos de front-end e integración básica con servicios externos.`,
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
        fullDescription: `Proyecto desarrollado con el objetivo de crear una página temática e interactiva para compartir el significado de la Navidad de forma creativa.

Características principales:
- Layout temático con animaciones suaves y efectos de scroll
- Secciones informativas presentadas de manera envolvente
- Efectos visuales que enriquecen la experiencia del usuario
- Navegación simple, intuitiva y responsive

Un proyecto enfocado en mejorar habilidades de front-end, animaciones y construcción de interfaces más dinámicas.`,
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
        fullDescription: `Proyecto desarrollado como parte de un curso de B7Web con el objetivo de profundizar conocimientos en JavaScript, TypeScript y desarrollo web moderno. La aplicación reproduce el comportamiento de ChatGPT, consumiendo la API de OpenAI para generar respuestas en tiempo real.

Características principales:
- Interfaz intuitiva inspirada en la experiencia de ChatGPT
- Comunicación en tiempo real con la API de OpenAI
- Histórico de mensajes y flujo de conversación continuo
- Layout moderno y responsive
- Proyecto ideal para consolidar fundamentos de integración con APIs y construcción de UIs reactivas

Obs.: para ejecutar localmente, es necesario configurar una clave de la API de OpenAI en el archivo .env.`,
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
        fullDescription: `Proyecto desarrollado durante el Explorer Lab de Rocketseat, enfocado en el perfeccionamiento de lógica y manipulación del DOM en JavaScript.

Características principales:
- Generación dinámica de una tarjeta de crédito virtual
- Validación y formateo automático de los datos insertados
- Interfaz simple, responsive e intuitiva
- Aplicación de máscaras en tiempo real para inputs

Un proyecto pequeño, pero fundamental en el inicio de mi jornada, consolidando conceptos importantes de JavaScript y desarrollo front-end.`,
        allTechs: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://rocketpay-smoky.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/rocket-pay',
    },
];

export const contents: Content[] = [
    {
        type: 'newsletter',
        title: 'Automatización de Procesos',
        description:
            'Cómo automatizar tareas repetitivas para ganar productividad en el día a día.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQGmY4FMbcE33g/article-cover_image-shrink_720_1280/B4DZqXh54pG8AM-/0/1763478846119?e=1766016000&v=beta&t=z2t8azcXmyaae8sHcp5H77cKNSDVRp_-flkgf_-waUs',
        url: 'https://www.linkedin.com/pulse/automa%C3%A7%C3%A3o-de-processos-o-poder-fazer-computador-por-voc%C3%AA-bomtempo-8qtgf/',
        platform: 'LinkedIn',
        date: '2025-11-18',
    },
    {
        type: 'newsletter',
        title: 'Más Allá de la Tecnología',
        description: 'La importancia de dominar fundamentos antes de elegir stacks y frameworks.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQH6c888A3glCg/article-cover_image-shrink_720_1280/B4DZqEJk36HwAI-/0/1763153701095?e=1766016000&v=beta&t=iZlgyCMBXZu6yj5y7oFuhBAMcIG-jts9OD4OUpVfons',
        url: 'https://www.linkedin.com/pulse/al%C3%A9m-da-tecnologia-por-que-dominar-fundamentos-vale-mais-bomtempo-8q0lf/',
        platform: 'LinkedIn',
        date: '2025-11-14',
    },
    {
        type: 'newsletter',
        title: 'Seguridad más allá de lo obvio',
        description:
            'Cómo pequeñas brechas de seguridad pueden generar grandes riesgos en aplicaciones reales.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQE1on-G0TWjOg/article-cover_image-shrink_720_1280/B4DZpZtHILGsAQ-/0/1762441595349?e=1766016000&v=beta&t=A4_zmBWQBwuZQhi5S_UubiiK5jOpldNt0B54cRy34QE',
        url: 'https://www.linkedin.com/pulse/seguran%C3%A7a-al%C3%A9m-do-%C3%B3bvio-pequenas-brechas-grandes-artur-bomtempo-colen-glulf/',
        platform: 'LinkedIn',
        date: '2025-11-06',
    },
    {
        type: 'newsletter',
        title: 'Design Patterns y Buenas Soluciones',
        description:
            'Reflexiones sobre cómo los patrones de diseño influyen en la escritura de códigos más eficientes y sostenibles.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQFPPGoftiRMIA/article-cover_image-shrink_720_1280/B4DZo104fBHsAI-/0/1761839654632?e=1766016000&v=beta&t=gEGmYMpz22XcB2vV4AgWytQFGStG1RCt-6TujhXHsSg',
        url: 'https://www.linkedin.com/pulse/design-patterns-e-o-que-eles-nos-ensinam-sobre-boas-bomtempo-colen-ji2se/',
        platform: 'LinkedIn',
        date: '2025-10-30',
    },
    {
        type: 'article',
        title: 'Autenticación de APIs con JWT y Bcrypt',
        description: 'Guía completa de autenticación en Node.js y Express usando JWT y Bcrypt.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*I50MOlC9LSdL9nW_FRgh4g.png',
        url: 'https://medium.com/@arturbomtempo/autentica%C3%A7%C3%A3o-de-apis-em-node-js-com-jwt-e-bcrypt-2e1564d264d9',
        platform: 'Medium',
        date: '2025-08-19',
    },
    {
        type: 'video',
        title: 'Curso de Programación Modular en Java',
        description:
            'Fundamentos de modularidad, POO y buenas prácticas en Java con ejercicios prácticos.',
        thumbnail:
            'https://i.ytimg.com/vi/VYdPnCauekk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLC9vXYZwgrhSPMAlxa9QvDYybppgQ',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5hIR_G3m-DJjcDMNKMUypkH&si=DLFn9qAjuQFBW4Tj',
        platform: 'YouTube',
        date: '2025-08-14',
    },
    {
        type: 'video',
        title: 'Curso de JavaScript para Principiantes',
        description:
            'Fundamentos de JavaScript explicados de forma práctica, con ejercicios y proyectos.',
        thumbnail:
            'https://i.ytimg.com/vi/LrKqcRCD_zw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLBrupGGUSBvDjFswW-slSpuWGFwUg',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5huodqseyXgkQanu_CEtsUq&si=e_nciQcHwoLUG_MY',
        platform: 'YouTube',
        date: '2025-07-11',
    },
    {
        type: 'video',
        title: 'Lives de Programación Orientada a Objetos',
        description:
            'Clases en vivo explicando los principales conceptos de POO con ejemplos prácticos.',
        thumbnail:
            'https://i.ytimg.com/vi/DvZatfx5X4w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLCJQavzpa4l38nZ6EMpdnu_f6vPjQ',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5jhpxHFU0SFfYf_Z3UbpUbY&si=8Uljc9fsCvsT_cuL',
        platform: 'YouTube',
        date: '2025-06-29',
    },
    {
        type: 'video',
        title: 'Playlist de Árbol Binario de Búsqueda',
        description:
            'Serie de clases sobre ABB con teoría y ejercicios prácticos implementados en Java.',
        thumbnail:
            'https://i.ytimg.com/vi/JUtUEIAO2O8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLBUd-gMKr3bdpNW2Jcd20xBm6Oetw',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5gf5vwnGKIy9Jh2AUXds-rm&si=rfCvGVGFH1NStX9n',
        platform: 'YouTube',
        date: '2025-06-19',
    },
    {
        type: 'article',
        title: 'Árbol Binario de Búsqueda en Java',
        description:
            'Explicación práctica y didáctica sobre el funcionamiento e implementación de ABB en Java.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WtQFGUbk2zDZLP4S3SXrOw.png',
        url: 'https://medium.com/@arturbomtempo/entendendo-a-%C3%A1rvore-bin%C3%A1ria-de-busca-com-java-teoria-e-pr%C3%A1tica-9171bf57da07',
        platform: 'Medium',
        date: '2025-06-16',
    },
    {
        type: 'article',
        title: 'API REST con Spring Boot',
        description:
            'Guía introductoria para crear un CRUD completo usando Spring Boot y buenas prácticas.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*mIKsH2nx_9gFpMZhFY_c9w.png',
        url: 'https://medium.com/@arturbomtempo/construindo-uma-api-rest-com-spring-boot-a7e9b4e04380',
        platform: 'Medium',
        date: '2025-05-05',
    },
    {
        type: 'article',
        title: 'Nociones de Complejidad',
        description:
            'Introducción clara a la eficiencia de los algoritmos, con ejemplos prácticos y explicación intuitiva.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*UhlQvYhXjY2agLv21SjO8g.png',
        url: 'https://medium.com/@arturbomtempo/noções-de-complexidade-entendendo-a-eficiência-dos-algoritmos-50d515235765',
        platform: 'Medium',
        date: '2025-03-15',
    },
];

export const achievements: Achievement[] = [
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
            'Mejor Trabajo Interdisciplinario del 1º período en Ciencias de la Computación – PUC Minas',
            'Mejor Trabajo Interdisciplinario del 2º período en Ingeniería de Software – PUC Minas',
            '1º lugar en la competición interna de aprendizaje en White Wall',
            '2x reconocido como Voluntario Destacado de Comunicación en la Iglesia Bautista Central',
        ],
    },
    {
        icon: Users,
        title: '4+ Años',
        description: 'Años de Experiencia',
        fullDescription:
            'Mi trayectoria en la tecnología comenzó en 2021 y desde entonces vengo acumulando experiencias valiosas en diversas áreas del desarrollo de software. Trabajé con diferentes tecnologías, metodologías y equipos, siempre buscando entregar soluciones de calidad y aprender continuamente.',
        details: [
            'Experiencia en desarrollo full stack con enfoque en React y Node.js',
            'Actuación en startups y empresas de mediano y gran porte',
            'Trabajo con metodologías ágiles (Scrum, Kanban)',
            'Experiencia en liderazgo técnico y mentoría de desarrolladores',
            'Participación en proyectos de diferentes segmentos y complejidades',
        ],
    },
    {
        icon: Presentation,
        title: '7+ Charlas',
        description: 'Compartiendo conocimiento y formando nuevos talentos',
        fullDescription:
            'Tengo gran interés por la enseñanza y el intercambio de conocimiento. A lo largo de mi trayectoria, dicté charlas, workshops y encuentros educativos en eventos de diferentes tamaños, siempre buscando contribuir con la formación de nuevos profesionales e incentivar a la comunidad a evolucionar en conjunto.',
        details: [
            'Workshops por dos años consecutivos en DevFest BH, mayor evento de tecnología de la ciudad, promovido por Google Developers Group',
            'Charlas en la Escuela de Vacaciones de Ciencias de la Computación de PUC Minas',
            'Encuentros y formaciones como Chapter Lead en WebTech Network',
            'Jornada Back-end del WebTech Network en asociación con LEVTY, con más de 500 inscriptos',
            'Profesor voluntario de HTML, CSS, Python y Scratch en el proyecto Code Club',
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
        role: 'Profesor en PUC Minas',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGl93rGXJtw5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637103746149?e=1766016000&v=beta&t=pRnLdHfXpjnl84MGMLNiWMy1bemOzczRa95D2fH7hNo',
        text: 'Artur es un profesional dedicado, organizado, estudioso y muy competente. Valora la calidad de los sistemas que desarrolla y busca profundizar en las tecnologías que domina. ¡Un profesional excelente!',
    },
    {
        name: 'Eduarda Vieira',
        role: 'Desarrolladora Web en WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHA-xE76bOPSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711488086533?e=1766016000&v=beta&t=pMuG-rgLCUdK3b5CTxj_XpbL6EAJQF0QqQBLdLD5sZs',
        text: 'Durante el segundo semestre de Ingeniería de Software, tuve la oportunidad de seguir de cerca el progreso y aprendizaje de Artur Bomtempo. Desde que lo conocí, siempre ha demostrado mucho compromiso y disposición para enseñar y ayudar a los compañeros, combinando una base técnica sólida con experiencia de mercado y buenas prácticas. Su raciocinio lógico, dedicación y compromiso son diferenciales claros. Aprende con facilidad [...] y se adapta rápidamente a los desafíos. Trabajar con él en proyectos ha sido muy enriquecedor, tanto por la calidad técnica que entrega como por la forma colaborativa y comprometida con la que actúa en equipo.',
    },
    {
        name: 'Arthur Chagas',
        role: 'CTO en QuickFood Technologies',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFqLuhATg7cLA/profile-displayphoto-scale_200_200/B4DZjtEP_4GQAk-/0/1756323971733?e=1766016000&v=beta&t=x4D8Ce8Q7NEs404auhbbRl7lOYqSF296UrmH98FxBh4',
        text: 'Es con gran satisfacción que recomiendo a Artur para oportunidades en el área de programación. Durante nuestro tiempo de trabajo y estudio juntos, pude observar sus habilidades técnicas excepcionales y su compromiso con la excelencia. Artur es un programador talentoso, capaz de resolver problemas de forma creativa y colaborar efectivamente en equipo. Su ética de trabajo y su comunicación clara lo hacen un colega valioso en cualquier proyecto. No dudo en recomendarlo y estoy seguro de que continuará alcanzando éxito en su carrera.',
    },
    {
        name: 'Pedro Félix',
        role: 'Pasante de Inteligencia Artificial en Hotmart',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHKHKeUp1mbHA/profile-displayphoto-scale_200_200/B4DZmqKWpoGgAY-/0/1759496466179?e=1766016000&v=beta&t=a6jljiDWtUtaWBBART7EG_S4qmOZi4uQnn3cxI_46YE',
        text: 'Artur es extremadamente dedicado y siempre ha demostrado empeño y máxima dedicación en todas las tareas, sean simples o complejas.',
    },
    {
        name: 'Lucas Sena',
        role: 'Desarrollador de Software en Samsung',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGCRadSsNupDg/profile-displayphoto-scale_200_200/B4DZf7ewwkHkAc-/0/1752270836205?e=1766016000&v=beta&t=SLneRstpCQfujt060GNKf2JKfX0FQU2_g44RuNYguYw',
        text: 'Por la experiencia que tengo con Artur, puedo afirmar con seguridad que es un excelente profesional y estudiante. Muy esforzado y dedicado, busca aprender y evolucionar diariamente — requisitos de gran importancia para el área de tecnología. Además, posee una base lógica sólida y habilidades de desarrollo de software bien consolidadas.',
    },
    {
        name: 'Letícia França',
        role: 'Diseñadora en WebTech Network',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQF5IRhSKofZMg/profile-displayphoto-scale_200_200/B4DZqcOovOIAAc-/0/1763557674985?e=1766016000&v=beta&t=ovQTK2JERk9p27zLiJ43wVhpwSw8mPrd3dS5r9adWZ0',
        text: 'Acompaño a Artur desde mediados de 2023, en la Enseñanza Media Técnica en Informática. Siempre se ha mostrado muy esforzado, comprometido y estudioso. A lo largo de este período, desarrollamos una gran amistad [...]. Tiene toda mi admiración por su perseverancia y pasión por lo que hace. ¡Es una satisfacción tenerlo como mi gran compañero en proyectos!',
    },
    {
        name: 'Henrique Braga',
        role: 'Co-Fundador en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQG1pycCuwZr-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675865314571?e=1766016000&v=beta&t=1sepUnvz6ywCfEPXLQCEO7RkdzDtZEhz02ErJfHLM9Y',
        text: 'Artur trabajó conmigo en Vidas Vividas y demostró ser muy enfocado en lo que hace, ejecutando todo con mucha dedicación. Por encima de todo el buen trabajo, su mayor característica es tener principios y ser una persona relevante en el ambiente de trabajo.',
    },
    {
        name: 'Pedro Henrique Oliveira',
        role: 'Co-Fundador en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQG6nEqA3Ar5Uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710351455025?e=1766016000&v=beta&t=igz65h9sXYJ4e42Q9NO1Evz2CrYwKEXRObAq4k3-lPg',
        text: '¡Tener a Artur en nuestro equipo fue un gran placer. Siempre dispuesto a aprender y a dedicarse a las actividades! ¡Le deseo todo el éxito!',
    },
    {
        name: 'Thiago Porto',
        role: 'Analista de Datos en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQFvm99F0YTfKQ/profile-displayphoto-scale_200_200/B4DZq6v4jwJ4AY-/0/1764069706688?e=1766016000&v=beta&t=izE-JB7rtBqEVJHZwhuxXOCuCkWdlLxzekNIzlFs0WM',
        text: 'En el período en que Artur hizo prácticas con nosotros en Vidas, fue perceptible su eficiencia, resolviendo de manera eficaz todas las demandas que le eran asignadas. Estoy agradecido por haber tenido la oportunidad de tenerlo como compañero de trabajo. Su simpatía y empatía permitieron una excelente convivencia.',
    },
    {
        name: 'Aquila Faria',
        role: 'Diseñador & Videomaker en Vidas Vividas',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGgsrsN4qba8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688704554164?e=1766016000&v=beta&t=o3Ou6PWtjmwQ-NM-7T8RxsqgagsPG48uGmDp4LZRlxk',
        text: 'Artur se mostró bastante coherente y responsable con su trabajo durante el período en que estuvo en Vidas. ¡Realmente es — y continuará siendo — un gran profesional!',
    },
    {
        name: 'Paulo Henrique',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4E03AQGN5rmNiOPhqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557366845769?e=1766016000&v=beta&t=IyvCXzru0ickfB_K5IPatz2wC4lySsw3pbU5jKwdEZc',
        text: 'Un estudiante y profesional extremadamente interesado y proactivo, enfocado en la resolución de problemas y con gran interés en innovación. ¡Excelente desarrollador y siempre aprendiendo nuevos lenguajes!',
    },
    {
        name: 'Eduardo Gonçalves',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGHO-KMYxkX_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663711191169?e=1766016000&v=beta&t=XH8qlXwbKSNlgGM3OZTDZjeP8yQQe2e7XY_H8inbpGM',
        text: 'Mi ex alumno Artur Bomtempo desempeñó de forma brillante todas las tareas de programación a lo largo del curso. Siempre atento y participativo, creó códigos muchas veces más allá de lo solicitado por los ejercicios. Tranquilo y confiable, sé que será un programador talentoso y de gran valor para cualquier empresa, en Brasil o incluso en el extranjero. Siempre estaré aquí para aplaudir su camino por el mundo de la Tecnología de la Información.',
    },
    {
        name: 'Mario Camargos',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAaKoF6cMo6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517287255764?e=1766016000&v=beta&t=stOeV6-Q49pgmqM7lkp3WGMeplhuZhDTYrfHBh-75FM',
        text: 'Artur Bomtempo es un estudiante especial, siempre destacado y ganador invicto del premio "The Best", promovido por el Colégio Cotemig. Ya ha desarrollado gran parte de sus habilidades y competencias como desarrollador, y es notable que tendrá una carrera prometedora. Se destaca por su empeño, buen raciocinio lógico y por siempre presentar las mejores soluciones. Otro diferencial es que está constantemente buscando ampliar su conocimiento, participando de todos los cursos posibles, dentro y fuera de la escuela, lo que lo mantiene siempre en posición destacada.',
    },
    {
        name: 'Artur Coelho',
        role: 'Profesor en Cotemig',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQGeMwc9nMA2JQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1567173550989?e=1766016000&v=beta&t=Jv0-m20-j6zVtvCPxXqfzUu-HV-saWsRfwMwpwWb-EA',
        text: 'Estudiante muy dedicado y comprometido con las actividades propuestas, con facilidad en el área técnica y excelentes valores personales. Tiene todo para crecer personal y profesionalmente.',
    },
];

export const timeline: Timeline = {
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
            year: '2025 - presente',
            title: 'Desarrollador de Software',
            company: 'dti digital',
            description:
                'Trabajo en soporte y mantenimiento de sistemas corporativos para el cliente MRV.',
            activities: [
                'Mantenimiento y evolución de aplicaciones con .NET en el backend',
                'Implementación de funcionalidades y correcciones usando React.js',
                'Soporte técnico a los sistemas de MRV dentro de Enterprise Inari',
                'Colaboración en ambiente ágil con enfoque en calidad y eficiencia',
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
            year: '2025',
            title: 'Monitor de Programación y Algoritmos',
            company: 'PUC Minas',
            description:
                'Apoyo a estudiantes en el aprendizaje de Java, lógica, POO y estructuras de datos, actuando como monitor en las disciplinas de Algoritmos y Estructuras de Datos I y II y Programación Modular.',
            activities: [
                'Orientación en Java y Programación Orientada a Objetos',
                'Auxilio en lógica, algoritmos e implementación en C y C++',
                'Soporte en estructuras de datos y técnicas de ordenamiento',
                'Aplicación de principios SOLID, Design Patterns y pruebas con JUnit',
                'Acompañamiento de ejercicios, proyectos y aclaración de dudas',
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
};

// Contenido inicial basado en las charlas, talleres y cursos ya mencionados en el sitio.
// Las fechas, ubicaciones y enlaces se completaron con la información disponible —
// revisa y completa con los datos exactos de cada evento. Las imágenes marcadas como
// "placeholder" deben reemplazarse por fotos reales de los eventos (se puede agregar
// una `gallery: [...]` opcional a cualquier elemento para mostrar varias fotos en la
// página de detalles).
export const talks: Talk[] = [
    {
        id: 'escola-ferias-puc-minas',
        type: 'workshop',
        title: 'Taller de React con la API de Studio Ghibli',
        event: 'Escuela de Verano de Ciencias de la Computación — PUC Minas',
        location: 'PUC Minas, Belo Horizonte, MG',
        date: '2025',
        description:
            'Taller práctico de React para estudiantes principiantes, construyendo una aplicación real que consume la API de Studio Ghibli.',
        fullDescription: `Impartí un taller práctico de React durante la Escuela de Verano de Ciencias de la Computación de PUC Minas, dirigido a estudiantes principiantes que deseaban aprender los fundamentos del desarrollo front-end moderno.

A lo largo del taller, los participantes construyeron, paso a paso, una aplicación completa en React que consume la API de Studio Ghibli para mostrar una colección de películas — combinando teoría y práctica en un ejemplo real y atractivo.

Principales temas abordados:
- Fundamentos de React y componentización
- Consumo de APIs externas con Axios
- Enrutamiento con React Router DOM
- Buenas prácticas de organización de proyectos para principiantes`,
        topics: ['React', 'TypeScript', 'APIs', 'Front-end'],
        image: 'https://github.com/user-attachments/assets/208932f4-4060-49f7-9bb7-f4d3247f0d78',
        url: 'https://studio-ghibli-react.vercel.app/',
    },
    {
        id: 'formacoes-webtech-network',
        type: 'talk',
        title: 'Formaciones, Talleres y Mentorías Técnicas',
        event: 'WebTech Network',
        location: 'Online',
        date: '2024 - actualidad',
        description:
            'Conducción de encuentros, talleres y mentorías técnicas como Chapter Lead, formando nuevos desarrolladores en back-end, front-end y buenas prácticas.',
        fullDescription: `Como Chapter Lead de WebTech Network, conduzco regularmente encuentros, talleres y mentorías técnicas orientadas a la formación de nuevos desarrolladores dentro de la comunidad.

Estos encuentros abarcan desde fundamentos de programación hasta temas más avanzados de back-end, front-end, bases de datos y control de versiones, siempre con foco en contenido práctico y aplicable.

Principales temas abordados:
- Fundamentos de Back-end y Front-end
- Bases de datos y control de versiones con Git
- Buenas prácticas de desarrollo y arquitectura de software
- Orientación técnica en proyectos como DevFest, ASSPROM y la Jornada Back-end`,
        topics: ['Mentoría', 'Back-end', 'Front-end', 'Buenas Prácticas'],
        // Placeholder — reemplazar por la imagen oficial del evento.
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
            'Formación intensiva sobre desarrollo back-end, organizada en asociación entre WebTech Network y LEVTY, reuniendo a más de 500 inscritos.',
        fullDescription: `La Jornada Back-end fue una iniciativa de formación promovida por WebTech Network en asociación con LEVTY, con el objetivo de introducir y profundizar conceptos esenciales de desarrollo back-end para una audiencia de más de 500 inscritos.

Como Chapter Lead de WebTech Network, lideré la conducción técnica del contenido, presentando conceptos, buenas prácticas y ejemplos prácticos a lo largo del evento.

Principales temas abordados:
- Fundamentos de APIs REST y arquitectura back-end
- Buenas prácticas de organización y estructuración de código
- Autenticación, seguridad y manejo de errores
- Integración entre back-end y base de datos
- Consejos de carrera y próximos pasos para quienes están comenzando`,
        topics: ['Back-end', 'APIs REST', 'Node.js', 'Buenas Prácticas', 'Carrera'],
        // Placeholder — reemplazar por la imagen oficial del evento.
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'workshops-devfest-bh',
        type: 'workshop',
        title: 'Talleres de React',
        event: 'DevFest BH — Google Developers Group Belo Horizonte',
        location: 'Belo Horizonte, MG',
        date: '2023 - 2024',
        description:
            'Talleres prácticos de React impartidos durante dos años consecutivos en el mayor evento de tecnología de Belo Horizonte, promovido por Google Developers Group.',
        fullDescription: `Durante dos años consecutivos, tuve la oportunidad de impartir talleres prácticos de React en el DevFest BH, el mayor evento de tecnología de Belo Horizonte, promovido por Google Developers Group (GDG BH).

Los talleres fueron pensados para desarrolladores de diferentes niveles de experiencia, con foco en consolidar conceptos fundamentales de React mediante la construcción de aplicaciones reales durante el propio evento.

Principales temas abordados:
- Fundamentos de componentes, props y estado en React
- Hooks esenciales (useState, useEffect, entre otros)
- Buenas prácticas de organización de proyectos front-end
- Construcción de una aplicación práctica de principio a fin`,
        topics: ['React', 'JavaScript', 'TypeScript', 'Front-end'],
        image: 'https://github.com/user-attachments/assets/1b43e564-ae07-4bdf-a6ec-92f5884e2b12',
        url: 'https://gdgbh.com.br/',
    },
    {
        id: 'code-club-voluntariado',
        type: 'course',
        title: 'Profesor Voluntario',
        event: 'Code Club',
        location: 'Belo Horizonte, MG',
        date: 'Actividad continua',
        description:
            'Clases voluntarias de HTML, CSS, Python y Scratch para niños y jóvenes, incentivando los primeros pasos en el mundo de la programación.',
        fullDescription: `Como profesor voluntario del proyecto Code Club, imparto clases introductorias de programación para niños y jóvenes, con el objetivo de despertar el interés por la tecnología desde temprano y hacer el aprendizaje accesible y divertido.

Las clases abarcan desde lógica de programación con Scratch hasta fundamentos de desarrollo web con HTML y CSS, además de una introducción a Python, siempre con un enfoque lúdico y práctico.

Principales temas abordados:
- Lógica de programación con Scratch
- Fundamentos de HTML y CSS
- Introducción a la programación con Python
- Estímulo a la creatividad y al pensamiento computacional`,
        topics: ['Scratch', 'HTML', 'CSS', 'Python', 'Educación'],
        // Placeholder — reemplazar por la imagen oficial del evento.
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    },
];

export const ui = {
    nav: {
        home: 'Inicio',
        about: 'Acerca de',
        projects: 'Proyectos',
        talks: 'Charlas',
        content: 'Contenidos',
        contact: 'Contacto',
        logo: 'Portafolio',
    },
    home: {
        greeting: 'Soy',
        role: 'Desarrollador de Software',
        description:
            'Siempre he tenido el deseo de generar impacto en la vida de las personas — y encontré en el desarrollo de software una forma de convertir eso en realidad.',
        aboutButton: 'Acerca de mí',
        contactButton: 'Contáctame',
    },
    about: {
        title: 'Acerca de Mí',
        description:
            'Soy un desarrollador apasionado por crear soluciones innovadoras y eficientes. Con más de 4 años de experiencia, me he dedicado a construir aplicaciones web y móviles que marcan la diferencia en la vida de las personas. Mi enfoque es siempre entregar código limpio, escalable y que satisfaga las necesidades reales de los usuarios.',
        techTitle: 'Tecnologías',
        testimonialsTitle: 'Testimonios',
        educationTitle: 'Educación',
        experienceTitle: 'Experiencia Profesional',
    },
    projects: {
        title: 'Proyectos',
        description:
            'Algunos de los proyectos que he desarrollado a lo largo de mi carrera. Cada uno representa un desafío único y aprendizaje continuo.',
    },
    projectDetails: {
        backButton: 'Volver a Proyectos',
        viewProject: 'Ver Proyecto',
        viewCode: 'Ver Código',
        aboutTitle: 'Acerca del Proyecto',
        techTitle: 'Tecnologías Utilizadas',
    },
    talks: {
        title: 'Charlas y Cursos',
        description:
            'A lo largo de mi trayectoria, he tenido la oportunidad de compartir conocimiento en charlas, talleres y cursos para comunidades e instituciones educativas.',
        all: 'Todos',
        talk: 'Charlas',
        workshop: 'Talleres',
        course: 'Cursos',
        learnMore: 'Saber más',
    },
    talkDetails: {
        backButton: 'Volver a Charlas y Cursos',
        aboutTitle: 'Acerca del evento',
        topicsTitle: 'Temas abordados',
        galleryTitle: 'Fotos',
        visitLink: 'Visitar enlace del evento',
        notFoundTitle: 'Evento no encontrado',
        notFoundMessage: 'El evento que buscas no existe o ha sido eliminado.',
    },
    talkBadges: {
        talk: 'Charla',
        workshop: 'Taller',
        course: 'Curso',
    },
    content: {
        title: 'Contenidos',
        description:
            'Comparto conocimientos de forma gratuita sobre desarrollo web, buenas prácticas y tecnologías modernas.',
        all: 'Todos',
        videos: 'Videos',
        articles: 'Artículos',
        newsletters: 'Newsletters',
    },
    contact: {
        title: 'Contáctame',
        description:
            'Siempre estoy abierto a nuevas oportunidades y colaboraciones. Contáctame a través de los canales a continuación.',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        location: 'Ubicación',
        sendMessage: 'Enviar Mensaje',
        name: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Escribe tu mensaje aquí...',
    },
    notFound: {
        title: '404',
        heading: 'Página no encontrada',
        message: 'La página que buscas no existe o ha sido movida.',
        backButton: 'Volver al Inicio',
    },
    footer: {
        rights: '© {year} Artur Bomtempo. Todos los derechos reservados.',
    },
    siteTitle: 'Artur Bomtempo | Portafolio',
    contentBadges: {
        video: 'Video',
        article: 'Artículo',
        newsletter: 'Newsletter',
    },
    toast: {
        messageSent: '¡Mensaje enviado con éxito!',
        thankYou: 'Gracias por contactar. ¡Responderé pronto!',
        errorSending: 'Error al enviar mensaje',
        errorDescription: 'Por favor, intenta nuevamente más tarde.',
        sending: 'Enviando...',
    },
    validation: {
        nameRequired: 'El nombre es obligatorio',
        nameMinLength: 'El nombre debe tener al menos 5 caracteres',
        emailRequired: 'El correo electrónico es obligatorio',
        emailInvalid: 'Formato de correo electrónico inválido',
        messageRequired: 'El mensaje es obligatorio',
        messageMinLength: 'El mensaje debe tener al menos 50 caracteres',
    },
};
