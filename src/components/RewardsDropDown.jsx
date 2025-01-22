import React from "react";
import { MdDiamond } from "react-icons/md";
import { MdRedeem } from "react-icons/md";
import { SiRazer } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdContactSupport } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";

export default function RewardsDropDown(props) {
  return (
    <div className="flex p-3 gap-3">
      <div className="mr-28">
        <h2 className="text-xs text-[#30D5FF] mb-4">
          Explore Razer Silver Rewards
        </h2>
        <div className="flex gap-28">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                All Rewards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Gear & Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Keyboards & Consoles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Mice & Mats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Audio & Content Creation
              </a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Gift Cards & Discounts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Game Credits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                LifeStyle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#44D62C] hover:underline">
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-l-2 border-gray-600 pl-3 ml-3">
        <h2 className="text-xs text-[#30D5FF] mb-4">More About Razer Silver</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <MdDiamond size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              How to Earn
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MdRedeem size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              Redeem Razer Silver Voucher
            </a>
          </li>
          <li className="flex items-center gap-3">
            <SiRazer size={20} color="#999999" />
            <a
              href="#"
              className="hover:text-[#44D62C] hover:underline text-[#999999]"
            >
              About Razer Silver
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
