import { Button } from "@/components/ui/button";
import Error from "@/components/ui/error";
import Progress from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const ServiceSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: () => {
      return fetch("https://event360-server-psi.vercel.app/services").then(
        (res) => res.json()
      );
    },
  });

  if (isLoading) {
    return <Progress />;
  }

  if (isError) {
    return <Error />;
  }
  const variant = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 5,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 2 },
    },
  };
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="mt-20"
    >
      <div className="relative flex items-center">
        <h1 className="absolute text-center w-full text-6xl mb-8 font-extrabold">
          Our Services
        </h1>
        <img
          className="mx-auto"
          src="https://i.postimg.cc/XNQTv9Sg/Vector-14.png"
          alt=""
        />
      </div>
      <p className="mt-3 text-center text-lg font-normal text-[#CBD5E1]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices <br /> faucibus neque velit risus ac id lorem.
      </p>
      <div className="grid grid-cols-3 mt-14 gap-5">
        {data.slice(0, 3).map((service: { _id: Key | null | undefined; imglink: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; facility_1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; facility_2: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; facility_3: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; facility_4: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; facility_5: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
          <div
            key={service._id}
            className="col-span-3 lg:col-span-1 lg:mx-0 mx-auto p-6"
          >
            {service.imglink && (
              <img src={service.imglink} alt="" />
            )}
            <h1 className="text-3xl font-extrabold mt-6">{service.name}</h1>
            {!service.imglink && (
              <p className="text-base md:text-lg font-normal mt-3 pl-4 md:pl-1 text-[#CBD5E1]">
                {service.description}
              </p>
            )}
            <ul className="text-base md:text-lg font-normal mt-3 pl-4 md:pl-1">
              <li className="mb-2">
                <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
                {service.facility_1}
              </li>
              <li className="mb-2">
                <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
                {service.facility_2}
              </li>
              <li className="mb-2">
                <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
                {service.facility_3}
              </li>
              <li>
                <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
                {service.facility_4}
              </li>
              <li className="mt-2">
                <Check className="inline-block w-4 h-4 mr-2 text-green-500" />{" "}
                {service.facility_5}
              </li>
            </ul>
            {!service.imglink && (
              <Button className="text-base md:text-lg font-bold py-6 w-full my-9">
                Check it out
              </Button>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSection;
