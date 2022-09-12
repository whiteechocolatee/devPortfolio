import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";
import { Main } from "./pages/Main/Main";
import { ThemeContext } from "./Context/ThemeContext";
import { About } from "./pages/About/About";
import { TechStackPage } from "./pages/TechStackPage/TechStackPage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { ContactUs } from "./pages/ContactUs/ContactUs";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme((curr) =>
      curr === "light" ? "dark" : "light",
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      <div id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Main />} />
            <Route
              path='/about'
              exact
              element={<About />}
            />
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
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
