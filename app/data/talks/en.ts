import type { Talk } from '~/types/talk';

export const TALKS_EN: Talk[] = [
    {
        id: 'webtech-nuxt-workshop',
        type: 'workshop',
        title: 'Modern web development with Nuxt.js',
        eventName: 'WebTech Network',
        location: 'PUC Minas Lourdes',
        date: '2026-10-08',
        description:
            'A hands-on WebTech Network workshop on building modern web applications with Nuxt.js and Vue.js.',
        fullDescription:
            'I led a hands-on WebTech Network workshop on building modern web applications with Nuxt.js and Vue.js, presenting a solid alternative to the React and Next.js ecosystem.\n\nThroughout the session, participants explored the main features of Nuxt.js to build responsive interfaces and integrate with APIs and external services.\n\nMain topics covered:\n- Vue.js and Nuxt.js fundamentals\n- Main Nuxt.js features\n- Building responsive interfaces\n- Integration with APIs and external services',
        topics: ['Nuxt.js', 'Vue.js', 'Front-end'],
        image: '/images/talks/webtech-nuxt-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-nuxt-workshop/01.webp',
                alt: 'Photo 1 from WebTech Network',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/webtech-nuxt-workshop/02.webp',
                alt: 'Photo 2 from WebTech Network',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/webtech-nuxt-workshop/03.webp',
                alt: 'Photo 3 from WebTech Network',
                width: 1200,
                height: 1600,
            },
            {
                src: '/images/talks/webtech-nuxt-workshop/04.webp',
                alt: 'Photo 4 from WebTech Network',
                width: 1800,
                height: 2400,
            },
        ],
    },
    {
        id: 'dti-minimal-apis-techshot',
        type: 'talk',
        title: 'Minimal APIs: building simpler and more efficient APIs',
        eventName: 'Techshot · dti digital',
        location: 'Online',
        date: '2026-08-25',
        description:
            'A Techshot at dti digital on ASP.NET Core Minimal APIs, building an API from scratch in .NET.',
        fullDescription:
            'I led a Techshot at dti digital about Minimal APIs, the ASP.NET Core approach created to build HTTP APIs more directly and with less code, without giving up the features a back-end application needs.\n\nBesides explaining how Minimal APIs work and comparing them with Controller-based development, we discussed when this approach makes sense, along with its advantages and limitations. In the hands-on part, we built an API from scratch in .NET and evolved it from a simple implementation into an organized structure, close to a real project.\n\nMain topics covered:\n- What Minimal APIs are and how they work\n- Comparison with Controller-based APIs\n- Endpoints, routes and HTTP methods\n- Organizing projects with Minimal APIs',
        topics: ['.NET', 'ASP.NET Core', 'Minimal APIs', 'Back-end'],
        image: '/images/talks/dti-minimal-apis-techshot/cover.webp',
        gallery: [
            {
                src: '/images/talks/dti-minimal-apis-techshot/02.webp',
                alt: 'Photo 1 from Techshot · dti digital',
                width: 1206,
                height: 1334,
            },
            {
                src: '/images/talks/dti-minimal-apis-techshot/01.webp',
                alt: 'Photo 2 from Techshot · dti digital',
                width: 1206,
                height: 635,
            },
        ],
    },
    {
        id: 'webtech-days-ai-edition',
        type: 'workshop',
        title: 'Building your first MCP server with a local database',
        eventName: 'WebTech Days AI Edition',
        location: 'PUC Minas Lourdes',
        date: '2026-06-27',
        description:
            'A workshop at WebTech Days AI Edition on connecting AI applications to your own data with the Model Context Protocol.',
        fullDescription:
            'At WebTech Days AI Edition, I led, together with Cláudio Augusto Novaes Gontijo, a workshop on the Model Context Protocol (MCP), one of the technologies that has gained the most ground in the artificial intelligence ecosystem.\n\nDuring the workshop, we built with the participants an MCP server connected to a local database, showing in practice how to connect AI applications to your own data and create solutions that answer questions from structured information.\n\nMain topics covered:\n- Model Context Protocol concepts and architecture\n- Building an MCP server\n- Integration with a local database\n- Integration with language models',
        topics: ['MCP', 'Artificial Intelligence', 'LLMs', 'Databases'],
        image: '/images/talks/webtech-days-ai-edition/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-days-ai-edition/02.webp',
                alt: 'Photo 1 from WebTech Days AI Edition',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/webtech-days-ai-edition/01.webp',
                alt: 'Photo 2 from WebTech Days AI Edition',
                width: 1800,
                height: 2400,
            },
        ],
    },
    {
        id: 'software-engineering-10-years-workshop',
        type: 'workshop',
        title: 'APIs with Spring Boot: from scratch to integration',
        eventName: '10 years of Software Engineering at PUC Minas',
        location: 'PUC Minas Lourdes',
        date: '2026-05-14',
        description:
            'A workshop celebrating 10 years of the Software Engineering program at PUC Minas, with a REST API integrated into a React front-end.',
        fullDescription:
            'At the celebration of 10 years of the Software Engineering program at PUC Minas, I led a new edition of the workshop "APIs with Spring Boot: from scratch to integration", previously held by WebTech Network.\n\nParticipants built a REST API with Spring Boot from scratch, from creating the endpoints to persistence with JPA, and integrated it into a React front-end, understanding in practice how back-end and front-end communicate in real applications.\n\nMain topics covered:\n- Creating REST endpoints with Spring Boot\n- Data persistence with JPA\n- Organizing the application in layers\n- Integrating the API with React',
        topics: ['Java', 'Spring Boot', 'JPA', 'React', 'REST APIs'],
        image: '/images/talks/software-engineering-10-years-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/software-engineering-10-years-workshop/01.webp',
                alt: 'Photo 1 from 10 years of Software Engineering at PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/02.webp',
                alt: 'Photo 2 from 10 years of Software Engineering at PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/03.webp',
                alt: 'Photo 3 from 10 years of Software Engineering at PUC Minas',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/software-engineering-10-years-workshop/04.webp',
                alt: 'Photo 4 from 10 years of Software Engineering at PUC Minas',
                width: 960,
                height: 960,
            },
        ],
    },
    {
        id: 'webtech-spring-boot-api-2026',
        type: 'workshop',
        title: 'From scratch to integration: building an API with Spring Boot',
        eventName: 'WebTech Network',
        location: 'PUC Minas Lourdes',
        date: '2026-05-09',
        description:
            'A hands-on workshop in which participants built a REST API with Spring Boot and integrated it into a React front-end.',
        fullDescription:
            'I led a hands-on WebTech Network workshop in which participants built a REST API with Spring Boot from scratch, applying essential concepts such as endpoint creation, persistence with JPA and a layered architecture.\n\nIn the final stage, the API was integrated into a React front-end, showing in practice how back-end and front-end communicate in real applications. The session was designed for people taking their first steps in back-end development.\n\nMain topics covered:\n- Creating REST endpoints with Spring Boot\n- Data persistence with JPA\n- Organizing the application in layers\n- Integrating the API with React',
        topics: ['Java', 'Spring Boot', 'JPA', 'React', 'REST APIs'],
        image: '/images/talks/webtech-spring-boot-api-2026/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-spring-boot-api-2026/01.webp',
                alt: 'Photo 1 from WebTech Network',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/webtech-spring-boot-api-2026/03.webp',
                alt: 'Photo 2 from WebTech Network',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/webtech-spring-boot-api-2026/02.webp',
                alt: 'Photo 3 from WebTech Network',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'world-creativity-day-2026',
        type: 'talk',
        title: 'Creativity is not a gift, it is a process',
        eventName: 'World Creativity Day 2026 · BH Mais Criativa',
        location: 'Faculdade Cotemig',
        date: '2026-04-22',
        endDate: '2026-04-23',
        description:
            'A talk at World Creativity Day 2026 about what technology teaches us about creating things from scratch.',
        fullDescription:
            'At World Creativity Day 2026, the largest creativity festival in the world, I gave the talk "Creativity is not a gift, it is a process: what technology taught me about creating things from scratch", as part of a program promoted by the BH Mais Criativa movement.\n\nI also took part in the event as an ambassador and volunteer, sharing how technology and innovation become more powerful when creativity is treated as a process that can be learned, practiced and improved.\n\nMain topics covered:\n- Creativity as a process, not a gift\n- What technology teaches about creating from scratch\n- Innovation and technology serving new ideas',
        topics: ['Creativity', 'Innovation', 'Technology'],
        image: '/images/talks/world-creativity-day-2026/cover.webp',
        gallery: [
            {
                src: '/images/talks/world-creativity-day-2026/01.webp',
                alt: 'Photo 1 from World Creativity Day 2026 · BH Mais Criativa',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/world-creativity-day-2026/03.webp',
                alt: 'Photo 2 from World Creativity Day 2026 · BH Mais Criativa',
                width: 837,
                height: 1116,
            },
            {
                src: '/images/talks/world-creativity-day-2026/02.webp',
                alt: 'Photo 3 from World Creativity Day 2026 · BH Mais Criativa',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'dti-docker-kt',
        type: 'talk',
        title: 'Introduction to Docker: from theory to practice',
        eventName: 'dti digital',
        location: 'Online',
        date: '2025-12-16',
        description:
            'A Knowledge Transfer session at dti digital on Docker, from the theoretical basis to practical examples with Docker Compose.',
        fullDescription:
            "I led a Knowledge Transfer session on Docker at dti digital, covering everything from the theoretical basis to practical, everyday examples.\n\nThe goal was to provide a solid foundation so that people could understand how Docker works and feel confident applying these concepts to real projects within the company.\n\nMain topics covered:\n- Containers and images\n- Volumes and data persistence\n- Local orchestration with Docker Compose\n- Docker's overall architecture",
        topics: ['Docker', 'Docker Compose', 'Containers'],
        image: '/images/talks/dti-docker-kt/cover.webp',
        gallery: [
            {
                src: '/images/talks/dti-docker-kt/01.webp',
                alt: 'Photo 1 from dti digital',
                width: 1206,
                height: 609,
            },
        ],
    },
    {
        id: 'devfest-bh-2025',
        type: 'workshop',
        title: 'Docker for beginners',
        eventName: 'DevFest Belo Horizonte 2025',
        location: 'PUC Minas Lourdes',
        date: '2025-11-08',
        description:
            'A hands-on workshop at DevFest Belo Horizonte 2025 on containers, from fundamental concepts to building images and deploying.',
        fullDescription:
            'At DevFest Belo Horizonte 2025, one of the largest technology events in Belo Horizonte, I led, together with Gabriel Nogueira, the workshop "Docker for beginners", a hands-on immersion in the world of containers.\n\nThe workshop covered everything from the fundamental concepts to building and optimizing images and deploying applications, so that participants left ready to bring Docker into their own projects.\n\nMain topics covered:\n- Fundamental container concepts\n- Building and optimizing images\n- Running applications in containers\n- Deploying applications with Docker',
        topics: ['Docker', 'Containers', 'DevOps'],
        image: '/images/talks/devfest-bh-2025/cover.webp',
        gallery: [
            {
                src: '/images/talks/devfest-bh-2025/02.webp',
                alt: 'Photo 1 from DevFest Belo Horizonte 2025',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/devfest-bh-2025/01.webp',
                alt: 'Photo 2 from DevFest Belo Horizonte 2025',
                width: 2400,
                height: 1600,
            },
        ],
    },
    {
        id: 'puc-minas-vacation-school-2025',
        type: 'workshop',
        title: 'Design Patterns in Java and modern applications with React',
        eventName: '18th PUC Minas Computer Science Vacation School',
        location: 'PUC Minas Coração Eucarístico',
        date: '2025-07-30',
        endDate: '2025-07-31',
        description:
            'A talk on Design Patterns in Java and a hands-on React workshop at the 18th PUC Minas Vacation School.',
        fullDescription:
            'At the 18th PUC Minas Computer Science Vacation School, I led two activities. The first was the talk "Design Patterns in Java for scalable applications", given together with Eduarda Vieira Gonçalves, which showed in practice how design patterns turn messy code into professional, scalable and maintainable code.\n\nThe second was the workshop "Building modern applications with ReactJS", in which participants structured a React project with industry best practices, componentization and front-end architecture concepts, building an application that consumes the Studio Ghibli API.\n\nMain topics covered:\n- Design patterns in object-oriented programming\n- Design Patterns in Java for scalable applications\n- Structuring React projects\n- Componentization and front-end architecture',
        topics: ['Design Patterns', 'Java', 'React', 'Front-end architecture'],
        image: '/images/talks/puc-minas-vacation-school-2025/cover.webp',
        gallery: [
            {
                src: '/images/talks/puc-minas-vacation-school-2025/02.webp',
                alt: 'Photo 1 from 18th PUC Minas Computer Science Vacation School',
                width: 1206,
                height: 1276,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2025/03.webp',
                alt: 'Photo 2 from 18th PUC Minas Computer Science Vacation School',
                width: 960,
                height: 1280,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2025/01.webp',
                alt: 'Photo 3 from 18th PUC Minas Computer Science Vacation School',
                width: 1280,
                height: 960,
            },
        ],
    },
    {
        id: 'webtech-backend-journey',
        type: 'course',
        title: 'Journey Backend: mentoring in Node.js and Express',
        eventName: 'Journey Backend · WebTech Network and LEVTY',
        location: 'Online',
        date: '2025-07',
        endDate: '2025-09',
        description:
            'A WebTech Network program in partnership with LEVTY to boost people starting out in back-end development with Node.js and Express.',
        fullDescription:
            'Journey Backend was a WebTech Network program in partnership with LEVTY, created to boost the careers of people starting out in back-end development with Node.js and Express. The program had more than 500 registrations, and the official opening brought together more than 200 people at the same time.\n\nAs a member of the Backend Guild, I supported participants throughout the journey, answering questions, sharing experiences and preparing support materials for each stage of the program.\n\nMain topics covered:\n- Back-end development with Node.js\n- Building APIs with Express\n- Mentoring and technical support for participants\n- Producing support materials',
        topics: ['Node.js', 'Express', 'Back-end', 'Mentoring'],
        image: '/images/talks/webtech-backend-journey/cover.webp',
        gallery: [
            {
                src: '/images/talks/webtech-backend-journey/02.webp',
                alt: 'Photo 1 from Journey Backend · WebTech Network and LEVTY',
                width: 1206,
                height: 1195,
            },
            {
                src: '/images/talks/webtech-backend-journey/01.webp',
                alt: 'Photo 2 from Journey Backend · WebTech Network and LEVTY',
                width: 1206,
                height: 570,
            },
        ],
    },
    {
        id: 'assprom-web-development-course',
        type: 'course',
        title: 'HTML, CSS, Bootstrap and GitHub course for young apprentices',
        eventName: 'WebTech Network, Elas++ and ASSPROM',
        location: 'PUC Minas Lourdes',
        date: '2025-05',
        description:
            'An introductory web development course for the young apprentices of ASSPROM, with classes over four weeks.',
        fullDescription:
            "Together with Eduarda Vieira Gonçalves, I taught an introductory HTML, CSS, Bootstrap and GitHub course for the young apprentices of ASSPROM, in a project promoted by WebTech Network and Elas++ in partnership with the association.\n\nOver four weeks of classes, the goal was to present the fundamentals of web development and broaden the participants' view of the possibilities in technology, up to the presentation of the pages they created.\n\nMain topics covered:\n- Page structure with HTML\n- Styling with CSS\n- Responsive layouts with Bootstrap\n- Version control and publishing with Git and GitHub",
        topics: ['HTML', 'CSS', 'Bootstrap', 'GitHub'],
        image: '/images/talks/assprom-web-development-course/cover.webp',
        gallery: [
            {
                src: '/images/talks/assprom-web-development-course/01.webp',
                alt: 'Photo 1 from WebTech Network, Elas++ and ASSPROM',
                width: 1206,
                height: 891,
            },
            {
                src: '/images/talks/assprom-web-development-course/03.webp',
                alt: 'Photo 2 from WebTech Network, Elas++ and ASSPROM',
                width: 1206,
                height: 896,
            },
            {
                src: '/images/talks/assprom-web-development-course/04.webp',
                alt: 'Photo 3 from WebTech Network, Elas++ and ASSPROM',
                width: 1206,
                height: 894,
            },
            {
                src: '/images/talks/assprom-web-development-course/05.webp',
                alt: 'Photo 4 from WebTech Network, Elas++ and ASSPROM',
                width: 1206,
                height: 891,
            },
            {
                src: '/images/talks/assprom-web-development-course/06.webp',
                alt: 'Photo 5 from WebTech Network, Elas++ and ASSPROM',
                width: 1206,
                height: 888,
            },
            {
                src: '/images/talks/assprom-web-development-course/07.webp',
                alt: 'Photo 6 from WebTech Network, Elas++ and ASSPROM',
                width: 1206,
                height: 895,
            },
            {
                src: '/images/talks/assprom-web-development-course/02.webp',
                alt: 'Photo 7 from WebTech Network, Elas++ and ASSPROM',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'devfest-bh-2024',
        type: 'workshop',
        title: 'React.js and Next.js workshop',
        eventName: 'DevFest Belo Horizonte 2024',
        location: 'PUC Minas Lourdes',
        date: '2024-10-26',
        description:
            'A workshop at DevFest Belo Horizonte 2024, one of the largest technology events in the city, on the fundamentals of React.js and Next.js.',
        fullDescription:
            'At DevFest Belo Horizonte 2024, one of the largest technology events in Belo Horizonte, I led a workshop on the fundamental concepts of React.js and Next.js.\n\nParticipants explored how these frameworks complement each other and how to use them to build fast, well-organized and efficient websites.\n\nMain topics covered:\n- Componentization and props in React.js\n- Routing and the strengths of Next.js\n- Building websites with React.js and Next.js',
        topics: ['React.js', 'Next.js', 'Front-end'],
        image: '/images/talks/devfest-bh-2024/cover.webp',
        gallery: [
            {
                src: '/images/talks/devfest-bh-2024/01.webp',
                alt: 'Photo 1 from DevFest Belo Horizonte 2024',
                width: 1206,
                height: 895,
            },
            {
                src: '/images/talks/devfest-bh-2024/02.webp',
                alt: 'Photo 2 from DevFest Belo Horizonte 2024',
                width: 2400,
                height: 1599,
            },
        ],
    },
    {
        id: 'spring-mvc-full-stack-workshop',
        type: 'workshop',
        title: 'Full Stack App Workshop with Spring Boot and Spring MVC',
        location: 'PUC Minas Lourdes',
        date: '2024-09-06',
        description:
            'A hands-on lab in which participants built a full stack application with Java, Spring Boot and Spring MVC.',
        fullDescription:
            'I led a hands-on lab focused on Java with Spring Boot and Spring MVC, in which participants built a complete full stack application step by step.\n\nThe workshop covered every layer of a web application, from the project structure and the creation of the APIs to the user interface and data persistence, always focusing on good practices.\n\nMain topics covered:\n- Spring Boot MVC fundamentals and structure\n- Building and integrating RESTful APIs\n- Implementing an interactive front-end\n- Database integration and persistence',
        topics: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Full Stack'],
        image: '/images/talks/spring-mvc-full-stack-workshop/cover.webp',
        gallery: [
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/02.webp',
                alt: 'Photo 1 from Full Stack App Workshop with Spring Boot and Spring MVC',
                width: 2400,
                height: 1800,
            },
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/03.webp',
                alt: 'Photo 2 from Full Stack App Workshop with Spring Boot and Spring MVC',
                width: 1800,
                height: 2400,
            },
            {
                src: '/images/talks/spring-mvc-full-stack-workshop/01.webp',
                alt: 'Photo 3 from Full Stack App Workshop with Spring Boot and Spring MVC',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'puc-minas-vacation-school-2024',
        type: 'workshop',
        title: 'Pre-AEDS I Workshop',
        eventName: '17th PUC Minas Computer Science Vacation School',
        location: 'PUC Minas Coração Eucarístico',
        date: '2024-07-30',
        description:
            'A programming logic workshop in C for students about to take Algorithms and Data Structures I.',
        fullDescription:
            'At the 17th PUC Minas Computer Science Vacation School, I led a preparatory workshop for Algorithms and Data Structures I (AEDS I), one of the most important courses in the first semesters of the degree.\n\nThe workshop was held at the request of Professor Rosilane, who identified the need for preparation among students starting the program. Using the C language, I presented the fundamentals of programming logic in a practical and accessible way.\n\nMain topics covered:\n- Programming logic fundamentals\n- Introduction to the C language\n- Preparation for the AEDS I course',
        topics: ['C', 'Programming Logic', 'Algorithms'],
        image: '/images/talks/puc-minas-vacation-school-2024/cover.webp',
        gallery: [
            {
                src: '/images/talks/puc-minas-vacation-school-2024/02.webp',
                alt: 'Photo 1 from 17th PUC Minas Computer Science Vacation School',
                width: 960,
                height: 1280,
            },
            {
                src: '/images/talks/puc-minas-vacation-school-2024/01.webp',
                alt: 'Photo 2 from 17th PUC Minas Computer Science Vacation School',
                width: 2400,
                height: 1800,
            },
        ],
    },
    {
        id: 'cotemig-code-club',
        type: 'course',
        title: 'Code Club: first steps in programming for kids',
        eventName: 'Code Club · Colégio Cotemig',
        location: 'Colégio Cotemig',
        date: '2023-04',
        endDate: '2023-07',
        description:
            'From April to July 2023, I taught HTML, CSS, Scratch and Python classes to kids taking their first steps in programming.',
        fullDescription:
            "The 8th edition of Code Club at Colégio Cotemig was a project that taught programming to kids, held from April to July 2023. I started as a mentee, preparing to present content and act as a teaching assistant, and ended up leading the classes as the teacher, supporting the professor in charge of the project.\n\nIn this role, I planned and led classes designed to spark the kids' curiosity, with hands-on activities and accessible language, so that each of them could build a solid foundation of logic and creativity.\n\nMain topics covered:\n- Programming logic with Scratch\n- Web page structure with HTML\n- Styling with CSS\n- First programs in Python",
        topics: ['Scratch', 'HTML', 'CSS', 'Python', 'Teaching programming'],
        image: '/images/talks/cotemig-code-club/cover.webp',
        gallery: [
            {
                src: '/images/talks/cotemig-code-club/01.webp',
                alt: 'Photo 1 from Code Club · Colégio Cotemig',
                width: 1005,
                height: 1356,
            },
            {
                src: '/images/talks/cotemig-code-club/02.webp',
                alt: 'Photo 2 from Code Club · Colégio Cotemig',
                width: 1206,
                height: 676,
            },
        ],
    },
];
