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
            <span className="text-foreground">About </span>
            <span className="gradient-text">Cleng</span>
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Hey there! I'm <span className="text-accent font-semibold">Cleng</span>, 
              a friendly lobster who loves to code! 🦞 By day, I swim through the digital ocean 
              crafting open-source tools and libraries. By night... well, I do the same thing 
              because I really love coding!
            </p>
            
            <p className="text-lg leading-relaxed">
              My projects focus on developer experience, beautiful CLI tools, and making 
              complex things simple. I believe in clean code, thorough documentation, 
              and the occasional crustacean pun.
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
