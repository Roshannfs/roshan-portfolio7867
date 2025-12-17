import { useState, useEffect, useRef } from "react";
import { Code, Database, Brain, Wrench, Users, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    color: "primary",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "secondary",
    skills: [
      { name: "SQL", level: 70 },
    ],
  },
  {
    icon: Brain,
    title: "AI/ML",
    color: "accent",
    skills: [
      { name: "Machine Learning", level: 70 },
      { name: "YOLO", level: 65 },
      { name: "OpenCV", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "primary",
    skills: [
      { name: "Git", level: 75 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "secondary",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Logical Thinking", level: 85 },
      { name: "Team Collaboration", level: 80 },
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels
          skillCategories.forEach((cat) => {
            cat.skills.forEach((skill) => {
              let current = 0;
              const interval = setInterval(() => {
                current += 2;
                if (current >= skill.level) {
                  current = skill.level;
                  clearInterval(interval);
                }
                setAnimatedLevels((prev) => ({ ...prev, [skill.name]: current }));
              }, 20);
            });
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>
      </div>

      {/* Floating Orbs */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full animate-orbit"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))`,
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary font-mono text-sm">What I Know</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-${category.color}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${category.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative p-3 rounded-xl bg-gradient-to-br from-${category.color} to-${category.color}/50 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <category.icon className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.skills.length} skills</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-primary">
                          {animatedLevels[skill.name] || 0}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-shimmer" />
                        
                        {/* Progress Fill */}
                        <div
                          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${animatedLevels[skill.name] || 0}%`,
                            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))`,
                            boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                          }}
                        />
                        
                        {/* Glow Dot */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-1000"
                          style={{ left: `calc(${animatedLevels[skill.name] || 0}% - 6px)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-${category.color}/20 to-transparent rotate-45`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes orbit {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.5; }
          25% { transform: translateY(-30px) translateX(20px) scale(1.2); opacity: 1; }
          50% { transform: translateY(0) translateX(40px) scale(1); opacity: 0.5; }
          75% { transform: translateY(30px) translateX(20px) scale(0.8); opacity: 1; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.5; }
        }
        .animate-orbit {
          animation: orbit 10s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;