import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { MdRedeem } from "react-icons/md";
import { SiRazer } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdContactSupport } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";

export default function ShopDropDown(props) {
  return (
    <div className="flex p-3 gap-3">
      <div className="mr-28">
        <h2 className="text-xs text-[#FFB400] mb-4">Explore Razer Gold Shop</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-[#44D62C] hover:underline">
              All Games
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#44D62C] hover:underline">
              All Entertainment
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#44D62C] hover:underline">
              Direct Top Up
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#44D62C] hover:underline">
              PINs & Gift Cards
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#44D62C] hover:underline">
              Via Partners' Store
            </a>
          </li>
        </ul>
      </div>
      <div className="border-l-2 border-gray-600 pl-3 ml-3">
        <h2 className="text-xs text-[#FFB400] mb-4">More About Razer Gold</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <FaCirclePlus size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              Razer Gold Account
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MdRedeem size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              Redeem Razer Gold PIN
            </a>
          </li>
          <li className="flex items-center gap-3">
            <SiRazer size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              About Razer Gold
            </a>
          </li>
          <li className="flex items-center gap-3">
            <HiOutlineSpeakerphone size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              News & Events
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MdContactSupport size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              Support & FAQ
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaHandshake size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              Partners
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
