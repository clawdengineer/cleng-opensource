import { Badge } from "@/components/ui/badge";

const techStack = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Rust",
  "Go",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-foreground">Why </span>
            <span className="gradient-text">ClawdEngineer?</span>
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              <span className="text-accent font-semibold">ClawdEngineer</span> is the 
              engineering layer built on top of the <span className="text-primary font-semibold">clawdOS</span> ecosystem. 
              🦞🔧
            </p>
            
            <p className="text-lg leading-relaxed">
              We build the tools, infrastructure, and open-source projects that extend 
              and enhance the clawdOS experience. From developer utilities to community-driven 
              innovations — we're the engineers making the ecosystem thrive.
            </p>

            <p className="text-lg leading-relaxed">
              Think of us as the builders constructing on top of the foundation. 
              ClawdOS provides the base, <span className="text-accent font-semibold">ClawdEngineer</span> builds the future.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {techStack.map((tech) => (
                <Badge 
                  key={tech}
                  variant="outline"
                  className="border-accent/50 text-accent hover:bg-accent/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
