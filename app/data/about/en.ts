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
                    '1st place in internal learning competition at White Wall',
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
                    year: '2026 - present',
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
                    year: '2025 - 2026',
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
        },
    };
}
