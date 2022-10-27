import Image from "next/image";

type Props = {
  experience: {
    designation: string;
    company: string;
    logo: string;
    from: string;
    to: string;
    techStack: string[];
    description: string[];
  };
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 p-8 flex-shrink-0 w-[350px] md:w-[600px] snap-center bg-gray-100 bg-opacity-60 dark:bg-gray-800 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Image
        src={`/static/logos/${experience.logo}.png`}
        alt={experience.company}
        width={200}
        height={200}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-gray-100"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-semibold uppercase tracking-[4px]">
          {experience.designation}
        </h4>
        <p className="text-xl font-bold mt-1 text-gray-500 dark:text-gray-400">
          {experience.company}
        </p>
        <p className="uppercase py-5 text-gray-600 dark:text-gray-300">
          {experience.from} - {experience.to}
        </p>
        <div className="flex space-x-6 mb-4">
          {experience.techStack.map((icon) => (
            <Image
              src={`/static/icons/${icon}.png`}
              alt={icon}
              width={40}
              height={40}
              className="w-10 h-10"
              key={icon}
            />
          ))}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
