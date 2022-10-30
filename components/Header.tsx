import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Menu from "./misc/Menu";

type Props = {
  socials: {
    name: string;
    link: string;
  }[];
  setDark: Dispatch<SetStateAction<boolean>>;
  dark: boolean;
};

const Header = ({ socials, dark, setDark }: Props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = () => {
    setDark((prevdark) => {
      localStorage.setItem(
        "preferedColorScheme",
        JSON.stringify({ dark: !prevdark })
      );
      const html = document.querySelector("html") as HTMLElement;
      html.className = !prevdark ? "dark" : "";
      return !prevdark;
    });
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 top-0 z-20 shadow-sm dark:shadow-gray-800 h-[48px] px-5">
      <div className="flex justify-end max-w-5xl h-full mx-auto items-center">
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <ScrollLink to="experience">Experience</ScrollLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <ScrollLink to="skills">Skills</ScrollLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
              <ScrollLink to="projects">Projects</ScrollLink>
            </li>
          </ul>
        </div>
        <div
          className="cursor-pointer mx-4 p-2 rounded-full border border-black hover:bg-black hover:text-white dark:text-yellow-400 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900"
          onClick={toggleDarkMode}
        >
          <BsFillMoonStarsFill size={15} className="block dark:hidden" />
          <BsFillSunFill size={15} className="hidden dark:block" />
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <Menu nav={nav} handleNav={handleNav} socials={socials} dark={dark} />
    </header>
  );
};

export default Header;
