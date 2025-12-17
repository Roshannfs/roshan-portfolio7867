import { ExternalLink, Github, Factory, Camera, Plane, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Factory,
    title: "Masu Brakes (Industry Project)",
    description:
      "Contributed to live company projects with customized AI/ML solutions based on industrial needs. Worked on production-level implementations.",
    technologies: ["Python", "Machine Learning", "Industry Standards"],
    featured: true,
  },
  {
    icon: Camera,
    title: "Emotion Recognition System",
    description:
      "Trained an emotion recognition model using image datasets and implemented real-time webcam-based emotion detection with high accuracy.",
    technologies: ["Python", "OpenCV", "Deep Learning", "Webcam"],
    featured: true,
  },
  {
    icon: Plane,
    title: "Campus Navigation Drone",
    description:
      "Developed a QR-code activated navigation drone with live video feed capability and autonomous return functionality.",
    technologies: ["Python", "Drone APIs", "QR Detection", "Video Streaming"],
    featured: true,
  },
  {
    icon: Eye,
    title: "Monkey Detection System",
    description:
      "Built a real-time wildlife detection system using YOLO for monitoring and alerting about monkey presence in designated areas.",
    technologies: ["Python", "YOLO", "OpenCV", "Real-time Processing"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-mono text-sm mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={24} />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                    <Github size={18} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={18} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
