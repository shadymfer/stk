import Image from "next/image";
import React from "react";
import meIMG from "../../public/assets/mefullg.png";
import solIMG from "../../public/assets/solanaLogo.png";
const ShadySpanner = () => {
  return (
    <div>
      <div className="h-[128px] md:h-[250px] mb-40  bg-slate-900/50 grid grid-cols-4 justify-center items-center p-10  ">
        <div className="col-span-2  ">
          <Image src={meIMG}></Image>
        </div>

        <div className="col-span-2 ">
          <Image src={solIMG}></Image>
        </div>
      </div>
    </div>
  );
};

export default ShadySpanner;
