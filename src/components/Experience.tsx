import { Briefcase, Rocket, BookOpen } from "lucide-react";

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
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-start">
                    <div className="relative z-10 p-3 rounded-full gradient-primary glow-primary">
                      <exp.icon className="text-primary-foreground" size={20} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4 md:hidden mb-4">
                      <div className="p-2 rounded-lg gradient-primary">
                        <exp.icon className="text-primary-foreground" size={18} />
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-xl mb-1">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm mb-4">{exp.subtitle}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
