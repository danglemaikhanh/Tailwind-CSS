import Button from "../components/Button";
import ShirtCard from "../components/ShirtCard";
import { arrowRight } from "../assets/icons";
import { statistics, shirts } from "../contants";
import { bigShirt1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
  const [shirtImg, setShirtImg] = useState(bigShirt1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row 
        flex-col justify-center min-h-screen 
        gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col 
        justify-center items-start w-full  max-xl:padding-x pt-40"
      >
        <p className="text-xl font-montserrat text-coral-blue">
          Our Collection
        </p>
        <h1 className="font-palanquin text-8xl max-sm:text-[70px] max-sm:leading-[70px] font-bold mt-8">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-6">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-blue inline-block mt-3">Merch</span>
        </h1>
        <p className="mt-6 font-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm">
          Discover stylish Clothes arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center 
        items-center xl:min-h-screen max-xl:py-40 
        bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={shirtImg}
          alt="shirt"
          width={600}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute sm:left-[5%] bottom-5 max-sm:px-6 z-20">
          {shirts.map((shirt) => (
            <div key={shirt}>
              <ShirtCard
                imgURL={shirt}
                changeShirtImg={(shirt) => {
                  setShirtImg(shirt);
                }}
                shirtImg={shirtImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
