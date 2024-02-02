"use client"
import SocialMediaLink from "../../SocialMediaLink";

const TopHeaderMenu = () => {
  return (
    <div className="shadow-lg md:shadow-none h-12 z-[2] flex items-center md:block fixed top-0 w-full py-2 px-4 bg-blue-900 md:h-auto md:static">
      <div className="max-w-screen-xl w-full mx-auto items-center flex justify-between  flex-wrap text-white font-medium">
        <h2 className="text-md hidden md:block">
          Welcome to The Government PU college, Rajanakunte
        </h2>
       
        <div className="hidden md:block">
          <SocialMediaLink />
        </div>
      </div>
      
    </div>
  );
};

export default TopHeaderMenu;
