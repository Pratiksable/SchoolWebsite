import Image from "next/image";
import image3 from '@images/Picture1.jpg'
export const metadata = {
  title: "Vision & Mission - The Government PU college, Rajanakunte",
  description:
    "lorem",
};

const VisionMission = () => {
  return (
    <article className="max-w-screen-lg mx-auto my-12 p-4">
      <h1 className="text-3xl font-bold my-8 text-primary-regular">
        Vision and Mission -The Government PU college, Rajanakunte
      </h1>
      <div className="bg-secondary border-t-primary-regular border-t-4 shadow-md rounded-md">
        <Image
          className="mx-auto block max-w-full"
          src={image3}
          width={1000}
          height={500}
          alt="GOVERNMENT PU college of Commerce"
        />

        <div className="container mx-auto p-8">
          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">Vision and Mission</h2>
            <p className="text-gray-700">
              At The Government PU college, Rajanakunte, our vision is to provide quality education to students coming from all strata of the society. To shape the life of each student for a better future.
            </p>
            <p className="text-gray-700">
            To create technologically upgraded institution which caters to the educational standards of today’s times.
            </p>
          </div>

          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">History and Founding</h2>
            <p className="text-gray-700">
              GOVERNMENT PU college of Commerce, Hazaribagh, was established on
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
              <li>
                Since its foundation, the college has blossomed into an
                institution of excellence, with over eight thousand students
                benefiting from its programs annually.
              </li>
              <li>
                With an average success rate of 80%, the college has
                consistently produced accomplished professionals in fields such
                as finance, accounting, medicine, engineering, civil service,
                and more.
              </li>
              <li>
                The commitment of the faculty and the unyielding support of
                students and their guardians have been integral to the
                college&apos;s continuous growth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VisionMission;
