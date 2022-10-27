import Image from "next/image";
import { SocialIcon } from "react-social-icons";

type Props = {
  dark: boolean;
  socials: {
    name: string;
    link: string;
  }[];
};

const Hero = ({ socials, dark }: Props) => {
  return (
    <div className="w-full h-screen text-center dark:bg-gray-900">
      <div className="max-w-5xl w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="pt-4 text-[#1C8D73] dark:text-[#22CB5C] text-5xl font-bold">
            Allen K Abraham
          </h1>
          <h1 className="text-gray-700 py-2 text-3xl font-bold dark:text-gray-200">
            Web Developer
          </h1>
          <p className="py-2 text-gray-600 max-w-[70%] m-auto dark:text-gray-400">
            A Maker by heart and tinker with things to use it in my work.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-2">
            {socials.map((social) => (
              <div
                key={social.name}
                className=" cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <SocialIcon
                  url={social.link}
                  network={social.name}
                  label={social.name}
                  fgColor={dark ? "#22CB5C" : "#1C8D73"}
                  bgColor="transparent"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </div>
            ))}
          </div>
          <div className="w-[160px] h-[160px] rounded-full mx-auto mt-4 overflow-hidden shadow-lg shadow-gray-400 dark:shadow-gray-800">
            <Image
              src={"/static/allen.png"}
              alt="allen"
              width={160}
              height={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
