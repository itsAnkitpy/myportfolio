export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string; // Path to the main image
  tags: string[];
  liveDemoUrl?: string | null;
  sourceCodeUrl?: string | null;
  longDescription: string; // Detailed description in Markdown
  problemStatement: string;
  solution: string;
  techStack: { name: string; rationale: string; }[];
  challenges: { challenge: string; solution: string; }[];
  category?: 'full-stack' | 'frontend' | 'backend' | 'learning';
  role?: 'solo' | 'team' | 'freelance';
  year?: number;
  status?: 'live' | 'archived' | 'open-source';
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "project-management-system",
    title: "Project/Employee Management System",
    shortDescription: "A comprehensive management system for tracking project growth, tasks, and team members with employee management features.",
    image: "/assets/images/cineImg.png",
    tags: ["Laravel", "PHP", "Javascript", "Bootstrap"],
    liveDemoUrl: "https://vms.tech.rangrik.com/home",
    sourceCodeUrl: "https://vms.tech.rangrik.com/home",
    category: "full-stack",
    role: "solo",
    year: 2023,
    status: "live",
    longDescription: `A comprehensive Project/Employee Management System built to streamline project tracking and employee management processes. This system provides real-time insights into project progress, task management, and team collaboration while offering robust employee management features including leave management and shift scheduling.`,
    problemStatement: `Organizations often struggle with managing multiple projects simultaneously while keeping track of employee performance, leave requests, and shift schedules. The lack of a centralized system leads to inefficiencies, missed deadlines, and poor resource allocation. Manual tracking methods are time-consuming and error-prone, making it difficult to scale operations effectively.`,
    solution: `I developed a comprehensive web-based management system that centralizes project and employee management in one platform. The solution includes real-time project tracking, task assignment and monitoring, team collaboration tools, automated leave management, and intelligent shift scheduling. The system provides dashboard analytics for managers to make data-driven decisions and improves overall operational efficiency.`,
    techStack: [
      {
        name: "Laravel",
        rationale: "Chosen for its robust MVC architecture, built-in authentication, and excellent ORM (Eloquent) for database management. Laravel's ecosystem provides powerful tools for rapid development while maintaining code quality."
      },
      {
        name: "PHP",
        rationale: "Selected as the backend language for its mature ecosystem, excellent Laravel framework support, and strong community. PHP offers great performance for web applications and extensive library support."
      },
      {
        name: "Javascript",
        rationale: "Used for dynamic frontend interactions, real-time updates, and enhanced user experience. JavaScript enables responsive UI components and seamless user interactions without page reloads."
      },
      {
        name: "Bootstrap",
        rationale: "Implemented for responsive design and consistent UI components. Bootstrap's grid system and pre-built components accelerated development while ensuring mobile responsiveness."
      }
    ],
    challenges: [
      {
        challenge: "Real-time Updates",
        solution: "Implemented WebSocket connections for real-time project updates and notifications, ensuring team members receive instant updates on task changes and project progress."
      },
      {
        challenge: "Complex Role Management",
        solution: "Designed a flexible role-based access control system that allows different permission levels for managers, team leads, and employees, ensuring data security and appropriate access levels."
      },
      {
        challenge: "Scalability",
        solution: "Optimized database queries and implemented caching strategies to handle multiple concurrent users and large datasets efficiently."
      }
    ]
  },
  {
    id: 2,
    slug: "git-commit-dating-app",
    title: "Git Commit - Dating App for Programmers",
    shortDescription: "An experimental dating application designed specifically for programmers with swiping functionality and messaging features.",
    image: "/assets/images/gitcommitImg.png",
    tags: ["Django", "Python", "Javascript", "Bootstrap"],
    liveDemoUrl: null,
    sourceCodeUrl: "https://github.com/itsAnkitpy/git_commit",
    category: "full-stack",
    role: "solo",
    year: 2022,
    status: "open-source",
    longDescription: `Git Commit is a fun and experimental dating application specifically designed for programmers and developers. The app combines the familiar mechanics of modern dating apps with programming-themed features, creating a unique platform where developers can connect based on shared interests in technology, programming languages, and coding practices.`,
    problemStatement: `Traditional dating apps often fail to connect people with shared professional interests and technical backgrounds. Programmers and developers often struggle to find like-minded individuals who understand their passion for coding, late-night debugging sessions, and the unique culture of the tech industry. There was a need for a platform that could bring together developers in a fun, engaging way.`,
    solution: `I created Git Commit, a dating app tailored specifically for the programming community. The app features the classic left/right swiping mechanism for user discovery, enhanced with programming-themed profiles where users can showcase their favorite languages, projects, and coding philosophies. Once users match, they can communicate through an integrated messaging system designed with developer-friendly features and programming humor.`,
    techStack: [
      {
        name: "Django",
        rationale: "Selected for its rapid development capabilities, built-in admin interface, and robust user authentication system. Django's ORM and security features made it ideal for handling user data and messaging functionality."
      },
      {
        name: "Python",
        rationale: "Chosen for its clean syntax, extensive libraries, and excellent Django framework support. Python's readability and development speed were crucial for this experimental project."
      },
      {
        name: "Javascript",
        rationale: "Implemented for interactive swiping mechanics, real-time messaging updates, and dynamic UI components. JavaScript enabled smooth animations and responsive user interactions."
      },
      {
        name: "Bootstrap",
        rationale: "Used for responsive design and consistent UI components. Bootstrap's mobile-first approach ensured the app works seamlessly across different devices and screen sizes."
      }
    ],
    challenges: [
      {
        challenge: "Swiping Mechanics",
        solution: "Developed smooth touch-based swiping functionality using JavaScript event handlers and CSS transitions, ensuring responsive performance across mobile and desktop devices."
      },
      {
        challenge: "Real-time Messaging",
        solution: "Implemented WebSocket connections for instant messaging between matched users, providing a seamless communication experience similar to popular messaging apps."
      },
      {
        challenge: "User Matching Algorithm",
        solution: "Created an algorithm that considers programming language preferences, experience levels, and location to suggest compatible matches, enhancing the likelihood of meaningful connections."
      }
    ]
  },
  {
    id: 3,
    slug: "ecommerce-website",
    title: "Ecommerce Website",
    shortDescription: "A full-featured ecommerce platform with product catalog, shopping cart, and secure payment processing functionality.",
    image: "/assets/images/ecommImg.png",
    tags: ["Django", "Python", "Javascript", "Bootstrap"],
    liveDemoUrl: null,
    sourceCodeUrl: "https://github.com/itsAnkitpy/Bisum",
    category: "full-stack",
    role: "solo",
    year: 2021,
    status: "open-source",
    longDescription: `A comprehensive ecommerce platform built with Django that provides a complete online shopping experience. The platform includes product catalog management, user authentication, shopping cart functionality, order processing, and secure payment integration. Designed with both customers and administrators in mind, it offers an intuitive interface for browsing and purchasing products.`,
    problemStatement: `Small businesses and entrepreneurs need accessible, cost-effective ecommerce solutions to establish their online presence. Many existing platforms are either too complex or too expensive for startups. There was a need for a simple yet powerful ecommerce solution that could be easily customized and deployed.`,
    solution: `I developed a full-stack ecommerce platform using Django that provides all essential ecommerce features including product management, user accounts, shopping cart, order processing, and payment integration. The solution is designed to be easily customizable and scalable, making it perfect for small to medium-sized businesses looking to establish their online presence.`,
    techStack: [
      {
        name: "Django",
        rationale: "Chosen for its robust framework features including user authentication, admin interface, and ORM. Django's built-in security features and rapid development capabilities made it ideal for ecommerce development."
      },
      {
        name: "Python",
        rationale: "Selected for its extensive library ecosystem, particularly for payment processing and data handling. Python's readability and maintainability were crucial for the complex business logic required in ecommerce."
      },
      {
        name: "Javascript",
        rationale: "Implemented for dynamic user interactions, cart updates, and enhanced shopping experience. JavaScript enabled real-time cart updates and smooth user interface interactions."
      },
      {
        name: "Bootstrap",
        rationale: "Used for responsive design and professional appearance. Bootstrap's grid system and components ensured the platform works seamlessly across all devices and screen sizes."
      }
    ],
    challenges: [
      {
        challenge: "Payment Integration",
        solution: "Integrated multiple payment gateways with proper error handling and security measures, ensuring secure and reliable transaction processing."
      },
      {
        challenge: "Inventory Management",
        solution: "Implemented real-time inventory tracking with automated stock level updates and low-stock notifications for administrators."
      },
      {
        challenge: "User Experience",
        solution: "Created an intuitive shopping experience with features like product filtering, search functionality, and streamlined checkout process."
      }
    ]
  },
  {
    id: 4,
    slug: "task-management-app",
    title: "Task Management Application",
    shortDescription: "A collaborative task management platform with real-time updates, team collaboration features, and project tracking capabilities.",
    image: "/assets/images/cineImg.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveDemoUrl: null,
    sourceCodeUrl: "https://github.com/itsAnkitpy/task-manager",
    category: "full-stack",
    role: "solo",
    year: 2023,
    status: "open-source",
    longDescription: `A comprehensive task management application built with the MERN stack that enables teams to collaborate effectively on projects. The platform provides real-time updates, task assignment, progress tracking, and team communication features. Designed for modern teams, it offers both individual task management and collaborative project oversight.`,
    problemStatement: `Teams often struggle with coordinating tasks, tracking project progress, and maintaining clear communication about project status. Traditional project management tools are often too complex or lack real-time collaboration features. There was a need for a simple yet powerful task management solution that could facilitate team collaboration.`,
    solution: `I developed a real-time task management platform using the MERN stack with Socket.io for instant updates. The solution includes task creation and assignment, project organization, team collaboration features, progress tracking, and real-time notifications. The platform is designed to be intuitive while providing powerful project management capabilities.`,
    techStack: [
      {
        name: "React",
        rationale: "Chosen for its component-based architecture and excellent state management capabilities. React's virtual DOM and hooks made it perfect for building a responsive and interactive user interface."
      },
      {
        name: "Node.js",
        rationale: "Selected for its excellent real-time capabilities and JavaScript ecosystem. Node.js enabled seamless integration with Socket.io for real-time features and provided excellent performance for API development."
      },
      {
        name: "MongoDB",
        rationale: "Implemented for its flexible document structure and excellent scalability. MongoDB's schema flexibility was perfect for storing varied task and project data structures."
      },
      {
        name: "Socket.io",
        rationale: "Used for real-time communication and instant updates. Socket.io enabled live collaboration features and instant notifications across all connected team members."
      }
    ],
    challenges: [
      {
        challenge: "Real-time Synchronization",
        solution: "Implemented Socket.io for instant updates across all connected clients, ensuring team members always see the latest project status and task updates."
      },
      {
        challenge: "Data Consistency",
        solution: "Developed robust data validation and conflict resolution mechanisms to maintain data integrity across multiple concurrent users."
      },
      {
        challenge: "User Interface Complexity",
        solution: "Created an intuitive drag-and-drop interface with clear visual indicators for task status and progress, making project management accessible to all team members."
      }
    ]
  },
  {
    id: 5,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/assets/images/cineImg.png",
    tags: ["Vue.js", "Express.js", "OpenWeather API", "Chart.js"],
    liveDemoUrl: null,
    sourceCodeUrl: "https://github.com/itsAnkitpy/weather-dashboard",
    category: "full-stack",
    role: "solo",
    year: 2022,
    status: "open-source",
    longDescription: `A comprehensive weather dashboard application that provides detailed weather information, forecasts, and analytics. The application features location-based weather data, interactive weather maps, historical weather trends, and customizable weather alerts. Built with Vue.js for a responsive user experience and integrated with multiple weather APIs for accurate data.`,
    problemStatement: `Users need quick access to comprehensive weather information that goes beyond basic temperature readings. Many weather apps lack detailed analytics, historical data, and customizable alerts. There was a need for a comprehensive weather platform that could provide professional-grade weather information in an accessible format.`,
    solution: `I created a feature-rich weather dashboard that aggregates data from multiple weather APIs to provide comprehensive weather information. The solution includes current weather conditions, extended forecasts, weather maps, historical data analysis, and customizable alert systems. The dashboard is designed to be both informative and visually appealing.`,
    techStack: [
      {
        name: "Vue.js",
        rationale: "Chosen for its reactive data binding and component-based architecture. Vue.js provided excellent performance for real-time weather data updates and smooth user interactions."
      },
      {
        name: "Express.js",
        rationale: "Selected for API development and weather data aggregation. Express.js provided a lightweight yet powerful backend for handling multiple weather API integrations."
      },
      {
        name: "OpenWeather API",
        rationale: "Integrated for comprehensive weather data including current conditions, forecasts, and historical data. OpenWeather API provided reliable and accurate weather information."
      },
      {
        name: "Chart.js",
        rationale: "Implemented for weather data visualization and analytics. Chart.js enabled interactive charts and graphs for weather trends and historical data analysis."
      }
    ],
    challenges: [
      {
        challenge: "API Rate Limiting",
        solution: "Implemented intelligent caching and data aggregation strategies to minimize API calls while maintaining real-time weather updates."
      },
      {
        challenge: "Data Visualization",
        solution: "Created interactive charts and graphs using Chart.js to present complex weather data in an easily understandable format."
      },
      {
        challenge: "Location Services",
        solution: "Integrated geolocation services with fallback options to provide accurate location-based weather information regardless of user permissions."
      }
    ]
  },
  {
    id: 6,
    slug: "portfolio-cms",
    title: "Portfolio Content Management System",
    shortDescription: "A headless CMS specifically designed for portfolio websites with dynamic content management and API-first architecture.",
    image: "/assets/images/cineImg.png",
    tags: ["Next.js", "Strapi", "GraphQL", "PostgreSQL"],
    liveDemoUrl: null,
    sourceCodeUrl: "https://github.com/itsAnkitpy/portfolio-cms",
    category: "full-stack",
    role: "solo",
    year: 2023,
    status: "open-source",
    longDescription: `A headless Content Management System specifically designed for portfolio websites and personal brands. The system provides dynamic content management, API-first architecture, and seamless integration with modern frontend frameworks. Built with Strapi and Next.js, it offers both content creators and developers a powerful platform for managing portfolio content.`,
    problemStatement: `Portfolio websites often require frequent content updates, but traditional CMS solutions are either too complex or not suited for portfolio-specific needs. Developers and content creators need a flexible system that can handle portfolio content while providing modern development workflows and API access.`,
    solution: `I developed a headless CMS solution using Strapi and Next.js that's specifically tailored for portfolio websites. The system provides intuitive content management, API-first architecture, dynamic content rendering, and seamless integration capabilities. It's designed to be both developer-friendly and accessible to non-technical content creators.`,
    techStack: [
      {
        name: "Next.js",
        rationale: "Chosen for its excellent SSG/SSR capabilities and API routes. Next.js provided optimal performance for portfolio websites while enabling seamless CMS integration."
      },
      {
        name: "Strapi",
        rationale: "Selected for its flexibility and developer-friendly headless CMS features. Strapi provided powerful content management capabilities with excellent API generation."
      },
      {
        name: "GraphQL",
        rationale: "Implemented for efficient data fetching and API optimization. GraphQL enabled precise data queries and reduced over-fetching, improving performance."
      },
      {
        name: "PostgreSQL",
        rationale: "Used for robust data storage and complex relational queries. PostgreSQL provided excellent performance and data integrity for content management."
      }
    ],
    challenges: [
      {
        challenge: "Content Modeling",
        solution: "Designed flexible content types and relationships that could accommodate various portfolio content structures while maintaining ease of use."
      },
      {
        challenge: "Performance Optimization",
        solution: "Implemented static generation with incremental regeneration to ensure fast loading times while maintaining dynamic content capabilities."
      },
      {
        challenge: "API Security",
        solution: "Developed comprehensive authentication and authorization systems to protect content while providing appropriate access levels for different user roles."
      }
    ]
  }
];

