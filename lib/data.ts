export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string; // Main hero/thumbnail image for homepage
  images?: {
    hero: string;           // Main project image
    gallery?: string[];     // Additional screenshots (2-4 images)
    mobile?: string;        // Mobile view (optional)
    videoThumbnail?: string; // Video preview image (optional)
  };
  video?: {
    loomUrl: string;        // Loom video link
    duration?: string;      // e.g., "2:30"
  };
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
    slug: "facility-management-system",
    title: "Facility Management System (FMS)",
    shortDescription: "A multi-tenant web application for residential housing complexes that digitizes amenity reservations, service request tracking, resident registration, and communication workflows with a device-restricted kiosk interface.",
    image: "/assets/images/projects/fms/hero.png",
    images: {
      hero: "/assets/images/projects/fms/hero.png",
      gallery: [
        "/assets/images/projects/fms/admin-panel.png",
        "/assets/images/projects/fms/kiosk-interface.png",
        "/assets/images/projects/fms/reservations.png",
        "/assets/images/projects/fms/bookings.png"
      ]
    },
    tags: ["Laravel 11", "FilamentPHP", "Livewire", "PostgreSQL", "Redis", "Stripe"],
    liveDemoUrl: null,
    sourceCodeUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2024,
    status: "live",
    longDescription: `The Facility Management System (FMS) is a web-based, multi-tenant application designed for residential housing complexes and property management companies. It digitizes and automates common facility management tasks including amenity reservations, service request tracking, resident registration, and communication workflows. The system serves three primary user groups: residents/tenants (via kiosk interface), property managers/admins (via admin panel), and super admins (for multi-client oversight). Built as a "Majestic Monolith" - a single, unified Laravel application that handles all three layers within one codebase.`,
    problemStatement: `Traditional facility management relies on manual processes, email-based communication, and paper-based documentation. This approach leads to inefficient booking and reservation management, lack of traceability for service requests and issues, manual SLA tracking and escalation processes, fragmented communication channels, time-consuming document verification workflows, and difficulty in managing multiple properties and clients.`,
    solution: `I architected a "Majestic Monolith" - a single, unified Laravel application that handles all three layers (backend API, admin panel, and kiosk interface) within one codebase. This approach eliminates microservices complexity while leveraging powerful Laravel packages to reduce custom development by 60-70%. The solution includes multi-tenant architecture with schema-per-tenant isolation, device-restricted kiosk interface with cookie-based authentication, QR code-based media upload system for secure document handling, automated SLA tracking and escalation with scheduled job monitoring, integrated Stripe payment processing for reservations and refunds, OTP-based verification for secure user authentication, and real-time updates using WebSocket technology.`,
    techStack: [
      {
        name: "Laravel 11",
        rationale: "Core framework providing robust foundation for the multi-tenant architecture, queue processing, and WebSocket integration with Laravel Reverb."
      },
      {
        name: "FilamentPHP v3",
        rationale: "Auto-generated admin interface that accelerated development significantly, providing a polished admin panel with minimal custom code."
      },
      {
        name: "Livewire v3",
        rationale: "Enabled dynamic UI without separate API development, perfect for the kiosk interface where real-time updates are essential."
      },
      {
        name: "PostgreSQL",
        rationale: "Supports JSONB and schema-per-tenant isolation, providing better data management and tenant separation for the multi-tenancy architecture."
      },
      {
        name: "Redis",
        rationale: "Handles caching and queue management, essential for the SLA tracking jobs and real-time notification system."
      },
      {
        name: "Stripe",
        rationale: "Integrated via Laravel Cashier for secure payment processing, handling reservation payments and automated refunds."
      }
    ],
    challenges: [
      {
        challenge: "Multi-Tenant Architecture",
        solution: "Implemented schema-per-tenant isolation using Spatie Laravel Multitenancy, providing complete data separation while maintaining a single codebase. This approach simplified management for solo development."
      },
      {
        challenge: "Device-Restricted Kiosk Interface",
        solution: "Built cookie-based authentication for kiosk devices that eliminates traditional login requirements while maintaining security through device binding and session management."
      },
      {
        challenge: "QR Code Media Upload System",
        solution: "Developed a secure document handling flow where users scan QR codes to upload documents from their phones, with uploads syncing to the kiosk session in real-time via WebSockets."
      },
      {
        challenge: "Automated SLA Tracking",
        solution: "Built scheduled job monitoring that tracks service request deadlines, automatically escalates overdue tickets, and sends notifications at configurable thresholds."
      }
    ]
  },
  {
    id: 2,
    slug: "project-management-system",
    title: "Project/Employee Management System",
    shortDescription: "A comprehensive management system for tracking project growth, tasks, and team members with employee management features.",
    image: "/assets/images/projects/project-management-system/hero.png",
    images: {
      hero: "/assets/images/projects/project-management-system/hero.png",
      // gallery: [
      //   "/assets/images/projects/project-management-system/dashboard.png",
      //   "/assets/images/projects/project-management-system/tasks-view.png",
      //   "/assets/images/projects/project-management-system/analytics.png"
      // ],
      // videoThumbnail: "/assets/images/projects/project-management-system/video-thumbnail.png"
    },
    // video: {
    //   loomUrl: "https://www.loom.com/share/your-video-id-here", // TODO: Add your actual Loom URL
    //   duration: "3:20" // TODO: Update with actual video duration
    // },
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
    id: 3,
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
    id: 4,
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
    id: 5,
    slug: "hp-bar-council",
    title: "HP Bar Council Digital Enrollment System",
    shortDescription: "A comprehensive web platform that digitizes the entire lawyer enrollment process for Himachal Pradesh Bar Council, from student registration to official lawyer certification.",
    image: "/assets/images/projects/hp-bar-council/hero.png",
    images: {
      hero: "/assets/images/projects/hp-bar-council/hero.png",
      gallery: [
        "/assets/images/projects/hp-bar-council/application-portal.png",
        "/assets/images/projects/hp-bar-council/approval-workflow.png",
        "/assets/images/projects/hp-bar-council/admin-dashboard.png"
      ]
    },
    video: {
      loomUrl: "https://www.loom.com/embed/e2f6e4cfe0104e1b8240b3a209cdef9a",
      duration: "4:18"
    },
    tags: ["Laravel", "PHP", "MySQL", "AWS S3", "Billdesk"],
    liveDemoUrl: null,
    sourceCodeUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2024,
    status: "live",
    longDescription: `A modern, end-to-end digital enrollment system that transforms the traditionally manual, paper-based lawyer registration process into a streamlined digital workflow. The platform manages everything from student registration and document submission to multi-stage approvals, HIM number assignment, and seamless role transitions, significantly improving transparency, speed, and reliability for the HP Bar Council.`,
    problemStatement: `The existing manual, paper-based enrollment process at HP Bar Council resulted in lengthy processing times, lack of transparency for applicants, risk of document loss, heavy administrative burden, inconsistent communication, and manual fee reconciliation. Applicants had no way to track their applications, and the manual workflow was labor-intensive and error-prone.`,
    solution: `I developed a comprehensive digital platform with a user-friendly application portal, automated multi-stage approval workflow with role-based routing, automatic HIM number generation system, dynamic role management transitioning users from Student to Provisional Lawyer to Official Lawyer, integrated Billdesk payment gateway, automated email notifications at every stage, centralized S3-based document management with previewer, and a powerful admin dashboard for application tracking and management.`,
    techStack: [
      {
        name: "Laravel",
        rationale: "Provided a robust MVC framework with built-in authentication, authorization, and queueing capabilities essential for managing complex multi-stage workflows and automated notifications."
      },
      {
        name: "PHP",
        rationale: "Offered mature ecosystem support with excellent Laravel integration, enabling rapid development of the complex approval workflow and document management features."
      },
      {
        name: "MySQL",
        rationale: "Supplied reliable relational data storage for managing application states, user roles, approval histories, and payment records with strong transactional integrity."
      },
      {
        name: "AWS S3",
        rationale: "Provided secure, scalable cloud storage for sensitive legal documents with built-in redundancy and integrated file previewing capabilities."
      },
      {
        name: "Billdesk",
        rationale: "Enabled secure online payment processing with webhook support for real-time payment status updates and automated reconciliation."
      }
    ],
    challenges: [
      {
        challenge: "Complex Multi-Stage Workflow",
        solution: "Broke the project into three distinct phases (Legal Document Handling, Approval Workflow, HIM Assignment) for iterative development. Implemented a robust role-based routing system that automatically progresses applications through Superintendent, Secretary, and Committee member reviews."
      },
      {
        challenge: "Document Security and Integrity",
        solution: "Implemented secure direct-to-S3 file uploads with strict role-based access control and encryption. Built an integrated document previewer for administrators while maintaining confidentiality of sensitive personal and legal documents."
      },
      {
        challenge: "Payment Gateway Integration",
        solution: "Developed a robust system to handle Billdesk payment callbacks (webhooks) and edge cases including failed and pending transactions. Ensured payment statuses are accurately reflected in applications for seamless user experience and financial reconciliation."
      }
    ]
  },
  {
    id: 6,
    slug: "holistart",
    title: "Holistart Workforce Onboarding Platform",
    shortDescription: "An enterprise workforce platform that automates manpower requisitions, onboarding workflows, and asset provisioning with rule-based approvals.",
    image: "/assets/images/projects/holistart/hero.png",
    images: {
      hero: "/assets/images/projects/holistart/hero.png",
      gallery: [
        "/assets/images/projects/holistart/workflow.png",
        "/assets/images/projects/holistart/dashboard.png",
        "/assets/images/projects/holistart/deboarding.png",
        "/assets/images/projects/holistart/noc.png"
      ]
    },
    video: {
      loomUrl: "https://www.loom.com/embed/032dff02fe7040a18d0c2efb877bab78",
      duration: "3:45"
    },
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
    liveDemoUrl: null,
    sourceCodeUrl: null,
    category: "full-stack",
    role: "team",
    year: 2024,
    status: "live",
    longDescription: `Holistart is a workforce management platform that digitizes the entire employee lifecycle from manpower requisition to new hire onboarding. The application orchestrates approvals, candidate data collection, document generation, and IT provisioning to deliver a transparent, auditable hiring process for large enterprises.`,
    problemStatement: `Large organizations struggle with manual manpower requisition and onboarding workflows that rely on emails and spreadsheets. This creates approval bottlenecks, weak visibility, inconsistent candidate experiences, and compliance risks as hiring volumes increase.`,
    solution: `I contributed to Holistart as a centralized Laravel-based platform with configurable approval rules, candidate self-service forms, HR dashboards, automated document generation, and integrations with ticketing systems for asset provisioning. The solution delivers end-to-end visibility, faster hiring cycles, and audit-ready reporting.`,
    techStack: [
      {
        name: "Laravel",
        rationale: "Provided a mature MVC framework with built-in queueing, notifications, and policy-driven authorization to orchestrate the multi-stage workflow."
      },
      {
        name: "PHP",
        rationale: "Offered robust support within the Laravel ecosystem and enabled rapid iteration on complex business rules."
      },
      {
        name: "MySQL",
        rationale: "Supplied reliable relational storage for approval states, candidate data, and audit logs while supporting transactional integrity."
      },
      {
        name: "Bootstrap",
        rationale: "Accelerated delivery of responsive internal dashboards with consistent UI patterns for business stakeholders."
      },
      {
        name: "jQuery",
        rationale: "Simplified progressive enhancement of form interactions and inline validations within the existing Laravel views."
      }
    ],
    challenges: [
      {
        challenge: "Complex Approval Logic",
        solution: "Modeled configurable routing rules that escalate requisitions based on attributes like salary slabs and department, ensuring the correct stakeholders review every request."
      },
      {
        challenge: "External System Integration",
        solution: "Implemented an adapter layer for the Dopex ticketing system to sync requisition and asset provisioning tickets, handling API reliability and status reconciliation."
      },
      {
        challenge: "Data Security and Privacy",
        solution: "Enforced role-based access control, single-use candidate tokens, and encrypted data storage to safeguard sensitive onboarding information."
      }
    ]
  },
  {
    id: 7,
    slug: "leadcheck",
    title: "LeadCheck - Multi-Tenant Lead Management System",
    shortDescription: "A comprehensive multi-tenant lead management application with database-per-tenant architecture, enabling organizations to efficiently manage leads with complete data isolation and client-specific customization.",
    image: "/assets/images/projects/leadcheck/hero.png",
    images: {
      hero: "/assets/images/projects/leadcheck/hero.png",
      gallery: [
        "/assets/images/projects/leadcheck/dashboard.png",
        "/assets/images/projects/leadcheck/leads-view.png",
        "/assets/images/projects/leadcheck/workflow.png"
      ]
    },
    tags: ["Laravel", "PHP", "MySQL", "Alpine.js", "Multi-Tenancy"],
    liveDemoUrl: null,
    sourceCodeUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2024,
    status: "live",
    longDescription: `LeadCheck is a comprehensive multi-tenant lead management application designed to serve multiple clients (tenants) from a single application instance while maintaining complete data isolation and security. The system enables organizations to efficiently manage leads, track status workflows, and customize form configurations per client. It implements a database-per-tenant architecture with dynamic connection switching, explicit menu-based access control, and client-specific customization capabilities.`,
    problemStatement: `Modern businesses require a scalable solution to manage leads across multiple client organizations. The challenge lies in providing complete data isolation between different clients, ensuring scalability as the number of clients grows, allowing customization (forms, workflows) per client without code duplication, maintaining security and access control across tenants, and simplifying deployment and maintenance overhead.`,
    solution: `I implemented a database-per-tenant multi-tenancy architecture with a hybrid database model: a central main database manages global configuration, clients, users, roles, and menus, while each client has a dedicated, isolated database for operational data. The NewDbConnection middleware automatically switches database connections based on the logged-in user's client_id. Permission system uses direct user_menu_mappings with RouteGard middleware enforcement. Form configurations are assigned per client via client_configs, and each client maintains their own status definitions and workflow transitions.`,
    techStack: [
      {
        name: "Laravel",
        rationale: "Provided robust framework with excellent support for multi-database connections, middleware architecture, and queue-based background processing essential for tenant database provisioning."
      },
      {
        name: "PHP",
        rationale: "Enabled rapid development of the complex multi-tenancy logic with excellent Laravel integration and mature ecosystem support for enterprise applications."
      },
      {
        name: "MySQL",
        rationale: "Supported the multi-database architecture with database-per-tenant isolation, allowing independent scaling and management of client databases."
      },
      {
        name: "Alpine.js",
        rationale: "Provided lightweight reactive JavaScript for dynamic UI interactions without the overhead of a full SPA framework, perfect for Blade template enhancement."
      },
      {
        name: "DataTables",
        rationale: "Enabled server-side processing for lead management tables with efficient pagination, sorting, and filtering across large datasets."
      }
    ],
    challenges: [
      {
        challenge: "Data Isolation",
        solution: "Implementing strict tenant isolation while maintaining code simplicity required careful middleware design with the NewDbConnection middleware that automatically switches database connections based on user context."
      },
      {
        challenge: "Scalability",
        solution: "Database-per-tenant architecture allows independent scaling and management of client databases, with job-based database provisioning for new tenants and custom migration commands across multiple databases."
      },
      {
        challenge: "Access Control Complexity",
        solution: "Designed explicit menu-based permissions using user_menu_mappings relationships, providing fine-grained control enforced by the RouteGard middleware at every route."
      },
      {
        challenge: "Configuration Management",
        solution: "Balanced flexibility with maintainability through a hybrid approach: per-client form customization via client_configs while keeping forms as static, maintainable Blade templates."
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