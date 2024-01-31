import Heading2 from "@/components/Heading2";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import GetInTouch from "@/components/public/footer/GetInTouch";
import { overviewAcademicsData } from "@/constants/Overview-Academics-data";
export const metadata = {
  title: "Overview - The Government PU college, Rajanakunte",
  description:
    "lorem",
};
const Overview = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      {overviewAcademicsData.map((data, index) => (
        <div key={index}>
          <Heading2 headingText={data.collegetype} />
          <p className="mb-4">{data.desc}</p>
        </div>
      ))}

      {/* Add the rest of your dynamic content here */}
    </div>
  );
};

export default Overview;