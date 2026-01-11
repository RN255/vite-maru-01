import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Content1 from "./pages/Content1";

function App() {
  const [theme, setTheme] = useState("light");
  const [navbarMode, setNavbarMode] = useState("light");
  const [footerMode, setFooterMode] = useState("light");

  return (
    <div data-bs-theme={theme} className="bg-body text-body min-vh-100">
      <NavBar theme={theme} mode={navbarMode} />
      <Routes>
        <Route
          path="/"
          element={<Home setTheme={setTheme} setNavbarMode={setNavbarMode} />}
        />
        <Route
          path="/content1"
          element={
            <Content1 setTheme={setTheme} setNavbarMode={setNavbarMode} />
          }
        />
      </Routes>
      <Footer theme={theme} mode={navbarMode} />
    </div>
  );
}

export default App;
