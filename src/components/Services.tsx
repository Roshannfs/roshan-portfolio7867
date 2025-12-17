import { useState, useEffect } from "react";
import { Code, Brain, Server, Lightbulb, Sparkles, ArrowRight, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Building clean, functional, and user-focused applications with modern technologies.",
    gradient: "from-primary to-secondary",
    features: ["Clean Code", "Best Practices", "Modern Stack"],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Developing intelligent systems for image recognition, data analysis, and automation.",
    gradient: "from-secondary to-accent",
    features: ["Deep Learning", "Computer Vision", "Data Analysis"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust backend systems and APIs for scalable applications.",
    gradient: "from-accent to-primary",
    features: ["RESTful APIs", "Database Design", "Scalability"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analyzing complex problems and delivering efficient, innovative solutions.",
    gradient: "from-primary to-accent",
    features: ["Algorithms", "Optimization", "Innovation"],
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById("services");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary font-mono text-sm">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Services</span>
          </h2>
        </div>

        {/* Status Card */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
                <Zap className="text-primary animate-pulse" size={16} />
                <span className="text-primary font-semibold">Open to Work</span>
              </div>
              <p className="text-xl text-foreground mb-2">
                Currently open to <span className="text-primary font-bold">junior / entry-level software developer roles</span>
              </p>
              <p className="text-muted-foreground">
                Interested in software development, AI-based applications, and backend systems
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-center">
                {/* Icon */}
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className={`relative p-5 rounded-2xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <service.icon className="text-primary-foreground" size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs font-mono rounded-full bg-muted/50 text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${service.gradient}`}>
                    <ArrowRight className="text-primary-foreground" size={16} />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tr-2xl rounded-bl-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;