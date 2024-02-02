// Timetable.js

import React from "react";
import Heading2 from "@/components/Heading2";
import { timetableData } from "@/constants/timetableData";
import Image from "next/image";

export const metadata = {
  title: "Time-Table - The Government PU college, Rajanakunte",
  description: "lorem",
};

const Timetable = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-2 px-2">
      <Heading2 headingText={"School Timetable"} />
      <div className="flex flex-wrap justify-center">
        {timetableData.map((day, index) => (


          <div key={index} className="flex h-4/6 w-4/6 mb-5 rounded-xl p-2 bg-slate-400 flex-row ml-5 hover:scale-125">
            <Image
              src={day.image}
              width={400}
              height={400}
              alt={`Timetable for ${day.day}`}
              className={`w-full h-auto object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
