import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { gridItemsNew, gridItemsPopular } from "../data";


export default function Cards(props) {
  
  return (
    <div className="py-8 mt-11">
      <div className="mx-48 px-3 flex items-center justify-center gap-6">
        <div className="p-6 bg-[#1D1D1D] flex-auto rounded-md border-b-2 border-[#FFB400]">
          <div className="flex items-center mb-5 justify-between ">
            <h2 className="font-bold text-[#FFB400] text-lg ">NEWLY ADDED</h2>
            <div className="flex  items-center justify-center gap-2">
              <h3 className="hover:text-[#44D62C] cursor-pointer">View All</h3>
              <span className="text-[#FFB400]">
                <FaAngleRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {gridItemsNew.map((item) => (
              <div
                key={item.title}
                className="flex flex-nowrap gap-3 overflow-hidden mt-2 px-3 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-1/3 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between my-3">
                  <h2 className="text-sm mb-2">{item.title}</h2>
                  {item.tag && (
                    <span className={`font-bold text-xs py-1 px-1 text-black ${item.tag=="NEW"?"bg-[#44D62C]":"bg-[#FFB400]"} w-min`}>
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-[#1D1D1D] flex-auto rounded-md border-b-2 border-[#FFB400]">
          <div className="flex items-center mb-5 justify-between ">
            <h2 className="font-bold text-[#FFB400] text-lg ">POPULAR</h2>
            <div className="flex  items-center justify-center gap-2">
              <h3 className="hover:text-[#44D62C] cursor-pointer">View All</h3>
              <span className="text-[#FFB400]">
                <FaAngleRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {gridItemsPopular.map((item) => (
              <div
                key={item.title}
                className="flex flex-nowrap gap-3 overflow-hidden mt-2 px-3 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-1/3 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between my-3">
                  <h2 className="text-sm mb-2">{item.title}</h2>
                  {item.tag && (
                    <span className={`font-bold text-xs py-1 px-1 text-black ${item.tag=="NEW"?"bg-[#44D62C]":"bg-[#FFB400]"} w-min`}>
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}


