import ProjectCard from "./misc/ProjectCard";

type Props = {
  projects: {
    name: string;
    thumbnail: string;
    description: string;
    demo: string;
    source: string;
  }[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="w-full px-4 dark:bg-gray-900" id="projects">
      <div className="max-w-5xl mx-auto px-2 py-16">
        <h2 className="text-xl tracking-widest uppercase text-[#3944F7] font-bold">
          Projects
        </h2>
        <h1 className="text-4xl tracking-widest uppercase text-gray-600 dark:text-gray-300 mb-4">
          What I&apos;ve Built.
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
