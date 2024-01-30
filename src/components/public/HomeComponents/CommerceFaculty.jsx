// ./src/components/public/HomeComponents/PrincipleMsg.jsx
"use client";
import Image from "next/image";
import { SciencefacultysData } from "@/constants/faculty";


const CommerceFaculty = () => {
  return (
    <section className="bg-white py-6 flex  justify-center">
    <div className="p-2">
      <div className="max-w-screen-md  p-2 ">
        {SciencefacultysData.map((faculty, index) => (
          <div key={index} className="mb-4 md:flex md:flex-row bg-gray-100  rounded-xl p-5  md:w-auto ">
           <Image
                className="w-200 h-400 hover:scale-110 duration-500 cursor-pointer rounded-lg md:ml-0 ml-16 md:mb-0 mb-5 border-4 border-black"
                src={faculty.imageSrc}
                height={200}
                width={150}
                style={{ height: "150px" }}
                alt={`Image of ${faculty.name}`}
              />
             <div className="ml-5 animation-on-scroll">
                <p className="font-light ">
                  <span className="font-bold">NAME:</span> {faculty.name}
                </p>
                {faculty.position && (
                  <p className="font-light">
                    <span className="font-bold">POSITION:</span>{" "}
                    {faculty.position}
                  </p>
                )}
                {faculty.subject && (
                  <p className="font-light">
                    <span className="font-bold">SUBJECT:</span>{" "}
                    {faculty.subject}
                  </p>
                )}
                {faculty.experience && (
                  <p className="font-light">
                    <span className="font-bold">EXPERIENCE:</span>{" "}
                    {faculty.experience}
                  </p>
                )}
                {faculty.doj && (
                  <p className="font-light">
                    <span className="font-bold">D.O.J:</span> {faculty.doj}
                  </p>
                )}
                {faculty.education && (
                  <p className="font-light">
                    <span className="font-bold">EDUCATION:</span>{" "}
                    {faculty.education}
                  </p>
                )}
              </div>
          </div>
        ))}
      </div>
          </div>

      {/* Add navigation buttons for switching principles */}

    </section>
  );
};

export default CommerceFaculty;
