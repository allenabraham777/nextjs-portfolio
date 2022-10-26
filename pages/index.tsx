import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Allen K Abraham</title>
        <meta
          name="description"
          content="I'm a fullstack developer with a wide range of experience in javascript and related technologies."
        />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Socials */}
    </div>
  );
}
