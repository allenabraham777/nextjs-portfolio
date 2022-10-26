import Image from "next/image";

type Props = {
  skill: {
    name: string;
    icon: string;
  };
};

const Skillcard = ({ skill }: Props) => {
  return (
    <div className="p-6 hover:scale-105 ease-in duration-300 cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`/static/icons/${skill.icon}.png`}
            alt={skill.name}
            width={64}
            height={64}
          />
        </div>
        <div className="text-2xl">{skill.name}</div>
      </div>
    </div>
  );
};

export default Skillcard;
