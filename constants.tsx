import { Code2, Layout, Database, Smartphone, Globe, Cpu, Server, Brain } from 'lucide-react';
import { NavItem, Service, Skill, Experience, Project, Certificate, Language } from './types';

// export const PROFILE_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
// export const PROFILE_IMAGE = "./assets/images/Alamahul_Bayan.jpg";
export const PROFILE_IMAGE = "./assets/images/Alamahul_Bayan_2.jpg";

export const NAV_ITEMS: Record<Language, NavItem[]> = {
  id: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
  ],
  en: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]
};

export const SERVICES: Record<Language, Service[]> = {
  id: [
    {
      icon: Layout,
      title: 'Full-Stack Web Development',
      description: 'Pengembangan aplikasi web end-to-end menggunakan MERN Stack (MongoDB, Express, React, Node.js) dan Laravel.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Perancangan dan pengelolaan basis data relasional (MySQL) dan NoSQL (MongoDB) yang efisien dan scalable.',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implementasi kecerdasan buatan dan Generative AI untuk meningkatkan fungsionalitas dan kecerdasan aplikasi web.',
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Penerapan prinsip clean code dan best practices dalam rekayasa perangkat lunak serta manajemen versi dengan Git.',
    }
  ],
  en: [
    {
      icon: Layout,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using MERN Stack (MongoDB, Express, React, Node.js) and Laravel.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient and scalable design and management of relational (MySQL) and NoSQL (MongoDB) databases.',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implementation of artificial intelligence and Generative AI to enhance web application functionality and intelligence.',
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Application of clean code principles and best practices in software engineering and version control with Git.',
    }
  ]
};

export const CURRENT_FOCUS: Record<Language, string[]> = {
  id: [
    "Full-Stack Development (MERN & Laravel)",
    "Artificial Intelligence & Generative AI",
    "Cloud Computing (AWS)",
    "Software Engineering Best Practices"
  ],
  en: [
    "Full-Stack Development (MERN & Laravel)",
    "Artificial Intelligence & Generative AI",
    "Cloud Computing (AWS)",
    "Software Engineering Best Practices"
  ]
};

// Skills are mostly technical terms, keeping same for both or duplicating
export const SKILLS: Record<Language, Skill[]> = {
  id: [
    { name: 'React.js / Next.js', level: 90, category: 'Frontend' },
    { name: 'Node.js / Express', level: 85, category: 'Backend' },
    { name: 'MongoDB / MySQL', level: 85, category: 'Backend' },
    { name: 'Laravel / PHP', level: 80, category: 'Backend' },
    { name: 'Java', level: 75, category: 'Backend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Git / GitHub', level: 85, category: 'Tools' },
    { name: 'AWS Cloud', level: 70, category: 'Tools' },
  ],
  en: [
    { name: 'React.js / Next.js', level: 90, category: 'Frontend' },
    { name: 'Node.js / Express', level: 85, category: 'Backend' },
    { name: 'MongoDB / MySQL', level: 85, category: 'Backend' },
    { name: 'Laravel / PHP', level: 80, category: 'Backend' },
    { name: 'Java', level: 75, category: 'Backend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Git / GitHub', level: 85, category: 'Tools' },
    { name: 'AWS Cloud', level: 70, category: 'Tools' },
  ]
};

