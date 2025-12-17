import { useState, useEffect } from "react";
import { Briefcase, Rocket, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Entry Level Software Developer",
    subtitle: "Fresher - Open to Opportunities",
    description:
      "Actively trained through academic, personal, and live industry projects. Exposure to real-world AI/ML development workflows with a focus on practical implementation.",
    highlights: [
      "Completed industry-relevant AI/ML projects",
      "Hands-on experience with real-time systems",
      "Strong foundation in software development principles",
    ],
    color: "primary",
    year: "2024",
  },
  {
    icon: Rocket,
    title: "Industry Project Experience",
    subtitle: "Masu Brakes",
    description:
      "Contributed to live company projects, working on customized AI/ML solutions based on industrial needs.",
    highlights: [
      "Worked on production-level code",
      "Collaborated with industry professionals",
      "Applied classroom knowledge to real problems",
    ],
    color: "secondary",
    year: "2023",
  },
  {
    icon: BookOpen,
    title: "Academic Projects",
    subtitle: "M.A.M College of Engineering",
    description:
      "Developed multiple AI-powered applications as part of academic curriculum and personal interest.",
    highlights: [
      "Emotion Recognition System",
      "Campus Navigation Drone",
      "Wildlife Detection System",
    ],
    color: "accent",
    year: "2022",
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary font-mono text-sm">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Experience</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent animate-pulse-line" />
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                      <div className={`relative z-10 p-4 rounded-full bg-card border-4 border-${exp.color} transition-all duration-300 ${activeIndex === index ? "scale-125 shadow-lg shadow-primary/50" : ""}`}>
                        <exp.icon className={`text-${exp.color}`} size={24} />
                      </div>
                      {/* Year Badge */}
                      <div className={`absolute -bottom-8 px-3 py-1 rounded-full bg-${exp.color}/20 border border-${exp.color}/30`}>
                        <span className={`text-xs font-mono text-${exp.color}`}>{exp.year}</span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`} />
                    
                    {/* Card Side */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                      <div className="group relative">
                        {/* Card Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-${exp.color} to-${exp.color}/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                        
                        {/* Card */}
                        <div className="relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                          {/* Mobile Icon */}
                          <div className="flex md:hidden items-center gap-3 mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r from-${exp.color} to-${exp.color}/50`}>
                              <exp.icon className="text-primary-foreground" size={20} />
                            </div>
                            <span className={`text-xs font-mono text-${exp.color} px-2 py-1 rounded-full bg-${exp.color}/10`}>{exp.year}</span>
                          </div>

                          {/* Title & Subtitle */}
                          <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className={`text-${exp.color} font-mono text-sm mb-4`}>{exp.subtitle}</p>
                          
                          {/* Description */}
                          <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                          
                          {/* Highlights */}
                          <ul className="space-y-3">
                            {exp.highlights.map((highlight, hIndex) => (
                              <li 
                                key={highlight} 
                                className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                                style={{ transitionDelay: `${hIndex * 50}ms` }}
                              >
                                <CheckCircle2 className={`text-${exp.color} mt-0.5 flex-shrink-0`} size={16} />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Decorative Element */}
                          <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-${exp.color}/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse-line {
          animation: pulse-line 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;