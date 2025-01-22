import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Cards(props) {
  const gridItemsNew = [
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/eafc-mobile/attachment/GUYTE6BVGEZF6RKBIZBV6TLPMJUWYZI=.jpg",
      title: "EA FC Mobile",
      tag: "NEW",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/helldivers%E2%84%A2-2/attachment/GUYTE6BVGEZF6SCFJRGEISKWIVJFHYUEUIQDEIC7KJQXUZLSEBDW63DEEBBWC5DBNRXWO===.jpg",
      title: "HELLDIVERS™ 2",
      tag: "NEW",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/undawn-pins/attachment/GUYTE6BVGEZF6VLOMRQXO3S7INGVG===.jpg",
      title: "Undawn (PINs)",
      tag: "NEW",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/nordvpn-standard/attachment/JZXXEZCWKBHCANJRGJ4DKMJS.png",
      title: "Nord VPN Standard",
      tag: null,
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/asphalt-9/attachment/Asphalt9_512x512.png",
      title: "Asphalt 9",
      tag: "NEW",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/tinder-gold/attachment/GUYTE6BVGEZCAVDJNZSGK4RAI5XWYZA=.jpg",
      title: "Tinder Gold",
      tag: "NEW",
    },
  ];

  const gridItemsPopular = [
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/valorant/attachment/GUYTE6BVGEZCAKBRFE======.jpg",
      title: "Valorant",
      tag: "PROMO",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/roblox/attachment/512x512_Roblox.png",
      title: "Roblox",
      tag: "NEW",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/freefire-direct-top-up/attachment/GUYTE6BVGEZF6RTSMVSSARTJOJSQ====.jpg",
      title: "Garena Free Fire MAX PINs",
      tag: null,
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/genshin-impact/attachment/512x512GenshinImpact.png",
      title: "Genshin Impact",
      tag: null,
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/xbox-live-usa/attachment/GUYTE6BVGEZF6WDCN54FKU2B.jpg",
      title: "XBOX LIVE (USA)",
      tag: "NEW",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/tango/attachment/GUYTE6BVGEZF6VDBNZTW6ICMNF3GK===.jpg",
      title: "Tango",
      tag: "NEW",
    },
  ];
  return (
    <div className="py-8">
      <div className="mx-48 px-3 flex items-center justify-center gap-6">
        <div className="p-6 bg-[#1D1D1D] flex-auto rounded-md border-b-2 border-[#FFB400]">
          <div className="flex items-center mb-5 justify-between ">
            <h2 className="font-bold text-[#FFB400] text-lg ">NEWLY ADDED</h2>
            <div className="flex  items-center justify-center gap-2">
              <h3>View All</h3>
              <span className="text-[#FFB400]">
                <FaAngleRight />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            {gridItemsNew.map((item) => (
              <div
                key={item.title}
                className="flex flex-nowrap gap-3 overflow-hidden mt-2 px-3"
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
              <h3>View All</h3>
              <span className="text-[#FFB400]">
                <FaAngleRight />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            {gridItemsPopular.map((item) => (
              <div
                key={item.title}
                className="flex flex-nowrap gap-3 overflow-hidden mt-2 px-3"
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