export const EXPERIENCE_DATA: Record<Language, Experience[]> = {
  id: [
    {
      id: 1,
      role: 'Cohort Path Front End & Backend with AI',
      company: 'Dicoding Indonesia (Program ASAH)',
      period: 'Agu 2025 - Januari 2026',
      description: 'Mempelajari fundamental pengembangan web front-end dan back-end serta penerapan AI. Mengembangkan aplikasi web modern, berkolaborasi dalam tim, dan mengasah kemampuan problem solving sesuai standar industri.',
      type: 'work'
    },
    {
      id: 2,
      role: 'Tiketing Project Manager (Magang)',
      company: 'PT KAI Logistik',
      period: 'Agu 2023 - Okt 2023',
      description: 'Mempelajari administrasi kereta api, membuat jadwal dan harga tiket, serta meningkatkan pengelolaan operasional kereta api secara teratur.',
      type: 'work'
    },
    {
      id: 3,
      role: 'S1 Teknik Informatika',
      company: 'Institut Teknologi Garut',
      period: 'Sep 2023 - Agu 2027',
      description: 'Aktif dalam proyek pengembangan perangkat lunak dan diskusi komunitas teknologi. Fokus pada pemrograman dasar dan teknologi web.',
      type: 'education'
    },
    {
      id: 4,
      role: 'Rekayasa Perangkat Lunak',
      company: 'SMK Santana 2',
      period: '2020 - 2023',
      description: 'Lulus dengan nilai rata-rata 83. Fokus pada pemrograman dasar, teknologi web, dan pengembangan aplikasi siswa.',
      type: 'education'
    }
  ],
  en: [
    {
      id: 1,
      role: 'Cohort Path Front End & Backend with AI',
      company: 'Dicoding Indonesia (ASAH Program)',
      period: 'Aug 2025 - Januari 2026',
      description: 'Learning fundamentals of front-end and back-end web development and AI implementation. Developing modern web applications, collaborating in teams, and honing problem-solving skills according to industry standards.',
      type: 'work'
    },
    {
      id: 2,
      role: 'Ticketing Project Manager (Internship)',
      company: 'PT KAI Logistik',
      period: 'Aug 2023 - Oct 2023',
      description: 'Learned railway administration, created schedules and ticket pricing, and improved regular railway operational management.',
      type: 'work'
    },
    {
      id: 3,
      role: 'Bachelor of Informatics Engineering',
      company: 'Institut Teknologi Garut',
      period: 'Sep 2023 - Aug 2027',
      description: 'Active in software development projects and technology community discussions. Focused on basic programming and web technologies.',
      type: 'education'
    },
    {
      id: 4,
      role: 'Software Engineering',
      company: 'SMK Santana 2',
      period: '2020 - 2023',
      description: 'Graduated with an average score of 83. Focused on basic programming, web technologies, and student application development.',
      type: 'education'
    }
  ]
};

export const PROJECTS: Record<Language, Project[]> = {
  id: [
    {
      id: 1,
      title: 'Website E-Commerce Full-Stack',
      description: 'Platform e-commerce modern MERN Stack dengan fitur otentikasi JWT, manajemen produk, keranjang belanja, dan pembayaran via Midtrans.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Midtrans', 'Tailwind'],
      imageUrl: './assets/images/proyek/E-Commerce_Leather_Cosmetic_Fullstack - Copy.PNG',
      demoUrl: '#',
      repoUrl: 'https://github.com/alamahul/Intens-Leather-App'
    },
    {
      id: 2,
      title: 'Aplikasi Sharing Story',
      description: 'Aplikasi untuk share story yang berbasis gambar, map dan lokasi berbasis API.',
      tags: ['Javascript', 'PWA', 'Geo-Lokasi', 'Notifikasi', 'Webpack', 'HTML', 'CSS'],
      imageUrl: './assets/images/proyek/sharing-story-app.png',
      demoUrl: 'https://alamahul.github.io/sharing-story-app',
      repoUrl: 'https://github.com/alamahul/sharing-story-app'
    },
    {
      id: 3,
      title: 'Sistem Absensi Pegawai Desa',
      description: 'Aplikasi untuk absensi pegawai desa berbasis lokasi dan foto',
      tags: ['Code Ignitor', 'PHP', 'MySQL', 'Kamera', 'Geo-Lokasi'],
      imageUrl: './assets/images/proyek/sistem_absensi_pegawai_desa_V2.png',
      demoUrl: '#',
      repoUrl: 'https://github.com/alamahul/TB_BASDAT_V2'
    }
  ],
  en: [
    {
      id: 1,
      title: 'Full-Stack E-Commerce Website',
      description: 'Modern MERN Stack e-commerce platform with JWT authentication, product management, shopping cart, and payment via Midtrans.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Midtrans', 'Tailwind'],
      imageUrl: './assets/images/proyek/E-Commerce_Leather_Cosmetic_Fullstack - Copy.PNG',
      demoUrl: '#',
      repoUrl: 'https://github.com/alamahul/Intens-Leather-App'
    },
    {
      id: 2,
      title: 'Story Sharing Application',
      description: 'An application for sharing stories with images, maps, and location based on API.',
      tags: ['Javascript', 'PWA', 'Geo-Location', 'Notifications', 'Webpack', 'HTML', 'CSS'],
      imageUrl: './assets/images/proyek/sharing-story-app.png',
      demoUrl: 'https://alamahul.github.io/sharing-story-app',
      repoUrl: 'https://github.com/alamahul/sharing-story-app'
    },
    {
      id: 3,
      title: 'Village Employee Attendance System',
      description: 'An application for village employee attendance based on location and camera photos.',
      tags: ['CodeIgniter', 'PHP', 'MySQL', 'Camera', 'Geo-Location'],
      imageUrl: './assets/images/proyek/sistem_absensi_pegawai_desa_V2.png',
      demoUrl: '#',
      repoUrl: 'https://github.com/alamahul/TB_BASDAT_V2'
    }
  ]
};

