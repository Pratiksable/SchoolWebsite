import Heading2 from "@/components/Heading2";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import GetInTouch from "@/components/public/footer/GetInTouch";

export const metadata = {
  title: "Overview - The Government PU college, Rajanakunte",
  description:
    "lorem",
};

const Overview = () => {
  const FACILITY_KEYWORDS = [
    "Library",
    "Sports",
    "Laboratories",
    "Internet",
    "Bank / ATMClassroom",
    "Placement",
    "Scholarship",
    "Workshop",
    "Wi-Fi",
    "Playground",
    "Reading Rooms",
    "Multipurpose Hall",
    "Conference Hall",
    "N.C.C.",
    "N.S.S.",
    "Medical Facility",
    "Counseling Centre",
    "Common Rooms",
    "Computer Lab",
    "Cafeteria/Canteen",
    "Anti Ragging",
    "Women Cell",
  ];

  const COLLEGE_INFO = [
    {
      title: "Type Of College",
      value: "Government",
    },
    {
      title: "Accreditation & Recognition",
      value: "Government",
    },
    {
      title: "Established",
      value: "1947",
    },
    {
      title: "Affiliation",
      value: "Vinoba Bhave University, Hazaribagh",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
        <Heading2 headingText={"Overview"} />
        <p>
        The admission process for government schools in Karnataka typically begins with notifications from the State Education Department, outlining eligibility criteria and application procedures. 
        </p><br />
        <p>
        Interested candidates, usually residents of Karnataka or specific localities, submit filled application forms with required documents. 
        </p><br />
        <p>
        The selection process, often involving a lottery system, may prioritize economically weaker sections. Some schools may charge a nominal admission fee, and selected candidates undergo a verification process. 
        </p><br />
        <p>
        Admitted students should be familiar with school timings, curriculum, and any specific rules. It is essential to check with the official education department or specific schools for the latest and detailed information.
        </p><br />
        <p>
        <b>The Government PU college, Rajanakunte:</b>
        </p>
        <p> The college offers diverse courses in Arts, Commerce, and Science.</p>
        <p>
        Students -388</p>
        <p>
Faculty – 11
</p><p>
Courses – Science(PCMB/PCMC)<br/>
  Commerce(HEBA, CEBA)<br/>
          Arts(HEPS)
	</p><br />
        <p>
        <b>The Government High School, Rajanakunte:</b>
        </p>
        <p> This institution provides education for 9th and 10th grades in both Kannada and English mediums.</p>
        <p>
        Students -197</p>
        <p>
Faculty – 9
</p><br />
        <p>
        <b>The Government Primary School, Rajanakunte: </b>
        </p>
        <p> It caters to students from Std 1 to 8. The medium of instruction for Std 1-5 is Kannada, while for 6th-8th, it extends to both Kannada and English.</p>
        <p>
        Students -357</p>
        <p>
Faculty – 5+ Guest Faculty
</p><br />

        {/* ====== Courses We Offer ======
        <CoursesWeOffer />

        {/* ====== Get In Touch ====== */}
        {/* <div className="max-w-fit invert filter">
          <GetInTouch />
        </div> */} 
    </div>
  );
};

export default Overview;
