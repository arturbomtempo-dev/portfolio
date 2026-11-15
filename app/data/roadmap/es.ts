import type { RoadmapCopy } from '~/types/roadmap';

export const ROADMAP_COPY_ES: RoadmapCopy = {
    fundamentals: {
        logic: {
            title: 'Lógica de programación',
            description:
                'Variables, condiciones, bucles y funciones. Es la base de cualquier lenguaje y de cualquier área.',
        },
        git: {
            title: 'Git y GitHub',
            description:
                'Versionar el código, trabajar en equipo y mostrar tus proyectos al mercado.',
        },
        terminal: {
            title: 'Terminal',
            description:
                'Moverte entre carpetas y ejecutar comandos y scripts sin miedo a la pantalla negra.',
        },
        web: {
            title: 'Cómo funciona la web',
            description: 'Cliente y servidor, HTTP, DNS y lo que pasa cuando abres un sitio.',
        },
        english: {
            title: 'Inglés técnico',
            description:
                'La mayoría de las documentaciones, cursos y vacantes está en inglés. Leerlo bien ya ayuda mucho.',
        },
        ai: {
            title: 'La IA como aliada',
            description:
                'Usa asistentes de IA para resolver dudas y revisar código, pero entiende siempre lo que generan.',
        },
    },
    areas: {
        'front-end': {
            title: 'Front-end',
            summary: 'Construye la interfaz y la experiencia de quien usa el sistema.',
            description:
                'El desarrollador front-end crea todo lo que la persona ve y con lo que interactúa en el navegador: pantallas, componentes, formularios y animaciones. También se asegura de que la aplicación sea rápida, accesible, adaptable a cualquier pantalla y bien posicionada en los buscadores, además de consumir las APIs del back-end y organizar el estado de la aplicación.',
            myth: 'Front-end no es solo "hacer pantallas bonitas". Implica arquitectura de componentes, rendimiento, accesibilidad, SEO, seguridad en el navegador y pruebas. Hoy, muchos frameworks de front-end también ejecutan código en el servidor.',
            responsibilities: [
                'Transformar diseños en interfaces adaptables y accesibles',
                'Crear componentes reutilizables y organizar el estado de la aplicación',
                'Integrar la interfaz con APIs, manejando cargas y errores',
                'Optimizar el rendimiento, el SEO y la experiencia en el móvil',
                'Escribir pruebas y garantizar que todo funcione en distintos navegadores',
            ],
            aiImpact:
                'Las herramientas de IA ya generan componentes y pantallas a partir de descripciones e imágenes. Por eso, la diferencia está en entender la arquitectura, revisar el código generado y cuidar los detalles que hacen una buena experiencia: accesibilidad, rendimiento y consistencia.',
            steps: {
                foundations: {
                    title: 'Fundamentos de la web',
                    description:
                        'Estructura páginas con HTML semántico, dales estilo con CSS y añade interactividad con JavaScript. Versiona todo con Git desde el primer proyecto.',
                },
                styling: {
                    title: 'Diseño y adaptabilidad',
                    description:
                        'Domina Flexbox y Grid, crea diseños que funcionen del móvil al escritorio y conoce un framework de estilos como Tailwind CSS.',
                },
                typescript: {
                    title: 'TypeScript y herramientas',
                    description:
                        'Añade tipos a JavaScript y conoce el ecosistema: gestor de paquetes, bundler y herramientas de calidad de código.',
                },
                framework: {
                    title: 'Un framework moderno',
                    description:
                        'Elige un camino y profundiza. Componentes, props y estado se repiten en todos, así que cambiar de framework después es mucho más fácil.',
                },
                data: {
                    title: 'Datos y estado',
                    description:
                        'Consume APIs, maneja cargas y errores, guarda las peticiones en caché y usa un estado global solo cuando de verdad sea necesario.',
                },
                quality: {
                    title: 'Calidad y publicación',
                    description:
                        'Prueba componentes y flujos completos, mide el rendimiento y publica tus proyectos para que el mercado pueda verlos.',
                },
            },
            options: { react: 'React y Next.js', vue: 'Vue y Nuxt', angular: 'Angular' },
        },
        'back-end': {
            title: 'Back-end',
            summary:
                'Se encarga de las reglas de negocio, los datos y la seguridad detrás de la aplicación.',
            description:
                'El desarrollador back-end construye la parte del sistema que se ejecuta en el servidor: APIs, reglas de negocio, autenticación, integraciones con otros servicios, colas y procesamiento de datos. Se asegura de que la información se guarde y se entregue con seguridad, rendimiento y consistencia, incluso con miles de personas usando el sistema al mismo tiempo.',
            myth: 'Back-end no es solo "la base de datos". La base de datos es una parte de un trabajo que también implica diseñar APIs, proteger datos, integrar sistemas, soportar muchos accesos y mantener todo funcionando en producción.',
            responsibilities: [
                'Crear y documentar APIs usadas por el front-end, por apps y por otros sistemas',
                'Implementar reglas de negocio, autenticación y autorización',
                'Modelar y optimizar el acceso a la base de datos',
                'Integrar servicios externos, como pagos y correos',
                'Monitorear, escalar y corregir problemas en producción',
            ],
            aiImpact:
                'La IA acelera la creación de endpoints, consultas y pruebas, y muchas empresas ya integran modelos de lenguaje en sus propios productos. Cada vez más, quien trabaja en back-end diseña estas integraciones, cuidando los costos, la seguridad y la calidad de las respuestas.',
            steps: {
                fundamentals: {
                    title: 'Fundamentos de la web',
                    description:
                        'Entiende HTTP, métodos, status codes, JSON y el modelo REST. Practica en la terminal y en Linux, donde corre la mayoría de los servidores.',
                },
                language: {
                    title: 'Un lenguaje y un framework',
                    description:
                        'Empieza creando una API sencilla, con un CRUD completo. Elige un ecosistema y profundiza en él antes de pasar a otro.',
                },
                databases: {
                    title: 'Bases de datos',
                    description:
                        'Aprende SQL de verdad, modelado relacional y cómo usar un ORM sin perder el control de las consultas. Conoce también una base NoSQL.',
                },
                auth: {
                    title: 'Autenticación y seguridad',
                    description:
                        'Implementa el inicio de sesión con tokens, protege las contraseñas con hash, entiende OAuth y conoce las vulnerabilidades más comunes en aplicaciones web.',
                },
                tests: {
                    title: 'Pruebas y arquitectura',
                    description:
                        'Escribe pruebas unitarias y de integración y organiza el código en capas, aplicando los principios de la sección de arquitecturas de esta página.',
                },
                deploy: {
                    title: 'Publicación y escala',
                    description:
                        'Pon la aplicación en contenedores, automatiza el despliegue, usa caché y colas para soportar más accesos y publica en la nube.',
                },
            },
            options: {
                node: 'JavaScript y Node.js',
                python: 'Python',
                java: 'Java',
                dotnet: 'C# y .NET',
            },
        },
        'full-stack': {
            title: 'Full Stack',
            summary: 'Se mueve entre front-end y back-end para entregar funcionalidades completas.',
            description:
                'El desarrollador full stack trabaja en los dos lados de la aplicación: construye la interfaz, crea las APIs y conecta todo a la base de datos. Es muy valorado en startups y equipos pequeños, porque puede llevar una funcionalidad de la idea a producción. En empresas grandes, suele tener una especialidad principal y conocer bien el otro lado.',
            myth: 'Full stack no significa saberlo todo de todo. En la práctica, es tener una base sólida en los dos lados y saber profundizar donde el proyecto lo necesita, sin intentar dominar todas las tecnologías a la vez.',
            responsibilities: [
                'Desarrollar funcionalidades de punta a punta, de la pantalla a la base de datos',
                'Definir cómo se comunican el front-end y el back-end',
                'Tomar decisiones de arquitectura en proyectos más pequeños',
                'Publicar y mantener aplicaciones en producción',
                'Hacer de puente entre las áreas técnicas y de producto',
            ],
            aiImpact:
                'Con asistentes de IA, una persona puede construir y publicar productos completos cada vez más rápido. Esto valora aún más a quien entiende el sistema como un todo y sabe evaluar si lo generado es seguro, escalable y fácil de mantener.',
            steps: {
                front: {
                    title: 'Base de front-end',
                    description:
                        'Sigue las primeras etapas del camino de front-end: HTML, CSS, JavaScript y TypeScript bien practicados.',
                },
                framework: {
                    title: 'Un framework de interfaz',
                    description:
                        'Elige un ecosistema completo, que ya incluya enrutamiento, renderizado en el servidor y buenas convenciones.',
                },
                back: {
                    title: 'Back-end con el mismo lenguaje',
                    description:
                        'Usar JavaScript o TypeScript en los dos lados reduce la curva de aprendizaje. Crea APIs con Node.js y un framework como Express o NestJS.',
                },
                database: {
                    title: 'Base de datos y ORM',
                    description:
                        'Modela los datos de la aplicación, aprende SQL y usa un ORM para integrar la base de datos al código con seguridad de tipos.',
                },
                'server-routes': {
                    title: 'Front-end y back-end en el mismo proyecto',
                    description:
                        'Usa los recursos de servidor de Next.js o de Nuxt para crear páginas y APIs juntas y entiende cuándo vale la pena separar los dos lados.',
                },
                deploy: {
                    title: 'Publicación',
                    description:
                        'Publica proyectos completos, con base de datos, autenticación y despliegue automatizado. Es el mejor portafolio que puedes tener.',
                },
            },
            options: { react: 'React y Next.js', vue: 'Vue y Nuxt' },
        },
        mobile: {
            title: 'Mobile',
            summary: 'Desarrolla aplicaciones para móviles Android e iOS.',
            description:
                'El desarrollador mobile crea las aplicaciones que usamos a diario, trabajando con recursos del dispositivo, como la cámara, la ubicación, las notificaciones y el almacenamiento sin conexión. Hay dos caminos principales. En el desarrollo nativo, la app se hace con el lenguaje oficial de cada plataforma, Kotlin en Android y Swift en iOS, con acceso total a los recursos y el mejor rendimiento. En el híbrido, o multiplataforma, un único código genera apps para los dos sistemas con frameworks como React Native y Flutter, lo que ahorra tiempo y es la elección de muchas empresas hoy.',
            myth: 'Híbrido no es sinónimo de app lenta. React Native y Flutter ofrecen interfaces de alto rendimiento y se usan en apps de grandes empresas. Lo nativo sigue siendo ideal cuando la app depende mucho de recursos específicos del dispositivo.',
            responsibilities: [
                'Crear pantallas y flujos pensados para el tacto y las pantallas pequeñas',
                'Integrar la cámara, la ubicación, las notificaciones y otros recursos del dispositivo',
                'Consumir APIs y mantener la app funcionando sin conexión',
                'Publicar y actualizar la app en Google Play y en la App Store',
                'Seguir los fallos y el rendimiento en distintos dispositivos',
            ],
            aiImpact:
                'La IA ayuda a generar pantallas y lógica repetitiva, pero publicar una app todavía exige cuidar la experiencia en distintos dispositivos, los permisos, el rendimiento y las reglas de las tiendas. Los recursos de IA que se ejecutan en el propio móvil también son una tendencia creciente.',
            steps: {
                fundamentals: {
                    title: 'Una base de programación',
                    description:
                        'Antes del mobile, ten una base sólida de programación. Si vienes del front-end, JavaScript y TypeScript ya abren el camino a React Native.',
                },
                path: {
                    title: 'Nativo o multiplataforma',
                    description:
                        'Elige un camino. El multiplataforma es una excelente puerta de entrada; el nativo es el camino para quien quiere especializarse en una plataforma.',
                },
                app: {
                    title: 'Fundamentos de una app',
                    description:
                        'Navegación entre pantallas, gestión del estado, consumo de APIs y almacenamiento local para funcionar sin internet.',
                },
                device: {
                    title: 'Recursos del dispositivo',
                    description:
                        'Cámara, ubicación, notificaciones push y autenticación, respetando los permisos y la privacidad de quien usa la app.',
                },
                publish: {
                    title: 'Publicación',
                    description:
                        'Genera las versiones de producción, publica en Google Play y en la App Store y automatiza las próximas actualizaciones.',
                },
            },
            options: {
                android: 'Nativo Android',
                ios: 'Nativo iOS',
                'react-native': 'Multiplataforma con React Native',
                flutter: 'Multiplataforma con Flutter',
            },
        },
        database: {
            title: 'Bases de Datos (DBA)',
            summary: 'Garantiza que los datos estén seguros, organizados y disponibles.',
            description:
                'El DBA (Database Administrator) y los especialistas en bases de datos cuidan de donde está la información más valiosa de una empresa. Modelan las estructuras, optimizan consultas lentas, definen permisos, configuran copias de seguridad y replicación y garantizan que los datos estén siempre disponibles, incluso ante fallos.',
            myth: 'Las bases de datos no son solo "guardar información". Una consulta mal escrita o un índice que falta puede tumbar un sistema entero, y perder datos por no tener copias de seguridad es uno de los peores problemas que puede tener una empresa.',
            responsibilities: [
                'Modelar y evolucionar la estructura de las bases de datos',
                'Optimizar consultas y crear índices',
                'Configurar copias de seguridad, replicación y planes de recuperación',
                'Controlar accesos y proteger datos sensibles',
                'Monitorear la salud y el crecimiento de las bases de datos',
            ],
            aiImpact:
                'La IA ya sugiere consultas y optimizaciones, y las bases de datos vectoriales ganaron espacio con las aplicaciones de IA. Entender a fondo cómo se almacenan y se accede a los datos sigue siendo esencial para revisar esas sugerencias y mantener todo seguro.',
            steps: {
                sql: {
                    title: 'SQL',
                    description:
                        'Domina consultas, joins, agregaciones y subconsultas en una base relacional como PostgreSQL o MySQL.',
                },
                modeling: {
                    title: 'Modelado de datos',
                    description:
                        'Aprende normalización, relaciones y cómo dibujar diagramas que representen bien el negocio.',
                },
                performance: {
                    title: 'Rendimiento',
                    description:
                        'Entiende índices, planes de ejecución y transacciones para que las consultas sean rápidas y consistentes.',
                },
                nosql: {
                    title: 'NoSQL',
                    description:
                        'Conoce bases de documentos, de clave-valor y columnares, y cuándo tiene sentido cada una.',
                },
                operations: {
                    title: 'Operación y nube',
                    description:
                        'Copias de seguridad, replicación, alta disponibilidad, seguridad y bases de datos gestionadas en la nube.',
                },
            },
            options: {},
        },
        'devops-cloud': {
            title: 'DevOps y Cloud',
            summary: 'Automatiza las entregas y mantiene la infraestructura estable y escalable.',
            description:
                'El profesional de DevOps y Cloud hace de puente entre el desarrollo y la operación. Automatiza pruebas y despliegues, configura la infraestructura en la nube, pone las aplicaciones en contenedores y monitorea todo para que el sistema siga disponible, rápido y seguro. Áreas cercanas son SRE (Site Reliability Engineering) y Platform Engineering.',
            myth: 'DevOps no es un cargo que "solo hace despliegues". Es una cultura de automatización y colaboración que implica infraestructura como código, observabilidad, seguridad y reducción de costos.',
            responsibilities: [
                'Crear pipelines de integración y entrega continuas (CI/CD)',
                'Aprovisionar la infraestructura en la nube como código',
                'Gestionar contenedores y orquestadores',
                'Monitorear aplicaciones y responder a incidentes',
                'Optimizar los costos y la seguridad de la infraestructura',
            ],
            aiImpact:
                'La IA ayuda a escribir scripts, pipelines y configuraciones, y los equipos de plataforma ya operan la infraestructura de los modelos de IA. Saber analizar logs, entender redes y diseñar sistemas confiables sigue siendo lo que diferencia al profesional.',
            steps: {
                linux: {
                    title: 'Linux y redes',
                    description:
                        'Usa la terminal con confianza, automatiza tareas con Bash y entiende procesos, permisos, DNS y conexiones remotas.',
                },
                containers: {
                    title: 'Contenedores',
                    description:
                        'Empaqueta aplicaciones con Docker y levanta entornos completos con Docker Compose.',
                },
                'ci-cd': {
                    title: 'CI/CD',
                    description:
                        'Automatiza pruebas, builds y despliegues con cada cambio en el código.',
                },
                cloud: {
                    title: 'Nube',
                    description:
                        'Aprende los servicios principales de un proveedor: cómputo, almacenamiento, redes y permisos. Empieza por uno y los demás te resultarán familiares.',
                },
                orchestration: {
                    title: 'Orquestación e infraestructura como código',
                    description:
                        'Gestiona contenedores a escala con Kubernetes y describe la infraestructura en código con Terraform.',
                },
                observability: {
                    title: 'Observabilidad',
                    description:
                        'Recoge métricas, logs y traces para descubrir problemas antes que los usuarios.',
                },
            },
            options: {},
        },
        cybersecurity: {
            title: 'Ciberseguridad',
            summary: 'Protege sistemas, datos y personas contra ataques.',
            description:
                'El profesional de ciberseguridad identifica vulnerabilidades, protege sistemas y responde a ataques. El área es amplia: hay quien simula ataques para encontrar fallos antes que los delincuentes (red team y pentest), quien monitorea y defiende la infraestructura (blue team) y quien trabaja con los desarrolladores para crear software seguro desde el inicio (AppSec).',
            myth: 'La ciberseguridad no es solo "hackers invadiendo sistemas". Gran parte del trabajo es prevención: configurar bien, monitorear, concienciar a las personas y garantizar que el código y la infraestructura nazcan seguros.',
            responsibilities: [
                'Encontrar y corregir vulnerabilidades en sistemas y aplicaciones',
                'Monitorear alertas y responder a incidentes de seguridad',
                'Definir políticas de acceso y de protección de datos',
                'Realizar pruebas de penetración autorizadas',
                'Concienciar a los equipos sobre buenas prácticas de seguridad',
            ],
            aiImpact:
                'La IA la usan tanto los defensores, para detectar amenazas y analizar alertas más rápido, como los atacantes, para crear estafas más convincentes. Esto aumenta la demanda de profesionales que entiendan los fundamentos y sepan proteger también las propias aplicaciones de IA.',
            steps: {
                foundations: {
                    title: 'Fundamentos de TI',
                    description:
                        'Redes, sistemas operativos y línea de comandos. No se puede proteger lo que no se entiende.',
                },
                security: {
                    title: 'Fundamentos de seguridad',
                    description:
                        'Confidencialidad, integridad y disponibilidad, criptografía, control de acceso y las vulnerabilidades más comunes en la web.',
                },
                tools: {
                    title: 'Herramientas',
                    description:
                        'Analiza el tráfico de red, mapea servicios y prueba aplicaciones en entornos de laboratorio.',
                },
                path: {
                    title: 'Una especialización',
                    description:
                        'Ataque, defensa o seguridad de aplicaciones. Practica en plataformas legales de desafíos, como Hack The Box y TryHackMe.',
                },
                certifications: {
                    title: 'Certificaciones',
                    description:
                        'Las certificaciones ayudan a validar el conocimiento y son muy valoradas en el área.',
                },
            },
            options: {
                'red-team': 'Red team y pentest',
                'blue-team': 'Blue team y defensa',
                appsec: 'Seguridad de aplicaciones',
            },
        },
        'ai-data': {
            title: 'Datos e Inteligencia Artificial',
            summary: 'Convierte datos en decisiones y crea soluciones con inteligencia artificial.',
            description:
                'Esta área reúne varias carreras. El analista de datos convierte la información en informes y respuestas para el negocio. El científico de datos crea modelos estadísticos y de machine learning. El ingeniero de datos construye los pipelines que llevan los datos de un lugar a otro. Y el ingeniero de IA integra modelos de lenguaje, agentes y búsquedas inteligentes en los productos.',
            myth: 'Trabajar con IA no es solo usar un chatbot. Implica datos de calidad, estadística, evaluación de resultados, control de costos y mucha ingeniería para llevar un modelo del experimento a un producto confiable.',
            responsibilities: [
                'Recoger, limpiar y analizar datos',
                'Crear dashboards e indicadores para el negocio',
                'Entrenar y evaluar modelos de machine learning',
                'Integrar modelos de lenguaje y agentes en las aplicaciones',
                'Construir pipelines de datos confiables',
            ],
            aiImpact:
                'Es el área que más crece con la IA generativa. Además de entrenar modelos, hoy es común construir aplicaciones con modelos de lenguaje, usando técnicas como RAG, agentes y protocolos como MCP, midiendo siempre la calidad de las respuestas.',
            steps: {
                python: {
                    title: 'Python y matemáticas',
                    description:
                        'Python con librerías de datos, además de estadística, álgebra lineal y probabilidad al nivel necesario.',
                },
                analysis: {
                    title: 'Análisis de datos',
                    description:
                        'Consultas SQL, notebooks, visualización de datos y herramientas de BI para responder preguntas reales.',
                },
                ml: {
                    title: 'Machine learning',
                    description:
                        'Modelos supervisados y no supervisados, evaluación de resultados y redes neuronales.',
                },
                llm: {
                    title: 'Aplicaciones con IA generativa',
                    description:
                        'Integra modelos de lenguaje mediante APIs, construye sistemas de RAG con bases vectoriales y crea agentes que usan herramientas.',
                },
                mlops: {
                    title: 'Producción y MLOps',
                    description:
                        'Versiona modelos y datos, monitorea los resultados y pon soluciones de IA en producción con seguridad.',
                },
            },
            options: {},
        },
        qa: {
            title: 'Calidad y Pruebas (QA)',
            summary:
                'Garantiza que el software funcione como se espera antes de llegar a las personas.',
            description:
                'El profesional de QA (Quality Assurance) planifica y ejecuta pruebas para encontrar problemas antes que los usuarios. Hoy, el área es muy técnica: implica automatizar pruebas de interfaz y de API, pruebas de rendimiento e integrar esas verificaciones en los pipelines, para que cada cambio se valide automáticamente.',
            myth: 'QA no es solo "hacer clic en el sistema buscando errores". El foco es prevenir problemas, definir criterios de calidad con el equipo y automatizar lo máximo posible.',
            responsibilities: [
                'Planificar estrategias y casos de prueba',
                'Automatizar pruebas de interfaz, de API y de rendimiento',
                'Integrar las pruebas en los pipelines de CI/CD',
                'Registrar y seguir la corrección de bugs',
                'Definir criterios de aceptación con el equipo de producto',
            ],
            aiImpact:
                'La IA ya genera casos de prueba y scripts de automatización a partir de requisitos. El papel de QA evoluciona hacia definir lo que realmente hay que probar, evaluar la cobertura y probar también sistemas con IA, cuyas respuestas no siempre son iguales.',
            steps: {
                fundamentals: {
                    title: 'Fundamentos de pruebas',
                    description:
                        'Tipos y niveles de prueba, cómo escribir buenos casos de prueba y cómo reportar bugs con claridad.',
                },
                programming: {
                    title: 'Lógica y programación',
                    description:
                        'Un lenguaje es esencial para automatizar. JavaScript, TypeScript y Python son excelentes opciones.',
                },
                e2e: {
                    title: 'Automatización de interfaz',
                    description:
                        'Automatiza flujos completos en el navegador, como registro, inicio de sesión y compra.',
                },
                api: {
                    title: 'Pruebas de API y rendimiento',
                    description:
                        'Valida respuestas, contratos y el comportamiento del sistema bajo carga.',
                },
                ci: {
                    title: 'Pruebas en el pipeline',
                    description:
                        'Ejecuta las pruebas automáticamente con cada cambio y sigue los informes de calidad.',
                },
            },
            options: {},
        },
        'it-support': {
            title: 'Soporte de TI',
            summary: 'Mantiene ordenadores, redes y sistemas funcionando para las personas.',
            description:
                'El profesional de soporte de TI ayuda a personas y empresas a usar la tecnología sin problemas: configura ordenadores y accesos, resuelve fallos, cuida la red y los sistemas internos y registra cada atención. Es una excelente puerta de entrada, que desarrolla la comunicación, la capacidad de resolver problemas y una visión práctica de la infraestructura, y puede llevar a carreras en redes, cloud, DevOps y seguridad.',
            myth: 'Soporte no es solo "formatear ordenadores". Implica redes, identidad y accesos, herramientas en la nube, automatización de tareas y mucho contacto con personas.',
            responsibilities: [
                'Atender solicitudes y resolver problemas de los usuarios',
                'Configurar ordenadores, cuentas y permisos',
                'Mantener redes, impresoras y sistemas internos',
                'Documentar soluciones y procesos',
                'Automatizar tareas repetitivas',
            ],
            aiImpact:
                'Los chatbots y la IA ya resuelven dudas sencillas y organizan las solicitudes. El soporte pasa a centrarse en los problemas más complejos, en la automatización y en la atención humana, que sigue marcando la diferencia.',
            steps: {
                hardware: {
                    title: 'Hardware y sistemas operativos',
                    description:
                        'Componentes del ordenador e instalación y mantenimiento de los principales sistemas operativos.',
                },
                networks: {
                    title: 'Redes',
                    description:
                        'Direccionamiento, routers, switches y cómo diagnosticar problemas de conexión.',
                },
                service: {
                    title: 'Gestión de servicios',
                    description:
                        'Cómo registrar, priorizar y resolver solicitudes siguiendo buenas prácticas de atención.',
                },
                identity: {
                    title: 'Identidad y herramientas en la nube',
                    description:
                        'Gestiona cuentas, permisos y las herramientas de productividad de la empresa.',
                },
                automation: {
                    title: 'Automatización',
                    description:
                        'Automatiza tareas repetitivas y da los primeros pasos hacia cloud y DevOps.',
                },
            },
            options: {},
        },
    },
    principles: {
        'clean-code': {
            title: 'Clean Code',
            summary: 'Escribir código fácil de leer y de cambiar.',
            details:
                'Nombres claros, funciones pequeñas, una responsabilidad por bloque y nada de duplicación innecesaria. El código se lee muchas más veces de las que se escribe.',
            whenToLearn: 'Desde los primeros proyectos.',
        },
        solid: {
            title: 'SOLID',
            summary: 'Cinco principios para un código orientado a objetos más flexible.',
            details:
                'Responsabilidad única, abierto a la extensión y cerrado a la modificación, sustitución de Liskov, segregación de interfaces e inversión de dependencias. Juntos, ayudan a crear clases pequeñas, desacopladas y fáciles de probar.',
            whenToLearn: 'Después de entender la orientación a objetos.',
        },
        'design-patterns': {
            title: 'Design Patterns',
            summary: 'Soluciones conocidas para problemas que se repiten.',
            details:
                'Patrones como Strategy, Factory, Observer, Adapter y Singleton dan nombre a soluciones probadas y facilitan la comunicación en el equipo. El secreto es reconocer el problema antes de aplicar el patrón.',
            whenToLearn:
                'Cuando ya tengas algunos proyectos y empieces a notar problemas repetidos.',
        },
        tdd: {
            title: 'TDD',
            summary: 'Escribir la prueba antes del código.',
            details:
                'El Test-Driven Development sigue un ciclo corto: escribe una prueba que falla, haz lo mínimo para que pase y después refactoriza. El resultado es un código probado desde el inicio y con un diseño más simple.',
            whenToLearn: 'Después de aprender a escribir pruebas automatizadas.',
        },
        'clean-architecture': {
            title: 'Clean Architecture',
            summary: 'Separar las reglas de negocio de los detalles técnicos.',
            details:
                'El código se organiza en capas, y las reglas de negocio quedan en el centro, sin depender de frameworks, de la base de datos ni de la interfaz. Así, cambiar una tecnología no exige reescribir el sistema.',
            whenToLearn: 'Cuando tus proyectos empiecen a crecer.',
        },
        sdd: {
            title: 'SDD',
            summary: 'Especificar antes de generar el código con IA.',
            details:
                'El Spec-Driven Development es una práctica reciente, impulsada por los agentes de IA: primero se escribe una especificación clara, con requisitos, comportamiento y criterios de aceptación, y solo después se genera y valida la implementación a partir de ella. La especificación se convierte en la fuente de verdad del proyecto.',
            whenToLearn: 'Al usar agentes de IA para desarrollar.',
        },
        hexagonal: {
            title: 'Arquitectura Hexagonal',
            summary:
                'El núcleo de la aplicación habla con el mundo mediante puertos y adaptadores.',
            details:
                'También llamada Ports and Adapters, aísla el dominio mediante interfaces, los puertos. Base de datos, APIs y colas se convierten en adaptadores intercambiables, lo que facilita las pruebas y el cambio de tecnologías.',
            whenToLearn: 'Después de entender bien las capas y la inversión de dependencias.',
        },
        ddd: {
            title: 'DDD',
            summary: 'Modelar el software a partir del negocio.',
            details:
                'El Domain-Driven Design acerca a desarrolladores y expertos del negocio con un lenguaje común, divide sistemas grandes en contextos delimitados y pone las reglas del dominio en el centro del código.',
            whenToLearn: 'Al trabajar en sistemas con reglas de negocio complejas.',
        },
        microservices: {
            title: 'Monolito y microservicios',
            summary: 'Una aplicación única o varios servicios independientes.',
            details:
                'Los monolitos son más simples de construir y operar y son la mejor elección para la mayoría de los proyectos al inicio. Los microservicios permiten escalar equipos y partes del sistema de forma independiente, pero traen complejidad de red, de datos y de monitoreo.',
            whenToLearn: 'Después de tener experiencia con sistemas en producción.',
        },
    },
    tips: [
        'Elige un área para empezar, pero no tengas miedo de cambiar. Los fundamentos que aprendes sirven para todas.',
        'Construye proyectos desde el principio. Fijan el contenido mucho más que solo ver cursos.',
        'Publica tu código en GitHub y comparte lo que aprendes. Los proyectos reales muestran más que una lista de certificados.',
        'La constancia vence a la intensidad: un poco cada día rinde más que los maratones de fin de semana.',
        'Participa en comunidades, eventos y proyectos de extensión. Muchas oportunidades vienen de las personas que conoces.',
        'Usa la IA para aprender más rápido, no para saltarte etapas. Entender lo que hace el código sigue siendo tu diferencial.',
    ],
};
