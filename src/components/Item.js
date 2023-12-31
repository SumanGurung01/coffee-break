import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../libs/constant.js";

function Item() {
  const { item } = useParams();
  const [menuItem, setMenuItem] = useState({});

  useEffect(() => {
    menu.forEach((catagory) => {
      if (catagory.img_name === item) {
        setMenuItem(catagory);
      }
    });
  }, []);

  return (
    Object.keys(menuItem).length !== 0 && (
      <div className="mt-32 flex flex-col justify-center p-3 md:flex-row">
        <img
          src={require(`../assets/${menuItem.img_name}.png`)}
          className="w-full md:mx-20 md:h-[500px] md:w-[500px]"
          data-aos="fade-right"
        ></img>

        <div data-aos="fade-left">
          <p className="my-6 text-4xl font-bold text-amber-800">
            {menuItem.display_name}
          </p>
          {menuItem.items.map((item) => (
            <div className="my-6 w-[300px] md:w-[500px]">
              <p className="text-2xl font-semibold">{item.name}</p>
              <p className="text-base font-semibold text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Item;
