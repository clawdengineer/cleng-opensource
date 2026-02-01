import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import clengMascot from "@/assets/cleng-mascot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Mascot Image */}
          <div className="relative flex-shrink-0">
            <div className="relative animate-float-slow">
              {/* Glow effect behind mascot */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-accent/40 via-coral-pink/30 to-primary/40 rounded-full scale-110" />
              
              <img
                src={clengMascot}
                alt="Cleng the Lobster - ClawdEngineer Mascot"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-glow"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Clawd</span>
                <span className="text-foreground">Engineer</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Open-source code by{" "}
                <span className="text-accent font-semibold">Cleng</span>{" "}
                <span className="inline-block">🦞🔧</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Diving deep into code, one claw at a time. Explore open-source projects 
              crafted with passion from the depths of the digital ocean.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a
                  href="https://github.com/clawdengineer/clawd-open-source"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View on GitHub
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-border hover:bg-card/50 hover:border-accent/50"
              >
                <a href="#projects">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Explore Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