// Archive projects (smaller projects for the archive section)
export const archiveProjects: Project[] = [
  {
    id: 7,
    slug: "instello",
    title: "Instello",
    shortDescription: "A social media platform where you can share your photos and connect with friends and family. Just like Instagram, you can share your life with others through pictures and short captions.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["Python", "Django", "Javascript"],
    sourceCodeUrl: "https://github.com/itsAnkitpy/Instello",
    liveDemoUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2021,
    status: "open-source",
    longDescription: "Instello is a social media platform inspired by Instagram, built with Django and Python. It allows users to share photos, connect with friends and family, and engage through comments and likes.",
    problemStatement: "Social media platforms often lack simplicity and focus on core features. Users want a clean, straightforward way to share moments with their network.",
    solution: "Created a streamlined social media platform with essential features: photo sharing, user profiles, following system, and engagement through likes and comments.",
    techStack: [
      { name: "Python", rationale: "Chosen for rapid development and Django framework support" },
      { name: "Django", rationale: "Provides robust user authentication and ORM capabilities" },
      { name: "Javascript", rationale: "Enables dynamic user interactions and real-time updates" }
    ],
    challenges: [
      { challenge: "Image Upload", solution: "Implemented secure image upload with validation and compression" },
      { challenge: "Real-time Updates", solution: "Used AJAX for seamless user interactions without page reloads" }
    ]
  },
  {
    id: 8,
    slug: "boighor",
    title: "Boighor",
    shortDescription: "A place for all book worms to jump in and just order their favourite books of their favourite authors.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["Python", "Django", "Javascript"],
    sourceCodeUrl: "https://github.com/itsAnkitpy/Boighor",
    liveDemoUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2020,
    status: "open-source",
    longDescription: "Boighor is an online bookstore platform designed for book enthusiasts to discover and purchase their favorite books from various authors.",
    problemStatement: "Book lovers often struggle to find a dedicated platform that offers a wide selection of books with easy ordering and author-focused browsing.",
    solution: "Developed a comprehensive bookstore platform with author profiles, book categorization, search functionality, and streamlined ordering process.",
    techStack: [
      { name: "Python", rationale: "Selected for its excellent web development capabilities" },
      { name: "Django", rationale: "Provides robust e-commerce features and user management" },
      { name: "Javascript", rationale: "Enhances user experience with dynamic interactions" }
    ],
    challenges: [
      { challenge: "Inventory Management", solution: "Implemented real-time stock tracking and automated notifications" },
      { challenge: "Payment Integration", solution: "Integrated secure payment gateways for smooth transactions" }
    ]
  },
  {
    id: 9,
    slug: "streamit",
    title: "Streamit",
    shortDescription: "Streamit is a simple OTT platform project with functionalities of creating multiple accounts and watching your favourite shows and movies.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["Python", "Django", "Javascript"],
    sourceCodeUrl: "https://github.com/itsAnkitpy/Streamit",
    liveDemoUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2021,
    status: "open-source",
    longDescription: "Streamit is an OTT (Over-The-Top) streaming platform that allows users to create accounts and watch their favorite shows and movies online.",
    problemStatement: "With the rise of streaming services, there was a need to understand and implement the core functionalities of an OTT platform.",
    solution: "Built a complete streaming platform with user authentication, content management, video streaming capabilities, and personalized watchlists.",
    techStack: [
      { name: "Python", rationale: "Chosen for its multimedia processing capabilities" },
      { name: "Django", rationale: "Provides excellent user management and content delivery features" },
      { name: "Javascript", rationale: "Enables smooth video player controls and user interactions" }
    ],
    challenges: [
      { challenge: "Video Streaming", solution: "Implemented adaptive bitrate streaming for optimal viewing experience" },
      { challenge: "User Profiles", solution: "Created multiple user profile system with personalized recommendations" }
    ]
  },
  {
    id: 10,
    slug: "clique",
    title: "Clique",
    shortDescription: "Clique is an online platform for coders to learn and discuss different areas of programming in an interactive interface through online chatting.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["Python", "Django", "Javascript"],
    sourceCodeUrl: "https://github.com/itsAnkitpy/Clique",
    liveDemoUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2021,
    status: "open-source",
    longDescription: "Clique is an interactive learning platform designed specifically for programmers to discuss coding topics, share knowledge, and learn from each other through real-time chat.",
    problemStatement: "Programmers often lack dedicated spaces to discuss technical topics, share code snippets, and learn from peers in real-time.",
    solution: "Created an interactive chat platform with programming-focused features including code syntax highlighting, topic-based rooms, and collaborative learning tools.",
    techStack: [
      { name: "Python", rationale: "Excellent for real-time applications and chat functionality" },
      { name: "Django", rationale: "Provides WebSocket support and user authentication" },
      { name: "Javascript", rationale: "Enables real-time chat updates and interactive features" }
    ],
    challenges: [
      { challenge: "Real-time Chat", solution: "Implemented WebSocket connections for instant messaging" },
      { challenge: "Code Syntax Highlighting", solution: "Integrated syntax highlighting for multiple programming languages" }
    ]
  },
  {
    id: 11,
    slug: "laravel-blog",
    title: "Laravel Blog",
    shortDescription: "It is a laravel blog with all CRUD features where one can share their ideas with others.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["PHP", "Laravel", "Javascript", "Bootstrap", "HTML/CSS"],
    sourceCodeUrl: "https://github.com/itsAnkitpy/laravel_blog",
    liveDemoUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2020,
    status: "open-source",
    longDescription: "A comprehensive blogging platform built with Laravel, featuring full CRUD operations, user authentication, and a clean interface for sharing ideas and thoughts.",
    problemStatement: "Content creators need a simple yet powerful platform to share their ideas, manage posts, and engage with readers.",
    solution: "Developed a full-featured blog platform with post management, user authentication, commenting system, and responsive design.",
    techStack: [
      { name: "PHP", rationale: "Chosen for its excellent web development capabilities and Laravel support" },
      { name: "Laravel", rationale: "Provides robust MVC architecture and built-in features" },
      { name: "Javascript", rationale: "Enhances user experience with dynamic interactions" },
      { name: "Bootstrap", rationale: "Ensures responsive design and consistent UI components" },
      { name: "HTML/CSS", rationale: "Provides structure and styling for the blog interface" }
    ],
    challenges: [
      { challenge: "Content Management", solution: "Implemented rich text editor with image upload capabilities" },
      { challenge: "User Engagement", solution: "Added commenting system and social sharing features" }
    ]
  },
  {
    id: 12,
    slug: "infraup",
    title: "Infraup",
    shortDescription: "This is a landing page of InfraUp which is a Civil and Structural Engineering consultancy in Chandigarh.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["HTML", "CSS", "Javascript"],
    sourceCodeUrl: "https://github.com/itsAnkitpy/infraup",
    liveDemoUrl: null,
    category: "frontend",
    role: "freelance",
    year: 2020,
    status: "archived",
    longDescription: "A professional landing page for InfraUp, a Civil and Structural Engineering consultancy based in Chandigarh, showcasing their services and expertise.",
    problemStatement: "Engineering consultancies need professional web presence to showcase their services and attract potential clients.",
    solution: "Created a modern, responsive landing page with service showcases, portfolio section, and contact information optimized for lead generation.",
    techStack: [
      { name: "HTML", rationale: "Provides semantic structure for better SEO and accessibility" },
      { name: "CSS", rationale: "Enables custom styling and responsive design" },
      { name: "Javascript", rationale: "Adds interactive elements and smooth user experience" }
    ],
    challenges: [
      { challenge: "Professional Design", solution: "Created a clean, corporate design that reflects engineering expertise" },
      { challenge: "Mobile Responsiveness", solution: "Implemented responsive design for optimal viewing on all devices" }
    ]
  }
]; 