import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";
import { Main } from "./pages/Main";
import { ThemeContext } from "./Context/ThemeContext";

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
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
