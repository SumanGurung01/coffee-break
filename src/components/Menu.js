import React from "react";

function Menu() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100 md:w-[500px]">
        <img
          src={require("../assets/coldcoffee.png")}
          className="mr-3 h-32 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Cold Coffee</p>
          <p className="text-base text-zinc-500">
            Traditional Italian coffee with freshly roasted & handpicked coffee
            beans.
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img
          src={require("../assets/hotcoffee.png")}
          className="mr-3 h-24 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Hot Coffee</p>
          <p className="text-base text-zinc-500">
            Traditional Italian coffee with freshly roasted & handpicked coffee
            beans.
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img
          src={require("../assets/hotchocolates.png")}
          className="mr-3 h-32 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Hot Chocolate</p>
          <p className="text-base text-zinc-500">
            Rich and Creamy chocolate flavor combined with hot milk
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img
          src={require("../assets/frappeandshake.png")}
          className="mr-3 h-32 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Frappes and Shakes</p>
          <p className="text-base text-zinc-500">
            Traditional chocolate shakes blended with ice cream & your favorite
            chocolates
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img
          src={require("../assets/sundaes.png")}
          className="mr-3 h-28 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Sundaes</p>
          <p className="text-base text-zinc-500">
            Frozen dessert with three scoops of ice cream topped with sauce or
            syrup and other
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img
          src={require("../assets/crepesdelicious.png")}
          className="mr-3 h-24 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Crepes De Licious</p>
          <p className="text-base text-zinc-500">
            Thin pancakes served with different varieties of fruits, cheese and
            flavors.
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img src={require("../assets/pasta.png")} className="mr-3 h-24 w-32" />
        <div>
          <p className="my-2 text-2xl font-bold">Pasta</p>
          <p className="text-base text-zinc-500">
            Traditional Italian pasta served with fresh veggies & homemade fresh
            sauce
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img src={require("../assets/pizza.png")} className="mr-3 h-24 w-32" />
        <div>
          <p className="my-2 text-2xl font-bold">Pizza</p>
          <p className="text-base text-zinc-500">
            Classic Italian thin crust pizza loaded with farm fresh juicy
            veggies and mozzarella cheese
          </p>
        </div>
      </div>

      <div className="flex h-[140px] w-[350px] items-center rounded-lg shadow-lg duration-300 hover:cursor-pointer hover:bg-zinc-100  md:w-[500px] ">
        <img
          src={require("../assets/pancakes.png")}
          className="mr-3 h-20 w-32"
        />
        <div>
          <p className="my-2 text-2xl font-bold">Pancakes</p>
          <p className="text-base text-zinc-500">
            Flat cake topped with butter and rolled up with a sweet maple syrup,
            friuts and savoury filling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
