"use client";

import React from "react";
import Heading2 from "@/components/Heading2";
import Image from "next/image";
import { BOM_list } from "@/constants/BOM_Data";


export const metadata = {
  title: "Board Of Members - The Government PU college, Rajanakunte",
  description:
    "lorem",
};
export default function BOM() {
  

  return (
    <div>
      <Heading2 headingText={"Board Members"} />
      <div className="flex flex-col sm:flex-row justify-center ">
        {BOM_list.map((item, index) => (
          <div key={index}>      
              <div className="overflow-visible  bg-gray-500 p-1 rounded-lg m-5 items-start">
                <Image
                  shadow="sm"
                  width={300}
                  height={100}
                  alt={item.title}
                  className="w-full object-cover h-[400px]"
                  style={{ objectFit: "cover" }} // Added style for object-fit
                  src={item.img}
                  
                />
              </div>
              <div className="text-small flex flex-col items-center">
                <p className="font-bold">{item.title}</p>
                <p className="text-default-500">{item.Education}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}