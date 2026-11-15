import {
    BrainCircuit,
    CloudCog,
    Database,
    FlaskConical,
    GitBranch,
    Headset,
    Languages,
    Layers,
    Monitor,
    Network,
    Puzzle,
    Server,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Terminal,
} from '@lucide/vue';
import type { RoadmapStructure } from '~/types/roadmap';

export const ROADMAP_STRUCTURE: RoadmapStructure = {
    fundamentals: [
        { id: 'logic', icon: Puzzle },
        { id: 'git', icon: GitBranch },
        { id: 'terminal', icon: Terminal },
        { id: 'web', icon: Network },
        { id: 'english', icon: Languages },
        { id: 'ai', icon: Sparkles },
    ],
    areas: [
        {
            id: 'front-end',
            icon: Monitor,
            steps: [
                { id: 'foundations', technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'] },
                { id: 'styling', technologies: ['Flexbox', 'CSS Grid', 'Tailwind CSS', 'Sass'] },
                {
                    id: 'typescript',
                    technologies: ['TypeScript', 'npm', 'Vite', 'ESLint', 'Prettier'],
                },
                {
                    id: 'framework',
                    technologies: [],
                    options: [
                        { id: 'react', technologies: ['React', 'Next.js'] },
                        { id: 'vue', technologies: ['Vue.js', 'Nuxt'] },
                        { id: 'angular', technologies: ['Angular'] },
                    ],
                },
                { id: 'data', technologies: ['REST APIs', 'TanStack Query', 'Zustand', 'Pinia'] },
                {
                    id: 'quality',
                    technologies: [
                        'Vitest',
                        'Testing Library',
                        'Playwright',
                        'Lighthouse',
                        'Vercel',
                    ],
                },
            ],
        },
        {
            id: 'back-end',
            icon: Server,
            steps: [
                { id: 'fundamentals', technologies: ['HTTP', 'REST', 'JSON', 'Linux', 'Git'] },
                {
                    id: 'language',
                    technologies: [],
                    options: [
                        {
                            id: 'node',
                            technologies: [
                                'JavaScript',
                                'TypeScript',
                                'Node.js',
                                'Express',
                                'NestJS',
                            ],
                        },
                        { id: 'python', technologies: ['Python', 'Flask', 'FastAPI', 'Django'] },
                        { id: 'java', technologies: ['Java', 'Spring Boot'] },
                        { id: 'dotnet', technologies: ['C#', '.NET', 'ASP.NET Core'] },
                    ],
                },
                {
                    id: 'databases',
                    technologies: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'],
                },
                { id: 'auth', technologies: ['JWT', 'OAuth 2.0', 'bcrypt', 'OWASP Top 10'] },
                { id: 'tests', technologies: ['Jest', 'Vitest', 'JUnit', 'pytest', 'xUnit'] },
                {
                    id: 'deploy',
                    technologies: ['Docker', 'GitHub Actions', 'Redis', 'RabbitMQ', 'AWS'],
                },
            ],
        },
        {
            id: 'full-stack',
            icon: Layers,
            steps: [
                { id: 'front', technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
                {
                    id: 'framework',
                    technologies: [],
                    options: [
                        { id: 'react', technologies: ['React', 'Next.js'] },
                        { id: 'vue', technologies: ['Vue.js', 'Nuxt'] },
                    ],
                },
                { id: 'back', technologies: ['Node.js', 'Express', 'NestJS'] },
                { id: 'database', technologies: ['PostgreSQL', 'Prisma', 'MongoDB'] },
                { id: 'server-routes', technologies: ['Next.js', 'Nuxt', 'Supabase'] },
                { id: 'deploy', technologies: ['Docker', 'GitHub Actions', 'Vercel'] },
            ],
        },
        {
            id: 'mobile',
            icon: Smartphone,
            steps: [
                { id: 'fundamentals', technologies: ['JavaScript', 'TypeScript', 'Git'] },
                {
                    id: 'path',
                    technologies: [],
                    options: [
                        {
                            id: 'android',
                            technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio'],
                        },
                        { id: 'ios', technologies: ['Swift', 'SwiftUI', 'Xcode'] },
                        { id: 'react-native', technologies: ['React Native', 'Expo'] },
                        { id: 'flutter', technologies: ['Dart', 'Flutter'] },
                    ],
                },
                { id: 'app', technologies: ['REST APIs', 'SQLite', 'Firebase'] },
                { id: 'device', technologies: ['Firebase Cloud Messaging', 'OAuth 2.0'] },
                {
                    id: 'publish',
                    technologies: ['Google Play', 'App Store', 'EAS Build', 'Fastlane'],
                },
            ],
        },
        {
            id: 'database',
            icon: Database,
            steps: [
                { id: 'sql', technologies: ['SQL', 'PostgreSQL', 'MySQL', 'SQL Server'] },
                { id: 'modeling', technologies: ['DBeaver', 'dbdiagram.io'] },
                { id: 'performance', technologies: ['EXPLAIN', 'pg_stat_statements'] },
                { id: 'nosql', technologies: ['MongoDB', 'Redis', 'Cassandra'] },
                { id: 'operations', technologies: ['Amazon RDS', 'Azure SQL', 'Google Cloud SQL'] },
            ],
        },
        {
            id: 'devops-cloud',
            icon: CloudCog,
            steps: [
                { id: 'linux', technologies: ['Linux', 'Bash', 'SSH', 'DNS'] },
                { id: 'containers', technologies: ['Docker', 'Docker Compose'] },
                { id: 'ci-cd', technologies: ['GitHub Actions', 'GitLab CI'] },
                { id: 'cloud', technologies: ['AWS', 'Azure', 'Google Cloud'] },
                { id: 'orchestration', technologies: ['Kubernetes', 'Terraform', 'Ansible'] },
                { id: 'observability', technologies: ['Prometheus', 'Grafana', 'OpenTelemetry'] },
            ],
        },
        {
            id: 'cybersecurity',
            icon: ShieldCheck,
            steps: [
                { id: 'foundations', technologies: ['Linux', 'Windows', 'TCP/IP', 'DNS'] },
                { id: 'security', technologies: ['OWASP Top 10', 'TLS', 'IAM'] },
                { id: 'tools', technologies: ['Wireshark', 'Nmap', 'Burp Suite'] },
                {
                    id: 'path',
                    technologies: ['Hack The Box', 'TryHackMe'],
                    options: [
                        { id: 'red-team', technologies: ['Kali Linux', 'Metasploit'] },
                        { id: 'blue-team', technologies: ['Splunk', 'Microsoft Sentinel'] },
                        { id: 'appsec', technologies: ['OWASP ZAP', 'Semgrep'] },
                    ],
                },
                { id: 'certifications', technologies: ['CompTIA Security+', 'CEH', 'OSCP'] },
            ],
        },
        {
            id: 'ai-data',
            icon: BrainCircuit,
            steps: [
                { id: 'python', technologies: ['Python', 'Pandas', 'NumPy'] },
                { id: 'analysis', technologies: ['SQL', 'Jupyter', 'Matplotlib', 'Power BI'] },
                { id: 'ml', technologies: ['scikit-learn', 'PyTorch', 'TensorFlow'] },
                { id: 'llm', technologies: ['LLM APIs', 'RAG', 'LangChain', 'MCP', 'pgvector'] },
                { id: 'mlops', technologies: ['MLflow', 'Hugging Face', 'Docker'] },
            ],
        },
        {
            id: 'qa',
            icon: FlaskConical,
            steps: [
                { id: 'fundamentals', technologies: ['Jira'] },
                { id: 'programming', technologies: ['JavaScript', 'TypeScript', 'Python'] },
                { id: 'e2e', technologies: ['Playwright', 'Cypress', 'Selenium'] },
                { id: 'api', technologies: ['Postman', 'Insomnia', 'k6'] },
                { id: 'ci', technologies: ['GitHub Actions', 'Allure'] },
            ],
        },
        {
            id: 'it-support',
            icon: Headset,
            steps: [
                { id: 'hardware', technologies: ['Windows', 'Linux', 'macOS'] },
                { id: 'networks', technologies: ['TCP/IP', 'DNS', 'DHCP', 'Wi-Fi'] },
                { id: 'service', technologies: ['ITIL', 'Jira Service Management', 'GLPI'] },
                {
                    id: 'identity',
                    technologies: ['Microsoft 365', 'Active Directory', 'Google Workspace'],
                },
                { id: 'automation', technologies: ['PowerShell', 'Bash', 'Python'] },
            ],
        },
    ],
    principles: [
        { id: 'clean-code', level: 'beginner' },
        { id: 'solid', level: 'beginner' },
        { id: 'design-patterns', level: 'intermediate' },
        { id: 'tdd', level: 'intermediate' },
        { id: 'clean-architecture', level: 'intermediate' },
        { id: 'sdd', level: 'intermediate' },
        { id: 'hexagonal', level: 'advanced' },
        { id: 'ddd', level: 'advanced' },
        { id: 'microservices', level: 'advanced' },
    ],
};
