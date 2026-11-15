import type { RoadmapCopy } from '~/types/roadmap';

export const ROADMAP_COPY_EN: RoadmapCopy = {
    fundamentals: {
        logic: {
            title: 'Programming logic',
            description:
                'Variables, conditions, loops and functions. The foundation of every language and every field.',
        },
        git: {
            title: 'Git and GitHub',
            description: 'Version your code, work as a team and show your projects to the market.',
        },
        terminal: {
            title: 'Terminal',
            description:
                'Move between folders and run commands and scripts without fearing the black screen.',
        },
        web: {
            title: 'How the web works',
            description: 'Client and server, HTTP, DNS and what happens when you open a website.',
        },
        english: {
            title: 'Technical English',
            description:
                'Most documentation, courses and job openings are in English. Reading it well already helps a lot.',
        },
        ai: {
            title: 'AI as an ally',
            description:
                'Use AI assistants to answer questions and review code, but always understand what they generate.',
        },
    },
    areas: {
        'front-end': {
            title: 'Front-end',
            summary: 'Builds the interface and the experience of the people who use the system.',
            description:
                'A front-end developer builds everything people see and interact with in the browser: pages, components, forms and animations. They also make sure the application is fast, accessible, responsive on any screen and well ranked by search engines, while consuming back-end APIs and organizing the application state.',
            myth: 'Front-end is not just "making pretty screens". It involves component architecture, performance, accessibility, SEO, browser security and testing. Today, many front-end frameworks also run code on the server.',
            responsibilities: [
                'Turning designs into responsive, accessible interfaces',
                'Building reusable components and organizing the application state',
                'Connecting the interface to APIs, handling loading and errors',
                'Optimizing performance, SEO and the mobile experience',
                'Writing tests and making sure everything works across browsers',
            ],
            aiImpact:
                'AI tools already generate components and pages from descriptions and images. That is why the edge lies in understanding the architecture, reviewing the generated code and caring for the details that make a good experience: accessibility, performance and consistency.',
            steps: {
                foundations: {
                    title: 'Web fundamentals',
                    description:
                        'Structure pages with semantic HTML, style them with CSS and add interactivity with JavaScript. Version everything with Git from your very first project.',
                },
                styling: {
                    title: 'Layout and responsiveness',
                    description:
                        'Master Flexbox and Grid, build layouts that work from phones to desktops and learn a styling framework such as Tailwind CSS.',
                },
                typescript: {
                    title: 'TypeScript and tooling',
                    description:
                        'Add types to JavaScript and get to know the ecosystem: package manager, bundler and code quality tools.',
                },
                framework: {
                    title: 'A modern framework',
                    description:
                        'Pick a path and go deep. Components, props and state repeat in all of them, so switching frameworks later becomes much easier.',
                },
                data: {
                    title: 'Data and state',
                    description:
                        'Consume APIs, handle loading and errors, cache requests and use global state only when it is truly needed.',
                },
                quality: {
                    title: 'Quality and publishing',
                    description:
                        'Test components and complete flows, measure performance and publish your projects so the market can see them.',
                },
            },
            options: { react: 'React and Next.js', vue: 'Vue and Nuxt', angular: 'Angular' },
        },
        'back-end': {
            title: 'Back-end',
            summary: 'Handles the business rules, data and security behind the application.',
            description:
                'A back-end developer builds the part of the system that runs on the server: APIs, business rules, authentication, integrations with other services, queues and data processing. They make sure information is stored and delivered securely, quickly and consistently, even with thousands of people using the system at the same time.',
            myth: 'Back-end is not just "the database". The database is one part of a job that also involves designing APIs, protecting data, integrating systems, handling heavy traffic and keeping everything running in production.',
            responsibilities: [
                'Building and documenting APIs used by the front end, apps and other systems',
                'Implementing business rules, authentication and authorization',
                'Modeling and optimizing database access',
                'Integrating external services, such as payments and e-mail',
                'Monitoring, scaling and fixing problems in production',
            ],
            aiImpact:
                'AI speeds up the creation of endpoints, queries and tests, and many companies already integrate language models into their own products. More and more, back-end developers design these integrations, taking care of cost, security and the quality of the answers.',
            steps: {
                fundamentals: {
                    title: 'Web fundamentals',
                    description:
                        'Understand HTTP, methods, status codes, JSON and the REST model. Practice on the terminal and on Linux, where most servers run.',
                },
                language: {
                    title: 'A language and a framework',
                    description:
                        'Start by building a simple API with a complete CRUD. Pick one ecosystem and go deep before moving to another.',
                },
                databases: {
                    title: 'Databases',
                    description:
                        'Really learn SQL, relational modeling and how to use an ORM without losing control of your queries. Get to know a NoSQL database too.',
                },
                auth: {
                    title: 'Authentication and security',
                    description:
                        'Implement token-based login, hash passwords, understand OAuth and learn the most common vulnerabilities in web applications.',
                },
                tests: {
                    title: 'Tests and architecture',
                    description:
                        'Write unit and integration tests and organize your code in layers, applying the principles from the architecture section of this page.',
                },
                deploy: {
                    title: 'Publishing and scaling',
                    description:
                        'Containerize the application, automate deployments, use caching and queues to handle more traffic and publish to the cloud.',
                },
            },
            options: {
                node: 'JavaScript and Node.js',
                python: 'Python',
                java: 'Java',
                dotnet: 'C# and .NET',
            },
        },
        'full-stack': {
            title: 'Full Stack',
            summary: 'Moves between front end and back end to deliver complete features.',
            description:
                'A full stack developer works on both sides of the application: building the interface, creating the APIs and connecting everything to the database. They are highly valued in startups and small teams, because they can take a feature from idea to production. In large companies, they usually have one main specialty and know the other side well.',
            myth: 'Full stack does not mean knowing everything about everything. In practice, it means having a solid foundation on both sides and knowing how to go deeper where the project needs it, without trying to master every technology at once.',
            responsibilities: [
                'Building features end to end, from the screen to the database',
                'Defining how the front end and the back end communicate',
                'Making architecture decisions in smaller projects',
                'Publishing and maintaining applications in production',
                'Bridging the technical and product teams',
            ],
            aiImpact:
                'With AI assistants, one person can build and ship complete products faster than ever. This makes it even more valuable to understand the system as a whole and to judge whether what was generated is secure, scalable and easy to maintain.',
            steps: {
                front: {
                    title: 'Front-end foundation',
                    description:
                        'Follow the first stages of the front-end path: HTML, CSS, JavaScript and TypeScript, well practiced.',
                },
                framework: {
                    title: 'An interface framework',
                    description:
                        'Pick a complete ecosystem that already brings routing, server-side rendering and good conventions.',
                },
                back: {
                    title: 'Back-end in the same language',
                    description:
                        'Using JavaScript or TypeScript on both sides shortens the learning curve. Build APIs with Node.js and a framework such as Express or NestJS.',
                },
                database: {
                    title: 'Database and ORM',
                    description:
                        'Model the application data, learn SQL and use an ORM to connect the database to your code with type safety.',
                },
                'server-routes': {
                    title: 'Front end and back end in one project',
                    description:
                        'Use the server features of Next.js or Nuxt to build pages and APIs together, and learn when it is worth splitting both sides.',
                },
                deploy: {
                    title: 'Publishing',
                    description:
                        'Publish complete projects with a database, authentication and automated deployment. It is the best portfolio you can have.',
                },
            },
            options: { react: 'React and Next.js', vue: 'Vue and Nuxt' },
        },
        mobile: {
            title: 'Mobile',
            summary: 'Builds apps for Android and iOS phones.',
            description:
                'A mobile developer builds the apps we use every day, dealing with device features such as the camera, location, notifications and offline storage. There are two main paths. In native development, the app is built with the official language of each platform, Kotlin on Android and Swift on iOS, with full access to device features and the best performance. In hybrid, or cross-platform, development, a single codebase produces apps for both systems with frameworks such as React Native and Flutter, which saves time and is the choice of many companies today.',
            myth: 'Hybrid does not mean slow. React Native and Flutter deliver high-performance interfaces and power apps from large companies. Native is still ideal when the app relies heavily on device-specific features.',
            responsibilities: [
                'Designing screens and flows for touch and small screens',
                'Integrating the camera, location, notifications and other device features',
                'Consuming APIs and keeping the app working offline',
                'Publishing and updating the app on Google Play and the App Store',
                'Tracking crashes and performance across devices',
            ],
            aiImpact:
                'AI helps generate screens and repetitive logic, but shipping an app still requires care with the experience across devices, permissions, performance and store rules. AI features running on the phone itself are also a growing trend.',
            steps: {
                fundamentals: {
                    title: 'A programming foundation',
                    description:
                        'Before mobile, build a solid programming foundation. If you come from front end, JavaScript and TypeScript already open the way to React Native.',
                },
                path: {
                    title: 'Native or cross-platform',
                    description:
                        'Pick a path. Cross-platform is a great way in; native is the path for those who want to specialize in one platform.',
                },
                app: {
                    title: 'App fundamentals',
                    description:
                        'Navigation between screens, state management, API consumption and local storage to work without internet.',
                },
                device: {
                    title: 'Device features',
                    description:
                        'Camera, location, push notifications and authentication, respecting the permissions and privacy of the people using the app.',
                },
                publish: {
                    title: 'Publishing',
                    description:
                        'Build production versions, publish on Google Play and the App Store and automate future updates.',
                },
            },
            options: {
                android: 'Native Android',
                ios: 'Native iOS',
                'react-native': 'Cross-platform with React Native',
                flutter: 'Cross-platform with Flutter',
            },
        },
        database: {
            title: 'Databases (DBA)',
            summary: 'Keeps data secure, organized and available.',
            description:
                'The DBA (Database Administrator) and database specialists take care of where a company keeps its most valuable information. They model structures, optimize slow queries, define permissions, set up backups and replication and make sure data is always available, even when something fails.',
            myth: 'Databases are not just "storing information". A badly written query or a missing index can bring down an entire system, and losing data because of a missing backup is one of the worst problems a company can have.',
            responsibilities: [
                'Modeling and evolving database structures',
                'Optimizing queries and creating indexes',
                'Setting up backups, replication and recovery plans',
                'Controlling access and protecting sensitive data',
                'Monitoring the health and growth of the databases',
            ],
            aiImpact:
                'AI already suggests queries and optimizations, and vector databases have grown with AI applications. Deeply understanding how data is stored and accessed is still essential to review those suggestions and keep everything secure.',
            steps: {
                sql: {
                    title: 'SQL',
                    description:
                        'Master queries, joins, aggregations and subqueries in a relational database such as PostgreSQL or MySQL.',
                },
                modeling: {
                    title: 'Data modeling',
                    description:
                        'Learn normalization, relationships and how to draw diagrams that represent the business well.',
                },
                performance: {
                    title: 'Performance',
                    description:
                        'Understand indexes, execution plans and transactions to keep queries fast and consistent.',
                },
                nosql: {
                    title: 'NoSQL',
                    description:
                        'Get to know document, key-value and columnar databases, and when each one makes sense.',
                },
                operations: {
                    title: 'Operations and cloud',
                    description:
                        'Backups, replication, high availability, security and managed databases in the cloud.',
                },
            },
            options: {},
        },
        'devops-cloud': {
            title: 'DevOps and Cloud',
            summary: 'Automates delivery and keeps the infrastructure stable and scalable.',
            description:
                'A DevOps and Cloud professional bridges development and operations. They automate tests and deployments, set up cloud infrastructure, containerize applications and monitor everything so the system stays up, fast and secure. Related fields are SRE (Site Reliability Engineering) and Platform Engineering.',
            myth: 'DevOps is not a role that "only deploys". It is a culture of automation and collaboration that involves infrastructure as code, observability, security and cost reduction.',
            responsibilities: [
                'Building continuous integration and delivery pipelines (CI/CD)',
                'Provisioning cloud infrastructure as code',
                'Managing containers and orchestrators',
                'Monitoring applications and responding to incidents',
                'Optimizing infrastructure cost and security',
            ],
            aiImpact:
                'AI helps write scripts, pipelines and configurations, and platform teams already run the infrastructure behind AI models. Knowing how to analyze logs, understand networks and design reliable systems is still what sets a professional apart.',
            steps: {
                linux: {
                    title: 'Linux and networking',
                    description:
                        'Use the terminal with confidence, automate tasks with Bash and understand processes, permissions, DNS and remote connections.',
                },
                containers: {
                    title: 'Containers',
                    description:
                        'Package applications with Docker and spin up complete environments with Docker Compose.',
                },
                'ci-cd': {
                    title: 'CI/CD',
                    description: 'Automate tests, builds and deployments on every code change.',
                },
                cloud: {
                    title: 'Cloud',
                    description:
                        'Learn the main services of one provider: compute, storage, networking and permissions. Start with one and the others will feel familiar.',
                },
                orchestration: {
                    title: 'Orchestration and infrastructure as code',
                    description:
                        'Manage containers at scale with Kubernetes and describe infrastructure as code with Terraform.',
                },
                observability: {
                    title: 'Observability',
                    description:
                        'Collect metrics, logs and traces to find problems before users do.',
                },
            },
            options: {},
        },
        cybersecurity: {
            title: 'Cybersecurity',
            summary: 'Protects systems, data and people against attacks.',
            description:
                'A cybersecurity professional finds vulnerabilities, protects systems and responds to attacks. The field is broad: some simulate attacks to find flaws before criminals do (red team and pentesting), some monitor and defend the infrastructure (blue team) and some work with developers to build secure software from the start (AppSec).',
            myth: 'Cybersecurity is not just "hackers breaking into systems". Much of the work is prevention: configuring things well, monitoring, raising awareness and making sure code and infrastructure are secure from day one.',
            responsibilities: [
                'Finding and fixing vulnerabilities in systems and applications',
                'Monitoring alerts and responding to security incidents',
                'Defining access and data protection policies',
                'Running authorized penetration tests',
                'Raising awareness of security best practices across teams',
            ],
            aiImpact:
                'AI is used both by defenders, to detect threats and analyze alerts faster, and by attackers, to craft more convincing scams. This increases the demand for professionals who understand the fundamentals and can also protect AI applications themselves.',
            steps: {
                foundations: {
                    title: 'IT fundamentals',
                    description:
                        'Networks, operating systems and the command line. You cannot protect what you do not understand.',
                },
                security: {
                    title: 'Security fundamentals',
                    description:
                        'Confidentiality, integrity and availability, cryptography, access control and the most common web vulnerabilities.',
                },
                tools: {
                    title: 'Tools',
                    description:
                        'Analyze network traffic, map services and test applications in lab environments.',
                },
                path: {
                    title: 'A specialization',
                    description:
                        'Offense, defense or application security. Practice on legal challenge platforms such as Hack The Box and TryHackMe.',
                },
                certifications: {
                    title: 'Certifications',
                    description:
                        'Certifications help validate your knowledge and are highly valued in the field.',
                },
            },
            options: {
                'red-team': 'Red team and pentesting',
                'blue-team': 'Blue team and defense',
                appsec: 'Application security',
            },
        },
        'ai-data': {
            title: 'Data and Artificial Intelligence',
            summary: 'Turns data into decisions and builds solutions with artificial intelligence.',
            description:
                'This field brings together several careers. Data analysts turn information into reports and answers for the business. Data scientists build statistical and machine learning models. Data engineers build the pipelines that move data from one place to another. And AI engineers integrate language models, agents and smart search into products.',
            myth: 'Working with AI is not just using a chatbot. It involves quality data, statistics, evaluating results, controlling costs and a lot of engineering to take a model from an experiment to a reliable product.',
            responsibilities: [
                'Collecting, cleaning and analyzing data',
                'Building dashboards and metrics for the business',
                'Training and evaluating machine learning models',
                'Integrating language models and agents into applications',
                'Building reliable data pipelines',
            ],
            aiImpact:
                'This is the field growing the most with generative AI. Besides training models, it is now common to build applications with language models, using techniques such as RAG, agents and protocols such as MCP, always measuring the quality of the answers.',
            steps: {
                python: {
                    title: 'Python and math',
                    description:
                        'Python with data libraries, plus statistics, linear algebra and probability at the level you need.',
                },
                analysis: {
                    title: 'Data analysis',
                    description:
                        'SQL queries, notebooks, data visualization and BI tools to answer real questions.',
                },
                ml: {
                    title: 'Machine learning',
                    description:
                        'Supervised and unsupervised models, evaluating results and neural networks.',
                },
                llm: {
                    title: 'Generative AI applications',
                    description:
                        'Integrate language models through APIs, build RAG systems with vector databases and create agents that use tools.',
                },
                mlops: {
                    title: 'Production and MLOps',
                    description:
                        'Version models and data, monitor results and put AI solutions in production safely.',
                },
            },
            options: {},
        },
        qa: {
            title: 'Quality Assurance (QA)',
            summary: 'Makes sure software works as expected before it reaches people.',
            description:
                'A QA (Quality Assurance) professional plans and runs tests to find problems before users do. Today the field is highly technical: it involves automating interface and API tests, performance testing and integrating these checks into pipelines, so every change is validated automatically.',
            myth: 'QA is not just "clicking around looking for bugs". The focus is preventing problems, defining quality criteria with the team and automating as much as possible.',
            responsibilities: [
                'Planning test strategies and test cases',
                'Automating interface, API and performance tests',
                'Integrating tests into CI/CD pipelines',
                'Reporting bugs and following up on fixes',
                'Defining acceptance criteria with the product team',
            ],
            aiImpact:
                'AI already generates test cases and automation scripts from requirements. The QA role is evolving toward deciding what really needs testing, evaluating coverage and also testing AI systems, whose answers are not always the same.',
            steps: {
                fundamentals: {
                    title: 'Testing fundamentals',
                    description:
                        'Test types and levels, how to write good test cases and how to report bugs clearly.',
                },
                programming: {
                    title: 'Logic and programming',
                    description:
                        'A programming language is essential for automation. JavaScript, TypeScript and Python are great options.',
                },
                e2e: {
                    title: 'Interface automation',
                    description:
                        'Automate complete browser flows, such as sign-up, login and checkout.',
                },
                api: {
                    title: 'API and performance tests',
                    description:
                        'Validate responses, contracts and how the system behaves under load.',
                },
                ci: {
                    title: 'Tests in the pipeline',
                    description:
                        'Run tests automatically on every change and follow quality reports.',
                },
            },
            options: {},
        },
        'it-support': {
            title: 'IT Support',
            summary: 'Keeps computers, networks and systems working for people.',
            description:
                'An IT support professional helps people and companies use technology without problems: setting up computers and access, solving failures, taking care of the network and internal systems and recording each request. It is a great way into tech, building communication, problem-solving skills and a practical view of infrastructure, and it can lead to careers in networking, cloud, DevOps and security.',
            myth: 'Support is not just "formatting computers". It involves networks, identity and access, cloud tools, task automation and a lot of contact with people.',
            responsibilities: [
                'Handling tickets and solving user problems',
                'Setting up computers, accounts and permissions',
                'Maintaining networks, printers and internal systems',
                'Documenting solutions and processes',
                'Automating repetitive tasks',
            ],
            aiImpact:
                'Chatbots and AI already answer simple questions and organize tickets. Support is shifting toward complex problems, automation and human assistance, which still makes a difference.',
            steps: {
                hardware: {
                    title: 'Hardware and operating systems',
                    description:
                        'Computer components and installing and maintaining the main operating systems.',
                },
                networks: {
                    title: 'Networking',
                    description:
                        'Addressing, routers, switches and how to diagnose connection problems.',
                },
                service: {
                    title: 'Service management',
                    description:
                        'How to log, prioritize and resolve tickets following service best practices.',
                },
                identity: {
                    title: 'Identity and cloud tools',
                    description: 'Manage accounts, permissions and the company productivity tools.',
                },
                automation: {
                    title: 'Automation',
                    description:
                        'Automate repetitive tasks and take your first steps toward cloud and DevOps.',
                },
            },
            options: {},
        },
    },
    principles: {
        'clean-code': {
            title: 'Clean Code',
            summary: 'Writing code that is easy to read and change.',
            details:
                'Clear names, small functions, one responsibility per piece and no unnecessary duplication. Code is read far more often than it is written.',
            whenToLearn: 'From your very first projects.',
        },
        solid: {
            title: 'SOLID',
            summary: 'Five principles for more flexible object-oriented code.',
            details:
                'Single responsibility, open for extension and closed for modification, Liskov substitution, interface segregation and dependency inversion. Together, they help create small, decoupled classes that are easy to test.',
            whenToLearn: 'After you understand object-oriented programming.',
        },
        'design-patterns': {
            title: 'Design Patterns',
            summary: 'Well-known solutions to recurring problems.',
            details:
                'Patterns such as Strategy, Factory, Observer, Adapter and Singleton name proven solutions and make team communication easier. The secret is to recognize the problem before applying the pattern.',
            whenToLearn: 'Once you have a few projects and start noticing repeated problems.',
        },
        tdd: {
            title: 'TDD',
            summary: 'Writing the test before the code.',
            details:
                'Test-Driven Development follows a short cycle: write a failing test, do the minimum to make it pass and then refactor. The result is code that is tested from the start and has a simpler design.',
            whenToLearn: 'After you learn to write automated tests.',
        },
        'clean-architecture': {
            title: 'Clean Architecture',
            summary: 'Separating business rules from technical details.',
            details:
                'Code is organized in layers, with the business rules at the center and no dependency on frameworks, the database or the interface. That way, replacing a technology does not require rewriting the system.',
            whenToLearn: 'When your projects start to grow.',
        },
        sdd: {
            title: 'SDD',
            summary: 'Specifying before generating code with AI.',
            details:
                'Spec-Driven Development is a recent practice driven by AI agents: you first write a clear specification with requirements, behavior and acceptance criteria, and only then is the implementation generated and validated against it. The specification becomes the project source of truth.',
            whenToLearn: 'When you use AI agents to build software.',
        },
        hexagonal: {
            title: 'Hexagonal Architecture',
            summary: 'The application core talks to the world through ports and adapters.',
            details:
                'Also known as Ports and Adapters, it isolates the domain behind interfaces, the ports. Databases, APIs and queues become pluggable adapters, which makes testing and replacing technologies easier.',
            whenToLearn: 'After you understand layers and dependency inversion well.',
        },
        ddd: {
            title: 'DDD',
            summary: 'Modeling software from the business.',
            details:
                'Domain-Driven Design brings developers and business experts together with a shared language, splits large systems into bounded contexts and puts the domain rules at the center of the code.',
            whenToLearn: 'When working on systems with complex business rules.',
        },
        microservices: {
            title: 'Monolith and microservices',
            summary: 'One single application or several independent services.',
            details:
                'Monoliths are simpler to build and operate and are the best choice for most projects at the start. Microservices let teams and parts of the system scale independently, but bring complexity in networking, data and monitoring.',
            whenToLearn: 'After you have experience with systems in production.',
        },
    },
    tips: [
        'Pick one field to start with, but do not be afraid to change. The fundamentals you learn work for all of them.',
        'Build projects early. They make knowledge stick far more than just watching courses.',
        'Publish your code on GitHub and share what you learn. Real projects show more than a list of certificates.',
        'Consistency beats intensity: a little every day goes further than weekend marathons.',
        'Join communities, events and university projects. Many opportunities come from the people you meet.',
        'Use AI to learn faster, not to skip steps. Understanding what the code does is still your edge.',
    ],
};
