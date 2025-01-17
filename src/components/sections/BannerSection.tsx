import React from "react";
import PaddingContainer from "../containers/PaddingContainer";
import Image from "next/image";
import Banner1 from "@/assets/banner/banner1.webp";
import Banner2 from "@/assets/banner/banner2.webp";

const BannerSection = () => {
  return (
    <PaddingContainer>
      <div className="w-full mt-5">
        <Image src={Banner1} alt="banner-promo-1" className="w-full object-cover pt-2 pb-10" />
      </div>
      <div className="w-full">
        <Image src={Banner2} alt="banner-promo-1" className="w-full object-cover py-10" />
      </div>
    </PaddingContainer>
  );
};

export default BannerSection;
