import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from 'lucide-react';
import { Achievement, Content, Project, TechCategory, Testimonial, Timeline, Talk } from './types';

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Personal Portfolio — Artur Bomtempo',
        description:
            'Personal website developed to showcase my trajectory, skills, and main projects.',
        image: 'https://github.com/user-attachments/assets/bb40b211-79a4-45ea-8ba9-5f1bac978299',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `This portfolio was developed with the goal of presenting my main skills, experiences, projects, and initiatives in the technology area in a clear and professional manner. The platform gathers information about my trajectory, my work in academic and professional projects, and highlights content such as workshops, awards, and publications.

The website's construction was designed to reflect my identity as a developer, offering fluid, modern, and accessible navigation.

Key features:
- Sections dedicated to projects, career, education, and achievements
- Responsive and organized interface, focused on clarity and user experience
- Modular structure that facilitates content maintenance and expansion
- Clean and coherent design, reinforcing professionalism and visual identity
- Authorial content written to convey authenticity and confidence

A personal project that consolidates my mastery of modern front-end development and presents my work professionally.`,
        allTechs: ['React', 'TypeScript', 'Zod', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://www.arturbomtempo.dev/',
        githubUrl: 'https://github.com/arturbomtempo-dev/portfolio',
    },
    {
        id: 'gdg-bh-2025',
        title: 'GDG Belo Horizonte 2025 Website',
        description:
            'Official website for Google Developers Group Belo Horizonte, featuring events, talks, and community information.',
        image: 'https://raw.githubusercontent.com/arturbomtempo-dev/devfest-bh-website/refs/heads/main/resources/screenshots/gdgbh25.png',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `This project consists of developing the new official website for Google Developers Group (GDG) Belo Horizonte for the year 2025. The platform presents community events, previous talks, institutional information, and content about the organization, offering a modern and accessible experience for developers interested in the GDG ecosystem.

My contribution was directly linked to front-end development, ensuring a clear, responsive interface aligned with the community's visual identity.

Key features:
- Official page with updated information about GDG Belo Horizonte
- Section dedicated to community events and meetings
- History of talks and content previously presented
- Modern, responsive interface based on reusable components
- Structure designed to highlight relevant information and facilitate navigation

A project developed in collaboration to strengthen the digital presence of one of the region's main technology communities.`,
        allTechs: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://gdgbh.com.br/',
        githubUrl: 'https://github.com/gdg-bh/site-oficial',
    },
    {
        id: 'link-in-bio',
        title: 'Link in Bio',
        description:
            'Educational project developed to teach basic concepts of React, TypeScript, and Styled Components.',
        image: 'https://github.com/user-attachments/assets/30e30fe2-0958-41e6-b6d9-71e385d66316',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `This project was created as part of a YouTube tutorial with the goal of teaching, in a practical and accessible way, the fundamentals of React, TypeScript, and Styled Components. The application demonstrates the complete process of building a Link in Bio — a page that centralizes important links such as social networks, portfolio, and contact information.

Key features:
- Profile display with name, photo, and brief description
- Fully customizable list of links
- Social media icons with direct access
- Responsive interface adapted for use on mobile devices
- Project created with an educational focus, guiding beginners in building applications with React

A simple and functional solution, ideal for those who want to learn modern front-end development while creating their own link page.`,
        allTechs: ['React', 'TypeScript', 'Styled Components', 'Vite'],
        liveUrl: 'https://www.links.arturbomtempo.dev/',
        githubUrl: 'https://github.com/arturbomtempo-dev/link-in-bio-react-youtube-tutorial',
    },
    {
        id: 'studio-ghibli-api',
        title: 'Studio Ghibli API React App',
        description:
            'Application developed as an educational project to teach React during PUC Minas Summer School.',
        image: 'https://github.com/user-attachments/assets/208932f4-4060-49f7-9bb7-f4d3247f0d78',
        cardTechs: ['React', 'TypeScript'],
        fullDescription: `Project developed for the PUC Minas Computer Science Summer School in 2025, with the goal of teaching beginner students to build complete React applications. The application consumes data from the Studio Ghibli API to display a collection of films, offering a practical and guided experience in modern front-end development.

Key features:
- Listing of Studio Ghibli films with general information
- Fluid navigation between pages and sections of the application
- Organized, responsive interface easy for beginners to understand
- Project used as a basis for teaching essential React fundamentals
- Practice-oriented approach, focusing on component construction, routes, and API consumption

A project with an educational purpose, created to facilitate learning modern web development through a real and engaging example.`,
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
            'Official website developed for the largest technology event in Belo Horizonte, promoted by Google Developers Group.',
        image: 'https://github.com/user-attachments/assets/1b43e564-ae07-4bdf-a6ec-92f5884e2b12',
        cardTechs: ['Next.js', 'TypeScript'],
        fullDescription: `Platform developed by me and part of the WebTech Network team for Google Developers Group Belo Horizonte, serving as the official website for DevFest BH 2024 — the city's largest technology event. The goal was to create a complete experience for participants, with information, schedule, location, partners, and registration link.

Key features:
- Official event page with its own visual identity and updated content
- Access to registration page and direction to the credentialing system
- Display of complete schedule, talks, and event tracks
- Dedicated sections for sponsors, media kit, and institutional information
- Dynamic countdown and essential information for participants
- Responsive, fast interface optimized for SEO
- Developed in collaboration with a multidisciplinary team from WebTech Network

A high-impact project, delivered in partnership with GDG BH, focused on quality, performance, and user experience.`,
        allTechs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://demo-devfestbh-2024.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/devfest-bh-website',
    },
    {
        id: 'planner',
        title: 'plann.er',
        description:
            "Complete travel itinerary platform developed during Rocketseat's NLW Journey.",
        image: 'https://github.com/user-attachments/assets/18dbb5f1-7a6b-4972-b26a-6a742fe5bf66',
        cardTechs: ['Node.js', 'React', 'TypeScript'],
        fullDescription: `Project developed during Rocketseat's NLW Journey event, with the goal of consolidating modern web development concepts, both on the front-end and back-end. The platform simulates a complete travel organization system, allowing management of participants, activities, and itinerary details.

Key features:
- Trip registration and creation of personalized invitations
- Registration and listing of trip activities
- Attendance confirmation and participant management
- Detailed display of trip information
- Structured API with validation, link-based authentication, and email sending
- Modern, responsive interface that is easy to navigate

The project presents a solid set of core functionalities, with complete backend routes, and served as an in-depth study of web architecture, front-back integration, and best practices with TypeScript.`,
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
            'Application created to list Minecraft mobs, items, and ores by consuming a custom API.',
        image: 'https://github.com/user-attachments/assets/ad0c5022-a10e-49c1-9fab-2a29ea027c59',
        cardTechs: ['React', 'Node.js'],
        fullDescription: `Project developed in the Frameworks course of the technical web and mobile development program, focusing on consolidating studies of React Hooks and API consumption. The application displays detailed information about Minecraft mobs, equipment, and ores, using an API developed by the pair responsible for the project.

Key features:
- Complete listing of Minecraft mobs, items, and ores
- Display of details when selecting each element
- Direct integration with a custom API built exclusively for the project
- Responsive and organized interface to facilitate navigation
- Project created in pairs, uniting front-end and back-end in a unified ecosystem

An essential project to reinforce React practices, API consumption logic, and collaborative development.`,
        allTechs: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Express.js', 'MongoDB'],
        liveUrl: 'https://craft-api.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/craft-api',
    },
    {
        id: 'in-kids',
        title: 'I&N Kids',
        description:
            "Platform created to help parents reduce children's screen time and encourage offline activities.",
        image: 'https://github.com/user-attachments/assets/82627220-3445-4de3-a4e1-908f432034a9',
        cardTechs: ['HTML', 'CSS', 'JavaScript'],
        fullDescription: `I&N Kids was developed during the first semester of college, focusing on initial front-end development learning. The platform aims to help parents find healthy and educational alternatives to reduce children's screen time, promoting offline activities and greater family interaction.

Key features:
- Content and guidance to reduce excessive device use
- Offline activities designed for different age groups
- Simple, intuitive, and accessible interface for parents and guardians
- Encouragement of balance between technology and active life
- Project built as a team as part of an interdisciplinary assignment

An important application for consolidating front-end fundamentals and good development practices at the beginning of the academic journey.`,
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
            'Interactive chatbot and website created to share Christmas and New Year messages in a personalized way.',
        image: 'https://github.com/ArturColen/ChristmasChat/assets/96635074/080a1c76-0275-4834-a3ad-afa1c220f698',
        cardTechs: ['TypeScript', 'Node.js', 'Blip'],
        fullDescription: `Project developed to allow the sharing of Christmas messages in an interactive way, combining a chatbot with a themed website. Each user accesses the content through a unique code, which retrieves their data from the API and displays a personalized page.

Key features:
- Interactive chatbot with themed options and festive content
- Personalized page generated from a user-provided code
- Conversational flows including quiz, playlist, and message sending
- Complete integration between chatbot, API, and main website
- Experience designed to be fun, intuitive, and accessible

A remarkable project that combined interface creation, API logic, and conversational experience design.`,
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
        description: "Clone of Netflix's homepage developed to consolidate Front-end fundamentals.",
        image: 'https://user-images.githubusercontent.com/96635074/208282907-fa614507-2d83-4b1f-a7be-cc038cabeb61.png',
        cardTechs: ['Node.js'],
        fullDescription: `Project developed in a Digital Innovation One class with the goal of practicing essential Front-end concepts and introducing initial studies with Node.js. The application recreates Netflix's homepage, displaying lists of categorized movies.

Key features:
- Interface inspired by Netflix's original layout
- Movie sections organized by categories
- Responsive design compatible with different devices
- Ideal structure for consolidating front-end knowledge and basic logic

A simple yet fundamental project in the web development evolution process.`,
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        liveUrl: 'https://netflix-artur.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/netflix-clone',
    },
    {
        id: 'inverted-world',
        title: 'Inverted World Landing Page',
        description:
            "Themed landing page inspired by Stranger Things Season 4, created during DIO's Front-end Week.",
        image: 'https://user-images.githubusercontent.com/96635074/195481231-2a82fd4e-3547-42e8-9556-df96160db140.png',
        cardTechs: ['JavaScript'],
        fullDescription: `Project developed during Digital Innovation One's Front-end Week, with the goal of creating a themed landing page about Stranger Things Season 4 and reinforcing fundamental HTML, CSS, and JavaScript concepts.

Key features:
- Page dedicated to the series' universe, focusing on the Upside Down
- Content presented in a visually attractive and responsive way
- Form integrated with a database for storing messages
- Animations and interactive sections that enrich navigation

An ideal project for improving front-end knowledge and basic integration with external services.`,
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        liveUrl: 'https://inverted-world-artur-bomtempo.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/inverted-world',
    },
    {
        id: 'christmas-website',
        title: 'Christmas Website',
        description:
            'Interactive website created to convey the meaning of Christmas in a light and engaging way.',
        image: 'https://user-images.githubusercontent.com/96635074/209454790-2a5ffb1c-d8cd-4c59-8d80-1ef847e91517.png',
        cardTechs: ['JavaScript'],
        fullDescription: `Project developed with the goal of creating a themed and interactive page to share the meaning of Christmas in a creative way.

Key features:
- Themed layout with smooth animations and scroll effects
- Informative sections presented in an engaging manner
- Visual effects that enrich the user experience
- Simple, intuitive, and responsive navigation

A project focused on improving front-end skills, animations, and building more dynamic interfaces.`,
        allTechs: ['HTML', 'CSS', 'JavaScript', 'Parallax', 'GSAP', 'ScrollReveal'],
        liveUrl: 'https://christmas22.vercel.app/',
        githubUrl: 'https://github.com/arturbomtempo-dev/christmas-website',
    },
    {
        id: 'goodtimegpt',
        title: 'ChatGPT Clone',
        description:
            'Functional ChatGPT clone built for studying web development and AI API integration.',
        image: 'https://github.com/ArturColen/GoodtimeGPT/assets/96635074/6a770738-16dc-4bb0-b20d-8d71539519e2',
        cardTechs: ['React', 'Next.js', 'Node.js'],
        fullDescription: `Project developed as part of a B7Web course with the goal of deepening knowledge in JavaScript, TypeScript, and modern web development. The application reproduces ChatGPT's behavior, consuming the OpenAI API to generate real-time responses.

Key features:
- Intuitive interface inspired by the ChatGPT experience
- Real-time communication with OpenAI API
- Message history and continuous conversation flow
- Modern and responsive layout
- Ideal project for consolidating API integration fundamentals and building reactive UIs

Note: to run locally, you need to configure an OpenAI API key in the .env file.`,
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
        description: "Virtual card generator developed during Rocketseat's Explorer Lab.",
        image: 'https://user-images.githubusercontent.com/96635074/196974349-1f579c57-7789-4409-a135-1e31bb68363b.png',
        cardTechs: ['JavaScript'],
        fullDescription: `Project developed during Rocketseat's Explorer Lab, focused on improving logic and DOM manipulation in JavaScript.

Key features:
- Dynamic generation of a virtual credit card
- Automatic validation and formatting of entered data
- Simple, responsive, and intuitive interface
- Real-time mask application for inputs

A small but fundamental project at the beginning of my journey, consolidating important JavaScript and front-end development concepts.`,
        allTechs: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://rocketpay-smoky.vercel.app',
        githubUrl: 'https://github.com/arturbomtempo-dev/rocket-pay',
    },
];

