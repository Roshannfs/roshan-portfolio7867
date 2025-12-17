import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles, ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "roshan.s@example.com",
    href: "mailto:roshan.s@example.com",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    gradient: "from-secondary to-accent",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: null,
    gradient: "from-accent to-primary",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    gradient: "from-secondary to-accent",
  },
];

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_qvo0u1v';
const EMAILJS_TEMPLATE_ID = 'template_cb4r3f9';
const EMAILJS_PUBLIC_KEY = 'N6gh301lEzRl8oi2G';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Roshan",
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success notification
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      
      // Error notification
      toast({
        title: "Failed to send message ❌",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary font-mono text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {/* Intro Text */}
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent">
              <div className="p-8 bg-card rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently looking for entry-level software developer opportunities.
                  Feel free to reach out if you have any questions or just want to say hello!
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`group relative transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <item.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors flex items-center gap-1"
                        >
                          {item.value}
                          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 font-mono">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative p-4 rounded-full border border-border bg-card hover:border-primary transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1`}>
                      <link.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={22} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <form onSubmit={handleSubmit} className="relative space-y-6 p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name
                        ? "-top-2 text-xs text-primary bg-card px-2"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={isSubmitting}
                    className="bg-background/50 border-border focus:border-primary h-12 pt-2"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "-top-2 text-xs text-primary bg-card px-2"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={isSubmitting}
                    className="bg-background/50 border-border focus:border-primary h-12 pt-2"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? "-top-2 text-xs text-primary bg-card px-2"
                        : "top-3 text-muted-foreground"
                    }`}
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none pt-6"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;