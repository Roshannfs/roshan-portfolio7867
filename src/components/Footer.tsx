import { Github, Linkedin, Mail, Heart, ArrowUp, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:roshan.s@example.com", label: "Email" },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      {/* Animated Line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer-line" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                <Code className="text-primary-foreground" size={20} />
              </div>
              <span className="font-bold text-xl">ROSHAN S</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Aspiring Software Developer specializing in AI & Data Science. Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={link.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative p-3 rounded-full border border-border bg-card hover:border-primary transition-all duration-300 transform group-hover:scale-110">
                    <link.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Roshan S. Crafted with</span>
            <Heart className="text-primary animate-pulse" size={16} fill="currentColor" />
            <span>and</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">passion</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={14} />
            </div>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-line {
          animation: shimmer-line 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;