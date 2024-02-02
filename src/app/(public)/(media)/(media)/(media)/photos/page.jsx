import Heading2 from "@components/Heading2";
import Image from "next/image";
import { PhotosData } from "@/constants/media";



const Photos = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3">
        <div className="w-full mb-20">
          <Heading2 headingText={"School Photos"} />
          

        </div>
        <div className="flex flex-wrap -m-2 justify-center">
          {PhotosData.map((imageUrl, index) => (
            <div key={index} className="p-2 w-full md:w-1/3">
              <Image
                alt={`gallery-image-${index}`}
                className="w-full h-60 lg:h-80 object-cover border-2 border-black/60 shadow-lg 
                shadow-gray-100 rounded-lg block"
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

export default Photos;
