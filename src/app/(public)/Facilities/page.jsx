"use client"
import { useEffect } from 'react';
import Heading2 from "@/components/Heading2";
import SchoolFacilityData from '@/constants/SchoolFacilityData';
import FACILITY_KEYWORDS from '@/constants/FACILITY_KEYWORDS';
import Image from 'next/image';
export const metadata = {
  title: "Facilities - The Government PU college, Rajanakunte",
  description: "lorem",
};

const Facilities = () => {
  useEffect(() => {
    function reveal() {
      let reveals = document.querySelectorAll(".animation-on-scroll");

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;

        if (revealTop < windowHeight) {
          reveals[i].classList.add("active-animation-on-scroll");
        } else if (revealTop > windowHeight + 100) {
          reveals[i].classList.remove("active-animation-on-scroll");
        } else {
          return;
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <>
    <div className="flex flex-col items-center mt-10 m-5">
    <Heading2 headingText={"Facility & Infrastructure"} />
    <div className="flex gap-4 flex-wrap items-center justify-center mb-20">
            {FACILITY_KEYWORDS.map((keyword, index) => (
              <span
                className="py-2 px-4 bg-gray-300 font-medium rounded-sm"
                key={index}
              >
                {keyword}
              </span>
            ))}
          </div>

      {SchoolFacilityData.map((facility, index) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/2 xl:w-1/2 animation-on-scroll mb-8 facility-card card-height rounded-md overflow-hidden border border-gray-300 shadow-md transition duration-300 transform ${
            index % 2 === 0 ? 'flex-row-reverse hover:-translate-x-2' : 'hover:translate-x-2'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="aspect-w-2 aspect-h-100 md:aspect-none md:h-48 lg:h-56 xl:h-64 overflow-hidden rounded-t-md md:ml-5 ml-0 p-1 bg-gray-500 rounded-lg">
              <Image
                src={facility.image}
                alt={`Facility ${facility.id}`}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="p-4 bg-white rounded-b-md">
               <Heading2 headingText={facility.title} />
              <p className="text-base md:text-lg text-gray-700 mb-0 text-justify">
                {facility.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};


export default Facilities;
