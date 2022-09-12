import React from "react";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Projects } from "../../components/ProjectList/Projects";
import { TechStack } from "../../components/TechStack/TechStack";

export const Main = () => {
  window.scroll(0, 0);
  return (
    <div className='container-lg'>
      <Header />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
};
