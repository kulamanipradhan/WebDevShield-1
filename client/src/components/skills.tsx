import { Shield, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const cybersecuritySkills = [
    { name: "Penetration Testing", level: 95 },
    { name: "Vulnerability Assessment", level: 90 },
    { name: "Security Code Review", level: 88 },
    { name: "Incident Response", level: 85 },
  ];

  const webDevSkills = [
    { name: "React/Next.js", level: 92 },
    { name: "Node.js/Python", level: 90 },
    { name: "Database Design", level: 85 },
    { name: "DevOps/CI-CD", level: 80 },
  ];

  const tools = [
    "Burp Suite", "Metasploit", "Nmap", "React", "Python", 
    "JavaScript", "Kali Linux", "Docker", "OWASP ZAP", "AWS"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-cyber-blue font-mono">./</span>skills
          <span className="text-cyber-green">.</span>sh
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Cybersecurity Skills */}
          <div className="bg-card rounded-xl p-8 border border-border hover:border-cyber-green/50 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-cyber-green mr-3" />
              <h3 className="text-xl font-bold">Cybersecurity</h3>
            </div>

            <div className="space-y-6">
              {cybersecuritySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-mono">{skill.name}</span>
                    <span className="text-sm text-cyber-green">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Skills */}
          <div className="bg-card rounded-xl p-8 border border-border hover:border-cyber-blue/50 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-cyber-blue mr-3" />
              <h3 className="text-xl font-bold">Web Development</h3>
            </div>

            <div className="space-y-6">
              {webDevSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-mono">{skill.name}</span>
                    <span className="text-sm text-cyber-blue">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyber-green font-mono">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge
                key={tool}
                variant="outline"
                className={`px-4 py-2 font-mono transition-colors duration-300 ${
                  index % 2 === 0
                    ? "border-border hover:border-cyber-green"
                    : "border-border hover:border-cyber-blue"
                }`}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
