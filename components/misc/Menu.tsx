import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import socials from "../../config/socials.json";
import { SocialIcon } from "react-social-icons";
import classnames from "classnames";

type Props = {
  handleNav: () => void;
  nav: boolean;
};

const Menu = ({ handleNav, nav }: Props) => {
  return (
    <div
      className={classnames("md:hidden", {
        "fixed left-0 top-0 w-full h-screen bg-black/50": nav,
      })}
      onClick={handleNav}
    >
      <div
        className={classnames(
          "fixed top-0 h-screen bg-white p-10 ease-in duration-500 z-200",
          {
            "left-0 width-[75%] sm:w-[60%] md:w-[45%]": nav,
            "left-[-100%]": !nav,
          }
        )}
      >
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl">ALLEN K ABRAHAM</h1>
            </div>
            <div
              className="rounded-full shadow-lg border border-gray-100 p-3 cursor-pointer"
              onClick={handleNav}
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="py-4">Let's explore more...</p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className=" uppercase">
            <li className="py-4 text-sm">
              <Link href="/">Home</Link>
            </li>
            <li className="py-4 text-sm">
              <Link href="/">About</Link>
            </li>
            <li className="py-4 text-sm">
              <Link href="/">Skills</Link>
            </li>
            <li className="py-4 text-sm">
              <Link href="/">Projects</Link>
            </li>
            <li className="py-4 text-sm">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-purple-600">
              Let's Connect
            </p>
            <div className="flex items-center gap-5 my-4 w-full">
              {socials.map((social) => (
                <div
                  key={social.name}
                  className="rounded-full shadow-lg text-sm border border-gray-100 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <SocialIcon
                    url={social.link}
                    network={social.name}
                    label={social.name}
                    fgColor="black"
                    bgColor="transparent"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;