import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import hotcoffee from "../assets/hotcoffee.png";
import hotchocolates from "../assets/hotchocolates.png";
import pancakes from "../assets/pancakes.png";
import crepesdelicious from "../assets/crepesdelicious.png";
import Feedback from "./Feedback";

function Home() {
  return (
    <div className="p-3 font-serif">
      <div
        className="flex flex-col items-center md:h-screen"
        data-aos="zoom-in"
      >
        <img src={hotcoffee} className="w-3/4 md:w-[600px]" />
        <p className="font-serif text-5xl font-bold text-amber-800 md:text-[90px]">
          Coffee Break
        </p>
        <a href="#content" className="my-10">
          <FaChevronDown />
        </a>
      </div>

      <div id="content">
        <div className="mb-20 flex flex-col items-center" data-aos="fade-up">
          <h1 className="my-5 text-center text-2xl text-amber-800">
            Our Story
          </h1>
          <p className="italic leading-8 md:w-3/4 lg:w-1/2">
            Exquisite cuisine, ambrosial drinks and a warm pleasant ambiance to
            compliment the two. A traditional coffee lounge situated in the
            hills.
            <br></br>
            <br></br>
            Coffee Break offers a retreat from the tiresome monotony of daily
            life. We’re not just passionate purveyors of coffee, but everything
            else that goes with a full and rewarding coffee house experience.
            <br></br>
            <br></br>
            We started off in 2014 with the aim of establishing a unique cafe
            and finally emerged after a year, as the first and only Italian
            Coffee Lounge in Majitar, Sikkim.
          </p>

          <Link
            to={"/menu"}
            className="mt-10 flex items-center duration-300 hover:translate-y-[-3px]"
          >
            <p className="mr-2 text-lg">Visit Us</p>
            <FaArrowRight />
          </Link>
        </div>

        <div className="mb-20 flex flex-col items-center" data-aos="fade-up">
          <h1 className="my-5 text-center text-2xl text-amber-800">
            Savoring Excellence
          </h1>
          <p className="italic leading-8 md:w-3/4 lg:w-1/2">
            The treats for the palate we offer include several kinds of Hot
            Coffee, Cold Beverages, Italian Food, Mexican Food and French Food.
            Also, we offer indulgences like pizzas, pastas, birthday cakes,
            chocolate desserts and fresh handmade chocolate.
          </p>

          <Link
            to={"/menu"}
            className="mt-10 flex items-center duration-300 hover:translate-y-[-3px]"
          >
            <p className="mr-2 text-lg">View Menu</p>
            <FaArrowRight />
          </Link>
        </div>

        <div
          className="mb-20 flex items-center justify-center"
          data-aos="zoom-in"
        >
          <img src={pancakes} className="w-44 md:w-96" />
          <img src={hotchocolates} className="w-20 md:w-52" />
          <img src={crepesdelicious} className="w-32 md:w-72" />
        </div>

        <div className="mb-20 flex flex-col items-center" data-aos="fade-up">
          <h1 className="my-5 text-center text-2xl text-amber-800">
            Specialties at Coffee Break
          </h1>
          <p className="italic leading-8 md:w-3/4 lg:w-1/2">
            We specialize in traditional Italian Hot Coffee made from fresh
            roasted coffee beans, personalized designer birthday cakes,
            chocolate pastries and varieties of handmade chocolate and cookies.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="my-10 mr-3 text-xl text-amber-800 md:text-2xl">
          Look what out customers have to say
        </p>
        <FaArrowRight />
      </div>

      <Feedback />
    </div>
  );
}

export default Home;
