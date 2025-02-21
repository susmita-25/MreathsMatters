import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[85px]"
      >
         <Image
                  src="/images/logo/Hero section.svg"
                  alt="logo"
                  width={1728}
                  height={888}
                  className="hidden w-full dark:block"
                />
      </section>
    </>
  );
};

export default Hero;
