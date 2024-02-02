// Timetable.js
import React from 'react';
import Image from 'next/image';
import Heading2 from "@/components/Heading2";
import { timetableData } from '@/constants/timetableData';

export const metadata = {
  title: "Time-Table - The Government PU college, Rajanakunte",
  description: "lorem",
};

const Timetable = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <Heading2 headingText={"School Timetable"} />
      <div className="flex flex-wrap">
        {timetableData.map((day, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Image src={day.image} alt={`Timetable for ${day.day}`} className="w-full h-auto"
            width={100}
            height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
