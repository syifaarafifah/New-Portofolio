export interface ProjectItem {
  id: number;
  title: string;
  period: string;
  role: string;
  description: string[];
  technologies: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "QR Code Signature & Time Management Systems",
    period: "Aug 2023 – Jul 2024",
    role: "Project Leader",
    description: [
      "Led two semester-based projects on document verification and team scheduling using Laravel, JavaScript, and MySQL.",
      "Managed development flow, system integration, and internal testing."
    ],
    technologies: ["Laravel", "JavaScript", "MySQL", "Project Management"]
  },
  {
    id: 2,
    title: "E-Voting & IoT Interfaces",
    period: "Aug 2024 – Jul 2025",
    role: "Frontend Developer",
    description: [
      "Built UIs using Laravel Blade (E-Voting Admin Panel) and Next.js (IoT Display).",
      "Focused on responsive design, usability, and real-time data presentation.",
      "Collaborated with backend and hardware teams for seamless integration."
    ],
    technologies: ["Laravel Blade", "Next.js", "Responsive Design", "IoT"]
  },
  {
    id: 3,
    title: "Kaomoji Emoji App & ResiFinlyn",
    period: "Mar 2025",
    role: "Mobile Developer",
    description: [
      "Built Kaomoji Emoji App (React Native) for browsing and copying Japanese-style emojis with a clean UI and copy-to-clipboard feature.",
      "Developed ResiFinlyn (React Native) to automate receipt printing by integrating Jubelio API for SKU scanning, order retrieval, PDF generation, and instant printing."
    ],
    technologies: ["React Native", "JavaScript", "API Integration", "PDF Generation"]
  },
  {
    id: 4,
    title: "QR Code Generator",
    period: "Apr 2025 – Present",
    role: "Web Developer",
    description: [
      "Developed a Laravel-based QR code generator with dynamic routing and intuitive UI for internal company use.",
      "Handled fullstack development to support secure and efficient document processing."
    ],
    technologies: ["Laravel", "QR Code", "Fullstack", "UI/UX"]
  },
  {
    id: 5,
    title: "Infaq App",
    period: "Mar 2025",
    role: "UI/UX Designer",
    description: [
      "Designed mobile UI using Figma, including user flows, wireframes, prototypes, and developer-ready assets."
    ],
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"]
  },
  {
    id: 6,
    title: "Internal Tools (AppSheet)",
    period: "Apr 2025 – Present",
    role: "App Creator",
    description: [
      "Built multiple no-code apps with AppSheet to streamline data entry, tracking, and operations across departments."
    ],
    technologies: ["AppSheet", "No-Code", "Automation", "Data Management"]
  }
];