export const contents: Content[] = [
    {
        type: 'newsletter',
        title: 'Process Automation',
        description: 'How to automate repetitive tasks to boost daily productivity.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQGmY4FMbcE33g/article-cover_image-shrink_720_1280/B4DZqXh54pG8AM-/0/1763478846119?e=1766016000&v=beta&t=z2t8azcXmyaae8sHcp5H77cKNSDVRp_-flkgf_-waUs',
        url: 'https://www.linkedin.com/pulse/automa%C3%A7%C3%A3o-de-processos-o-poder-fazer-computador-por-voc%C3%AA-bomtempo-8qtgf/',
        platform: 'LinkedIn',
        date: '2025-11-18',
    },
    {
        type: 'newsletter',
        title: 'Beyond Technology',
        description:
            'The importance of mastering fundamentals before choosing stacks and frameworks.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQH6c888A3glCg/article-cover_image-shrink_720_1280/B4DZqEJk36HwAI-/0/1763153701095?e=1766016000&v=beta&t=iZlgyCMBXZu6yj5y7oFuhBAMcIG-jts9OD4OUpVfons',
        url: 'https://www.linkedin.com/pulse/al%C3%A9m-da-tecnologia-por-que-dominar-fundamentos-vale-mais-bomtempo-8q0lf/',
        platform: 'LinkedIn',
        date: '2025-11-14',
    },
    {
        type: 'newsletter',
        title: 'Security Beyond the Obvious',
        description:
            'How small security gaps can generate significant risks in real-world applications.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQE1on-G0TWjOg/article-cover_image-shrink_720_1280/B4DZpZtHILGsAQ-/0/1762441595349?e=1766016000&v=beta&t=A4_zmBWQBwuZQhi5S_UubiiK5jOpldNt0B54cRy34QE',
        url: 'https://www.linkedin.com/pulse/seguran%C3%A7a-al%C3%A9m-do-%C3%B3bvio-pequenas-brechas-grandes-artur-bomtempo-colen-glulf/',
        platform: 'LinkedIn',
        date: '2025-11-06',
    },
    {
        type: 'newsletter',
        title: 'Design Patterns and Good Solutions',
        description:
            'Reflections on how design patterns influence writing more efficient and sustainable code.',
        thumbnail:
            'https://media.licdn.com/dms/image/v2/D4D12AQFPPGoftiRMIA/article-cover_image-shrink_720_1280/B4DZo104fBHsAI-/0/1761839654632?e=1766016000&v=beta&t=gEGmYMpz22XcB2vV4AgWytQFGStG1RCt-6TujhXHsSg',
        url: 'https://www.linkedin.com/pulse/design-patterns-e-o-que-eles-nos-ensinam-sobre-boas-bomtempo-colen-ji2se/',
        platform: 'LinkedIn',
        date: '2025-10-30',
    },
    {
        type: 'article',
        title: 'API Authentication with JWT and Bcrypt',
        description:
            'Complete guide to authentication in Node.js and Express using JWT and Bcrypt.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*I50MOlC9LSdL9nW_FRgh4g.png',
        url: 'https://medium.com/@arturbomtempo/autentica%C3%A7%C3%A3o-de-apis-em-node-js-com-jwt-e-bcrypt-2e1564d264d9',
        platform: 'Medium',
        date: '2025-08-19',
    },
    {
        type: 'video',
        title: 'Modular Programming Course in Java',
        description:
            'Fundamentals of modularity, OOP, and best practices in Java with hands-on exercises.',
        thumbnail:
            'https://i.ytimg.com/vi/VYdPnCauekk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLC9vXYZwgrhSPMAlxa9QvDYybppgQ',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5hIR_G3m-DJjcDMNKMUypkH&si=DLFn9qAjuQFBW4Tj',
        platform: 'YouTube',
        date: '2025-08-14',
    },
    {
        type: 'video',
        title: 'JavaScript Course for Beginners',
        description:
            'JavaScript fundamentals explained in a practical way, with exercises and projects.',
        thumbnail:
            'https://i.ytimg.com/vi/LrKqcRCD_zw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLBrupGGUSBvDjFswW-slSpuWGFwUg',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5huodqseyXgkQanu_CEtsUq&si=e_nciQcHwoLUG_MY',
        platform: 'YouTube',
        date: '2025-07-11',
    },
    {
        type: 'video',
        title: 'Object-Oriented Programming Live Sessions',
        description: 'Live classes explaining key OOP concepts with practical examples.',
        thumbnail:
            'https://i.ytimg.com/vi/DvZatfx5X4w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLCJQavzpa4l38nZ6EMpdnu_f6vPjQ',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5jhpxHFU0SFfYf_Z3UbpUbY&si=8Uljc9fsCvsT_cuL',
        platform: 'YouTube',
        date: '2025-06-29',
    },
    {
        type: 'video',
        title: 'Binary Search Tree Playlist',
        description:
            'Series of lessons on BST with theory and practical exercises implemented in Java.',
        thumbnail:
            'https://i.ytimg.com/vi/JUtUEIAO2O8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE%3D&rs=AOn4CLBUd-gMKr3bdpNW2Jcd20xBm6Oetw',
        url: 'https://youtube.com/playlist?list=PLeBlAOvjkM5gf5vwnGKIy9Jh2AUXds-rm&si=rfCvGVGFH1NStX9n',
        platform: 'YouTube',
        date: '2025-06-19',
    },
    {
        type: 'article',
        title: 'Binary Search Tree in Java',
        description:
            'Practical and didactic explanation of how BST works and its implementation in Java.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WtQFGUbk2zDZLP4S3SXrOw.png',
        url: 'https://medium.com/@arturbomtempo/entendendo-a-%C3%A1rvore-bin%C3%A1ria-de-busca-com-java-teoria-e-pr%C3%A1tica-9171bf57da07',
        platform: 'Medium',
        date: '2025-06-16',
    },
    {
        type: 'article',
        title: 'REST API with Spring Boot',
        description:
            'Introductory guide to creating a complete CRUD using Spring Boot and best practices.',
        thumbnail:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/1*mIKsH2nx_9gFpMZhFY_c9w.png',
        url: 'https://medium.com/@arturbomtempo/construindo-uma-api-rest-com-spring-boot-a7e9b4e04380',
        platform: 'Medium',
        date: '2025-05-05',
    },
    {
        type: 'article',
        title: 'Understanding Algorithm Complexity',
        description:
            'Clear introduction to algorithm efficiency, with practical examples and intuitive explanations.',
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
        title: 'Awards and Recognition',
        description: 'Academic and professional highlights',
        fullDescription:
            'Throughout my academic, professional, and volunteer journey, I have had the opportunity to participate in initiatives and projects that resulted in several awards and recognitions. Each achievement represents important moments of learning and growth, reinforcing my commitment to dedication and continuous improvement.',
        details: [
            '7x awarded "The Best of the Class" at Colégio Cotemig, for highest overall GPA of the semester',
            '1st place in the Cotemig Startups program with the QuickFood Technologies team',
            'Level 1, 2, and 3 Member Certification from WebTech Network',
            'Best Interdisciplinary Project of the 1st semester in Computer Science – PUC Minas',
            'Best Interdisciplinary Project of the 2nd semester in Software Engineering – PUC Minas',
            '1st place in internal learning competition at White Wall',
            '2x recognized as Outstanding Communication Volunteer at Central Baptist Church',
        ],
    },
    {
        icon: Users,
        title: '4+ Years',
        description: 'Years of Experience',
        fullDescription:
            'My journey in technology began in 2021 and since then I have been accumulating valuable experiences in various areas of software development. I have worked with different technologies, methodologies, and teams, always seeking to deliver quality solutions and learn continuously.',
        details: [
            'Experience in full stack development focusing on React and Node.js',
            'Work in startups and medium to large companies',
            'Experience with agile methodologies (Scrum, Kanban)',
            'Experience in technical leadership and mentoring developers',
            'Participation in projects from different segments and complexities',
        ],
    },
    {
        icon: Presentation,
        title: '7+ Talks',
        description: 'Sharing knowledge and training new talents',
        fullDescription:
            'I have a great interest in teaching and knowledge sharing. Throughout my journey, I have given talks, workshops, and educational meetings at events of different sizes, always seeking to contribute to the training of new professionals and encourage the community to evolve together.',
        details: [
            "Workshops for two consecutive years at DevFest BH, the city's largest technology event, promoted by Google Developers Group",
            'Talks at PUC Minas Computer Science Summer School',
            'Meetings and training sessions as Chapter Lead at WebTech Network',
            'Backend Journey at WebTech Network in partnership with LEVTY, with over 500 participants',
            'Volunteer teacher of HTML, CSS, Python, and Scratch at Code Club project',
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
        title: 'Database',
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
        role: 'Professor at PUC Minas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/hugo.jpg',
        text: 'Artur is a dedicated, organized, studious, and highly competent professional. He values the quality of the systems he develops and seeks to delve deeply into the technologies he masters. An outstanding professional!',
    },
    {
        name: 'Eduarda Vieira',
        role: 'Web Developer at WebTech Network',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/eduarda-vieira.png',
        text: "During the second semester of Software Engineering, I had the opportunity to closely follow Artur Bomtempo's progress and learning. Since I met him, he has always shown great engagement and willingness to teach and help colleagues, combining a solid technical foundation with market experience and best practices. His logical reasoning, dedication, and commitment are clear differentials. He learns easily [...] and adapts quickly to challenges. Working with him on projects has been very enriching, both for the technical quality he delivers and the collaborative and committed way he works in a team.",
    },
    {
        name: 'Arthur Chagas',
        role: 'CTO at QuickFood Technologies',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/arthur-chagas.png',
        text: 'It is with great satisfaction that I recommend Artur for opportunities in the programming field. During our time working and studying together, I was able to observe his exceptional technical skills and his commitment to excellence. Artur is a talented programmer, capable of solving problems creatively and collaborating effectively in a team. His work ethic and clear communication make him a valuable colleague in any project. I do not hesitate to recommend him and I am sure he will continue to achieve success in his career.',
    },
    {
        name: 'Pedro Félix',
        role: 'Artificial Intelligence Intern at Hotmart',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/pedro-felix.jpg',
        text: 'Artur is extremely dedicated and has always shown commitment and maximum dedication in all tasks, whether simple or complex.',
    },
    {
        name: 'Lucas Sena',
        role: 'Software Developer at Samsung',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/lucas-sena.png',
        text: 'From my experience with Artur, I can confidently say that he is an excellent professional and student. Very hardworking and dedicated, he seeks to learn and evolve daily — requirements of great importance for the technology field. In addition, he has a solid logical foundation and well-consolidated software development skills.',
    },
    {
        name: 'Letícia França',
        role: 'Designer at WebTech Network',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/leticia-franca.jpg',
        text: 'I have been following Artur since mid-2023, during Technical High School in Information Technology. He has always been very hardworking, committed, and studious. During this period, we developed a great friendship [...]. He has all my admiration for his perseverance and passion for what he does. It is a pleasure to have him as my great partner in projects!',
    },
    {
        name: 'Henrique Braga',
        role: 'Co-Founder at Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/henrique-braga.png',
        text: 'Artur worked with me at Vidas Vividas and proved to be very focused on what he does, executing everything with great dedication. Above all the good work, his greatest characteristic is having principles and being a relevant person in the work environment.',
    },
    {
        name: 'Pedro Henrique Oliveira',
        role: 'Co-Founder at Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/pedro-oliveira.jpg',
        text: 'Having Artur on our team was a great pleasure. Always willing to learn and dedicate himself to activities! I wish you every success!',
    },
    {
        name: 'Thiago Porto',
        role: 'Data Analyst at Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/thiago-porto.jpg',
        text: 'During the period that Artur interned with us at Vidas, his efficiency was noticeable, effectively solving all the demands assigned to him. I am grateful to have had the opportunity to have him as a work colleague. His friendliness and empathy allowed for a great working relationship.',
    },
    {
        name: 'Aquila Faria',
        role: 'Designer & Videomaker at Vidas Vividas',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/aquila.jpg',
        text: 'Artur was quite coherent and responsible with his work during the period he was at Vidas. He really is — and will continue to become — a great professional!',
    },
    {
        name: 'Paulo Henrique',
        role: 'Professor at Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/paulo-henrique.jpg',
        text: 'An extremely interested and proactive student and professional, focused on problem-solving and with great interest in innovation. Excellent developer and always learning new languages!',
    },
    {
        name: 'Eduardo Gonçalves',
        role: 'Professor at Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/eduardo-goncalves.jpg',
        text: 'My former student Artur Bomtempo brilliantly performed all programming tasks throughout the course. Always attentive and participative, he created code often beyond what was requested by the exercises. Calm and reliable, I know he will be a talented programmer of great value to any company, in Brazil or even abroad. I will always be here to applaud his journey through the world of Information Technology.',
    },
    {
        name: 'Mario Camargos',
        role: 'Professor at Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/mario-camargos.jpg',
        text: 'Artur Bomtempo is a special student, always standing out and the undefeated winner of "The Best" award promoted by Colégio Cotemig. He has already developed most of his skills and competencies as a developer, and it is noticeable that he will have a promising career. He stands out for his commitment, good logical reasoning, and always presenting the best solutions. Another differential is that he is constantly seeking to expand his knowledge, participating in all possible courses, inside and outside school, which keeps him always in a prominent position.',
    },
    {
        name: 'Artur Coelho',
        role: 'Professor at Cotemig',
        image: 'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/portfolio/testimonials/artur-coelho.png',
        text: 'A very dedicated student, committed to the proposed activities, with ease in the technical area and great personal values. He has everything to grow personally and professionally.',
    },
];

export const timeline: Timeline = {
    education: [
        {
            year: '2025 - present',
            title: "Bachelor's Degree in Software Engineering",
            institution: 'PUC Minas',
            description:
                'Education focused on software development and modeling, with emphasis on analysis, architecture, requirements, quality, and applied mathematical foundations.',
            activities: [
                'Web Development with Spring Boot and Node.js',
                'Software Modeling (UML, requirements, and architecture)',
                'Quality, testing, and software maintenance',
                'Data Structures and Object-Oriented Programming',
                'Operating Systems Fundamentals',
            ],
        },
        {
            year: '2024',
            title: "Bachelor's Degree in Computer Science",
            institution: 'PUC Minas',
            description:
                'Education focused on theoretical and practical foundations of computing, with emphasis on algorithms, data structures, OOP, and software engineering principles.',
            activities: [
                'Algorithms and Data Structures',
                'Object-Oriented Programming',
                'Introduction to Software Engineering',
                'Web Development with HTML, CSS, JavaScript, and Java (Spark)',
                'Programming with Arduino',
            ],
        },
        {
            year: '2021 - 2023',
            title: 'Technical Degree in Information Technology',
            institution: 'Colégio Cotemig',
            description:
                'Technical education focused on practical development of web and mobile applications, with a deep dive into programming logic and computing fundamentals.',
            activities: [
                'Programming Logic in C#',
                'Web Development with HTML, CSS, and JavaScript',
                'Modeling and creation of relational databases',
                'Introduction to mobile development (Kotlin and Swift)',
                'Computer Networks Fundamentals',
            ],
        },
    ],
    professional: [
        {
            year: '2025 - present',
            title: 'Software Developer',
            company: 'dti digital',
            description:
                'Working on support and maintenance of corporate systems for the MRV client.',
            activities: [
                'Maintenance and evolution of applications with .NET on the backend',
                'Implementation of features and fixes using React.js',
                'Technical support for MRV systems within Enterprise Inari',
                'Collaboration in an agile environment focused on quality and efficiency',
            ],
        },
        {
            year: '2024 - present',
            title: 'Chapter Lead & Full Stack Developer',
            company: 'WebTech Network',
            description:
                'Technical leadership and full stack development in projects and training initiatives within WebTech.',
            activities: [
                'Development of interfaces and APIs with React.js, Next.js, Java, and Spring Boot',
                'Architecture definition and implementation of digital solutions for internal projects and partners',
                'Creation of technical and structured learning materials for new members',
                'Mentoring in Backend, Frontend, databases, and version control',
                'Conducting workshops, lectures, and technical guidance in projects such as DevFest, ASSPROM, and Journey Backend',
            ],
        },
        {
            year: '2025',
            title: 'Programming and Algorithms Monitor',
            company: 'PUC Minas',
            description:
                'Supporting students in learning Java, logic, OOP, and data structures, working as a monitor in the disciplines of Algorithms and Data Structures I and II and Modular Programming.',
            activities: [
                'Guidance in Java and Object-Oriented Programming',
                'Assistance in logic, algorithms, and implementation in C and C++',
                'Support in data structures and sorting techniques',
                'Application of SOLID principles, Design Patterns, and testing with JUnit',
                'Monitoring exercises, projects, and clarifying doubts',
            ],
        },
        {
            year: '2024',
            title: 'Full Stack Developer',
            company: 'PUCTec',
            description:
                'Full stack development of digital solutions for startups supported by the innovation hub.',
            activities: [
                'Implementation of frontend and backend features',
                'Creation of intuitive and functional interfaces',
                'Construction and maintenance of server architecture',
                'Technical support in developing scalable solutions',
            ],
        },
        {
            year: '2023-2024',
            title: 'CXO & Full Stack Developer',
            company: 'QuickFood Technologies',
            description:
                'Responsible for user experience and full stack development of the startup platform.',
            activities: [
                'Frontend and backend system development',
                'Construction and maintenance of chatbot using Blip and JavaScript',
                'Creation of conversational flows focused on efficiency and UX',
                'Continuous improvement of platform usability and performance',
                'Collaboration in product planning and solution definition',
            ],
        },
        {
            year: '2023-2024',
            title: 'Chatbot Developer',
            company: 'White Wall',
            description:
                'Development and maintenance of chatbots and conversational flows for different clients.',
            activities: [
                'Creation and maintenance of chatbots using Blip and JavaScript',
                'Construction of conversational flows focused on UX',
                'Integration with REST APIs and external resources',
                'Collaboration in remote teams using Git and GitHub',
            ],
        },
        {
            year: '2023',
            title: 'Web Developer',
            company: 'Vidas Empreendimentos',
            description:
                'Working on website development and digital solutions for marketing clients.',
            activities: [
                'Website creation in WordPress and HTML/CSS',
                'Development of chatbots for WhatsApp',
                'Support in web design and UX of digital solutions',
                'Task management using agile methodologies',
                'Creation of flowcharts and process documentation',
            ],
        },
    ],
};

// Seed content based on the talks, workshops, and courses already referenced across the
// site. Dates, locations, and links were filled in with the information available —
// review and complete with the exact details of each event. Images marked as
// "placeholder" should be replaced with real event photos (an optional `gallery: [...]`
// array can be added to any item to show multiple photos on the details page).
export const talks: Talk[] = [
    {
        id: 'escola-ferias-puc-minas',
        type: 'workshop',
        title: 'React Workshop with the Studio Ghibli API',
        event: 'PUC Minas Computer Science Summer School',
        location: 'PUC Minas, Belo Horizonte, MG',
        date: '2025',
        description:
            'Hands-on React workshop for beginner students, building a real application that consumes the Studio Ghibli API.',
        fullDescription: `I taught a hands-on React workshop during the PUC Minas Computer Science Summer School, aimed at beginner students who wanted to learn the fundamentals of modern frontend development.

Throughout the workshop, participants built a complete React application step by step, consuming the Studio Ghibli API to display a movie collection — combining theory and practice in a real, engaging example.

Main topics covered:
- React fundamentals and componentization
- Consuming external APIs with Axios
- Routing with React Router DOM
- Best practices for organizing projects for beginners`,
        topics: ['React', 'TypeScript', 'APIs', 'Frontend'],
        image: 'https://github.com/user-attachments/assets/208932f4-4060-49f7-9bb7-f4d3247f0d78',
        url: 'https://studio-ghibli-react.vercel.app/',
    },
    {
        id: 'formacoes-webtech-network',
        type: 'talk',
        title: 'Technical Training, Workshops, and Mentoring',
        event: 'WebTech Network',
        location: 'Online',
        date: '2024 - present',
        description:
            'Leading meetings, workshops, and technical mentoring as Chapter Lead, training new developers in backend, frontend, and best practices.',
        fullDescription: `As Chapter Lead at WebTech Network, I regularly lead meetings, workshops, and technical mentoring sessions aimed at training new developers within the community.

These sessions range from programming fundamentals to more advanced backend, frontend, database, and version control topics, always focused on practical, applicable content.

Main topics covered:
- Backend and Frontend fundamentals
- Databases and version control with Git
- Software development and architecture best practices
- Technical guidance on projects such as DevFest, ASSPROM, and the Backend Journey`,
        topics: ['Mentoring', 'Backend', 'Frontend', 'Best Practices'],
        // Placeholder — replace with the official event photo.
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'jornada-backend-webtech-levty',
        type: 'course',
        title: 'Backend Journey',
        event: 'WebTech Network x LEVTY',
        location: 'Online',
        date: '2024',
        description:
            'Intensive backend development training organized in partnership between WebTech Network and LEVTY, gathering over 500 registered participants.',
        fullDescription: `The Backend Journey was a training initiative promoted by WebTech Network in partnership with LEVTY, aimed at introducing and deepening essential backend development concepts for an audience of over 500 registered participants.

As Chapter Lead at WebTech Network, I led the technical delivery of the content, presenting concepts, best practices, and practical examples throughout the event.

Main topics covered:
- REST API fundamentals and backend architecture
- Best practices for code organization and structure
- Authentication, security, and error handling
- Integration between backend and database
- Career tips and next steps for beginners`,
        topics: ['Backend', 'REST APIs', 'Node.js', 'Best Practices', 'Career'],
        // Placeholder — replace with the official event photo.
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'workshops-devfest-bh',
        type: 'workshop',
        title: 'React Workshops',
        event: 'DevFest BH — Google Developers Group Belo Horizonte',
        location: 'Belo Horizonte, MG',
        date: '2023 - 2024',
        description:
            "Hands-on React workshops taught for two consecutive years at the city's largest technology event, promoted by Google Developers Group.",
        fullDescription: `For two consecutive years, I had the opportunity to teach hands-on React workshops at DevFest BH, the largest technology event in Belo Horizonte, promoted by Google Developers Group (GDG BH).

The workshops were designed for developers of different experience levels, focused on consolidating fundamental React concepts by building real applications during the event itself.

Main topics covered:
- Fundamentals of components, props, and state in React
- Essential hooks (useState, useEffect, among others)
- Best practices for organizing frontend projects
- Building a practical application from start to finish`,
        topics: ['React', 'JavaScript', 'TypeScript', 'Frontend'],
        image: 'https://github.com/user-attachments/assets/1b43e564-ae07-4bdf-a6ec-92f5884e2b12',
        url: 'https://gdgbh.com.br/',
    },
    {
        id: 'code-club-voluntariado',
        type: 'course',
        title: 'Volunteer Teacher',
        event: 'Code Club',
        location: 'Belo Horizonte, MG',
        date: 'Ongoing',
        description:
            'Volunteer classes in HTML, CSS, Python, and Scratch for children and teenagers, encouraging their first steps into the world of programming.',
        fullDescription: `As a volunteer teacher for the Code Club project, I teach introductory programming classes for children and teenagers, aiming to spark an early interest in technology and make learning accessible and fun.

The classes range from programming logic with Scratch to web development fundamentals with HTML and CSS, plus an introduction to Python, always with a playful and practical approach.

Main topics covered:
- Programming logic with Scratch
- HTML and CSS fundamentals
- Introduction to programming with Python
- Encouraging creativity and computational thinking`,
        topics: ['Scratch', 'HTML', 'CSS', 'Python', 'Education'],
        // Placeholder — replace with the official event photo.
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    },
];

export const ui = {
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        talks: 'Talks',
        content: 'Content',
        contact: 'Contact',
        logo: 'Portfolio',
    },
    home: {
        greeting: 'I am',
        role: 'Software Developer',
        description:
            "I have always had the desire to make an impact on people's lives — and I found in software development a way to turn that into reality.",
        aboutButton: 'About me',
        contactButton: 'Get in Touch',
    },
    about: {
        title: 'About Me',
        description:
            "I am a developer passionate about creating innovative and efficient solutions. With over 4 years of experience, I have been dedicated to building web and mobile applications that make a difference in people's lives. My focus is always on delivering clean, scalable code that meets users' real needs.",
        techTitle: 'Technologies',
        testimonialsTitle: 'Testimonials',
        educationTitle: 'Education',
        experienceTitle: 'Professional Experience',
    },
    projects: {
        title: 'Projects',
        description:
            'Some of the projects I have developed throughout my career. Each one represents a unique challenge and continuous learning.',
    },
    projectDetails: {
        backButton: 'Back to Projects',
        viewProject: 'View Project',
        viewCode: 'View Code',
        aboutTitle: 'About the Project',
        techTitle: 'Technologies Used',
    },
    talks: {
        title: 'Talks & Courses',
        description:
            'Throughout my journey, I have had the opportunity to share knowledge through talks, workshops, and courses for communities and educational institutions.',
        all: 'All',
        talk: 'Talks',
        workshop: 'Workshops',
        course: 'Courses',
        learnMore: 'Learn more',
    },
    talkDetails: {
        backButton: 'Back to Talks & Courses',
        aboutTitle: 'About the event',
        topicsTitle: 'Topics covered',
        galleryTitle: 'Photos',
        visitLink: 'Visit event link',
        notFoundTitle: 'Event not found',
        notFoundMessage: 'The event you are looking for does not exist or has been removed.',
    },
    talkBadges: {
        talk: 'Talk',
        workshop: 'Workshop',
        course: 'Course',
    },
    content: {
        title: 'Content',
        description:
            'I share knowledge for free about web development, best practices, and modern technologies.',
        all: 'All',
        videos: 'Videos',
        articles: 'Articles',
        newsletters: 'Newsletters',
    },
    contact: {
        title: 'Get in Touch',
        description:
            'I am always open to new opportunities and collaborations. Contact me through the channels below.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        sendMessage: 'Send Message',
        name: 'Name',
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
    },
    notFound: {
        title: '404',
        heading: 'Page not found',
        message: 'The page you are looking for does not exist or has been moved.',
        backButton: 'Back to Home',
    },
    footer: {
        rights: '© {year} Artur Bomtempo. All rights reserved.',
    },
    siteTitle: 'Artur Bomtempo | Portfolio',
    contentBadges: {
        video: 'Video',
        article: 'Article',
        newsletter: 'Newsletter',
    },
    toast: {
        messageSent: 'Message sent successfully!',
        thankYou: 'Thank you for contacting. I will reply soon!',
        errorSending: 'Error sending message',
        errorDescription: 'Please try again later.',
        sending: 'Sending...',
    },
    validation: {
        nameRequired: 'Name is required',
        nameMinLength: 'Name must be at least 5 characters',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        messageRequired: 'Message is required',
        messageMinLength: 'Message must be at least 50 characters',
    },
};
