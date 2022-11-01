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
    <div className="relative overflow-hidden cursor-pointer flex items-center justify-center h-auto w-full border border-gray-200 shadow-lg shadow-gray-400 dark:shadow-gray-800 dark:shadow-md rounded-xl p-4 group hover:bg-gradient-to-r from-cyan-500 to-blue-500">
      <Image
        src={`/static/projects/${project.thumbnail}.png`}
        alt={project.name}
        width={1000}
        height={1000}
        className="w-[100%] rounded-xl group-hover:opacity-10 border border-gray-200"
      />
      <h3 className="absolute bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] py-2 text-center bottom-[0] left-[50%] translate-x-[-50%] group-hover:opacity-0 text-xl tracking-wider font-bold text-white uppercase">
        {project.name}
      </h3>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
        <p
          className="text-justify text-sm md:text-lg py-4 text-white leading-7 md:leading-10"
          dangerouslySetInnerHTML={{
            __html: project.description.replaceAll(
              "<b>",
              '<b class="border border-1 border-white bg-teal-700 text-white px-1 py-[2px] rounded-[3px]">'
            ),
          }}
        />
        <div className="flex justify-between items-center sm:mt-4">
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
