import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from "./components/Header/Header";
import "./index.css";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
