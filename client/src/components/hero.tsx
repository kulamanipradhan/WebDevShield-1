import { Button } from "@/components/ui/button";
import { useTyping } from "@/hooks/use-typing";
import { Shield, Download } from "lucide-react";

export function Hero() {
  const texts = [
    "Cybersecurity Engineer @ Infosys",
    "Web Application Developer",
    "Penetration Tester",
    "Security Code Reviewer",
    "Vulnerability Assessment Expert"
  ];

  const typingText = useTyping(texts);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block p-4 border-2 border-cyber-green rounded-lg mb-6 animate-pulse-glow">
            <Shield className="h-16 w-16 text-cyber-green" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-foreground">Hello, I'm</span>
          <br />
          <span className="text-cyber-green font-mono">&lt;stealthrecon01/&gt;</span>
        </h1>

        <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono min-h-[2rem]">
          <span className="border-r-2 border-cyber-green pr-2 animate-pulse">
            {typingText}
          </span>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Cybersecurity Engineer at{" "}
          <span className="text-cyber-blue font-semibold">Infosys</span>{" "}
          from India, specializing in penetration testing, vulnerability management, and secure web
          application development. I build beautiful, secure applications and break them too.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-cyber-green text-black hover:bg-cyber-green/90 font-semibold px-8 py-3 text-base"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black font-semibold px-8 py-3 text-base"
          >
            Get In Touch
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
