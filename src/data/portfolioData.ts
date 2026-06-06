import { Project, Skill, TimelineItem, Testimonial } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-retail-sales',
    title: 'Retail Sales Performance Analysis',
    subtitle: 'Retail Sales Performance Analysis using SQL, Python, and Power BI',
    description: 'The project demonstrates an end-to-end Data Analyst workflow, starting from raw data cleaning to dashboard visualization and business insight generation.',
    longDescription: 'This project focuses on analyzing retail sales performance using SQL, Python, and Power BI. The objective of this project is to identify sales trends, customer purchasing behavior, payment preferences, and the impact of discounts on overall business performance.',
    category: 'Data Analysis Pipeline',
    image: '/dashboardPort1.png',
    demoUrl: 'https://github.com/SammAlvncnt/retail-sales-performance-analysis',
    tags: ['SQL', 'Python', 'Power BI'],
  },

    {
    id: 'project-cafe-sales',
    title: 'Cafe Sales Data Analysis',
    subtitle: 'Cafe Sales Data Cleaning & Customer Segmentation Analysis',
    description: 'contains an end-to-end Data Understanding, Quality Assessment, and Data Cleaning project for a café sales dataset. ',
    longDescription: ' contains an end-to-end Data Understanding, Quality Assessment, and Data Cleaning project for a café sales dataset. The dataset initially contained significant noise, inconsistent types, and missing values that hindered accurate analysis. After a comprehensive data wrangling process, the clean data was segmented to provide actionable business recommendations.',
    category: 'Data Analysis',
    image: '/dashboardPort2.png',
    demoUrl: 'https://github.com/SammAlvncnt/Cafe-salees-cleaning-and-wrangling',
    tags: ['Python', 'Power BI'],
  },

    {
    id: 'project-sgd-idr',
    title: 'SGD/IDR Exchange Rate Analytics Dashboard',
    subtitle: 'Singapore Dolar (SGD) to Indonesian Rupiah (IDR) Performance Insight',
    description: 'An interactive Tableau dashboard designed to analyze sales performance, monthly profit trends, and product quantity distributions for an e-commerce dataset.',
    longDescription: 'An end-to-end data engineering and business intelligence project that programmatically extracts and processes historical Singapore Dollar (SGD) to Indonesian Rupiah (IDR) exchange rates using Python, streams the pipeline into Google Sheets, and visualizes interactive financial insights in Power BI.',
    category: 'Data Analysis',
    image: '/dashboardPort3.png',
    demoUrl: 'https://github.com/SammAlvncnt/SGD-IDR-Exchange-Rate-Analytics-Dashboard',
    tags: ['Y-Finance API', 'Python', 'Power BI', 'Google Sheets Cloud API'],
  },

    {
    id: 'project-ecommerce',
    title: 'E-Commerce Sales Dashboard',
    subtitle: 'E-Commerce Sales Dashboard visualization using Tableau',
    description: 'An interactive Tableau dashboard designed to analyze sales performance, monthly profit trends, and product quantity distributions for an e-commerce dataset.',
    longDescription: 'An interactive Tableau dashboard designed to analyze sales performance, monthly profit trends, and product quantity distributions for an e-commerce dataset.The updated dashboard in Dashboard.png transitions from the default Tableau layout into a cohesive, modern, emerald-themed design that boosts visual hierarchy and readability. By applying the Data-Driven Decision Making (3D+M) process to the metrics shown in Dashboard.png, we can translate our visual data into immediate, actionable business strategies',
    category: 'Dashboard Visualization',
    image: '/dashboardPort4.png',
    demoUrl: 'https://github.com/SammAlvncnt/E-Commerce_Sales_Data_Dashboard',
    tags: ['Tableau'],
  },
];

