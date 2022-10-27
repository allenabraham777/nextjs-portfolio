import Skillcard from "./misc/Skillcard";

type Props = {
  skills: {
    name: string;
    icon: string;
  }[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="w-full lg:h-screen p-4 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col justify-center h-full">
        <h2 className="text-xl tracking-widest uppercase text-[#1C8D73] dark:text-[#22CB5C] font-bold">
          Skills
        </h2>
        <h1 className="text-4xl tracking-widest uppercase text-gray-600 dark:text-gray-300">
          What I can do.
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
          {skills.map((skill) => (
            <Skillcard skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
