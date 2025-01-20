import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, ArrowUp, Download, Terminal, Server, Cloud, Database, Code, Lock } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const fullText = "cd ~/portfolio && ./view-profile.sh";
const fullText = "TechDanish ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      category: "Infrastructure & Cloud",
      items: [
        { name: 'AWS', level: 90, icon: <Cloud /> },
        { name: 'Terraform', level: 85, icon: <Server /> },
        { name: 'Kubernetes', level: 88, icon: <Database /> },
        { name: 'Docker', level: 92, icon: <Database /> }
      ]
    },
    {
      category: "CI/CD & Automation",
      items: [
        { name: 'Jenkins', level: 85, icon: <Code /> },
        { name: 'GitLab CI', level: 82, icon: <Code /> },
        { name: 'GitHub Actions', level: 88, icon: <Code /> },
        { name: 'Ansible', level: 80, icon: <Terminal /> }
      ]
    },
    {
      category: "Monitoring & Security",
      items: [
        { name: 'Prometheus', level: 85, icon: <Terminal /> },
        { name: 'ELK Stack', level: 80, icon: <Database /> },
        { name: 'Vault', level: 75, icon: <Lock /> },
        { name: 'Security Tools', level: 78, icon: <Lock /> }
      ]
    }
  ];

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Multi-region AWS infrastructure deployment using Terraform with high availability and disaster recovery',
      tech: ['Terraform', 'AWS', 'Python'],
      github: '#',
      demo: '#',
      metrics: ['99.99% Uptime', '40% Cost Reduction']
    },
    {
      title: 'Kubernetes Platform',
      description: 'Enterprise-grade Kubernetes platform with automated scaling, monitoring, and security controls',
      tech: ['Kubernetes', 'Helm', 'Prometheus'],
      github: '#',
      demo: '#',
      metrics: ['200+ Microservices', '5min Deployment Time']
    },
    {
      title: 'CI/CD Pipeline Orchestration',
      description: 'Advanced CI/CD pipeline system supporting multiple teams and deployment strategies',
      tech: ['Jenkins', 'Docker', 'GitLab'],
      github: '#',
      demo: '#',
      metrics: ['10x Faster Deployments', '0 Downtime']
    },
    {
      title: 'Security Automation Framework',
      description: 'Automated security scanning and compliance checking system for cloud infrastructure',
      tech: ['Python', 'AWS Security Hub', 'Vault'],
      github: '#',
      demo: '#',
      metrics: ['98% Compliance Rate', '24/7 Monitoring']
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      { /* Terminal-style Header */}
      <header className="fixed w-full backdrop-blur-md bg-black/90 text-green-500 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-sm">
              {typedText}<span className="animate-pulse">_</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#home" className="hover:text-green-400 font-mono">~/home</a>
              <a href="#about" className="hover:text-green-400 font-mono">~/about</a>
              <a href="#skills" className="hover:text-green-400 font-mono">~/skills</a>
              <a href="#projects" className="hover:text-green-400 font-mono">~/projects</a>
              <a href="#contact" className="hover:text-green-400 font-mono">~/contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-800"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Terminal Theme */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6">
          <div className="bg-black/90 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono">
              <p className="text-green-500">$ whoami</p>
              <h1 className="text-4xl font-bold mb-4 text-white">Syed Danish Syed Ishaque </h1>
              <p className="text-green-500">$ cat role.txt</p>
              <h2 className="text-xl mb-6 text-white">junior DevOps Engineer & Cloud Architect</h2>
              <p className="text-green-500">$ ls achievements/</p>
              <ul className="text-white space-y-2 mb-6">
                <li>→ AWS Certified Solutions Architect Professional</li>
                <li>→ Certified Kubernetes Administrator</li>
                <li>→ HashiCorp Certified Terraform Associate</li>
              </ul>
              <button className="bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-400 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Modern Cards */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="space-y-12">
            {skills.map((category) => (
              <div key={category.category} className="bg-black/90 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-xl font-mono text-green-500 mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="bg-gray-800/50 p-6 rounded-lg">
                      <div className="flex items-center gap-4 mb-4">
                        {skill.icon}
                        <span className="font-mono">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-500 rounded-full h-2 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Metrics */}
      <section id="projects" className="py-20 bg-black/95">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-500">Production Deployments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800/50 rounded-lg overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-mono text-green-400">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="bg-black/50 p-3 rounded-lg text-center">
                        <p className="text-green-400 font-mono">{metric}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-green-400 hover:text-green-300">
                      <Github size={20} />
                      Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-green-400 hover:text-green-300">
                      <Terminal size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Terminal Style */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Initialize Connection</h2>
          <div className="max-w-4xl mx-auto bg-black/90 p-8 rounded-lg border border-green-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-mono text-green-500">$ sender.name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-green-500/20 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-mono text-green-500">$ sender.email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-green-500/20 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-mono text-green-500">$ message.content</label>
                  <textarea
                    className="w-full p-3 rounded-lg bg-gray-800 border border-green-500/20 text-white h-32 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  ></textarea>
                </div>
                <button className="bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-400 w-full font-mono">
                  Execute Send
                </button>
              </form>
              <div className="space-y-6 font-mono">
                <div className="flex items-center gap-4 text-green-500">
                  <Mail size={24} />
                  <span>techdanish001@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-green-500">
                  <Phone size={24} />
                  <span>+91 9420862286</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/vipdanish" className="text-green-500 hover:text-green-400">
                    <Github size={24} />
                  </a>
                  <a href="www.linkedin.com/in/techdanish" className="text-green-500 hover:text-green-400">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black text-green-500">
        <div className="container mx-auto px-6">
          <p className="font-mono">© 2025 Syed Danish | All systems operational</p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-green-500 text-black p-3 rounded-full shadow-lg hover:bg-green-400"
        >
          <ArrowUp size={24} />
        </button>
      </footer>
    </div>
  );
};

export default Portfolio;