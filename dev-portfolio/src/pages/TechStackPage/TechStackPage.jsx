import React from "react";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TechStack } from "../../components/TechStack/TechStack";

export const TechStackPage = () => {
  window.scroll(0, 0);

  return (
    <div className='container-lg'>
      <Header />
      <div className='content-wrapper'>
        <TechStack />
      </div>
      <Footer />
    </div>
  );
};
