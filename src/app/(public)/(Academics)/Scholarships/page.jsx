// ScholarshipPage.js
import React from 'react';
import Heading2 from "@/components/Heading2";

import { scholarshipData } from '@/constants/scholarshipData'; // Adjust the path accordingly
export const metadata = {
  title: "Scholarships - The Government PU college, Rajanakunte",
  description:
    "lorem",
};
const ScholarshipPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      <Heading2 headingText={"Scholarships"} />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 p-3 font-semibold">Name</th>
              <th className="border border-gray-300 p-3 font-semibold">Description</th>
              <th className="border border-gray-300 p-3 font-semibold">Eligibility</th>
              <th className="border border-gray-300 p-3 font-semibold">Benefits</th>
            </tr>
          </thead>
          <tbody>
            {scholarshipData.map((scholarship, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-3">{scholarship.name}</td>
                <td className="border border-gray-300 p-3">{scholarship.description}</td>
                <td className="border border-gray-300 p-3">
                  {Array.isArray(scholarship.eligibility) ? (
                    <ul className="list-disc ml-6">
                      {scholarship.eligibility.map((point, index) => (
                        <li key={index} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{scholarship.eligibility}</p>
                  )}
                </td>
                <td className="border border-gray-300 p-3">
                  {Array.isArray(scholarship.eligibility) ? (
                    <ul className="list-disc ml-6">
                      {scholarship.eligibility.map((point, index) => (
                        <li key={index} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{scholarship.benefits}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScholarshipPage;
