import React from 'react';
// Importing icons from Lucide to maintain a clean, modern look
import {
  Mail, Phone, Linkedin, Github, Code, School, Zap, Briefcase, ChevronRight, GraduationCap, Award, Brain,
} from 'lucide-react';

// --- Data Structure derived from the Resume ---
const userData = {
  name: "Satyapriya Sahoo",
  tagline: "MCA Graduate | Data Science & Full-Stack Development",
  objective: "Motivated MCA graduate with a strong foundation in Data Science, programming, web development, and machine learning. Holding a Bachelor's degree in Data Science and Management, I bring solid analytical and statistical knowledge. Skilled in building scalable applications using Angular, React, Node.js, Express.js, and databases (MySQL, MongoDB), with hands-on experience in AI/ML model development and deployment. Seeking an opportunity to apply technical expertise and problem-solving abilities to deliver innovative solutions while contributing to organizational growth.",
  contact: {
    email: "satyapriyasahoo2004@gmail.com",
    phone: "+91-9692903917",
    linkedin: "https://www.linkedin.com/in/satyapriya-sahoo/",
    github: "https://github.com/satyapriya07",
  },
  skills: {
    'Programming Languages': ['C', 'Java', 'Python', 'R', 'JavaScript'],
    'Frameworks/Libraries': ['Angular', 'React.js', 'Node.js', 'Express.js', 'NumPy', 'Pandas'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools': ['Git', 'GitHub']
  },
  education: [
    {
      institution: "PES University",
      degree: "Master of Computer Applications (MCA)",
      specialization: "Data Analytics",
      cgpa: "7.0",
      years: "2024 - 2026"
    },
    {
      institution: "Ravenshaw University",
      degree: "Bachelor of Science (BSc)",
      specialization: "Data Science and Management",
      cgpa: "8.29",
      years: "2020 - 2024"
    }
  ],
  projects: [
    {
      title: "The Indian Heritage",
      subtitle: "Full stack AI integrated, 2025",
      description: [
        "Developed a MERN-based e-commerce platform to showcase and sell traditional Indian clothing, jewellery, and handicrafts from all states",
        "Implemented multi-user roles (Admin, Buyer, Seller) with product management, cart, wishlist, checkout, and Razorpay-based payment integration",
      "Integrated AI-driven recommendations and NLP search to deliver personalized shopping experiences."
      ],
      tags: ["MERN , NLP, AI, Ecommerce"],
      demo: "https://theindianheritage.vercel.app/"
    },
    {
      title: "Student Drop-out Prediction",
      subtitle: "AI/ML Project, 2025",
      description: [
        "Built an ML-based model to predict student drop-out risks.",
        "Implemented Random Forest algorithm for high accuracy.",
        "Deployed using Flask for a web-based interface."
      ],
      tags: ["Python", "Machine Learning", "Random Forest", "Flask"]
    },
    {
      title: "Airline Ticket Reservation System",
      subtitle: "Web Development, 2024",
      description: [
        "Developed an end-to-end system for real-time airline information.",
        "Utilized HTML, CSS and PHP for ticket booking.",
        "Achieved seamless transaction and real-time feedback with refund system."
      ],
      tags: ["HTML", "CSS", "PHP", "MySQL", "Web Development"]
    }
  ],
  certifications: [
    { name: "IBM Web Development Fundamentals", year: "June 2024" },
    { name: "IBM Artificial Intelligence Fundamentals", year: "June 2024" }
  ],
  workshops: [
    {
      name: "AI/ML Workshop",
      institution: "NIT Rourkela, Odisha, India",
      details: [
        "Conducted research on machine learning algorithms for real-life applications.",
        "Implemented and evaluated ANN models using NumPy.",
        "Attended daily assignments at the research laboratory."
      ],
      year: "2024"
    }
  ]
};

// Custom components
// eslint-disable-next-line no-unused-vars
const SectionTitle = ({ icon: IconComponent, title }) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center text-cyan-400">
    <IconComponent className="w-6 h-6 mr-3 text-cyan-500" />
    {title}
  </h2>
);

const Tag = ({ children }) => (
  <span className="inline-block bg-gray-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 transition duration-300 hover:bg-cyan-800 hover:text-white">
    {children}
  </span>
);

