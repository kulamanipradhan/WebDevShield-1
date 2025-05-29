import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "VulnScan Pro",
      description: "Automated vulnerability assessment tool with real-time reporting and remediation guidance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Nmap", "Django"],
      type: "security"
    },
    {
      title: "SecureShop",
      description: "Full-stack e-commerce platform with advanced security features and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "MongoDB"],
      type: "web"
    },
    {
      title: "PenTest Suite",
      description: "Comprehensive penetration testing framework with automated exploit discovery and reporting.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Bash", "Metasploit"],
      type: "security"
    },
    {
      title: "DevPortfolio",
      description: "Responsive portfolio website with dark/light themes and interactive animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      type: "web"
    },
    {
      title: "API SecScan",
      description: "Automated API security scanner for identifying vulnerabilities in REST and GraphQL APIs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "FastAPI", "OWASP"],
      type: "security"
    },
    {
      title: "SecureChat",
      description: "End-to-end encrypted chat application with advanced security features and user verification.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Socket.io", "React", "Crypto.js"],
      type: "web"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-cyber-green font-mono">ls</span> projects
          <span className="text-cyber-blue">/</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-secondary rounded-xl overflow-hidden border border-border hover:border-${
                project.type === "security" ? "cyber-green" : "cyber-blue"
              }/50 transition-all duration-300 transform hover:scale-105 group`}
            >
              <img
                src={project.image}
                alt={project.description}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    project.type === "security" ? "text-cyber-green" : "text-cyber-blue"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`text-xs font-mono ${
                        project.type === "security" ? "text-cyber-green" : "text-cyber-blue"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="icon" className="hover:text-cyber-green">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-cyber-blue">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
