// ./src/components/public/HomeComponents/PrincipleMsg.jsx
"use client";

import { useState } from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading2 from "@components/Heading2";
import { committieData } from "@/constants/CommittieData";
// Rest of the component...


const PrincipleMsg = () => {
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(0);
  const currentPrinciple = committieData[currentPrincipleIndex];

  const handleNextPrinciple = () => {
    setCurrentPrincipleIndex(
      (currentPrincipleIndex + 1) % committieData.length
    );
  };

  const handlePrevPrinciple = () => {
    setCurrentPrincipleIndex(
      (currentPrincipleIndex - 1 + committieData.length) %
      committieData.length
    );
  };

  return (
    <section className="bg-gray-100 py-8">
      <Heading2 headingText={"College Development Committee"} />
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
        <FontAwesomeIcon
            className="text-5xl text-slate-400"
            icon={faQuoteLeft}
          />
          <p className="text-center">{currentPrinciple.message}</p>
          <div className="text-right my-4">
            <p className="font-semibold">{currentPrinciple.post}</p>
          </div>
        </div>
      </div>

      {/* Add navigation buttons for switching principles */}
      <div className="flex justify-center mt-4">
      <button onClick={handlePrevPrinciple} className="mr-2 bg-orange-500 rounded-lg p-2">{"<"}---Previous</button>
  <button onClick={handleNextPrinciple} className="mr-2 bg-orange-500 rounded-lg p-2">Next---{">"}</button>

      </div>
    </section>
  );
};

export default PrincipleMsg;
