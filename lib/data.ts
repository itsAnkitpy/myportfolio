export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string; // Main hero/thumbnail image for homepage
  images?: {
    hero: string;           // Main project image
    gallery?: string[];     // Additional screenshots (2-4 images)
    mobile?: string | string[]; // Mobile view — one screenshot or several (optional)
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
  featured?: boolean; // Full-width slot on the homepage; the rest render as a compact list
  category?: 'full-stack' | 'frontend' | 'backend' | 'learning';
  role?: 'solo' | 'team' | 'freelance' | 'product';
  year?: number;
  status?: 'live' | 'archived' | 'open-source';
}

export const projects: Project[] = [
  {
    id: 4,
    slug: "assetlane",
    title: "AssetLane",
    featured: true,
    shortDescription: "My own SaaS product, live at assetlanehq.com — multi-tenant asset tracking with QR code lookup, recurring maintenance scheduling, warranty alerts, role-based team access, CSV import, and a complete audit trail. A companion Android app is now in pilot distribution, backed by separate staging and production environments. Designed, built, deployed, and taken to market solo.",
    image: "/assets/images/projects/amt/hero.png",
    images: {
      hero: "/assets/images/projects/amt/hero.png",
      gallery: [
        "/assets/images/projects/amt/dashboard.png",
        "/assets/images/projects/amt/assets-list.png",
        "/assets/images/projects/amt/scan.png",
        "/assets/images/projects/amt/superadmin.png"
      ],
      mobile: [
        "/assets/images/projects/amt/mobile.jpeg",
        "/assets/images/projects/amt/mobile2.jpeg"
      ]
    },
    video: {
      loomUrl: "https://www.loom.com/embed/cf5233bfb58545e682850534e71fff78"
    },
    tags: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS 4", "React Native", "Expo", "EAS Build"],
    liveDemoUrl: "https://assetlanehq.com/",
    sourceCodeUrl: null,
    category: "full-stack",
    role: "product",
    year: 2025,
    status: "live",
    longDescription: `AssetLane is my own SaaS product, launched independently at assetlanehq.com and currently open for early access. It helps organizations track, manage, and audit their physical assets—from laptops and monitors to office equipment and machinery. Companies maintain a centralized inventory, assign assets to employees with a full activity history, define custom asset categories with flexible field schemas, schedule recurring maintenance with due-soon and overdue alerts, track warranty expiry, control access by role, and migrate off spreadsheets through CSV import. Assets carry printable QR labels that resolve in any phone browser, with no app required.

A companion Android app, built with React Native and Expo against that same hosted API, is now in pilot distribution. It covers camera-based QR scanning, a searchable asset list, a workspace dashboard with live counts and recent activity, and a full asset detail view—photo, condition, location, warranty dates, custom fields, and maintenance history. A manager can change an asset's status from the floor without opening a laptop, and the workspace switcher lets one account move between organizations. It ships as a direct-download APK rather than through the Play Store, which puts a pilot one link away from any Android phone. iOS is a deliberate hold until a pilot converts, because it costs an annual developer fee to publish at all.

Behind both clients run two matched environments. Staging carries its own database, its own authentication instance, and its own installable build; production carries a separate set. Pilot testers get the staging build and real customers get production, so test records and customer records can never meet. That separation exists because the first pilot build did not have it: it paired the test sign-in key with the production server, and every tester reached a spinner that never resolved.

I own every layer of it: product design, backend, frontend, mobile, infrastructure, release engineering, and the go-to-market work now underway.`,
    problemStatement: `Organizations of all sizes struggle with asset management. Many companies track assets in Excel files that become outdated and impossible to audit. Without proper assignment tracking, assets get lost and no one knows who had them last. Generic tools don't accommodate different asset types, and there's no audit trail when something goes wrong.`,
    solution: `I built a flexible, multi-tenant asset management system with row-level tenant isolation, a dynamic field schema system where each category defines its own custom fields, a complete audit trail that survives user deletion, bulk operations for CSV import/export, recurring maintenance schedules that surface due-soon and overdue work, warranty expiry alerts, role-based access for admins, managers, and users, and QR code integration for quick asset lookup. The storage layer uses a provider pattern supporting both local filesystem and Vercel Blob. Choosing row-level isolation here was deliberate: it is the simplest model that meets the requirement, and for a product I intend to sell to small and mid-sized teams it keeps operational overhead low without giving up separation between tenants.

The Android app is a thin client on the same hosted API, not a second backend. Every rule that governs the web app—tenant scoping, role checks, audit writes—already lives on the server, so the phone inherits them instead of re-implementing them. Releases run on two build profiles, staging and production, each pinned to its own server, its own sign-in key, and its own Android package name, so both builds install side by side on one phone and a tester never signs in against customer data.`,
    techStack: [
      {
        name: "Next.js 16",
        rationale: "Full-stack React framework with App Router, Server Components, and Server Actions for simpler data fetching and reduced client bundle size."
      },
      {
        name: "React 19",
        rationale: "Latest React with Server Components paradigm for rendering data-fetching components on the server."
      },
      {
        name: "TypeScript",
        rationale: "Type-safe development from database to UI, ensuring reliability across the full stack."
      },
      {
        name: "PostgreSQL",
        rationale: "Relational database with JSON column support for flexible custom field schemas while maintaining query performance."
      },
      {
        name: "Prisma",
        rationale: "Type-safe ORM with excellent migrations and Prisma Studio for database management."
      },
      {
        name: "Clerk",
        rationale: "Managed authentication service with webhook support for user syncing."
      },
      {
        name: "TailwindCSS 4",
        rationale: "Utility-first CSS framework with shadcn/ui components for rapid, accessible UI development."
      },
      {
        name: "React Native + Expo",
        rationale: "Companion Android app built as a thin client against the same hosted API, so web and mobile share one backend and one source of truth. Expo's build service produces an installable Android package without maintaining a native toolchain."
      },
      {
        name: "Expo Camera + TanStack Query",
        rationale: "Camera-based QR scanning on the phone, with cached, request-deduplicated data fetching so scan results stay fast and consistent with the web app."
      },
      {
        name: "EAS Build",
        rationale: "Cloud build service that signs and packages the Android app per environment profile. Each profile carries its own server address, sign-in key, and package name, and produces a download link a pilot user can install from directly—no Play Store review cycle between a fix and the tester's phone."
      }
    ],
    challenges: [
      {
        challenge: "Next.js 16 App Router Patterns",
        solution: "Established clear patterns: Server Components for data fetching, Client Components only for interactivity, Server Actions for mutations. RSC dramatically simplifies data fetching and reduces client bundle size."
      },
      {
        challenge: "Multi-Tenancy Without Leaks",
        solution: "Every database query includes tenantId filter with authorization check before every operation. Defense in depth at middleware, page, and query level."
      },
      {
        challenge: "Dynamic Custom Fields",
        solution: "Store field schema as JSON in AssetCategory, field values as JSON in Asset, with dynamic form components that render based on schema and validate on import."
      },
      {
        challenge: "Audit Trail That Survives",
        solution: "Store userId as plain string (no FK) and performedBy name in JSON details field, so history remains readable even after user deletion."
      },
      {
        challenge: "The First Pilot Build Signed In, Then Hung Forever",
        solution: "Testers reached the login screen, entered valid credentials, and landed on a spinner that never resolved. The build paired the test sign-in key with the production server. Those keys belong to different authentication instances, so the login succeeded against one and the server rejected the session from the other—and the app had no branch for a rejected session, so it waited. The fix was structural, not a patch: two build profiles that each bind one server to its matching sign-in key, separate Android package names so staging and production install side by side instead of overwriting each other, and a real error screen that names the server it is talking to. A configuration mismatch is now visible on the phone instead of silent."
      },
      {
        challenge: "The App Was Slow Because of Geography, Not Code",
        solution: "Pages took several seconds to paint, and the easy story was to blame free-tier hosting. One response header disproved it: requests entered the network in Mumbai and executed in Washington DC, while the database sat in Singapore. Every query crossed the Pacific twice, and each page ran several of them in sequence. Three fixes followed—pin the serverless functions to the database's region, deduplicate the repeated authorization lookups that every page was running twice per request, and add loading skeletons so the browser paints structure instead of white while data arrives. The lesson I keep: put the function next to the database when a page makes several sequential queries, and read the evidence before theorizing about the cause."
      }
    ]
  },
  {
    id: 16,
    slug: "call-center-platform",
    title: "Real-Time Call Center Platform for BPO Operations",
    featured: true,
    shortDescription: "A multi-tenant contact-center platform with browser-based calling on a self-hosted Asterisk engine — click-to-dial, inbound routing with a hold-music waiting room, transfers, three-way conferencing, hold, call recording with audited playback, agent presence and break tracking, live floor boards, call export, and an agent productivity report. Now deployed on its own server and carrying real calls over a carrier line. Built solo for a BPO, backed by 831 automated tests.",
    image: "/assets/images/projects/call-center/hero.png",
    images: {
      hero: "/assets/images/projects/call-center/hero.png",
      // TODO: uncomment each line as the screenshot lands in public/assets/images/projects/call-center/
      // gallery: [
      //   "/assets/images/projects/call-center/agent-console.png",
      //   "/assets/images/projects/call-center/live-board.png",
      //   "/assets/images/projects/call-center/dashboard.png",
      //   "/assets/images/projects/call-center/call-review.png"
      // ]
    },
    // video: {
    //   loomUrl: "https://www.loom.com/embed/VIDEO_ID_HERE", // TODO: record — outbound call, inbound call, three-way conference, Asterisk container underneath
    //   duration: "1:30"
    // },
    tags: ["Laravel", "FilamentPHP", "Livewire", "PostgreSQL", "Asterisk 20", "ARI", "WebRTC", "SIP Trunking", "Docker"],
    liveDemoUrl: "https://hcmis.coderootz.in",
    sourceCodeUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2026,
    status: "live",
    longDescription: `A contact-center platform built for a BPO that runs calling operations for multiple client businesses at once. Each client is a tenant with its own campaigns, leads, dispositions, scripts, do-not-call list, phone number, and call history — isolated from every other client at the database level. Agents work entirely in the browser: a built-in WebRTC softphone registers against a self-hosted Asterisk switch, so an agent clicks a lead to dial, takes inbound calls routed to the first free agent, parks a caller on hold with music, hands a caller to a colleague, or pulls a third person into a live three-way conference — with the whole call captured as one stereo recording no matter how many hands it passes through. A caller who arrives when every agent is busy waits in a music-filled queue instead of being hung up on, and their record opens on the agent's screen as the phone starts ringing.

Around the calls sits the operations layer: agent presence with break types and limits, a live floor board carrying the longest current wait, a per-agent day drill-down for coaching, a twenty-column agent productivity report with occupancy and average handle time, reporting dashboards, a full call export that survives a spreadsheet's habit of mangling phone numbers, queued CSV/XLSX lead import, and an append-only audit log that records every playback of a call recording. Every screen cuts its day and prints its times on the client's own clock, while the database keeps one universal time underneath.

The voice engine is not a rented calling API: it is Asterisk 20, self-hosted and driven by the Laravel application over ARI (Asterisk's control interface) through a telephony layer I designed and built. The platform now runs on its own server at hcmis.coderootz.in with a carrier line attached — outbound calls reach real mobiles, inbound calls arrive from the carrier, route to a free agent, connect, and record. Before that line existed I built the entire phone network in Docker on a laptop and proved every call flow against it, so the carrier's arrival was configuration rather than construction. The codebase is held to 831 automated tests with over 3,100 assertions, and nothing counts as done until it has been seen and heard working on the real system.`,
    problemStatement: `BPO call centers typically rent their dialer — hosted per-seat suites where the lead data, the recordings, and the monthly bill all sit with a vendor. This BPO wanted its own platform: multiple client businesses' calling operations on one system, hard guarantees that one client's leads and recordings can never appear in another's view, agents working in the browser with no desk phones, team leaders seeing the floor in real time, and the compliance surface — do-not-call lists, audit trails, recording review — built in rather than bolted on.`,
    solution: `I architected and built the platform solo: a multi-tenant Laravel application with row-level isolation enforced twice — application context that refuses to run tenant queries without a client set, and PostgreSQL row-level security policies forced at the database, so even raw queries return nothing without tenant context. On top of that foundation sits the telephony layer: a provider interface wrapping Asterisk 20 over ARI, a long-running listener process that reacts to call events, and a WebRTC softphone living in the agent's browser screen. Call flows were built and lab-verified one at a time: outbound click-to-call that rings the logged-in agent's own browser, inbound calls routed to the first free agent with reserve-at-ring so two calls never grab the same person, transfers, and three-way conferencing — with one merged stereo recording per call surviving every handoff. The operations surfaces followed the same pattern: an agent console with presence and break tracking, a live floor board, per-agent drill-downs, a productivity report, and a call export — each verified live before moving on. The platform has since left the laptop: it runs on its own server behind a real carrier line, and every module is re-proven there, because a container quietly does setup work a packaged install does not.`,
    techStack: [
      {
        name: "Laravel",
        rationale: "The application core: tenancy, RBAC, queued lead imports, audit logging, and the long-running listener process that drives the phone switch."
      },
      {
        name: "FilamentPHP + Livewire",
        rationale: "Admin panel and the real-time operational screens — agent console, live floor board, dashboards — without building and maintaining a separate frontend app."
      },
      {
        name: "PostgreSQL",
        rationale: "Row-level security forced on every tenant-owned table with default-deny policies, so client isolation is enforced by the database itself, not just the application."
      },
      {
        name: "Asterisk 20 + ARI",
        rationale: "Self-hosted open-source phone switch instead of a per-minute calling API — the app controls dialing, bridging, recording, and transfers over ARI, keeping call data and cost in-house."
      },
      {
        name: "WebRTC (JsSIP)",
        rationale: "Agents call from the browser tab itself — no desk phones, no installed softphones, nothing to provision on the agent's machine beyond a login."
      },
      {
        name: "Docker",
        rationale: "Asterisk runs containerized, and the same containerization powered a full local phone lab that let the voice path be built and proven before the carrier line existed."
      },
      {
        name: "Pest",
        rationale: "831 automated tests and over 3,100 assertions across tenancy isolation, call flows, presence arithmetic, timezone boundaries, and access gates — the safety net that lets a solo developer move fast on telephony."
      },
      {
        name: "SIP trunking",
        rationale: "The seam between the platform and the outside phone network. The switch talks to a carrier trunk rather than to any one vendor's API, so the carrier is a configuration choice the platform can change without touching call logic."
      }
    ],
    challenges: [
      {
        challenge: "Driving a Phone Switch from a Web App",
        solution: "There is no SDK that turns Laravel into a call-center engine. I designed a telephony layer around Asterisk's ARI control interface: a provider interface the app talks to ('dial this lead', 'record', 'add to bridge') and a long-running listener that reacts to Asterisk's events and tracks every active call's state. The browser registers as a softphone over WebRTC, so the agent's tab is the phone."
      },
      {
        challenge: "One Recording Per Call, However Many Hands It Passes Through",
        solution: "A call that starts with one agent, gets transferred to another, or grows into a three-way conference must still end as a single recording. Recording attaches to the call, not the agent, and rides through every bridge change — a race between call teardown and the recording merge was caught in testing and fixed. Playback is as controlled as capture: every listen writes one audit row, and agents can play only their own calls."
      },
      {
        challenge: "Client Isolation a Client Could Audit",
        solution: "Each BPO client's data is walled off twice. The application refuses to touch tenant-owned tables without an explicit client context — it throws an exception rather than quietly returning everything. Beneath that, PostgreSQL row-level security is forced on every tenant table with default-deny policies, so even a raw database query outside the application returns zero rows. Cross-client access exists only through one named, audited path."
      },
      {
        challenge: "Building Voice Months Before the Phone Line",
        solution: "A real carrier line (SIP trunk) takes 4–8 weeks to provision. Instead of waiting, I built a complete phone network on a laptop: Asterisk 20 in Docker, softphones and browser tabs as the callers, the Laravel app driving it over ARI. Every call flow — outbound, inbound routing, transfer, conference, recording — was proven end-to-end with real audio before the line existed. The bet paid off when the line landed: the first real outbound call rang a mobile, recorded both halves, and played back in the browser on the day the trunk was configured, and inbound followed the next day."
      },
      {
        challenge: "Agent State That Tells the Truth",
        solution: "Floor management lives or dies on whether 'available' actually means available. Presence runs on a heartbeat from the agent console; dead sessions are closed lazily at read time rather than by a background job, so the live board and the reports can never disagree with each other. Break handling was researched against Amazon Connect and Genesys and matched: a returning agent resumes a still-fresh break in place, while a stale session stays dead."
      },
      {
        challenge: "The Lab Was Not the Server",
        solution: "Every call flow worked in the Docker lab and then broke on the real machine — three times, for three unrelated reasons. Ubuntu's Asterisk package loads a phone module deprecated years ago that claims the same WebSocket name as the current one, so agent logins were rejected as 'wrong password' while the password was correct. The package creates seven spool folders and not the one recording writes into, so calls connected and dropped the instant recording started. And the packaged build is an older release than the container's, missing a channel field the inbound path read — which surfaced as 'no free agent available' rather than as a missing field. The rule I keep: a container quietly does setup work a packaged install does not, so 'it worked in the lab' is evidence about the lab and nothing else."
      },
      {
        challenge: "One Day, Two Different Answers",
        solution: "The database stores every moment in universal time, which is correct, and the screens printed them that way, which was not. On an Indian floor that moves the start of the day by five and a half hours, so one chosen date named one set of calls in the exported file and a different set on screen. The fix put the client's own timezone behind a single method everything reads, and converted the day's boundaries once inside the shared filter rather than at each call site, where one caller can forget. Tracing found three screens the obvious fix never reached because they each built their own 'today'. It also found the mirror-image error: applying the panel-wide setting to the business-hours pickers shifted 'opens at 09:30' to 04:00, because an opening time is a wall-clock time already written on the client's clock, not a moment in time. The existing tenant tests caught that one before it shipped."
      }
    ]
  },
  {
    id: 1,
    slug: "linkabode",
    title: "LinkAbode",
    featured: true,
    shortDescription: "A multi-tenant web application for residential housing complexes that digitizes amenity reservations, service request tracking, resident registration, and communication workflows with a device-restricted kiosk interface.",
    image: "/assets/images/projects/fms/hero.jpg",
    images: {
      hero: "/assets/images/projects/fms/hero.jpg",
      gallery: [
        "/assets/images/projects/fms/admin-panel.png",
        "/assets/images/projects/fms/kiosk-interface.png",
        "/assets/images/projects/fms/reservations.png",
        "/assets/images/projects/fms/bookings.png"
      ]
    },
    tags: ["Laravel 11", "FilamentPHP", "Livewire", "PostgreSQL", "Redis", "Stripe", "Twilio"],
    liveDemoUrl: "https://fms.coderootz.com",
    sourceCodeUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2024,
    status: "live",
    longDescription: `LinkAbode is a web-based, multi-tenant application designed for residential housing complexes and property management companies. It digitizes and automates common facility management tasks including amenity reservations, service request tracking, resident registration, and communication workflows. The system serves three primary user groups: residents/tenants (via kiosk interface), property managers/admins (via admin panel), and super admins (for multi-client oversight). Built as a "Majestic Monolith" - a single, unified Laravel application that handles all three layers within one codebase.`,
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
      },
      {
        name: "Twilio",
        rationale: "Integrated for OTP-based verification and notifications."
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
    slug: "hp-bar-council",
    title: "HP Bar Council Digital Enrollment System",
    featured: true,
    shortDescription: "Digitized statutory advocate enrollment for a state Bar Council — multi-stage committee approvals, document verification, and online fee payment. I owned it end to end: built it solo, presented on-site to the council, wrote the user documentation, and recorded onboarding videos for non-technical staff and applicants. In production since 2024.",
    image: "/assets/images/projects/hp-bar-council/hero.jpg",
    images: {
      hero: "/assets/images/projects/hp-bar-council/hero.jpg",
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
    liveDemoUrl: "https://hbc.coderootz.com",
    sourceCodeUrl: null,
    category: "full-stack",
    role: "solo",
    year: 2024,
    status: "live",
    longDescription: `A digital enrollment system for the Himachal Pradesh Bar Council that replaced a paper-based statutory process — the route every advocate in the state takes to become licensed to practise. Applicants register, complete the official enrollment forms, upload their education and practice documents, and pay their fees online. Inside the council, applications move through a real institutional review chain — Superintendent, then Secretary, then committee members — with recorded decisions and written reasons for rejection. On approval the system issues a HIM number and moves the applicant through their actual legal statuses, from Student to Provisional Lawyer to Official Lawyer.

What made this engagement different from a normal build is how much of it was not code. This is a government body whose staff and applicants were not going to adopt a system because it was well engineered. I presented it on-site to the council, wrote the user documentation for non-technical readers, and recorded onboarding videos covering each step of the process. The engagement closed successfully and the system has been in production since 2024, in maintenance rather than rescue.`,
    problemStatement: `The existing manual, paper-based enrollment process at HP Bar Council resulted in lengthy processing times, lack of transparency for applicants, risk of document loss, heavy administrative burden, inconsistent communication, and manual fee reconciliation. Applicants had no way to track their applications, and the manual workflow was labor-intensive and error-prone.`,
    solution: `I built the platform solo: an application portal for advocates, an automated multi-stage approval workflow that routes each application through Superintendent, Secretary, and committee review with recorded decisions and written rejection reasons, automatic HIM number assignment, role transitions from Student to Provisional Lawyer to Official Lawyer, integrated Billdesk payment for enrollment fees, automated email at every status change, document storage on S3 with an in-browser previewer for reviewers, server-side PDF generation of official forms for the council's records, and an admin dashboard for tracking and search.

The data model deliberately mirrors the council's real paperwork. Rather than a generic document store, each statutory form and credential has its own model and table, matching the physical forms one-to-one. That made verification against the actual legal requirements straightforward, and it meant the council's staff recognised what they were looking at instead of having to learn a new abstraction.

I then owned the delivery: on-site presentations to the council, user documentation written for non-technical readers, and recorded onboarding videos for both applicants and council staff.`,
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
      },
      {
        name: "DomPDF",
        rationale: "Generated the council's official forms and certificates server-side from submitted data, so the digital process still produced the paper records a statutory body has to keep."
      }
    ],
    challenges: [
      {
        challenge: "Digitizing a Statutory Process Without Breaking It",
        solution: "Advocate enrollment is governed by legal requirements, so the system could not simply impose a cleaner process. I modelled each statutory form and credential as its own entity matching the council's physical paperwork one-to-one, rather than flattening everything into a generic document store. Verification against the legal requirements stayed direct, and reviewers recognised the forms on screen as the ones they already knew."
      },
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
      },
      {
        challenge: "Adoption by a Non-Technical Institution",
        solution: "A government office that will not use the system makes the code quality irrelevant, and this one was replacing a process its staff had run on paper for decades. I treated adoption as part of the engineering work: presented the system on-site to the council, wrote user documentation aimed at readers with no technical background, and recorded onboarding videos walking applicants and staff through each step. The engagement closed successfully and the system has been running since 2024, receiving maintenance rather than rescue work."
      }
    ]
  },
  {
    id: 3,
    slug: "holistart",
    title: "Holistart Workforce Onboarding Platform",
    featured: true,
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
    liveDemoUrl: "https://holistart.holisollogistics.com/",
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
    id: 5,
    slug: "leadcheck",
    title: "LeadCheck - Multi-Tenant Lead Management System",
    featured: true,
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
    liveDemoUrl: "https://leadscheck.coderootz.com/",
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
  },
  {
    id: 6,
    slug: "project-management-system",
    title: "Project/Employee Management System",
    featured: false,
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
    id: 7,
    slug: "git-commit-dating-app",
    title: "Git Commit - Dating App for Programmers",
    featured: false,
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
    id: 8,
    slug: "ecommerce-website",
    title: "Ecommerce Website",
    featured: false,
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
  }

];

