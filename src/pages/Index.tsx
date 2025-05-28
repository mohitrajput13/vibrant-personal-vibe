
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
    frontend: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Material UI", "Ant Design"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "Webhooks"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Postman", "GitHub", "Vapi.ai", "Redux"]
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
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MR
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
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
                className="transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <div className="mb-8 animate-scale-in">
              <img
                src="/lovable-uploads/09b5aea1-cf05-4e3d-8ae6-36a741f54eaf.png"
                alt="Mohit Rajput"
                className="w-48 h-48 rounded-full mx-auto shadow-2xl border-8 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-in-right">
              MOHIT RAJPUT
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-in-left">
              Software Developer
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.5s'}}>
              Highly qualified software developer with 1 year of professional experience at NewTech Fusion Pvt Ltd. 
              Proficient in Core Java, JavaScript, and the MERN stack, with hands-on experience working on live projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '1s'}}>
              <a href="https://linkedin.com/in/mohit-rajput-mr13" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110">
                <Github className="w-8 h-8" />
              </a>
              <a href="mailto:mouryamohitsingh@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110">
                <Mail className="w-8 h-8" />
              </a>
              <a href="tel:+916260335083" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110">
                <Phone className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Quick learner with strong problem-solving skills
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm committed to continuous learning and contributing effectively to team success. 
                With hands-on experience in live projects such as Gradient, Medicity, and AI Assistance, 
                I bring practical knowledge and innovative solutions to every project.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">1+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">4+</div>
                  <div className="text-gray-600 dark:text-gray-400">Live Projects</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education & Training
              </h3>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Bachelor of Commerce (Computer Applications)
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Barkatullah University | 6.85 CGPA</p>
                <p className="text-sm text-gray-500">2021 - 2023</p>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  MPIF Associate - IT Excellence Program
                </h4>
                <p className="text-gray-600 dark:text-gray-400">InfoBeans Foundation</p>
                <p className="text-sm text-gray-500">2023 - 2024</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Frontend</h3>
              <div className="space-y-2">
                {skills.frontend.slice(0, 6).map((skill) => (
                  <div key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <Code className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Backend</h3>
              <div className="space-y-2">
                {skills.backend.map((skill) => (
                  <div key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <Database className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Databases</h3>
              <div className="space-y-2">
                {skills.databases.map((skill) => (
                  <div key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Tools</h3>
              <div className="space-y-2">
                {skills.tools.map((skill) => (
                  <div key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
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
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:mouryamohitsingh@gmail.com" className="hover:underline">
                mouryamohitsingh@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+916260335083" className="hover:underline">
                +91 6260335083
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Linkedin className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/mohit-rajput-mr13" className="hover:underline">
                mohit-rajput-mr13
              </a>
            </div>
          </div>
          
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Mohit Rajput. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
