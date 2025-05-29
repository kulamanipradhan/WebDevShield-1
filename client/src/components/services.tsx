import { Bug, Shield, Search, Code } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities in your systems and applications.",
      color: "cyber-green"
    },
    {
      icon: Shield,
      title: "Vulnerability Management",
      description: "Systematic identification, evaluation, and mitigation of security vulnerabilities.",
      color: "cyber-blue"
    },
    {
      icon: Search,
      title: "Security Code Review",
      description: "In-depth analysis of source code to identify security flaws and implementation weaknesses.",
      color: "cyber-green"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with security-first approach and modern technologies.",
      color: "cyber-blue"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-cyber-green font-mono">sudo</span> services
          <span className="text-cyber-blue"> --list</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-secondary rounded-xl p-6 border border-border hover:border-${service.color}/50 transition-all duration-300 transform hover:scale-105 text-center`}
              >
                <Icon
                  className={`h-12 w-12 mx-auto mb-4 ${
                    service.color === "cyber-green" ? "text-cyber-green" : "text-cyber-blue"
                  }`}
                />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
