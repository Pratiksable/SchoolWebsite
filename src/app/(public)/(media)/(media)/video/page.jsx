import Heading2 from "@components/Heading2";
import Image from "next/image";
export const metadata = {
  title: "Videos - The Government PU college, Rajanakunte",
  description:
    "lorem",
};

// Sample gallery data with image URLs
const PhotosData = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy0tv-B__tMoaNlAkTTM1pYeuUF0zaJf7FgMZ0a5cmD41xStwa3jKQfXbgmc_KITbdr91lydt21EJAS3dkCyljzAPL_rti6g6zCT602sL9nqgiUksEELM5cST_9Er2k4MX9LhJsTCmJoFr91Gd5oT5YU-X9QaU6Or1mNEZ3WCnCUYspdp28B2kGGvwaC0/s320/Republicday.webp",
  // ... Add more image URLs here
];

const Video = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3">
        <div className="w-full mb-20">
          <Heading2 headingText={"College Photos"} />
          

        </div>
        <div className="flex flex-wrap -m-2">
          {PhotosData.map((imageUrl, index) => (
            <div key={index} className="p-2 w-full md:w-1/3">
              <Image
                alt={`gallery-image-${index}`}
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={imageUrl}
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;
