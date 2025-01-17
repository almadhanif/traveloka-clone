import Image from "next/image";
import React from "react";

import DummyFull from "@/assets/img/web-full.png";

const DummySection = () => {
  return (
    <div className="w-full h-fit">
      <Image src={DummyFull} alt="dummy" className="w-full h-full object-cover" />
    </div>
  );
};

export default DummySection;
