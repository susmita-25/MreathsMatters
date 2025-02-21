import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-[#fff]">
        <div className="container">
          <Image
            src="/images/about/Products.svg"
            alt="testimonial logo"
            width={1508}
            height={552}
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Features;
