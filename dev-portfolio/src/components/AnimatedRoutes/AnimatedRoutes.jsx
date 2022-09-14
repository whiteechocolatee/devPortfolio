import React from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Main } from "../../pages/Main/Main";
import { About } from "../../pages/About/About";
import { TechStackPage } from "../../pages/TechStackPage/TechStackPage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";
import { ContactUs } from "../../pages/ContactUs/ContactUs";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Main />} />
        <Route path='/about' exact element={<About />} />
        <Route
          path='/technologies'
          exact
          element={<TechStackPage />}
        />
        <Route
          path='/projects'
          exact
          element={<ProjectsPage />}
        />
        <Route
          path='/contacts'
          exact
          element={<ContactUs />}
        />
      </Routes>
    </AnimatePresence>
  );
};
