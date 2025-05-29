import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-cyber-green font-mono">$</span> whoami
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate cybersecurity engineer and web developer with a unique blend
              of defensive and offensive security skills. Currently working at Infosys, I
              specialize in identifying vulnerabilities and building secure applications
              that can withstand modern threats.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across penetration testing, vulnerability assessment,
              secure code review, and full-stack web development. I love the challenge of
              thinking like an attacker to build better defenses.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Badge variant="outline" className="border-cyber-green/30 text-cyber-green">
                Penetration Testing
              </Badge>
              <Badge variant="outline" className="border-cyber-blue/30 text-cyber-blue">
                Web Development
              </Badge>
              <Badge variant="outline" className="border-cyber-green/30 text-cyber-green">
                Vulnerability Management
              </Badge>
              <Badge variant="outline" className="border-cyber-blue/30 text-cyber-blue">
                Code Review
              </Badge>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity workspace with multiple monitors showing code and security tools"
              className="rounded-xl shadow-2xl animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
