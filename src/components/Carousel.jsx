import React from "react";

export default function Carousel(props) {
  const items = [
    <div className="h-[480px] w-full">
      <img src="src\images\3games.png" alt="3games" />
      <h3 className="text-center">NEW YEAR, NEW GAMES & MORE GOLD</h3>
      <h2 className="text-center text-2xl text-[#44D62C] mt-1">
        ENJOY 15% EXTRA BONUS GOLD ON ALL GAMES!
      </h2>
    </div>,

    <div className="h-[480px] w-full">
      <img src="src\images\valo1.png" alt="valorant" />
      <h3 className="text-center">VALORANT S25 IS HERE</h3>
      <h2 className="text-center text-2xl text-[#44D62C] mt-1">
        GRAB 4% DISCOUNT + GET 15% BONUS RAZER GOLD NOW!
      </h2>
    </div>,

    <div className="h-[480px] w-full">
      <img src="src\images\roblox.png" alt="roblox" />
      <h3 className="text-center">BUY ROBLOX PINS ON RAZER GOLD</h3>
      <h2 className="text-center text-2xl text-[#44D62C] mt-1">
        GET ROBLOX POINTS AT THE BEST PRICES NOW!
      </h2>
    </div>,

    <div className="h-[480px] w-full">
      <img src="src\images\freefire.png" alt="freefire" />
      <h3 className="text-center">BOOYAH & DOMINATE MAX!</h3>
      <h2 className="text-center text-2xl text-[#44D62C] mt-1">
        RECHARGE DIAMONDS ON RAZER GOLD!
      </h2>
    </div>,

    <div className="h-[480px] w-full">
      <img src="src\images\valo2.png" alt="valorant" />
      <h3 className="text-center">LOWEST PRICES ON VP</h3>
      <h2 className="text-center text-2xl text-[#44D62C] mt-1">
        GET 4% DISCOUNT + 15% BONUS RAZER GOLD!
      </h2>
    </div>,

    <div className="h-[480px] w-full">
      <img src="src\images\valo3.png" alt="valorant" />
      <h3 className="text-center">VALORANT S25 IS HERE</h3>
      <h2 className="text-center text-2xl text-[#44D62C] mt-1">
        GRAB 4% DISCOUNT + GET 15% BONUS RAZER GOLD NOW!
      </h2>
    </div>,
  ];

  const responsive = {
    0: {
      items: 1,
    },
  };

  return (
    <div className="flex flex-col items-center cursor-pointer justify-around h-[480px] w-full">
      
    </div>
  );
}
