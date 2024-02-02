// Overview.js
import Heading2 from "@/components/Heading2";
import { admissionOverviewData } from "@/constants/CollegeInformation"; // Update the path accordingly

const Overview = () => {
  const { overviewText, collegeDetails } = admissionOverviewData;

  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <Heading2 headingText={"Overview"} />
      {overviewText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {collegeDetails.map((college, index) => (
        <div key={index}>
          <p>
            <b>{college.name}:</b>
          </p>
          {college.courses && <p>{`Courses: ${college.courses}`}</p>}
          {college.students && <p>{`Students: ${college.students}`}</p>}
          {college.faculty && <p>{`Faculty: ${college.faculty}`}</p>}
          {college.coursesOffered && <p>{`Courses Offered: ${college.coursesOffered}`}</p>}
          {college.gradeLevels && <p>{`Grade Levels: ${college.gradeLevels}`}</p>}
          {college.mediums && <p>{`Mediums: ${college.mediums}`}</p>}
        </div>
      ))}
    </div>
  );
};

export default Overview;
