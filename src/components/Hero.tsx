import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/roshan-profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-primary font-mono text-sm mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">ROSHAN</span>{" "}
              <span className="text-gradient">S</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Software Developer | AI & Data Science Graduate
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              An aspiring software developer with a strong interest in building
              clean, functional, and user-focused applications. Skilled in Python
              and Java, with hands-on experience in AI/ML projects and real-time
              systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:roshan@example.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 scale-110" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img
                  src={profileImage}
                  alt="Roshan S - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 animate-float">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-2xl font-bold text-secondary">AI/ML</p>
                <p className="text-xs text-muted-foreground">Specialist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