export const CERTIFICATES: Record<Language, Certificate[]> = {
  id: [
    {
      id: 1,
      title: 'Belajar Pengembangan Web Intermediate',
      issuer: 'Dicoding Indonesia',
      date: 'Nov 2025',
      url: 'https://www.dicoding.com/certificates/98XWO019LZM3'
    },
    {
      id: 2,
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding Indonesia',
      date: 'Okt 2025',
      url: 'https://www.dicoding.com/certificates/72ZDKY4JLPYW'
    },
    {
      id: 3,
      title: 'Arutala Certified Associate - Java',
      issuer: 'Arutala Lab',
      date: '2025',
      url: '#'
    },
    {
      id: 4,
      title: 'Belajar Fundamental Front-End Web',
      issuer: 'Dicoding Indonesia',
      date: 'Okt 2025',
      url: 'https://www.dicoding.com/certificates/N9ZO2MD96PG5'
    }
  ],
  en: [
    {
      id: 1,
      title: 'Intermediate Web Development',
      issuer: 'Dicoding Indonesia',
      date: 'Nov 2025',
      url: 'https://www.dicoding.com/certificates/98XWO019LZM3'
    },
    {
      id: 2,
      title: 'Basic Artificial Intelligence',
      issuer: 'Dicoding Indonesia',
      date: 'Oct 2025',
      url: 'https://www.dicoding.com/certificates/72ZDKY4JLPYW'
    },
    {
      id: 3,
      title: 'Arutala Certified Associate - Java',
      issuer: 'Arutala Lab',
      date: '2025',
      url: '#'
    },
    {
      id: 4,
      title: 'Fundamental Front-End Web Development',
      issuer: 'Dicoding Indonesia',
      date: 'Oct 2025',
      url: 'https://www.dicoding.com/certificates/N9ZO2MD96PG5'
    }
  ]
};

