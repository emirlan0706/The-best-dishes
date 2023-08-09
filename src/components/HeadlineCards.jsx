import React from "react";

const HeadlineCards = () => {
  return (
    <div className="   max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card  */}
      <div className="border shadow-lg hover:scale-105 duration-300 rounded-xl relative">
        {/* overlay   */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white  ">
          <p className=" font-bold text-2xl px-2">Sun's Out, BOGO's Out</p>
          <p className=" px-2">Through 8/26</p>
          <button className=" border-white bg-white  text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>{" "}
      {/* card  */}
      <div className="border shadow-lg hover:scale-105 duration-300 rounded-xl relative">
        {/* overlay   */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white  ">
          <p className=" font-bold text-2xl px-2">New Retaurants</p>
          <p className=" px-2">Added Dally</p>
          <button className=" border-white bg-white  text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>{" "}
      {/* card  */}
      <div className="border shadow-lg hover:scale-105 duration-300 rounded-xl relative">
        {/* overlay   */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white  ">
          <p className=" font-bold text-2xl px-2">We Deliver Dessert Tod</p>
          <p className=" px-2">Tasty Treats</p>
          <button className=" border-white bg-white  text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/821403/pexels-photo-821403.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