// eslint-disable-next-line no-unused-vars
const ContactLink = ({ href, children, icon: IconComponent, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition duration-300 p-2 rounded-lg hover:bg-gray-800/50"
    aria-label={label}
  >
    <IconComponent className="w-5 h-5" />
    <span className="hidden sm:inline">{children}</span>
  </a>
);

// --- Main App Component ---
const App = () => {
  // Simple state for navigation if needed, though we will use anchor links for simplicity
  const navItems = [
    { id: 'about', title: 'About', icon: Briefcase },
    { id: 'skills', title: 'Skills', icon: Zap },
    { id: 'projects', title: 'Projects', icon: Code },
    { id: 'education', title: 'Education', icon: School },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navbar - Fixed at the top */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-extrabold text-white tracking-widest">
            {userData.name.split(' ')[0]}<span className="text-cyan-400">.</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition duration-300 text-sm font-medium"
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.title}
              </a>
            ))}
          </nav>
          <div className="flex space-x-2">
            <ContactLink
              href={`mailto:${userData.contact.email}`}
              icon={Mail}
              label="Email"
            />
            <ContactLink
              href={`tel:${userData.contact.phone}`}
              icon={Phone}
              label="Phone"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* --- 1. Hero / Objective Section --- */}
        <section id="about" className="text-center py-20 mb-20 bg-gray-800/50 rounded-xl shadow-2xl">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4">
            Hello, I'm <span className="text-cyan-400">{userData.name}</span>.
          </h1>
          <p className="text-xl text-gray-300 font-light mb-8 italic">
            {userData.tagline}
          </p>

          {/* Objective Card */}
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/30">
              <p className="text-md text-gray-300 leading-relaxed">
                {userData.objective}
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <ContactLink
                href='https://www.linkedin.com/in/satyapriya-sahoo/'
                icon={Linkedin}
                label="LinkedIn Profile"
              >
                LinkedIn
              </ContactLink>
              <ContactLink
                href='https://github.com/satyapriya07'
                icon={Github}
                label="GitHub Profile"
              >
                GitHub
              </ContactLink>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* --- 2. Skills and Education/Certifications (Left Column) --- */}
            <div className="lg:col-span-1 space-y-12">
                {/* --- Skills Section --- */}
                <section id="skills" className="p-8 bg-gray-800 rounded-xl shadow-xl">
                    <SectionTitle icon={Zap} title="Technical Skills" />
                    <div className="space-y-6">
                        {Object.entries(userData.skills).map(([category, skills], index) => (
                            <div key={index}>
                                <h3 className="text-xl font-semibold mb-3 text-white border-b border-gray-700 pb-1">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap">
                                    {skills.map((skill, i) => (
                                        <Tag key={i}>{skill}</Tag>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Education & Certifications Section --- */}
                <section id="education" className="p-8 bg-gray-800 rounded-xl shadow-xl">
                    <SectionTitle icon={GraduationCap} title="Education & Workshops" />

                    {/* Education */}
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                        <School className="w-5 h-5 mr-2" /> Academic
                    </h3>
                    <div className="space-y-6 mb-8">
                        {userData.education.map((edu, index) => (
                            <div key={index} className="border-l-4 border-cyan-500 pl-4 transition duration-300 hover:bg-gray-700/30 p-3 rounded-lg">
                                <p className="text-lg font-bold text-white">{edu.degree}</p>
                                <p className="text-cyan-300">{edu.institution}</p>
                                <p className="text-sm text-gray-400 italic">
                                    {edu.specialization} | CGPA: {edu.cgpa} ({edu.years})
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                        <Award className="w-5 h-5 mr-2" /> Certifications
                    </h3>
                    <div className="space-y-3 mb-8">
                        {userData.certifications.map((cert, index) => (
                             <div key={index} className="flex justify-between items-start text-gray-300">
                                <p className="font-medium flex items-center">
                                    <ChevronRight className="w-4 h-4 mr-1 text-cyan-400" />
                                    {cert.name}
                                </p>
                                <span className="text-sm text-gray-500 whitespace-nowrap ml-2">({cert.year.split(' ')[0]})</span>
                            </div>
                        ))}
                    </div>

                    {/* Workshops */}
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                        <Brain className="w-5 h-5 mr-2" /> Workshops
                    </h3>
                    {userData.workshops.map((workshop, index) => (
                        <div key={index} className="border-l-4 border-gray-600 pl-4 p-3 rounded-lg">
                            <p className="text-lg font-bold text-white">{workshop.name}</p>
                            <p className="text-gray-300">{workshop.institution} ({workshop.year})</p>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                                {workshop.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>

            {/* --- 3. Projects Section (Right Column) --- */}
            <section id="projects" className="lg:col-span-2 p-8 bg-gray-800 rounded-xl shadow-xl">
                <SectionTitle icon={Code} title="Featured Projects" />
                <div className="space-y-12">
                    {userData.projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-700/50 rounded-lg border-t-4 border-cyan-500 transition duration-500 hover:shadow-cyan-500/50 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-cyan-300 mb-4 font-mono">{project.subtitle}</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                {project.description.map((point, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                                ))}
                            </ul>
                            <div className="flex flex-wrap">
                                {project.tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </div>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 mt-16 py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {userData.name}. Built with React and Tailwind CSS.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href={`mailto:${userData.contact.email}`} className="hover:text-cyan-400 transition">Email</a>
            <span className="text-gray-700">|</span>
            <a href='https://www.linkedin.com/in/satyapriya-sahoo/' target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
            <span className="text-gray-700">|</span>
            <a href='https://github.com/satyapriya07' target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;