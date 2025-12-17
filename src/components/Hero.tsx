import { ArrowDown, Github, Linkedin, Mail, Code, Cpu, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/roshan-profile.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const roles = ["Software Developer", "AI Enthusiast", "Problem Solver", "Tech Explorer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />
          <div 
            className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
              animation: "pulse-glow 5s ease-in-out infinite 1s",
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
              animation: "pulse-glow 6s ease-in-out infinite 2s",
            }}
          />
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-32 left-[10%] text-primary/20 animate-float">
          <Code size={40} />
        </div>
        <div className="absolute top-48 right-[15%] text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
          <Cpu size={35} />
        </div>
        <div className="absolute bottom-32 left-[20%] text-accent/20 animate-float" style={{ animationDelay: "2s" }}>
          <Database size={30} />
        </div>
        <div className="absolute bottom-48 right-[25%] text-primary/20 animate-float" style={{ animationDelay: "3s" }}>
          <Sparkles size={35} />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-mono text-sm">Available for opportunities</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-2">
                <span className="text-foreground">ROSHAN</span>{" "}
                <span className="text-gradient bg-clip-text">S</span>
              </h1>
              
              {/* Animated Role */}
              <div className="h-8 md:h-10 flex items-center">
                <span className="text-xl md:text-2xl text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              AI & Data Science Graduate crafting{" "}
              <span className="text-primary font-medium">clean, functional</span>, and{" "}
              <span className="text-secondary font-medium">user-focused</span> applications. 
              Skilled in Python, Java, with hands-on AI/ML experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden"
                asChild
              >
                <a href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:roshan@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={label}
                >
                  <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image with Orbital Rings */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Outer Glow */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-40 scale-125"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
              />
              
              {/* Orbital Rings */}
              <div 
                className="absolute inset-[-20px] rounded-full border border-primary/20"
                style={{ animation: "spin 20s linear infinite" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>
              <div 
                className="absolute inset-[-40px] rounded-full border border-secondary/10"
                style={{ animation: "spin 30s linear infinite reverse" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
              </div>
              <div 
                className="absolute inset-[-60px] rounded-full border border-accent/5"
                style={{ animation: "spin 40s linear infinite" }}
              />

              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
                {/* Gradient Border Effect */}
                <div 
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
                    animation: "spin 8s linear infinite",
                  }}
                />
                <div className="absolute inset-[3px] rounded-full bg-background overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Roshan S - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Stats Cards with Glassmorphism */}
              <div 
                className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "0s" }}
              >
                <p className="text-3xl font-bold text-gradient">4+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div 
                className="absolute -top-4 -right-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-2xl font-bold text-secondary">AI/ML</p>
                <p className="text-xs text-muted-foreground">Specialist</p>
              </div>
              <div 
                className="absolute top-1/2 -right-8 md:-right-12 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-3 shadow-xl animate-float hidden md:block"
                style={{ animationDelay: "2s" }}
              >
                <p className="text-lg font-bold text-accent">2026</p>
                <p className="text-[10px] text-muted-foreground">B.Tech Grad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono tracking-wider opacity-60">SCROLL</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
