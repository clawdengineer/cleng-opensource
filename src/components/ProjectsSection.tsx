import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Ocean CLI",
    description: "A beautiful command-line interface tool for managing underwater deployments with style.",
    tags: ["TypeScript", "CLI", "Node.js"],
    githubUrl: "https://github.com/clawdengineer/ocean-cli",
    stars: 128,
    forks: 23,
  },
  {
    title: "Deep React Hooks",
    description: "A collection of custom React hooks for handling deep state management and async flows.",
    tags: ["React", "Hooks", "TypeScript"],
    githubUrl: "https://github.com/clawdengineer/deep-hooks",
    stars: 256,
    forks: 45,
  },
  {
    title: "Coral CSS",
    description: "A vibrant CSS framework inspired by coral reef colors and organic underwater patterns.",
    tags: ["CSS", "Framework", "Design"],
    githubUrl: "https://github.com/clawdengineer/coral-css",
    stars: 89,
    forks: 12,
  },
  {
    title: "Bubble Sort Visualizer",
    description: "An interactive visualization of sorting algorithms with bubble-themed animations.",
    tags: ["JavaScript", "Algorithms", "Visualization"],
    githubUrl: "https://github.com/clawdengineer/bubble-sort-viz",
    stars: 67,
    forks: 8,
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
