export const skillCards = [
  {
    icon: "</>",
    role: "Role 01",
    title: "Software Engineer",
    description:
      "Designing and building scalable systems with clean architecture, thoughtful APIs, and performance-driven code across the full stack.",
    tags: [
      "TypeScript",
      "Python",
      "Go",
      "React",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "System Design",
    ],
    metrics: [
      { value: "8+", label: "Years" },
      { value: "40+", label: "Projects" },
      { value: "12M", label: "Users Served" },
    ],
  },
  {
    icon: ">_",
    role: "Role 02",
    title: "DevOps Engineer",
    description:
      "Architecting reliable deployment pipelines, infrastructure as code, and observability stacks that keep systems running at scale.",
    tags: [
      "Kubernetes",
      "Terraform",
      "AWS",
      "Docker",
      "CI/CD",
      "Prometheus",
      "GitOps",
      "Linux",
    ],
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "200+", label: "Deploys/wk" },
      { value: "60%", label: "Cost Saved" },
    ],
  },
  {
    icon: "PM",
    role: "Role 03",
    title: "Product Manager",
    description:
      "Translating user needs into product strategy, prioritizing ruthlessly, and aligning cross-functional teams around measurable outcomes.",
    tags: [
      "Strategy",
      "Roadmapping",
      "User Research",
      "Agile",
      "OKRs",
      "Analytics",
      "Stakeholders",
      "A/B Testing",
    ],
    metrics: [
      { value: "15+", label: "Products" },
      { value: "3", label: "0→1 Launches" },
      { value: "$4M", label: "Revenue Led" },
    ],
  },
];

export const timelineItems = [
  {
    year: "5/2013 — 5/2016",
    company: "College",
    role: "Student in Software Engineering",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "Early Career",
    description: [
      "Early stage of career, as a student, I learnt to build SME software systems",
      "Worked on SME products like warehouse management and gym course management, they share common shapes: monolithic, sometime distributed using RMI or RPC, multi-tiered, MVC embraced. They also covered business cases in unit tests",
      "In the collegeg, meanwhile I started to learn about Data Structure and Algorithms, OOP, Design Patterns, and Software Engineering principles, also building the system desiging skills, including database design and system architecture.",
      "Kind of projects: Desktop (Winform), Web (ASP.NET), EF, SQL Server"
    ],
    tags: [".NET", "Winform", "SQL Server", "EF"],
  },
  {
    year: "5/2016 — 8/2017",
    company: "Viegrid JSC",
    role: "Software Developer",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "Software Development & Early Career",
    description: [
      "My first company, where I joined as intern student and become a permanent employee.",
      "Main project I worked in is a big firewall project. In there I mostly eveloped sub-modules of a monolithic firewall product.",
      "Worked on packet filtering and logging capabilities modules - basically wrapper of Linux commands.",
      "I also worked as high quality QA engineer, spot out several bugs in the product. After a few years, I looked back and  realized that the mindset of software quality has grown in mine since this time",
      "Skills: Java Core, Linux, Shell Scripting, Quality Control"
    ],
    tags: ["Java", "Linux", "Shell Scripting"],
  },
  {
    year: "9/2017 — 12/2023",
    company: "mgm technology partners Vietnam",
    role: "Software Engineer & DevOps Practitioner",
    badges: [{ label: "DevOps", variant: "devops" }],
    title: "Infrastructure at Scale",
    description: [
      "Where I joined as software engineer who mainly worked in big enterprise projects. Those big enterprise projects are usually monolithic, multi-tiered, and multi-module. I learned to work with big codebase, and how to maintain it. The codebase is usually built with Java, Spring(Boot), underneath is Oracle database, and deployed in Kubernetes clusters. I also learned to work with big teams, and how to communicate effectively with them. Those big enterprise projects share the common characteristics: deep inheritance, complex business logic, performance should be optimized to the furthers, but the ACID policies must always be guaranteed, performance is not the first priority, but the correctness of the business logic is the first priority.",
      "Beside, I also worked in some smaller projects, which require realtime behavior, implemented by either Java WebFlux, WebSocket, SSE, polling... in which I realized the importance of reactive programming, the pros and cons of each approach, and how to choose the right one for the right problem.",
      "Apart from software engineering, I also worked as DevOps practitioner, where I learned to build Jenkins CI/CD pipelines, and deploy the applications to Kubernetes clusters. I also learned to monitor the applications, and troubleshoot the issues. The engineering team should be responsible for the whole lifecycle of the application, from development to production, and I learned to do that. Of course the important data-reated decision in PROD are performed by dedicated DBA team.",
      "Established SLO-based observability with Prometheus, Grafana, and OpenTelemetry.",
    ],
    tags: ["Java", "Spring Boot", "Jenkins", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    year: "1/2024 — 4/2025",
    company: "Lattice Growth Labs",
    role: "Full-Stack Engineer",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "Product Engineering & Growth",
    description: [
      "Built customer-facing features across React frontends and Node.js APIs.",
      "Led A/B testing initiatives that improved conversion by 23%.",
      "Designed a GraphQL schema serving 50+ client queries with sub-100ms P99 latency.",
    ],
    tags: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "A/B Testing"],
  },
  {
    year: "2019 — 2021",
    company: "Forge Developer Tools",
    role: "Product Manager",
    badges: [{ label: "PM", variant: "pm" }],
    title: "From Building to Shaping",
    description: [
      "Transitioned into product management for the developer tools team.",
      "Conducted user research across 80+ customers.",
      "Defined and shipped a developer SDK that became the company's third-largest acquisition channel.",
    ],
    tags: ["User Research", "OKRs", "Analytics", "Agile", "Stakeholder Mgmt", "SDK Design"],
  },
  {
    year: "2017 — 2019",
    company: "Riverstack Systems",
    role: "Junior Software Engineer",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "Foundations & First Systems",
    description: [
      "Started as a backend engineer building REST APIs and data pipelines.",
      "Learned production operations firsthand through on-call rotations, incident response, and late-night runbooks.",
    ],
    tags: ["Python", "Django", "REST APIs", "Docker", "Linux", "CI/CD"],
  },
  {
    year: "2015 — 2017",
    company: "Open Source Community",
    role: "CS Student & Open Source",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "The Spark",
    description: [
      "Studied computer science with a focus on distributed systems and human-computer interaction.",
      "Contributed to open-source CLI tools and built side projects that taught more than any course could.",
    ],
    tags: ["Algorithms", "Distributed Systems", "Open Source", "Git", "Java"],
  },
];
