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
    year: "2025 — Present",
    role: "Staff Engineer & Tech Lead",
    badges: [
      { label: "SWE", variant: "swe" },
      { label: "PM", variant: "pm" },
    ],
    title: "Platform Architecture & Product Strategy",
    description:
      "Leading platform engineering for a multi-tenant SaaS product. Own the technical roadmap while coordinating with product and design on quarterly OKRs. Migrated monolith to event-driven microservices serving 12M+ users.",
    tags: ["Go", "Kafka", "K8s", "System Design", "Roadmapping", "Team Leadership"],
  },
  {
    year: "2023 — 2025",
    role: "Senior DevOps Engineer",
    badges: [{ label: "DevOps", variant: "devops" }],
    title: "Infrastructure at Scale",
    description:
      "Built and operated Kubernetes clusters across 3 AWS regions. Implemented GitOps workflows with ArgoCD, reducing deploy times by 70%. Established SLO-based observability with Prometheus, Grafana, and OpenTelemetry.",
    tags: ["Terraform", "AWS", "ArgoCD", "Prometheus", "OpenTelemetry", "Python"],
  },
  {
    year: "2021 — 2023",
    role: "Full-Stack Engineer",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "Product Engineering & Growth",
    description:
      "Built customer-facing features across React frontends and Node.js APIs. Led A/B testing initiatives that improved conversion by 23%. Designed GraphQL schema serving 50+ client queries with sub-100ms P99 latency.",
    tags: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "A/B Testing"],
  },
  {
    year: "2019 — 2021",
    role: "Product Manager",
    badges: [{ label: "PM", variant: "pm" }],
    title: "From Building to Shaping",
    description:
      "Transitioned into product management for the developer tools team. Conducted user research across 80+ customers. Defined and shipped a developer SDK that became the company's third-largest acquisition channel.",
    tags: ["User Research", "OKRs", "Analytics", "Agile", "Stakeholder Mgmt", "SDK Design"],
  },
  {
    year: "2017 — 2019",
    role: "Junior Software Engineer",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "Foundations & First Systems",
    description:
      "Started as a backend engineer building REST APIs and data pipelines. Learned production operations firsthand — on-call rotations, incident response, and the art of writing runbooks at 2 AM.",
    tags: ["Python", "Django", "REST APIs", "Docker", "Linux", "CI/CD"],
  },
  {
    year: "2015 — 2017",
    role: "CS Student & Open Source",
    badges: [{ label: "SWE", variant: "swe" }],
    title: "The Spark",
    description:
      "Computer Science degree with a focus on distributed systems and human-computer interaction. Contributed to open-source CLI tools and built side projects that taught more than any course ever could.",
    tags: ["Algorithms", "Distributed Systems", "Open Source", "Git", "Java"],
  },
];
