export interface ProjectItem {
  id: number;
  title: string;
  period: string;
  role: string;
  description: string[];
  technologies: string[];
  techType: 'laravel' | 'nextjs' | 'react-native' | 'figma' | 'appsheet';
  githubUrl?: string;
  liveUrl?: string;
  images: {
    mobile?: string[];
    browser?: string[];
  };
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
    technologies: ["Laravel", "JavaScript", "MySQL", "Project Management"],
    techType: "laravel",
    images: {
      mobile: ["/images/projects/laravel/laravel-mobile1.jpg"],
      browser: ["/images/projects/laravel/laravel-browser1.jpg"]
    }
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
    technologies: ["Laravel Blade", "Next.js", "Responsive Design", "IoT"],
    techType: "nextjs",
    images: {
      mobile: ["/images/projects/nextjs/nextjs-mobile1.jpg"],
      browser: ["/images/projects/nextjs/nextjs-browser1.jpg"]
    }
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
    technologies: ["React Native", "JavaScript", "API Integration", "PDF Generation"],
    techType: "react-native",
    images: {
      mobile: [
        "/images/projects/react-native/react-native-mobile1.jpg",
        "/images/projects/react-native/react-native-mobile2.jpg"
      ],
      browser: []
    }
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
    technologies: ["Laravel", "QR Code", "Fullstack", "UI/UX"],
    techType: "laravel",
    images: {
      browser: ["/images/projects/laravel/larv1.jpg",
        "/images/projects/laravel/larv2.jpg",
        "/images/projects/laravel/larv3.jpg",
        "/images/projects/laravel/larv4.jpg",
        "/images/projects/laravel/larv5.jpg",
        "/images/projects/laravel/larv6.jpg",
        "/images/projects/laravel/lar1.jpg",
        "/images/projects/laravel/vote1.jpg",
        "/images/projects/laravel/vote2.jpg",
        "/images/projects/laravel/vote3.jpg",
        "/images/projects/laravel/vote4.jpg",
      ],
    }
  },
  {
    id: 5,
    title: "Infaq App",
    period: "Mar 2025",
    role: "UI/UX Designer",
    description: [
      "Designed mobile UI using Figma, including user flows, wireframes, prototypes, and developer-ready assets."
    ],
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    techType: "figma",
    images: {
      mobile: [
        "/images/projects/figma/figmam1.jpg",
        "/images/projects/figma/figmam2.jpg",
        "/images/projects/figma/figmam3.jpg",
        "/images/projects/figma/figmam4.jpg",
      ],
      browser: ["/images/projects/figma/figma-browser1.jpg"]
    }
  },
  {
    id: 6,
    title: "Internal Tools (AppSheet)",
    period: "Apr 2025 – Present",
    role: "App Creator",
    description: [
      "Built multiple no-code apps with AppSheet to streamline data entry, tracking, and operations across departments."
    ],
    technologies: ["AppSheet", "No-Code", "Automation", "Data Management"],
    techType: "appsheet",
    images: {
      mobile: [
        "/images/projects/appsheet/appsheet1.jpg",
        "/images/projects/appsheet/appsheet2.jpg",
        "/images/projects/appsheet/appsheet3.jpg",
        "/images/projects/appsheet/appsheet4.jpg",
        "/images/projects/appsheet/appsheet5.jpg"
      ],
      browser: [
        "/images/projects/appsheet/apsbrow1.jpg",
        "/images/projects/appsheet/apsbrow2.jpg",
        "/images/projects/appsheet/apsbrow3.jpg",
        "/images/projects/appsheet/apsbrow4.jpg",
        "/images/projects/appsheet/apsbrow5.jpg"
      ]
    }
  }
];