export const skillsData: Skill[] = [
  { name: 'SSMS', category: 'tools', level: 9, color: 'bg-stone-500 text-stone-100' },
  { name: 'MySQL Workbench', category: 'tools', level: 9, color: 'bg-stone-500 text-stone-100' },
  { name: 'Tableau', category: 'tools', level: 9, color: 'bg-stone-500 text-stone-100' },
  { name: 'PowerBI', category: 'tools', level: 9, color: 'bg-stone-500 text-stone-100' },
  { name: 'Python', category: 'backend', level: 8, color: 'bg-stone-800 text-stone-100' },
  { name: 'PostgreSQL', category: 'backend', level: 7, color: 'bg-stone-700 text-stone-100' },
  { name: 'SQL', category: 'backend', level: 9, color: 'bg-stone-600 text-stone-100' },
  { name: 'MySQL', category: 'design', level: 8, color: 'bg-neutral-800 text-neutral-100' },
  { name: 'Visualizations', category: 'design', level: 9, color: 'bg-neutral-700 text-neutral-100' },
  { name: 'Business Insights DDDM', category: 'design', level: 9, color: 'bg-neutral-600 text-neutral-100' },
  { name: 'Prompting', category: 'tools', level: 9, color: 'bg-zinc-500 text-white' },
  { name: 'Excel', category: 'tools', level: 8, color: 'bg-stone-500 text-stone-100' }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'exp-1',
    year: 'Agustus 2025 - Agustus 2025',
    role: 'Freshmen Leader ',
    company: 'FirstYearProgram(FYP) Binus University',
    description: 'Guiding new students at the beginning of their studies, providing knowledge about the campus, introducing the culture and helping new students adapt easily.',
    achievements: [
      'Leadership',
      'Mentoring',
      'Public Speaking'
    ]
  }
];

export const certificationsData: TimelineItem[] = [
  {
    id: 'cert-1',
    year: '2026',
    role: 'Mahir karir bareng Binus Career & SEFAS Group',
    company: 'Binus Career | Binus University',
    description: 'Don\'t just be smart, be heard. How communication skills shape your career, confidence, and opportunities.',
    achievements: [
      'Participant',
    ]
  },
  {
    id: 'cert-2',
    year: '2026',
    role: 'Introduction to Financial Literacy | DBS Foundation 2.0',
    company: 'Dicoding Indonesia',
    description: 'Kelas ditujukan bagi peserta Coding Camp powered by DBS Foundation 2026 yang ingin belajar mengenai Literasi Finansial. Di akhir kelas, peserta mampu membangun pemahaman yang kuat tentang prinsip-prinsip dasar literasi finansial, menerapkannya dalam pengambilan keputusan keuangan sehari-hari, serta merancang strategi finansial jangka panjang.',
    achievements: [
      'Decoding Your Financial Future - A Guide to Navigating Your Finances',
      'Investing for Your Future',
      'Loan Management 101 - Smart Borrowing'
    ]
  },

    {
    id: 'cert-3',
    year: '2026',
    role: 'Belajar Dasar Data Science',
    company: 'Dicoding Indonesia',
    description: 'Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang data scientist dengan mempelajari konsep dasar data science. Setelah mengikuti kelas, siswa diharapkan mampu mengenal, memahami, dan menelaah dasar-dasar data science dengan baik.',
    achievements: [
      'The Power of Data',
      'Fundamental Data Science',
      'Menjelajahi Analisis Data',
      'Teknologi dan Tools Pendukung Data Science',
      'Machine Learning untuk Data Science'
    ]
  },

   {
    id: 'cert-4',
    year: '2026',
    role: 'Structured Query Language (SQL) | DBS Foundation 2.0',
    company: 'Dicoding Indonesia',
    description: 'Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang data analyst atau data scientist dengan mempelajari bahasa Structured Query Language (SQL). Di akhir kelas, siswa dapat menguasai berbagai query dasar yang sering digunakan dalam mengelola data menggunakan bahasa structured query language (SQL).',
    achievements: [
      'Pengenalan Data dan Basis Data',
      'Database Management Systems (DBMS)',
      'Pengenalan Structured Query Language',
      'Basic Query',
    ]
  },
];
