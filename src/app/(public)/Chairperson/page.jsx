// ./src/components/public/HomeComponents/PrincipleMsg.jsx
"use client";

import { useState } from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading2 from "@components/Heading2";
import principles1 from '@images/Picture3.jpg'
import principles2 from '@images/Picture4.jpg'
import principles3 from '@images/Picture5.jpg'

export const metadata = {
  title: "Chaiperson - The Government PU college, Rajanakunte",
  description:
    "lorem",
};


const Chairperson = () => {
  const principlesData = [
    {
      name: "Shri S R Vishwanath",
      post: "MLA, Yelahanka | Member, TTD Board | Former Chairman, Bangalore Development Authority (BDA)",
      imageSrc:  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
      message:
        "Singanayakanahalli Ramaiah Vishwanath is an Indian Politician who is current MLA from Yelahanka constituency since 25 May 2008. He is former Chairman of Bangalore Development Authority and presently Member of Tirumala Tirupati Devasthanams (TTD) Board.He is a social worker and the chairperson of Government school and PU college of Rajanukunte. He is the founder of Vishwa Vani Foundation.",
    },
  ];

  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(0);
  const currentPrinciple = principlesData[currentPrincipleIndex];

  return (
    <section className="bg-gray-100 py-8">
      <Heading2 headingText={"Principle Message"} />
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