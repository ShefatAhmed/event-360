import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const left = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 5, x: 0, transition: { type: 'spring', stiffness: 50, duration: 2 } },
  };  
  const right = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, duration: 2 } },
  };
  return (
    <div className="grid grid-cols-12 gap-5 md:mt-6 overflow-hidden">
      <motion.div
        variants={left}
        initial="hidden"
        animate="visible"
        className="col-span-12 md:col-span-7 relative max-w-[736px] max-h-[708px]"
      >
        <img
          src="https://i.postimg.cc/FstCKDnc/hero-img.png"
          alt=""
          className="w-full h-auto md:h-full"
        />
        <div className="absolute bottom-0 p-4 bg-gradient-to-b from-transparent to-black pt-32 md:pt-[153px]">
          <div className="p-5">
            <h1 className="text-white text-5xl font-extrabold">
              New Packages For Winter
            </h1>
            <p className="text-white text-base md:text-lg mt-3 me-1">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={right}
        initial="hidden"
        animate="visible"
        className="col-span-12 md:col-span-5"
      >
        <h1 className="font-extrabold text-2xl md:text-3xl text-center mt-8">
          Our most popular services
        </h1>
        <div className="mx-auto px-6 md:px-10 lg:px-20 mt-12">
          <img
            src="https://i.postimg.cc/wTkNPY3w/cc8c7f22ea35a50e7e1293063427df1b.jpg"
            alt=""
            className="w-full h-auto md:h-full"
          />
          <h1 className="font-extrabold text-3xl md:text-4xl mt-6">
            Corporate event
          </h1>
          <ul className="text-base md:text-lg font-normal mt-3 pl-4 md:pl-1">
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> One
              day pass access to all lectures
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
              Lunch and Snack
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
              Meet Event Speaker
            </li>
            <li>
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
              Front Seat
            </li>
          </ul>
          <Button className="text-base md:text-lg font-bold py-6 w-full my-9">
            View Details
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