// UI Translations
export const UI_TEXT: Record<Language, any> = {
  id: {
    hero: {
      role: 'Mahasiswa Informatika | Web Developer',
      typingRoles: ['Web Developer', 'AI Enthusiast', 'Mahasiswa Informatika'],
      headlinePrefix: 'Menciptakan',
      headlineSuffix: 'Solusi Teknologi',
      headlineEnd: 'Yang Bermanfaat.',
      desc: 'Saya Alamahul Bayan, pengembang web dan antusias AI yang percaya bahwa teknologi harus membawa kemudahan dan kebaikan bagi kehidupan.',
      btnPortfolio: 'Lihat Portfolio',
      btnCV: 'Download CV',
      services: 'Layanan',
      focus: 'Fokus Saat Ini'
    },
    about: {
      titlePre: 'Tentang Saya',
      title: 'Perjalanan & Keahlian',
      profileTitle: 'Profil Singkat',
      profileDesc1: 'Saya adalah pengembang web yang dibimbing oleh iman dan integritas. Nama saya',
      profileDesc2: 'seorang mahasiswa Teknik Informatika yang percaya bahwa teknologi harus membawa kemudahan dan kebaikan bagi kehidupan banyak orang.',
      profileDesc3: 'Dengan fondasi dalam HTML, CSS, dan JavaScript, saya membangun aplikasi web modern menggunakan framework seperti',
      quote: '"Saya percaya disiplin, kesederhanaan, dan ketulusan... Nilai-nilai ini membimbing saya dalam setiap baris kode — karena teknologi tidak hanya harus bekerja, tetapi juga membawa makna."',
      skillsTitle: 'Keahlian Utama',
      expTitle: 'Pengalaman & Pendidikan',
      work: 'Pengalaman Kerja',
      edu: 'Pendidikan Akademis'
    },
    projects: {
      preTitle: 'Portfolio',
      title: 'Karya Terpilih',
      filterAll: 'Semua',
      certsTitle: 'Sertifikasi & Lisensi',
      certsDesc: 'Pengakuan profesional dan pembelajaran berkelanjutan.',
      viewAll: 'Lihat Semua Kredensial',
      demoNotAvailable: 'Demo Belum Tersedia'
    },
    contact: {
      preTitle: 'Hubungi Saya',
      title: 'Mari Bekerja Sama',
      desc: 'Punya ide proyek menarik atau ingin berdiskusi tentang teknologi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk peluang baru.',
      formTitle: 'Kirim Pesan',
      name: 'Nama',
      email: 'Email',
      subject: 'Subjek',
      message: 'Pesan',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      location: 'Lokasi',
      phone: 'Telepon / WhatsApp'
    },
    footer: {
      madeWith: 'Dibuat dengan',
      using: 'menggunakan React & Tailwind CSS.'
    }
  },
  en: {
    hero: {
      role: 'Informatics Engineering Student | Web Developer',
      typingRoles: ['Web Developer', 'AI Enthusiast', 'Informatics Student'],
      headlinePrefix: 'Creating',
      headlineSuffix: 'Purposeful Tech',
      headlineEnd: 'Solutions.',
      desc: 'I am Alamahul Bayan, a web developer and AI enthusiast who believes that technology should bring ease and goodness to life.',
      btnPortfolio: 'View Portfolio',
      btnCV: 'Download CV',
      services: 'Services',
      focus: 'Current Focus'
    },
    about: {
      titlePre: 'About Me',
      title: 'Journey & Skills',
      profileTitle: 'Short Profile',
      profileDesc1: 'I am a web developer guided by faith and integrity. My name is',
      profileDesc2: 'an Informatics Engineering student who believes that technology should bring ease and goodness into people’s lives.',
      profileDesc3: 'With a foundation in HTML, CSS, and JavaScript, I build dynamic and modern web applications using frameworks like',
      quote: '"I believe discipline, simplicity, and sincerity come from consistent prayer... These values guide me in every line of code — because technology should not only work, but also bring meaning."',
      skillsTitle: 'Key Skills',
      expTitle: 'Experience & Education',
      work: 'Work Experience',
      edu: 'Academic Education'
    },
    projects: {
      preTitle: 'Portfolio',
      title: 'Selected Works',
      filterAll: 'All',
      certsTitle: 'Certifications & Licenses',
      certsDesc: 'Professional recognition and continuous learning.',
      viewAll: 'View All Credentials',
      demoNotAvailable: 'Demo Not Available Yet'
    },
    contact: {
      preTitle: 'Contact Me',
      title: 'Let\'s Work Together',
      desc: 'Have an interesting project idea or want to discuss technology? Feel free to reach out. I am always open to new opportunities.',
      formTitle: 'Send Message',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      location: 'Location',
      phone: 'Phone / WhatsApp'
    },
    footer: {
      madeWith: 'Made with',
      using: 'using React & Tailwind CSS.'
    }
  }
};
