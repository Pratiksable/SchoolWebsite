// Timetable.js
import React from 'react';
import Heading2 from "@/components/Heading2";
import { timetableData } from '@/constants/timetableData'; // Adjust the path accordingly
export const metadata = {
  title: "Time-Table - The Government PU college, Rajanakunte",
  description:
    "lorem",
};
const Timetable = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <Heading2 headingText={"School Timetable"} />
      <table className="w-full border-collapse border border-gray-400 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2"></th>
            {timetableData.map((day, index) => (
              <th key={index} className="border border-gray-400 p-2">{day.day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetableData[0].periods.map((period, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{period}</td>
              {timetableData.map((day, index) => (
                <td key={index} className="border border-gray-400 p-2">{day.periods[index]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