// Archive projects (smaller projects for the archive section)
export const archiveProjects: Project[] = [
  {
    id: 15,
    slug: "ben10-omnitrix",
    title: "Ben 10 — Omnitrix Tribute",
    shortDescription: "An interactive tribute to the show I grew up on: a working Omnitrix interface that cycles through all ten alien forms, with narration, sound design, and a transmission-styled UI. Built for the fun of it over a few evenings.",
    image: "/assets/images/profileImg.png", // placeholder
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    sourceCodeUrl: null,
    liveDemoUrl: "https://ben10-ashen.vercel.app/",
    category: "frontend",
    role: "solo",
    year: 2026,
    status: "live",
    longDescription: "An interactive Ben 10 tribute built around the Omnitrix. Visitors cycle through ten alien forms, each with its powers and debut details, inside an interface styled as an incoming transmission — with toggleable narration and sound.",
    problemStatement: "A deliberate break from client work: something with no requirements document, no stakeholders, and no deadline, purely to play with motion, sound, and interface feel.",
    solution: "Built a rotating carousel driven by component state, layered in toggleable audio narration and effects, and pushed on atmosphere — timed reveals, transmission framing, and optimised WebP artwork to keep it fast.",
    techStack: [
      { name: "Next.js", rationale: "Familiar framework with image optimisation built in, so the artwork stays sharp without hurting load time" },
      { name: "TypeScript", rationale: "Kept the alien data and carousel state honest as the number of forms grew" },
      { name: "TailwindCSS", rationale: "Fast iteration on an interface that was designed by feel rather than to a spec" }
    ],
    challenges: [
      { challenge: "Atmosphere without weight", solution: "Optimised every alien image to WebP and lazy-loaded the gallery so the mood pieces did not cost load time" },
      { challenge: "Sound that does not annoy", solution: "Made narration and effects independently toggleable, defaulting to off so nobody gets ambushed by audio" }
    ]
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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