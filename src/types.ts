export interface Skill {
  name: string;
  category: 'Programming' | 'Visualization' | 'Databases' | 'Spreadsheet' | 'Cloud' | 'Libraries' | 'Soft Skills';
  level: number; // 0 to 100 for progress indicator
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  tools: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  businessProblem: string;
  dataSource: string;
  methodology: string[];
  cleaningProcess: string[];
  analysisDetails: string[];
  insights: string[];
  businessImpact: string;
  metricLabel: string;
  metricValue: string;
  metricImprovement: string;
  chartData: {
    label: string;
    before: number;
    after: number;
  }[];
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: 'experience' | 'education';
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string;
  slug: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
