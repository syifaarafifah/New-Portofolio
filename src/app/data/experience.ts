export interface ExperienceItem {
  id: number;
  period: string;
  title: string;
  company: string;
  link?: string; // tambahkan link opsional
  description: string;
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "April 2025 — Present",
    title: "Web Developer & AppSheet Developer",
    company: "Finlyn Fashion · Batam",
    link: "https://shopee.co.id/finlynfashion10",
    description: "Developed internal systems using Laravel & MySQL, including dashboards, automation tools, and a QR Code web application to convert order SKU data into QR codes and generate them into printable PDFs. Created no-code apps with AppSheet for production, QC, and management workflows. Managed operational and inventory data to ensure accuracy. Developed 'ResiFinlyn', a React Native mobile app that integrates with Jubelio API to fetch order details after SKU scanning, auto-generate PDF receipts, and print them instantly, streamlining the order fulfillment process.",
    technologies: ["Laravel", "MySQL", "AppSheet", "React Native", "JavaScript"],
  },
  {
    id: 2,
    period: "April 2025 — July 2025",
    title: "Intern – React Native Developer",
    company: "PT. Kawan Kerja - Remote",
    link: "https://www.linkedin.com/company/kawan-kerja/posts/?feedView=all",
    description: "Currently developing mobile applications using React Native. Collaborating with cross-functional teams to build user-friendly features. Enhancing app performance and user experience through testing and iteration. Gaining hands-on experience in mobile development and project workflow.",
    technologies: ["React Native", "JavaScript", "Git", "API Integration"],
  },
  {
    id: 3,
    period: "July 2023 – January 2025",
    title: "Administrative Staff",
    company: "SMK Negeri 8 Batam",
    link: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/7ed7bfae-3689-45d9-8fde-a23157fca30f",
    description: "Proficient in managing administrative data and documents using Microsoft Excel and Word. Supported day-to-day operational activities and school administration. Designed professional cover pages for educational documents using Canva. Collaborated with team members to achieve administrative and academic goals.",
    technologies: ["Microsoft Office", "Canva", "Data Management", "Document Processing"],
  },
];
