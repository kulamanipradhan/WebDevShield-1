import { Building, Laptop, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Infosys Limited",
      position: "Cybersecurity Engineer",
      period: "2022 - Present",
      icon: Building,
      type: "security",
      responsibilities: [
        "Conduct comprehensive penetration testing for client applications",
        "Perform vulnerability assessments and security code reviews",
        "Develop security automation tools and frameworks",
        "Lead incident response and threat hunting activities",
        "Mentor junior security engineers and conduct training sessions"
      ]
    },
    {
      company: "Freelance Developer",
      position: "Full-Stack Developer & Security Consultant",
      period: "2021 - 2022",
      icon: Laptop,
      type: "web",
      responsibilities: [
        "Built secure web applications for various clients",
        "Provided cybersecurity consulting services",
        "Developed custom security assessment tools",
        "Implemented secure coding practices and guidelines"
      ]
    },
    {
      company: "University Projects",
      position: "Computer Science Student",
      period: "2019 - 2021",
      icon: GraduationCap,
      type: "security",
      responsibilities: [
        "Developed secure web applications as academic projects",
        "Participated in cybersecurity competitions and CTFs",
        "Created vulnerability assessment tools for research",
        "Published papers on web application security"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-cyber-blue font-mono">cat</span> experience
          <span className="text-cyber-green">.log</span>
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;

            return (
              <div key={exp.company} className="relative flex items-center mb-12">
                <div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-secondary ${
                    exp.type === "security" ? "bg-cyber-green" : "bg-cyber-blue"
                  }`}
                ></div>

                <div
                  className={`ml-16 md:ml-0 ${
                    isLeft
                      ? "md:w-1/2 md:pr-8"
                      : "md:w-1/2 md:pl-8 md:ml-auto"
                  }`}
                >
                  <div
                    className={`bg-card rounded-xl p-6 border border-border hover:border-${
                      exp.type === "security" ? "cyber-green" : "cyber-blue"
                    }/50 transition-colors duration-300`}
                  >
                    <div className="flex items-center mb-2">
                      <Icon
                        className={`h-5 w-5 mr-2 ${
                          exp.type === "security" ? "text-cyber-green" : "text-cyber-blue"
                        }`}
                      />
                      <h3
                        className={`text-xl font-bold ${
                          exp.type === "security" ? "text-cyber-green" : "text-cyber-blue"
                        }`}
                      >
                        {exp.company}
                      </h3>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {exp.position}
                    </h4>
                    <p
                      className={`text-sm mb-4 ${
                        exp.type === "security" ? "text-cyber-blue" : "text-cyber-green"
                      }`}
                    >
                      {exp.period}
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm">
                          • {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
