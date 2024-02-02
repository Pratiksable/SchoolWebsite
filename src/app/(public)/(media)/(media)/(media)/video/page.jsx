import Heading2 from "@components/Heading2";
import { VideoData } from "@/constants/media";

const Video = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3">
        <div className="w-full mb-20">
          <Heading2 headingText={"School Videos"} />
        </div>
        <div className="flex flex-wrap justify-center">
          {VideoData.map((videoUrl, index) => (
            <div key={index} className="p-2  object-cover border-2 border-black/60 shadow-lg 
            shadow-gray-100 rounded-lg block mt-5 ml-2">
              <iframe
                width="100%"
                height="300"
                src={videoUrl}
                title={`Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;
