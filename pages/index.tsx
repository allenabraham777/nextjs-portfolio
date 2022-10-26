import Head from "next/head";
import { useEffect, useState } from "react";
import classnames from "classnames";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import data from "../config/_data.json";

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
    setDark(isDarkMode);
  };

  return (
    <div
      className={classnames("overflow-hidden", { dark, "text-white": dark })}
    >
      <Head>
        <title>Allen K Abraham</title>
        <meta
          name="description"
          content="I'm a fullstack developer with a wide range of experience in javascript and related technologies."
        />
      </Head>
      {/* Header */}
      <Header socials={data.socials} dark={dark} setDark={setDark} />
      {/* Hero */}
      <section id="hero">
        <Hero socials={data.socials} />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Projects */}
      <Projects projects={data.projects} />
      {/* Skills */}
      <Skills skills={data.skills} />
      {/* Socials */}
    </div>
  );
}
