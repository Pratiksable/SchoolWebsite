import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CoursesTable from "@/components/public/CoursesTable";
import ArtsFaculty from "@/components/public/HomeComponents/ArtsFaculty";
import CommerceFaculty from "@/components/public/HomeComponents/CommerceFaculty";
import ScienceFaculty from "@/components/public/HomeComponents/ScienceFaculty";
import { SCIENCE_COURSES ,COMMERCE_COURSES,ART_COURSES} from "@constants/constants"
import {
  faBookJournalWhills,
  faBookOpen,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pu = () => {
  const COLLEGE_RECOGNITION = [
    {
      title: "Degree Issued By:",
      value: "Karnataka Board",
    },
    {
      title: "Scholarship",
      value: "E-Kalayan Scholarship, Karnataka Scholarship",
    },
    {
      title: "Admission Process",
      value:
        "Merit Based through Chancellor Portal, or UG marks",
    },
    {
      title: "Qualification",
      value:
        " equivalent in relevant stream with 50% marks ",
    },
  ];

  
  return (
    <article className="overflow-hidden sm:text-lg xl:ml-20 xl:mr-20 ml-5 mr-5 mt-10">
      <h1 className="text-xl sm:text-2xl font-bold my-2">
        PU at Government PU college
      </h1>
      <hr />

      <p className="text-lg mt-4">
        <span className="text-4xl text-primary-regular font-bold">A</span>t
        Government PU college, we are committed to providing a comprehensive
        education that extends beyond undergraduate programs. Our range of
        Postgraduate (PG) courses is designed to cater to diverse academic
        interests, empowering students to specialize in their chosen fields and
        achieve academic excellence.
      </p>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 my-4 mb-12">
          {COLLEGE_RECOGNITION.map((info, index) => (
            <div className="p-2" key={index}>
              <h4 className="text-xl font-bold text-primary-regular">
                {info.title}
              </h4>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-8">
        <Heading3 headingText={"Diverse  Courses"} />
        <p className="my-4">
          Our diverse range of courses covers a wide spectrum of subjects,
          allowing students to pursue their academic passions and excel in their
          chosen disciplines. Whether you&lsquo;re inclined towards science,
          arts, or humanities, we offer programs tailored to your interests and
          career aspirations.
        </p>
      </section>

      {/* // Courses We Offer */}
      <Heading2 headingText={"Courses We Offer"} />
      <div className="max-w-full overflow-hidden">
        {/* ===== Science Stream ===== */}
        <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
          <div className="px-4 py-2">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faFlask}
              />{" "}
              Science
            </h3>
            <p className="text-slate-600 mb-4 text-justify mt-5">
              Embark on a comprehensive scientific journey with our PCMB and
              PCMCS courses. The PCMB program integrates Physics, Chemistry,
              Mathematics, and Biology, offering a solid foundation for diverse
              scientific careers. Meanwhile, PCMCS combines Physics, Chemistry,
              Mathematics, and Computer Science, providing a well-rounded
              understanding of both physical sciences and computational
              principles. These courses prepare students for a future in science
              and technology, fostering a strong theoretical base alongside
              practical applications.
            </p>
          </div>
          <CoursesTable courses={SCIENCE_COURSES} />
        </div>

        <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
          <div className="px-4 py-4">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faBookOpen}
              />{" "}
              Arts
            </h3>
            <p className="text-slate-600 mb-4">
              art courses provides a platform for creative expression and
              academic exploration:
            </p>
          </div>

          <CoursesTable courses={ART_COURSES} />
        </div>

        <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
          <div className="px-4 py-4">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faBookJournalWhills}
              />{" "}
              Commerce
            </h3>
            <p className="text-slate-600 mb-4">
              Commerce courses provides a platform for creative expression and
              academic exploration:
            </p>
          </div>

          <CoursesTable courses={COMMERCE_COURSES} />
        </div>
      </div>

      {/* FACULTY DETAILS */}

      <section className="md:my-8 ">
        <Heading3 headingText={"OUR SCIENCE FACULTY"} />
        <div>
          <ScienceFaculty />
        </div>
        <Heading3 headingText={"OUR COMMERCE FACULTY"} />
        <div>
          <CommerceFaculty />
        </div>
        <Heading3 headingText={"OUR ARTS FACULTY"} />
        <div>
          <ArtsFaculty />
        </div>
      </section>
    </article>
  );
};

export default Pu;
