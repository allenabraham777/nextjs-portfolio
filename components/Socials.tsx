import { SocialIcon } from "react-social-icons";

type Props = {
  socials: {
    name: string;
    link: string;
  }[];
  dark: boolean;
};

const Socials = ({ socials, dark }: Props) => {
  return (
    <div className="w-full px-4 md:pb-64 pb-32 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col justify-center pt-8 md:pt-16 h-full">
        <h2 className="text-xl tracking-widest uppercase text-[#1C8D73] dark:text-[#22CB5C] font-bold">
          Let&apos;s Connect
        </h2>
        <h1 className="text-4xl tracking-widest uppercase text-gray-600 dark:text-gray-300">
          Get me here.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-16 md:pt-[120px]">
          {socials.map((social) => (
            <div
              key={social.name}
              className="cursor-pointer hover:scale-105 ease-in duration-300 text-center"
            >
              <SocialIcon
                url={social.link}
                network={social.name}
                label={social.name}
                fgColor={dark ? "white" : "transparent"}
                style={{ width: "5rem", height: "5rem" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
