// VisionMission.js
import Image from "next/image";
import { VisionMissionData } from "@/constants/VisionMissionData"; // Update the path accordingly

const VisionMission = () => {
  const {
    title,
    visionMissionText,
    historyFoundingText,
    achievementsGrowthText,
    imagePath,
    altText,
  } = VisionMissionData;

  return (
    <article className="max-w-screen-lg mx-auto my-12 p-4">
      <h1 className="text-3xl font-bold my-8 text-primary-regular">
        {title}
      </h1>
      <div className="bg-secondary border-t-primary-regular border-t-4 shadow-md rounded-md">
        <Image
          className="mx-auto block max-w-full"
          src={imagePath}
          width={1000}
          height={500}
          alt="Markham College of Commerce"
        />

        <div className="container mx-auto p-8">
          <div className="mb-8 text-lg">
            <div className="mb-8 text-lg">
              <h2 className="text-xl font-semibold mb-2">Vision</h2>
              <p className="text-gray-700 text-justify">{visionMissionText.vision}</p>
            </div>

            <div className="mb-8 text-lg">
              <h2 className="text-xl font-semibold mb-2">Mission</h2>
              <p className="text-gray-700 text-justify">{visionMissionText.mission}</p>
            </div>
          </div>

          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">History and Founding</h2>
            <p className="text-gray-700">
              Markham College of Commerce, Hazaribagh, was established on
              February 10, 1974, under the visionary leadership of B. D.
              Jaiswal. Named after the esteemed educationist Arthur Francis
              Markham, the college&apos;s founding principles were rooted in
              making higher education accessible to the region&apos;s aspiring
              minds.
            </p>
            <p className="text-gray-700">
              Dr. Maheshwar Tiwari, alongside a dedicated team of educators
              including Prof. Shashi Kishore Narayan, Prof. Heyat Ahmed, and
              others, embarked on a journey to offer Intermediate Arts and
              Commerce programs. This marked the inception of a lifelong
              commitment to providing quality education to the community.
            </p>
          </div>

          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">
              Achievements and Growth
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {achievementsGrowthText.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VisionMission;
