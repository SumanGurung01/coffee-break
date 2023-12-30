import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/menu"} element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
