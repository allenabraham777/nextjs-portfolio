import ExperienceCard from "./misc/ExperienceCard";

type Props = {
  experiences: {
    designation: string;
    company: string;
    logo: string;
    from: string;
    to: string;
    techStack: string[];
    description: string[];
  }[];
};

const Experience = ({ experiences }: Props) => {
  return (
    <div className="w-full px-4 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-2 py-16">
        <h2 className="text-xl tracking-widest uppercase text-[#1C8D73] dark:text-[#22CB5C] font-bold">
          Experience
        </h2>
        <h1 className="text-4xl tracking-widest uppercase text-gray-600 dark:text-gray-300 mb-4">
          What my career looks like.
        </h1>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1C8D73] dark:scrollbar-thumb-[#22CB5C]">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
