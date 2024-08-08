"use client";

import { Navbar } from "./Components/Mainsections/Navbar/Navbar";
import Hero from "./Components/Mainsections/Hero/Hero";
import { navItems } from "../public/data";
import Projects from "./Components/Mainsections/Projects/Projects";
import { GlobalStyles } from './GlobalStyles';
import Experience from "./Components/Mainsections/Experience/Experience";
import Contact from "./Components/Mainsections/Contact/Contact";
import Tech from "./Components/Mainsections/Tech/Tech";
import Scroll from "./Components/Scroll";

export default function Home() {
  return (
    <main>
      <GlobalStyles />
          <Navbar navItems={navItems} className="nav" />
          <Hero idName="#hero" />
          <Experience idName="" />
          <Projects idName="#projects" />
          <Tech idName="tech" />
          <Contact idName="#contact" />
    </main>
  );
}
