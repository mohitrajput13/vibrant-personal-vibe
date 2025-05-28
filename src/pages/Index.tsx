import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => new Set([...prev, sectionId]));
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    const sections = [heroRef, aboutRef, skillsRef, projectsRef, contactRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    frontend: [
      { name: "React.js", url: "https://reactjs.org/" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" }
    ],
    backend: [
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express.js", url: "https://expressjs.com/" },
      { name: "RESTful APIs", url: "https://restfulapi.net/" },
      { name: "Webhooks", url: "https://en.wikipedia.org/wiki/Webhook" }
    ],
    databases: [
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "MySQL", url: "https://www.mysql.com/" }
    ],
    tools: [
      { name: "Postman", url: "https://www.postman.com/" },
      { name: "GitHub", url: "https://github.com/" },
      { name: "Vapi.ai", url: "https://vapi.ai/" },
      { name: "Redux", url: "https://redux.js.org/" }
    ]
  };

  const projects = [
    {
      title: "AI Assistance (Pkaila)",
      description: "Voice-Based Virtual Agent using Vapi.ai with automated inbound and outbound calls for businesses",
      tech: ["React.js", "Redux", "Material UI", "Node.js", "Vapi.ai"],
      features: ["Real-time voice conversations", "Business automation", "Multi-organization support"]
    },
    {
      title: "Gradient Analytics Dashboard",
      description: "Interactive dashboard for visualizing business metrics and KPIs with role-based access control",
      tech: ["React.js", "Ant Design", "Redux", "Bootstrap"],
      features: ["Data visualization", "Role-based access", "Interactive charts"]
    },
    {
      title: "Medicity Healthcare System",
      description: "Complete healthcare management system for patients, bookings, and staff communication",
      tech: ["React.js", "Redux", "Bootstrap", "Firebase", "MERN Stack"],
      features: ["Patient management", "Appointment booking", "Staff communication", "SMS & email integration"]
    },
    {
      title: "Vehivalue Car Platform",
      description: "Second-hand car selling platform with role-based modules for different user types",
      tech: ["React.js", "Redux", "Node.js", "MongoDB", "MERN Stack"],
      features: ["Car listings", "User management", "Sales monitoring", "Secure authentication"]
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-scale-in">
              MR
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 hover:scale-110 transform ${
                    activeSection === item ? 'text-blue-600 font-semibold scale-110' : 'text-gray-700 dark:text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="transition-all duration-300 hover:scale-110 hover:rotate-12 transform"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-slide-in-right">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-300 hover:translate-x-2 transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        id="home" 
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-16 ${
          visibleSections.has('home') ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            {/* Profile Photo */}
            <div 
              className={`mb-8 ${
                visibleSections.has('home') ? 'animate-scale-in animate-float' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <img
                src="/lovable-uploads/09b5aea1-cf05-4e3d-8ae6-36a741f54eaf.png"
                alt="Mohit Rajput"
                className="w-48 h-48 rounded-full mx-auto shadow-2xl border-8 border-white dark:border-gray-700 hover:scale-110 hover:shadow-3xl transition-all duration-500 transform hover:rotate-2"
              />
            </div>
            
            <h1 
              className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${
                visibleSections.has('home') ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              MOHIT RAJPUT
            </h1>
            
            <p 
              className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 ${
                visibleSections.has('home') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              Software Developer
            </p>
            
            <p 
              className={`text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto ${
                visibleSections.has('home') ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              Highly qualified software developer with 1 year of professional experience at NewTech Fusion Pvt Ltd. 
              Proficient in Core Java, JavaScript, and the MERN stack, with hands-on experience working on live projects.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
                visibleSections.has('home') ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '1s' }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div 
              className={`mt-12 flex justify-center space-x-6 ${
                visibleSections.has('home') ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '1.2s' }}
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/mohit-rajput-mr13", color: "hover:text-blue-600" },
                { icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" },
                { icon: Mail, href: "mailto:mouryamohitsingh@gmail.com", color: "hover:text-red-500" },
                { icon: Phone, href: "tel:+916260335083", color: "hover:text-green-500" }
              ].map(({ icon: Icon, href, color }, index) => (
                <a 
                  key={href}
                  href={href} 
                  className={`text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 hover:scale-125 transform hover:-translate-y-1`}
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        id="about" 
        className={`py-20 bg-white dark:bg-gray-800 ${
          visibleSections.has('about') ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 ${
              visibleSections.has('about') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className={`space-y-6 ${
                visibleSections.has('about') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Quick learner with strong problem-solving skills
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm committed to continuous learning and contributing effectively to team success. 
                With hands-on experience in live projects such as Gradient, Medicity, and AI Assistance, 
                I bring practical knowledge and innovative solutions to every project.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1+", label: "Years Experience", color: "blue" },
                  { number: "4+", label: "Live Projects", color: "purple" }
                ].map(({ number, label, color }, index) => (
                  <div 
                    key={label}
                    className={`text-center p-4 bg-${color}-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 transform animate-fade-in`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className={`text-3xl font-bold text-${color}-600`}>{number}</div>
                    <div className="text-gray-600 dark:text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={`space-y-4 ${
                visibleSections.has('about') ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education & Training
              </h3>
              {[
                {
                  title: "Bachelor of Commerce (Computer Applications)",
                  subtitle: "Barkatullah University | 6.85 CGPA",
                  period: "2021 - 2023"
                },
                {
                  title: "MPIF Associate - IT Excellence Program",
                  subtitle: "InfoBeans Foundation",
                  period: "2023 - 2024"
                }
              ].map((edu, index) => (
                <Card 
                  key={edu.title}
                  className={`p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 animate-fade-in`}
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {edu.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.subtitle}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef}
        id="skills" 
        className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 ${
          visibleSections.has('skills') ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 ${
              visibleSections.has('skills') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Frontend", icon: Globe, skills: skills.frontend, color: "blue", bgColor: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20" },
              { title: "Backend", icon: Code, skills: skills.backend, color: "green", bgColor: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20" },
              { title: "Databases", icon: Database, skills: skills.databases, color: "purple", bgColor: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20" },
              { title: "Tools", icon: Smartphone, skills: skills.tools, color: "orange", bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20" }
            ].map(({ title, icon: Icon, skills: skillList, color, bgColor }, index) => (
              <Card 
                key={title}
                className={`p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br ${bgColor} transform ${
                  visibleSections.has('skills') ? 'animate-scale-in' : 'opacity-0 scale-75'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 text-${color}-600 transition-transform duration-300 hover:scale-110 hover:rotate-12`} />
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">{title}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block bg-white dark:bg-gray-700 px-3 py-2 rounded-full text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-${color}-50 dark:hover:bg-${color}-900/30 hover:text-${color}-700 dark:hover:text-${color}-300 transform cursor-pointer animate-fade-in`}
                      style={{ animationDelay: `${index * 0.2 + skillIndex * 0.1}s` }}
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        id="projects" 
        className={`py-20 bg-white dark:bg-gray-800 ${
          visibleSections.has('projects') ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 ${
              visibleSections.has('projects') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group cursor-pointer transform ${
                  visibleSections.has('projects') ? 'animate-scale-in' : 'opacity-0 scale-75'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-all duration-300 cursor-pointer hover:scale-125 transform" />
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={feature}
                        className={`animate-fade-in hover:text-blue-600 transition-colors duration-300`}
                        style={{ animationDelay: `${index * 0.2 + featureIndex * 0.1}s` }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full hover:scale-110 transition-transform duration-300 animate-fade-in`}
                      style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        id="contact" 
        className={`py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white ${
          visibleSections.has('contact') ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              visibleSections.has('contact') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'
            }`}
          >
            Let's Work Together
          </h2>
          <div 
            className={`w-24 h-1 bg-white mx-auto rounded-full mb-8 ${
              visibleSections.has('contact') ? 'animate-scale-in' : 'opacity-0 scale-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          ></div>
          
          <p 
            className={`text-xl mb-12 opacity-90 max-w-2xl mx-auto ${
              visibleSections.has('contact') ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, title: "Email", link: "mailto:mouryamohitsingh@gmail.com", text: "mouryamohitsingh@gmail.com" },
              { icon: Phone, title: "Phone", link: "tel:+916260335083", text: "+91 6260335083" },
              { icon: Linkedin, title: "LinkedIn", link: "https://linkedin.com/in/mohit-rajput-mr13", text: "mohit-rajput-mr13" }
            ].map(({ icon: Icon, title, link, text }, index) => (
              <div 
                key={title}
                className={`flex flex-col items-center hover:scale-110 transition-transform duration-300 ${
                  visibleSections.has('contact') ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <Icon className="w-8 h-8 mb-4 hover:animate-bounce" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <a href={link} className="hover:underline transition-all duration-300 hover:text-blue-200">
                  {text}
                </a>
              </div>
            ))}
          </div>
          
          <Button
            className={`bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1 ${
              visibleSections.has('contact') ? 'animate-scale-in' : 'opacity-0 scale-75'
            }`}
            style={{ animationDelay: '1.2s' }}
          >
            <Mail className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:animate-bounce" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © 2024 Mohit Rajput. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
