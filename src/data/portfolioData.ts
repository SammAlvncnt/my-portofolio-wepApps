import { Project, Skill, TimelineItem, Testimonial } from '../types';

export const projectsData: Project[] = [
  {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },

    {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },


    {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },


    {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },


    {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },


    {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
  },


    {
    id: 'gg',
    title: 'Lorem ipsum Dolor',
    subtitle: 'AI-Powered Interior Control Web Interface',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: 'Aether adalah antarmuka kontrol rumah pintar generasi berikutnya yang menggabungkan kontrol IoT dengan algoritma kenyamanan ramah cuaca. Proyek ini mengusung estetika industrial Skandinavia dengan palet warna netral, menyederhanakan puluhan kendali rumit menjadi satu papan kontrol gestur yang tenang dan intuitif.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://aether-space.example.com',
    tags: ['SQL', 'Python'],
    metrics: [
      { label: 'Respons Waktu IoT', value: '< 18ms' },
      { label: 'Kepuasan Pengguna', value: '4.9/5.0' },
      { label: 'Efisiensi Energi', value: '+34%' }
    ],
    client: 'Nordic Living Lab Inc.',
    role: 'Lead Full-stack Engineer & Motion Designer',
    duration: '4 Bulan (2025)',
    challenge: 'Mengintegrasikan ratusan sensor IoT real-time dari berbagai jenis perangkat tanpa membebani browser pengguna, sekaligus mempertahankan performa animasi render 120 FPS pada monitor refresh-rate tinggi.',
    solution: 'Mengembangkan sistem manajemen state berbasis event-driven WebSockets dengan throttle cerdas, digabungkan dengan optimasi rendering hardware-accelerated menggunakan Framer Motion.',
    highlights: [
      'Visualisasi pencahayaan 3D real-time menggunakan CSS Grid & SVG Masking.',
      'Sistem gestur drag-and-drop intuitif untuk mengelompokkan ruangan.',
      'Dashboard statistik konsumsi energi menggunakan visualisasi D3 modern.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ]
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
      'Memangkas waktu muat rata-rata aplikasi web utama sebesar 42%.',
      'Merancang sistem micro-frontends berbasis module federation dengan transisi halus.',
      'Mengembangkan framework animasi internal berbasis Canvas untuk visualisasi big data.'
    ]
  },

    {
    id: 'exp-1',
    year: 'Agustus 2025 - Agustus 2025',
    role: 'Freshmen Leader ',
    company: 'FirstYearProgram(FYP) Binus University',
    description: 'Guiding new students at the beginning of their studies, providing knowledge about the campus, introducing the culture and helping new students adapt easily.',
    achievements: [
      'Memangkas waktu muat rata-rata aplikasi web utama sebesar 42%.',
      'Merancang sistem micro-frontends berbasis module federation dengan transisi halus.',
      'Mengembangkan framework animasi internal berbasis Canvas untuk visualisasi big data.'
    ]
  },

    {
    id: 'exp-1',
    year: 'Agustus 2025 - Agustus 2025',
    role: 'Freshmen Leader ',
    company: 'FirstYearProgram(FYP) Binus University',
    description: 'Guiding new students at the beginning of their studies, providing knowledge about the campus, introducing the culture and helping new students adapt easily.',
    achievements: [
      'Memangkas waktu muat rata-rata aplikasi web utama sebesar 42%.',
      'Merancang sistem micro-frontends berbasis module federation dengan transisi halus.',
      'Mengembangkan framework animasi internal berbasis Canvas untuk visualisasi big data.'
    ]
  },

    {
    id: 'exp-1',
    year: 'Agustus 2025 - Agustus 2025',
    role: 'Freshmen Leader ',
    company: 'FirstYearProgram(FYP) Binus University',
    description: 'Guiding new students at the beginning of their studies, providing knowledge about the campus, introducing the culture and helping new students adapt easily.',
    achievements: [
      'Memangkas waktu muat rata-rata aplikasi web utama sebesar 42%.',
      'Merancang sistem micro-frontends berbasis module federation dengan transisi halus.',
      'Mengembangkan framework animasi internal berbasis Canvas untuk visualisasi big data.'
    ]
  },
];

