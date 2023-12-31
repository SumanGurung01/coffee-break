import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Item from "./components/Item";
import Location from "./components/Location";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
    window.scroll(0, 0);
  }, []);
  return (
    <div className="App pb-10">
      <div className="fixed top-0 z-50 w-screen bg-white">
        <Navbar />
      </div>

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/location"} element={<Location />} />
        <Route path={"/:item"} element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
