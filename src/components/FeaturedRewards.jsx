import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { rewardItems } from "../data";


export default function FeaturedRewards(props) {
  return (
    <div className="py-8">
      <div className="mx-48 px-3 flex items-center mb-5 justify-between">
        <h2 className="font-bold text-[#30D5FF] text-lg ">FEATURED REWARDS</h2>
        <div className="flex  items-center justify-center gap-2">
          <h3 className="hover:text-[#44D62C] cursor-pointer">View All</h3>
          <span className="text-[#30D5FF]">
            <FaAngleRight />
          </span>
        </div>
      </div>
      <div className="flex gap-5 mx-48 px-3 w-[900px]">
        {rewardItems.map((item, index)=>(
            <div key={index} className="flex flex-col justify-between cursor-pointer">
            {/* img */}
            <div className="flex flex-nowrap gap-3 rounded-md rounded-b-none bg-[#1D1D1D] overflow-hidden mt-2 pr-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-1/3 object-cover h-[90px]"
              />
              <div className="flex flex-col justify-between  my-3 ">
                <h2 className="text-xs mb-2">{item.title}</h2>
                <div className="flex items-center gap-1 justify-start w-[100px]">
                  <img
                    src="https://media.gold.razer.com/goldweb/site/images/icons/coin_zsilver_no_ths.svg"
                    alt="silvercoin"
                    width={12}
                    height={12}
                  />
                  <span className="text-[#30D5FF] text-xs">{item.coins}</span>
                </div>
              </div>
            </div>
            {/* new */}
            <div className="p-[10px] h-[50px] border-b-2 border-[#30D5FF] justify-start rounded-b-md bg-[#161616]"><span className="font-bold text-black text-xs py-1 px-1 bg-[#44D62C] w-min">NEW</span></div>
          </div>
        ))}            
      </div>
      
    </div>
  );
}
