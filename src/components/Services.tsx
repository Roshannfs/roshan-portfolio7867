import { Code, Brain, Server, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Building clean, functional, and user-focused applications with modern technologies.",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Developing intelligent systems for image recognition, data analysis, and automation.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust backend systems and APIs for scalable applications.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analyzing complex problems and delivering efficient, innovative solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-mono text-sm mb-2">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center p-8 bg-card rounded-xl border border-border animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-4">
              Currently open to <span className="text-primary font-semibold">junior / entry-level software developer roles</span>
            </p>
            <p className="text-muted-foreground">
              Interested in software development, AI-based applications, and backend systems
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-xl gradient-primary mb-4 group-hover:glow-primary transition-shadow">
                <service.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
