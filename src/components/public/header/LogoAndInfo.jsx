import Image from "next/image";
import Button from "@components/Button";
import Link from "next/link";
import logo from 'src/images/Logo.jpg'

const LogoAndInfo = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="flex justify-between max-w-screen-xl items-center mx-auto w-full">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="Markham college of commerce"
            width={150}
            height={100}
          />
        </Link>
        <div className="hidden md:block">
          <Button href={'/student/login'} text={'Log In'}/>
        </div>
      </div>
    </div>
  );
};

export default LogoAndInfo;
