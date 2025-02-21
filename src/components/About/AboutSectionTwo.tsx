import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[white]">
      <center className="text-[#008080] font-[600] text-[38px]">About</center>
      <center className="text-[rgba(16,16,16,0.8)] font-[400] text-[24px] !font-[Lucida_Bright]">A sanctuary of wellness where every breath counts</center>

      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <p className="text-[24px] font-[400] leading-relaxed text-[rgba(16,16,16,0.8)] sm:text-lg sm:leading-relaxed">
                  "At BreatheMatters, we believe in the transformative power of conscious breathing. Dedicated to enhancing your respiratory well-being, we craft innovative products designed to bring tranquility and vitality into every breath. Join us on a journey towards a healthier, balanced life – where each inhale and exhale contributes to your overall sense of wellness. Breathe freely, live fully with BreatheMatters."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
