import excelReportImage from "../assets/images/excel-report.jpeg";
import excelTimelineImage from "../assets/images/timeline.png";

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
    index: 1,
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
    index: 2,
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
    index: 3,
    year: "9/2017 — 12/2023",
    company: "mgm technology partners Vietnam",
    badges: [{ label: "Software Engineer", variant: "developer" }, { label: "DevOps", variant: "devops" }, { label: "Scrum Master", variant: "scrum" }],
    title: "Infrastructure at Scale",
    description: [
      "Where I joined as software engineer who mainly worked in big enterprise projects. Those big enterprise projects are usually monolithic, multi-tiered, and multi-module. I learned to work with big codebase, and how to maintain it. The codebase is usually built with Java, Spring(Boot), underneath is Oracle database, and deployed in Kubernetes clusters. I also learned to work with big teams, and how to communicate effectively with them. Those big enterprise projects share the common characteristics: deep inheritance, complex business logic, performance should be optimized to the furthers, but the ACID policies must always be guaranteed, performance is not the first priority, but the correctness of the business logic is the first priority.",
      "Beside, I also worked in some smaller projects, which require realtime behavior, implemented by either Java WebFlux, WebSocket, SSE, polling... in which I realized the importance of reactive programming, the pros and cons of each approach, and how to choose the right one for the right problem.",
      "Apart from software engineering, I also worked as DevOps practitioner, where I learned to build Jenkins CI/CD pipelines, and deploy the applications to Kubernetes clusters. I also learned to monitor the applications, and troubleshoot the issues. The engineering team should be responsible for the whole lifecycle of the application, from development to production, and I learned to do that. Of course the important data-reated decision in PROD are performed by dedicated DBA team.",
      "Established SLO-based observability with Prometheus, Grafana, and OpenTelemetry.",
      "Along the way, I also has two years with the role of Scrum Master (when still doing engineering), where I learned to facilitate the team, and help them to improve their processes. I also learned to work with Product Owners, and help them to prioritize the backlog, and make sure that the team is working on the right things.",
    ],
    tags: ["Java", "Spring Boot", "Jenkins", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    index: 4,
    year: "1/2024 — 4/2025",
    company: "Breaking year",
    role: "A few months of break, then NodeJS - Cloud Native developer",
    description: [
      "I took a few months of break to recharge and learn new technologies.",
      "During this time, I learned about NodeJS, Cloud Native, and Serverless architectures.",
      "I also worked on some personal projects, embracing the microservice architecture around NATS queue, deployed in Kubernetes clusters either local cluster or GCP. I learned more about TypeScript, NextJS",
    ],
    tags: ["Node.js", "Cloud Native", "TypeScript", "Microservices", "NATS", "Kubernetes", "NextJS"],
  },
  {
    index: 5,
    year: "3/2024 — 2/2025",
    company: "Glory Software Vietnam (GSV)",
    role: "Scrum Master",
    badges: [{ label: "Scrum master", variant: "SM" }, { label: "acting Project Managegr", variant: "PM" }],
    title: "Scrum Master & Acting Project Manager",
    description: [
      "I worked as a Scrum Master of one team in SAF, with the role of acting Project Manager, where I learned to facilitate the team, and help them to improve their processes. To summary the responsibility, I need to ensure the team need to deliver the right things, and deliver them in the right way, also satisfy the stakeholders. My project is a production running fintech app, my task is to ensure the team works effectively with other engineering teams, QA and designers",
      "To be able to ensure the team works effectively, I need to understand the business domain, and the technical domain. I need to understand the business requirements, and translate them into technical requirements. I also need to understand the technical constraints, and help the team to find the best solutions.",
      {
        type: "image",
        src: excelTimelineImage,
        alt: "Project tracking and reporting spreadsheet",
        caption: "Example of the reporting and planning work that supported delivery.",
      },
      "I also learnt to maintain the project roadmap with timelines, and ensure the team is on track to deliver the roadmap.",
      "I also joined in reviewing the system architecture, facilitate the other teams support on code reviewing, coding",
      {
        type: "image",
        src: excelTimelineImage,
        alt: "Project tracking and reporting spreadsheet",
        caption: "Example of the reporting and planning work that supported delivery.",
      },
      'Support the development team in technical decision making, like how to ensure data correctness, how to perform load test'
    ],
    tags: ["Excel", "Report", "Scrum", "Agile", "Stakeholder Management", "Project Management", "Roadmap"],
  },
  {
    index: 6,
    year: "3/2025 — Now",
    company: "Develop Riverbank app",
    role: "Builder",
    badges: [{ label: "PM", variant: "pm" }],
    title: "From Building to Shaping",
    description: [
      "Riverbank is a fintech system with two applications: one for end user that help to manage their finances, including performing transactions and viewing balance, one for bank admin to manage the backend operations. The system is build with tailored architecture to ensure the performance and scalability, and also ensure the security and compliance with banking regulations.",
    ],
    tags: ["High Performance", "Concurrency", "Kafka", "Go", "Java", "Redis"],
  }
];
