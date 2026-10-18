import { Database, Palette, Presentation, Server, Smartphone, Trophy, Users } from '@lucide/vue';
import type { AboutContent } from '~/types/about';
import { CAREER_START_YEAR } from '~/utils/yearsOfExperience';

export function createAboutContentEn(yearsOfExperience: number, talkCount: number): AboutContent {
    return {
        achievements: [
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
                    'Best Interdisciplinary Project of the 1st semester in Computer Science at PUC Minas',
                    'Best Interdisciplinary Project of the 2nd, 3rd, and 4th semesters in Software Engineering at PUC Minas',
                    '1st place in internal learning competition at Wiv',
                    '2x recognized as Outstanding Communication Volunteer at Central Baptist Church',
                ],
            },
            {
                icon: Users,
                title: `${yearsOfExperience}+ Years`,
                description: 'Years of Experience',
                fullDescription: `My journey in technology began in ${CAREER_START_YEAR}, and over these ${yearsOfExperience} years I have been accumulating valuable experiences in various areas of software development. I have worked with different technologies, methodologies, and teams, always seeking to deliver quality solutions and learn continuously.`,
                details: [
                    'Full stack development experience with React and Node.js, as well as .NET, Spring Boot, Python, and Vue.js',
                    'Experience in startups and medium and large companies',
                    'Experience with agile methodologies (Scrum, Kanban)',
                    'Experience in technical leadership and mentoring developers',
                    'Participation in projects from different segments and complexities',
                ],
            },
            {
                icon: Presentation,
                title: `${talkCount}+ Talks`,
                description: 'Sharing knowledge and training new talents',
                fullDescription:
                    'I have a great interest in teaching and knowledge sharing. Throughout my journey, I have given talks, workshops, and educational meetings at events of different sizes, always seeking to contribute to the training of new professionals and encourage the community to evolve together.',
                details: [
                    "Workshops for two consecutive years at DevFest BH, the city's largest technology event, promoted by Google Developers Group",
                    'Talks at PUC Minas Computer Science Summer School',
                    'Meetings and training sessions as Chapter Lead at WebTech Network',
                    'Technical presentations at dti digital, in formats such as Techshot and Knowledge Transfer',
                    'Talks and courses at institutions and events such as ASSPROM, World Creativity Day, and the 10 years of Software Engineering at PUC Minas',
                    'Backend Journey at WebTech Network in partnership with LEVTY, with over 500 participants',
                    'Volunteer teacher of HTML, CSS, Python, and Scratch at Code Club project',
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
                title: 'Database',
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
                role: 'Professor at PUC Minas',
                image: '/images/testimonials/joao-paulo-aramuni.webp',
                text: 'Artur was my student in the Software Design and Software Development Lab courses, standing out as one of the most proactive and distinctive students in the class. From the start, he showed above-average curiosity, technical maturity, and a highly collaborative attitude [...]. Outside the classroom, his résumé is impressive: he works as Chapter Lead at WebTech PUC Minas, creates content for developers, and speaks at tech events [...]. He is a rare talent in the making, with enormous potential to stand out quickly in technology.',
            },
            {
                name: 'Eduardo Michetti',
                role: 'Software Developer at dti digital | MRV',
                image: '/images/testimonials/eduardo-michetti.webp',
                text: 'An excellent professional and person, who always approaches his tasks with great dedication and competence. He is always willing to share knowledge and equally open to learning and receiving feedback when needed.',
            },
            {
                name: 'Sâmeck Zanela Costa',
                role: 'Professor at Cotemig',
                image: '/images/testimonials/sameck-zanela-costa.webp',
                text: 'I had the pleasure of teaching Artur in the Databases course, and I recommend him with complete confidence. He always stood out for how quickly he absorbed complex concepts and for his strong drive to seek knowledge beyond the classroom. With a proactive, self-taught profile, he maintained excellent academic performance, consistently delivering above-average results [...]. He is a professional with enormous technical potential and a fast learning curve.',
            },
            {
                name: 'Lucas Ricardo',
                role: 'Squad Lead at dti digital | MRV',
                image: '/images/testimonials/lucas-ricardo.webp',
                text: 'An incredible rise in his development journey. Artur does a great job! He is very competent and professional.',
            },
            {
                name: 'Vitor Hugo Marcelino Santos',
                role: 'Software Developer at Squadra Digital | MRV',
                image: '/images/testimonials/vitor-hugo-marcelino-santos.webp',
                text: 'Artur is an excellent professional, always very committed and responsible, and he handles everything he is given.',
            },
            {
                name: 'Hugo de Paula',
                role: 'Professor at PUC Minas',
                image: '/images/testimonials/hugo-de-paula.webp',
                text: 'Artur is a dedicated, organized, studious, and highly competent professional. He values the quality of the systems he develops and seeks to delve deeply into the technologies he masters. An outstanding professional!',
            },
            {
                name: 'Eduarda Vieira',
                role: 'Web Developer at WebTech Network',
                image: '/images/testimonials/eduarda-vieira.webp',
                text: "During the second semester of Software Engineering, I had the opportunity to closely follow Artur Bomtempo's progress and learning. Since I met him, he has always shown great engagement and willingness to teach and help colleagues, combining a solid technical foundation with market experience and best practices. His logical reasoning, dedication, and commitment are clear differentials. He learns easily [...] and adapts quickly to challenges. Working with him on projects has been very enriching, both for the technical quality he delivers and the collaborative and committed way he works in a team.",
            },
            {
                name: 'Arthur Chagas',
                role: 'CTO at QuickFood Technologies',
                image: '/images/testimonials/arthur-chagas.webp',
                text: 'It is with great satisfaction that I recommend Artur for opportunities in the programming field. During our time working and studying together, I was able to observe his exceptional technical skills and his commitment to excellence. Artur is a talented programmer, capable of solving problems creatively and collaborating effectively in a team. His work ethic and clear communication make him a valuable colleague in any project. I do not hesitate to recommend him and I am sure he will continue to achieve success in his career.',
            },
            {
                name: 'Pedro Félix',
                role: 'Artificial Intelligence Intern at Hotmart',
                image: '/images/testimonials/pedro-felix.webp',
                text: 'Artur is extremely dedicated and has always shown commitment and maximum dedication in all tasks, whether simple or complex.',
            },
            {
                name: 'Lucas Sena',
                role: 'Software Developer at Samsung',
                image: '/images/testimonials/lucas-sena.webp',
                text: 'From my experience with Artur, I can confidently say that he is an excellent professional and student. Very hardworking and dedicated, he seeks to learn and evolve daily, requirements of great importance for the technology field. In addition, he has a solid logical foundation and well-consolidated software development skills.',
            },
            {
                name: 'Letícia França',
                role: 'Designer at WebTech Network',
                image: '/images/testimonials/leticia-franca.webp',
                text: 'I have been following Artur since mid-2023, during Technical High School in Information Technology. He has always been very hardworking, committed, and studious. During this period, we developed a great friendship [...]. He has all my admiration for his perseverance and passion for what he does. It is a pleasure to have him as my great partner in projects!',
            },
            {
                name: 'Henrique Braga',
                role: 'Co-Founder at Vidas Vividas',
                image: '/images/testimonials/henrique-braga.webp',
                text: 'Artur worked with me at Vidas Vividas and proved to be very focused on what he does, executing everything with great dedication. Above all the good work, his greatest characteristic is having principles and being a relevant person in the work environment.',
            },
            {
                name: 'Pedro Henrique Oliveira',
                role: 'Co-Founder at Vidas Vividas',
                image: '/images/testimonials/pedro-henrique-oliveira.webp',
                text: 'Having Artur on our team was a great pleasure. Always willing to learn and dedicate himself to activities! I wish you every success!',
            },
            {
                name: 'Thiago Porto',
                role: 'Data Analyst at Vidas Vividas',
                image: '/images/testimonials/thiago-porto.webp',
                text: 'During the period that Artur interned with us at Vidas, his efficiency was noticeable, effectively solving all the demands assigned to him. I am grateful to have had the opportunity to have him as a work colleague. His friendliness and empathy allowed for a great working relationship.',
            },
            {
                name: 'Aquila Faria',
                role: 'Designer & Videomaker at Vidas Vividas',
                image: '/images/testimonials/aquila-faria.webp',
                text: 'Artur was quite coherent and responsible with his work during the period he was at Vidas. He really is, and will continue to become, a great professional!',
            },
            {
                name: 'Paulo Henrique',
                role: 'Professor at Cotemig',
                image: '/images/testimonials/paulo-henrique.webp',
                text: 'An extremely interested and proactive student and professional, focused on problem-solving and with great interest in innovation. Excellent developer and always learning new languages!',
            },
            {
                name: 'Eduardo Gonçalves',
                role: 'Professor at Cotemig',
                image: '/images/testimonials/eduardo-goncalves.webp',
                text: 'My former student Artur Bomtempo brilliantly performed all programming tasks throughout the course. Always attentive and participative, he created code often beyond what was requested by the exercises. Calm and reliable, I know he will be a talented programmer of great value to any company, in Brazil or even abroad. I will always be here to applaud his journey through the world of Information Technology.',
            },
            {
                name: 'Mario Camargos',
                role: 'Professor at Cotemig',
                image: '/images/testimonials/mario-camargos.webp',
                text: 'Artur Bomtempo is a special student, always standing out and the undefeated winner of "The Best" award promoted by Colégio Cotemig. He has already developed most of his skills and competencies as a developer, and it is noticeable that he will have a promising career. He stands out for his commitment, good logical reasoning, and always presenting the best solutions. Another differential is that he is constantly seeking to expand his knowledge, participating in all possible courses, inside and outside school, which keeps him always in a prominent position.',
            },
            {
                name: 'Artur Coelho',
                role: 'Professor at Cotemig',
                image: '/images/testimonials/artur-coelho.webp',
                text: 'A very dedicated student, committed to the proposed activities, with ease in the technical area and great personal values. He has everything to grow personally and professionally.',
            },
        ],
        timeline: {
            education: [
                {
                    startDate: '2025-02',
                    title: "Bachelor's Degree in Software Engineering",
                    institution: 'PUC Minas',
                    description:
                        'In the Software Engineering program, I deepen my knowledge of developing and modeling large-scale systems, aiming to build high-quality solutions that follow industry best practices. The curriculum covers courses such as Software Architecture, Project Management, and Software Testing, building a solid foundation for robust, scalable solutions.',
                    activities: [
                        'Software architecture and modeling (UML, requirements, and architecture)',
                        'Project Management',
                        'Software testing, quality, and maintenance',
                        'Web development with Spring Boot and Node.js',
                        'Data Structures and Object-Oriented Programming',
                        'Best Interdisciplinary Project of the 2nd, 3rd, and 4th semesters',
                    ],
                },
                {
                    startDate: '2024-02',
                    endDate: '2024-12',
                    title: "Bachelor's Degree in Computer Science",
                    institution: 'PUC Minas',
                    description:
                        'During the Computer Science program, I built a solid foundation in computing, with an emphasis on algorithms and data structures. I later chose to transfer to Software Engineering to align my studies with my professional goals and broaden my skills in the field.',
                    activities: [
                        'Algorithms and Data Structures, Object-Oriented Programming, and Web Development',
                        'Extension project teaching programming to teenagers at a school',
                        'Participation in WebTech Network, with tech initiatives and organizing talks',
                        'Lab assistant in Algorithms and Data Structures I and Web Interface Development',
                        'Leading the team that competed for the Outstanding Team award in Interdisciplinary Project I, focused on front-end development',
                        'Level 1 Member Certification at WebTech Network',
                    ],
                },
                {
                    startDate: '2021-01',
                    endDate: '2023-12',
                    title: 'Technical Degree in Information Technology',
                    institution: 'Colégio Cotemig',
                    description:
                        'During the technical program at Colégio Cotemig, I specialized in building web and mobile systems, gaining solid knowledge in developing applications for digital platforms, grounded in programming logic and computing fundamentals.',
                    activities: [
                        'Programming logic in C#, relational databases, and web and mobile development (Kotlin and Swift)',
                        'Work in the Code Club project (April to July 2023), helping children start learning computing and programming',
                        'Participation in the first phase of the 5th USP Knowledge Challenge (2021), representing Cotemig',
                        '7-time "The Best of the Class" award winner (2021 to 2023), for the highest average of the semester',
                        'Outstanding Team at Cotemig Startups (2023), with the best overall average of the program',
                    ],
                },
            ],
            professional: [
                {
                    startDate: '2026-10',
                    title: 'Software Engineer Intern',
                    company: 'Hotmart',
                    description:
                        'As a Software Engineer Intern, I work on developing software solutions, taking part in the different stages of the development cycle, from understanding and analyzing requirements to modeling, implementing, and maintaining systems. The experience involves applying software engineering best practices to build efficient, scalable solutions aligned with business needs.',
                    activities: [
                        'Understanding and analyzing requirements with the team',
                        'Modeling and implementing new features',
                        'Maintaining and evolving systems in production',
                        'Applying software engineering best practices',
                        'Building efficient, scalable solutions aligned with the business',
                    ],
                },
                {
                    startDate: '2025-09',
                    endDate: '2026-09',
                    title: 'Software Developer',
                    company: 'dti digital',
                    description:
                        "I was part of Enterprise Inari, with MRV as the client. My main responsibility was supporting and maintaining the company's systems, with a focus on .NET on the back end and React.js on the front end. This experience was a valuable opportunity for learning and growth, allowing me to broaden my knowledge of modern software development technologies.",
                    activities: [
                        'Maintenance and evolution of applications with .NET on the backend',
                        'Implementation of features and fixes using React.js',
                        'Technical support for MRV systems within Enterprise Inari',
                        'Collaboration in an agile environment focused on quality and efficiency',
                        'Presentation of a Techshot on Minimal APIs, building a .NET API from scratch for dti teams',
                        'Delivery of a Knowledge Transfer session on Docker, from theory to practice',
                        "Participation in Security Champions, learning about security in software projects and applying that knowledge to MRV's Parts Catalog project",
                    ],
                },
                {
                    startDate: '2024-06',
                    title: 'Chapter Lead & Full Stack Developer',
                    company: 'WebTech Network',
                    description:
                        'As Chapter Lead at WebTech Network, a PUC Minas extension project that brings students and professors together to build digital solutions, I lead training and mentoring initiatives focused on the back end, guiding students and supporting partner companies. The role grew out of my journey in the project, marked by my performance in the Backend Journey, in partnership with LEVTY, and by my work as a Full Stack Developer with React.js, Next.js, Java, and Spring Boot.',
                    activities: [
                        'Leading the creation of institutional materials on Back-end, Front-end, Databases, and Version Control to onboard new members',
                        'Mentoring in the Backend Journey, helping students build APIs with Node.js, Express, Docker, Knex, and PostgreSQL',
                        'Mentoring the Clockit team in building an electronic time-tracking system for PUC Minas',
                        "Development of the DevFest BH 2024 website, the city's largest technology event",
                        'Defining the initial architecture of projects and building interfaces and APIs',
                        'Leading Spring Boot workshops and an introduction to front-end development for young people at ASSPROM, with the Elas++ project',
                    ],
                },
                {
                    startDate: '2024-08',
                    title: 'Teaching Assistant',
                    company: 'PUC Minas',
                    description:
                        'I support Computer Science, Software Engineering, Computer Engineering, and Data Science students in Algorithms and Data Structures I and II, Web Interface Development, and Modular Programming. I am currently the teaching assistant for Graph Theory and Computability, creating support materials, video lessons, and a tool to visualize how graph algorithms run.',
                    activities: [
                        'Current teaching assistantship in Graph Theory and Computability, with algorithms such as breadth-first and depth-first search and Dijkstra',
                        'Programming logic, problem solving, and data structures such as lists, stacks, queues, and trees',
                        'Object-oriented programming in Java, SOLID principles, modularization, and design patterns',
                        'Web development with HTML, CSS, JavaScript, JSON, and AJAX, as well as unit testing',
                        'Creation of Graph Labs, supplementary materials, and video lessons for YouTube',
                        'Answering questions, guiding exercises, and supporting projects',
                    ],
                },
                {
                    startDate: '2024-08',
                    endDate: '2024-12',
                    title: 'Full Stack Developer',
                    company: 'PUCTec',
                    description:
                        'As a Full Stack Developer at PUCTec, the PUC Minas innovation and business hub, I was responsible for implementing solutions on both the front end and the back end of the applications, playing an important role in developing the startups supported by the project. My work ranged from creating intuitive, functional interfaces to building server architectures, ensuring scalable and efficient solutions.',
                    activities: [
                        'Implementing features on the front end and back end of the applications',
                        'Building solutions for the startups supported by the hub',
                        'Creating intuitive, functional interfaces',
                        'Building and maintaining server architecture',
                        'Focus on scalable, efficient solutions',
                    ],
                },
                {
                    startDate: '2023-08',
                    endDate: '2024-10',
                    title: 'CXO & Full Stack Developer',
                    company: 'QuickFood Technologies',
                    description:
                        "Responsible for user experience and full stack development of the startup platform. With QuickFood Technologies, we won 1st place in the 12th edition of the Cotemig Startups program, in recognition of the innovation of our solution and the team's ability to solve real problems with technology, building scalable solutions in a competitive environment.",
                    activities: [
                        'Frontend and backend system development',
                        'Construction and maintenance of chatbot using Blip and JavaScript',
                        'Creation of conversational flows focused on efficiency and UX',
                        'Continuous improvement of platform usability and performance',
                        'Collaboration in product planning and solution definition',
                        '1st place in the 12th edition of the Cotemig Startups program',
                    ],
                },
                {
                    startDate: '2023-04',
                    endDate: '2024-02',
                    title: 'Chatbot Developer',
                    company: 'Wiv',
                    description:
                        'Wiv, formerly White Wall, specializes in building conversational applications and custom artificial intelligence algorithms. As a developer, I worked on creating and maintaining chatbots with the Blip platform and JavaScript, contributing to the design of conversation flows to ensure the best possible experience for users.',
                    activities: [
                        'Creating and maintaining chatbots with Blip and JavaScript',
                        'Building conversation flows focused on user experience',
                        'Integrating with REST APIs and external resources',
                        'Collaborating in remote teams with Git and GitHub',
                        "1st place in the company's internal learning competition",
                    ],
                },
                {
                    startDate: '2023-02',
                    endDate: '2023-04',
                    title: 'Web Developer',
                    company: 'Vidas Empreendimentos',
                    description:
                        "As a Web Developer at Vidas Empreendimentos, I was responsible for building websites and chatbots and supporting the web design of the company's technology solutions. I also worked with agile task management, process documentation for software architecture, and customer journey and experience techniques.",
                    activities: [
                        'Building websites with WordPress and HTML/CSS',
                        'Developing chatbots for WhatsApp',
                        'Supporting the web design of technology solutions',
                        'Agile task management',
                        'Creating process flowcharts for software architecture',
                        'Studying and applying customer journey and experience techniques',
                    ],
                },
            ],
        },
    };
}
