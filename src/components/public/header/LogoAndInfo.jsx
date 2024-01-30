import Image from "next/image";
import Link from "next/link";

const LogoAndInfo = () => {
  return (
    <div className="w-full py-2 px-4 ">
      <div className="flex items-center">
        <Link href={'/'}>
          <Image className="rounded-[40px]"
            src="/images/Logo.jpg"
            alt="Government PU college"
            width={150}
            height={100}
          />
        </Link>
        <div>
          <p className="font-serif font-extrabold ml-5 md:text-6xl text-xs">GOVERNMENT PU COLLEGE</p>
          <p className="text-center font-serif md:text-4xl font-bold text-xs">RAJANAKUNTE</p>
        </div>
      </div>
    </div>
  );
};

export default LogoAndInfo;
