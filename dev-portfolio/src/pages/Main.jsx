import React from "react";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Header } from "../components/Header/Header";
import { TechStack } from '../components/TechStack/TechStack';

export const Main = () => {
  return (
    <div className='container-lg'>
      <Header />
      <AboutMe />
      <TechStack/>
    </div>
  );
};
