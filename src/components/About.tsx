import { GraduationCap, Code, Brain, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & DS Graduate",
      description: "Strong foundation in artificial intelligence and data science principles",
    },
    {
      icon: Code,
      title: "Full Stack Skills",
      description: "Proficient in Python, Java, SQL, and modern development tools",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about logical challenges and real-world solutions",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-mono text-sm mb-2">Get To Know</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm an AI & Data Science graduate passionate about problem-solving
                and building innovative solutions. My journey in technology has
                equipped me with a strong foundation in programming, machine
                learning, and software development.
              </p>
              <p>
                With hands-on experience in Python, Java, and SQL, I've developed
                various projects ranging from emotion recognition systems to
                autonomous drones. I'm motivated by logical challenges and always
                eager to learn new technologies.
              </p>
              <p>
                Currently seeking junior/entry-level software developer roles
                where I can contribute to meaningful projects while continuing to
                grow as a developer.
              </p>
            </div>

            {/* Education Card */}
            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <GraduationCap className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium">B.Tech in Artificial Intelligence & Data Science</p>
                <p className="text-muted-foreground">M.A.M College of Engineering and Technology</p>
                <p className="text-sm text-primary font-mono">2022 - 2026</p>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
