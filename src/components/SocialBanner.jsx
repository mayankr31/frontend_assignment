import React from "react";

export default function SocialBanner(props) {
  return (
    <div className="flex mx-48 mb-3">
      <img src="src\images\banner.png" alt="razerbanner" className="w-[490px] opacity-90"/>
      <div className="px-3 py-5">
        <p className="mb-[10px] text-[#BBBBBB] text-sm">
          Epic Games. Limited Edition in-game content. Exclusive promotions.
          Follow us on <a href="https://www.facebook.com/RazerGoldSilver/" className="text-white underline">Razer Gold Facebook Page</a> to get more back and get
          rewarded!
        </p>
        <div className="flex justify-center items-center gap-4">
            <a href="https://www.facebook.com/RazerGoldSilver/" className="text-sm">LIKE US ON FACEBOOK!</a>
            <img src="https://media.gold.razer.com/goldweb/site/images/icons/social-media-facebook.png" alt="fb" className="w-[30px] h-[30px]"/>
        </div>
      </div>
    </div>
  );
}
