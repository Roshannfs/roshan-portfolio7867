import { useState, useEffect } from "react";
import { ExternalLink, Github, Factory, Camera, Plane, Eye, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Factory,
    title: "Masu Brakes (Industry Project)",
    description:
      "Contributed to live company projects with customized AI/ML solutions based on industrial needs. Worked on production-level implementations.",
    technologies: ["Python", "Machine Learning", "Industry Standards"],
    featured: true,
    gradient: "from-primary to-secondary",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    icon: Camera,
    title: "Emotion Recognition System",
    description:
      "Trained an emotion recognition model using image datasets and implemented real-time webcam-based emotion detection with high accuracy.",
    technologies: ["Python", "OpenCV", "Deep Learning", "Webcam"],
    featured: true,
    gradient: "from-secondary to-accent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    icon: Plane,
    title: "Campus Navigation Drone",
    description:
      "Developed a QR-code activated navigation drone with live video feed capability and autonomous return functionality.",
    technologies: ["Python", "Drone APIs", "QR Detection", "Video Streaming"],
    featured: true,
    gradient: "from-accent to-primary",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
  },
  {
    icon: Eye,
    title: "Monkey Detection System",
    description:
      "Built a real-time wildlife detection system using YOLO for monitoring and alerting about monkey presence in designated areas.",
    technologies: ["Python", "YOLO", "OpenCV", "Real-time Processing"],
    featured: false,
    gradient: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary font-mono text-sm">My Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`} />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <project.icon className="text-primary-foreground" size={24} />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:text-primary transition-all">
                      <Github size={18} />
                    </button>
                    <button className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:text-primary transition-all">
                      <ExternalLink size={18} />
                    </button>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full border border-primary/30">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" size={18} />
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary hover:text-primary transition-all"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative overflow-hidden border-primary/50 hover:border-primary"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center gap-2">
                <Github size={20} />
                View All Projects on GitHub
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;