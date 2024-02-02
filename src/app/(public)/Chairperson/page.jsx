// ./src/components/public/HomeComponents/PrincipleMsg.jsx
"use client";

import { useState } from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading2 from "@components/Heading2";
import { chairpersonData } from "@/constants/CommittieData";

export const metadata = {
  title: "Chaiperson - The Government PU college, Rajanakunte",
  description:
    "lorem",
};


const Chairperson = () => {
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(0);
  const currentPrinciple = chairpersonData[currentPrincipleIndex];

  return (
    <section className="bg-gray-100 py-8">
      <Heading2 headingText={"About Chairperson"} />
      <div className="max-w-screen-md grid md:grid-cols-2 gap-16 mx-auto p-3">
        <div className="grid h-full w-full rounded-lg overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              className="w-full hover:scale-110 duration-500 cursor-pointer"
              src={currentPrinciple.imageSrc}
              height={300}
              width={300}
              alt={`Image of ${currentPrinciple.name}`}
            />
          </div>

          <p className=" cursor-pointer bg-primary-regular text-center p-2 w-full text-white font-semibold">
            {currentPrinciple.name}
          </p>
        </div>

        <div className="animation-on-scroll flex justify-center flex-col">
          <p className="text-left">{currentPrinciple.message}</p>
          <div className="text-right my-4">
            <p className="font-semibold text-right">{currentPrinciple.post}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairperson;