import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./misc/Menu";

type Props = {};

const Header = (props: Props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="sticky top-0 z-20 shadow-sm h-20 px-5">
      <div className="flex justify-between max-w-7xl h-full mx-auto items-center">
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <Menu nav={nav} handleNav={handleNav} />
    </header>
  );
};

export default Header;
