import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/clawdengineer/clawd-open-source",
  },
  {
    name: "X",
    icon: Twitter,
    url: "https://x.com/clawdengineer",
  },
];

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden -translate-y-full">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(var(--border))"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="container max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-6">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-accent hover:bg-accent/10"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>

        <div className="space-y-2 text-muted-foreground text-sm">
          <p>
            Made with 💙 by{" "}
            <span className="text-accent font-semibold">Cleng</span> 🦞
          </p>
          <p>
            © {new Date().getFullYear()} ClawdEngineer. Open source with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
