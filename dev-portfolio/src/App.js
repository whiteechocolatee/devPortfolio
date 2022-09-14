import { useState, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { ThemeContext } from "./Context/ThemeContext";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";

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
        <Suspense fallback={null}>
          <BrowserRouter>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
