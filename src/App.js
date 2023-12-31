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
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="App">
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

      <div className="mt-10 flex h-32 flex-col justify-center bg-zinc-200 p-3 md:h-20 md:flex-row md:justify-around">
        <div className="my-2 flex items-center gap-2">
          <FaPhoneAlt />
          <p>+91 99XXXXXX01</p>
        </div>

        <div className="my-2 flex items-center gap-2">
          <MdLocationOn />
          <p>Majhitar, Rangpo 737132, India</p>
        </div>

        <div className="my-2 flex items-center gap-2">
          <IoMail />
          <p>infocbreak@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
