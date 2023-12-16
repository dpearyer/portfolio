import React from "react";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Special from "./components/Special";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App(){
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <AboutMe />
      <Skills/>
      <Projects />
      <Contact />
      <Special />
    </main>
  );
}