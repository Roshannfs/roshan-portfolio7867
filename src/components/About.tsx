import { useState, useEffect } from "react";
import { GraduationCap, Code, Brain, Target, Sparkles, Zap } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "AI & DS Graduate",
      description: "Strong foundation in artificial intelligence and data science principles",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Code,
      title: "Full Stack Skills",
      description: "Proficient in Python, Java, SQL, and modern development tools",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about logical challenges and real-world solutions",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary font-mono text-sm">Get To Know</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {/* Bio Text with Animated Border */}
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent mb-8">
              <div className="p-8 bg-card rounded-2xl">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I'm an <span className="text-primary font-semibold">AI & Data Science graduate</span> passionate about problem-solving
                    and building innovative solutions. My journey in technology has
                    equipped me with a strong foundation in programming, machine
                    learning, and software development.
                  </p>
                  <p>
                    With hands-on experience in <span className="text-secondary font-medium">Python, Java, and SQL</span>, I've developed
                    various projects ranging from emotion recognition systems to
                    autonomous drones. I'm motivated by logical challenges and always
                    eager to learn new technologies.
                  </p>
                  <p>
                    Currently seeking <span className="text-accent font-medium">junior/entry-level software developer roles</span>
                    where I can contribute to meaningful projects while continuing to
                    grow as a developer.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card - Enhanced */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur animate-pulse" />
                    <div className="relative p-4 rounded-xl bg-gradient-to-r from-primary to-secondary">
                      <GraduationCap className="text-primary-foreground" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Education</h3>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                <div className="space-y-3 pl-4 border-l-2 border-primary/30">
                  <p className="font-semibold text-lg text-foreground">B.Tech in Artificial Intelligence & Data Science</p>
                  <p className="text-muted-foreground">M.A.M College of Engineering and Technology</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <Zap className="text-primary" size={14} />
                    <span className="text-sm text-primary font-mono">2022 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-start gap-5">
                    {/* Animated Icon */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative p-4 rounded-xl bg-gradient-to-r ${item.gradient} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <item.icon className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>

                    {/* Decorative Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;