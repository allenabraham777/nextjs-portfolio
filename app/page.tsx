"use client";
import { useEffect, useState } from "react";
import classnames from "classnames";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import data from "../config/_data.json";
import Experience from "../components/Experience";
import Socials from "../components/Socials";

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const setColorMode = async () => {
      let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
      let isDarkMode = mediaQueryObj.matches;
      const savedMode = localStorage.getItem("preferedColorScheme");
      if (savedMode) {
        const { dark: _dark } = await JSON.parse(savedMode);
        isDarkMode = _dark;
      }
      const html = document.querySelector("html") as HTMLElement;
      html.className = isDarkMode ? "dark" : "";
      setDark(isDarkMode);
    };

    setColorMode();
  }, []);

  return (
    <div
      className={classnames("overflow-hidden snap-y snap-mandatory", {
        dark,
        "text-white": dark,
      })}
    >
      <Header socials={data.socials} dark={dark} setDark={setDark} />

      <section id="hero" className="snap-start">
        <Hero socials={data.socials} dark={dark} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={data.experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={data.skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={data.projects} />
      </section>

      <section id="connect" className="snap-center">
        <Socials socials={data.socials} dark={dark} />
      </section>
    </div>
  );
}
