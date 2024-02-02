import Heading2 from "@/components/Heading2";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import GetInTouch from "@/components/public/footer/GetInTouch";
import CollegeInformation from "@/constants/CollegeInformation";
export const metadata = {
  title: "About Us - The Government PU college, Rajanakunte",
  description:
    "lorem",
};

const AboutUs = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <h1 className="text-3xl font-semibold my-8">
        About us - The Government PU college, Rajanakunte
      </h1>
      <CollegeAddress />

      <div className="grid gap-4 sm:grid-cols-2 my-4">
        {CollegeInformation.map((info, index) => (
          <div className="p-2" key={index}>
            <h4 className="text-xl font-bold text-primary-regular">
              {info.title}
            </h4>
            <p>{info.value}</p>
          </div>
        ))}
      </div>

      <article className="sm:mx-4 grid gap-6 text-lg border-t-8 border-1 bg-secondary shadow-md p-4 border-primary-regular rounded-md">
        <Heading2 headingText={"About Us"} />

        <p>
          <span className="text-primary-regular">
          Government PU College,
          </span>{" "}
          Rajanakunte was established
          <span className="text-primary-regular"> on 2024.</span>
        </p>
        <p>
        Welcome to Government PU College, Rajanakunte, a distinguished institution committed to fostering academic excellence and holistic development. Established with a vision to provide quality education, our college has been a beacon of learning in the region since its inception.
        </p>
        <p>
        Founded with a commitment to empower students with knowledge and skills, Government PU College, Rajanakunte, has been a cornerstone of educational progress. The college is affiliated with [mention the university or education board it is affiliated with], ensuring that our academic programs adhere to the highest standards.
        </p>
        <p>
        Our college boasts modern infrastructure, equipped with state-of-the-art classrooms, laboratories, and libraries to facilitate a conducive learning environment. We understand the importance of comprehensive development; thus, we provide students with access to various co-curricular and extracurricular activities.
        </p>
        <p>
        At Government PU College, Rajanakunte, we take pride in our team of experienced and dedicated faculty members. These educators are not only experts in their respective fields but are also passionate about nurturing the potential within each student. Their guidance and mentorship play a pivotal role in shaping the future of our students.
        </p>
        <p>
        The college offers a range of academic programs, including courses in Arts, Science, and Commerce. Our curriculum is designed to provide a well-rounded education, preparing students for future challenges and opportunities.
        </p>
        <p>
        Government PU College, Rajanakunte, is committed to maintaining the highest standards of academic excellence, discipline, and values. We strive to create an inclusive and engaging learning environment that empowers students to excel in both academics and character.
        </p>
        <p>
        As an integral part of the community, our college actively engages in various community service initiatives and events. We believe in instilling a sense of social responsibility in our students, encouraging them to contribute positively to society.
        </p>
        <p>
        Join us at Government PU College, Rajanakunte, where education is not just a journey but a transformative experience. Together, let's build a future filled with knowledge, skills, and endless possibilities.
        </p>

        

        {/* ====== Get In Touch ====== */}
        <div className="max-w-fit invert filter">
          <GetInTouch />
        </div>
      </article>
    </div>
  );
};

export default AboutUs;
