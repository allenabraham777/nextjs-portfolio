import Head from "next/head";
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
    setColorMode();
  }, []);

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

  return (
    <div
      className={classnames("overflow-hidden snap-y snap-mandatory", {
        dark,
        "text-white": dark,
      })}
    >
      <Head>
        <title>Allen K Abraham</title>
        <meta
          name="description"
          content="I'm a fullstack developer with a wide range of experience in javascript and related technologies."
        />
      </Head>

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
