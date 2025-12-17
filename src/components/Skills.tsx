import { Code, Database, Brain, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "SQL", level: 70 },
    ],
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: [
      { name: "Machine Learning", level: 70 },
      { name: "YOLO", level: 65 },
      { name: "OpenCV", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 75 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Logical Thinking", level: 85 },
      { name: "Team Collaboration", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-mono text-sm mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg gradient-primary">
                  <category.icon className="text-primary-foreground" size={20} />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
