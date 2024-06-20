import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-24 py-24">
      <div className="text-center">
        <h5 className="uppercase mb-4 md:text-xl font-semibold">Pricing</h5>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Package Pricing</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-1 p-6 md:p-10 h-auto group transition-all duration-300 hover:bg-[#0038B4]">
          <h1 className="text-lg md:text-xl font-semibold">STANDARD</h1>
          <p className="mt-4 md:mt-6 text-2xl md:text-4xl font-bold">$120</p>
          <ul className="text-base md:text-lg font-normal mt-6 pl-4 md:pl-1">
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> <span className="opacity-[64%]">One
              day pass access all lectures</span>
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]">
              Lunch and Snack</span>
            </li>
          </ul>
          <Button className="w-full mt-6 md:mt-[172px] py-4 md:py-6 text-base lg:text-lg font-bold transition-all duration-300  bg-black text-white group-hover:bg-[#00D4FC] group-hover:text-black">
            Get your ticket
          </Button>
        </div>
        <div className="col-span-1 p-6 md:p-10 h-auto group transition-all duration-300 hover:bg-[#0038B4]">
          <h1 className="text-lg md:text-xl font-semibold">PREMIUM</h1>
          <p className="mt-4 md:mt-6 text-2xl md:text-4xl font-bold">$180</p>
          <ul className="text-base md:text-lg font-normal mt-6 pl-4 md:pl-1">
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]"> One
              day pass access all lectures</span>
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]">
              Lunch and Snack</span>
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]">
              Meet Event Speaker</span>
            </li>
          </ul>
          <Button className="w-full mt-6 md:mt-[135px] py-4 md:py-6 text-base lg:text-lg font-bold transition-all duration-300 bg-black text-white group-hover:bg-[#00D4FC] group-hover:text-black">
            Get your ticket
          </Button>
        </div>

        <div className="col-span-1 p-6 md:p-10 h-auto group transition-all duration-300 hover:bg-[#0038B4]">
          <h1 className="text-lg md:text-xl font-semibold">ENTERPRISE</h1>
          <p className="mt-4 md:mt-6 text-2xl md:text-4xl font-bold">$200</p>
          <ul className="text-base lg:text-lg font-normal mt-6 pl-4 md:pl-1">
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]"> One
              day pass access all lectures</span>
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]">
              Lunch and Snack</span>
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]">
              Meet Event Speaker</span>
            </li>
            <li className="mb-2">
              <Check className="inline-block w-4 h-4 mr-2 text-green-500" /><span className="opacity-[64%]">
              Front Seat</span>
            </li>
          </ul>
          <Button className="w-full mt-6 md:mt-auto lg:mt-[97px] py-4 md:py-6 text-base lg:text-lg font-bold transition-all duration-300  bg-black text-white group-hover:bg-[#00D4FC] group-hover:text-black">
            Get your ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
