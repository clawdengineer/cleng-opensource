import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Clawd Open Source",
    description: "Open-source projects and tools crafted by Cleng the lobster engineer.",
    tags: ["Open Source", "Tools", "Community"],
    githubUrl: "https://github.com/clawdengineer/clawd-open-source",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive into the depths and explore open-source treasures crafted with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
