import React from "react";

import { Header } from "../../components/Header/Header";
import { Projects } from "../../components/ProjectList/Projects";
import { Footer } from "../../components/Footer/Footer";

export const ProjectsPage = () => {
  window.scroll(0, 0);

  return (
    <div className='container-lg'>
      <Header />
      <div className='content-wrapper'>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};
