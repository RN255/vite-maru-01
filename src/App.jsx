import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Content1 from "./pages/Content1";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content1" element={<Content1 />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
