import Image from "next/image";
import Link from "next/link";

type Props = {
  project: {
    name: string;
    thumbnail: string;
    description: string;
    demo: string;
    source: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="relative cursor-pointer flex items-center justify-center h-auto w-full border border-gray-100 shadow-xl shadow-gray-400 dark:shadow-gray-800 dark:shadow-md rounded-xl p-4 group hover:bg-gradient-to-r from-[#1C8D73] dark:text-[#22CB5C] to-[#12B0E8]">
      <Image
        src={`/static/projects/${project.thumbnail}.png`}
        alt={project.name}
        width={1000}
        height={1000}
        className="w-[100%] rounded-xl group-hover:opacity-10 border border-gray-200"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
        <h3 className="text-xl tracking-wider font-bold text-white uppercase border-b border-b-white">
          {project.name}
        </h3>
        <p className="text-justify text-sm py-4 text-white">
          {project.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            href={project.demo}
            className="text-center px-3 py-1 rounded-md bg-white text-gray-700 font-semibold text-md cursor-pointer"
          >
            Demo
          </Link>
          <Link
            href={project.source}
            className="text-center px-3 py-1 rounded-lg bg-white text-gray-700 font-semibold text-md cursor-pointer"
          >
            Source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
