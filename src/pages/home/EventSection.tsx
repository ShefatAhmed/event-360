import { getEventItem } from "@/api/eventItem.api";
import Error from "@/components/ui/error";
import Progress from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { Key, ReactElement, JSXElementConstructor, ReactNode } from "react";

const EventSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: getEventItem,
  });

  if (isLoading) {
    return <Progress />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <div className="mt-24 mx-auto">
      <div className="relative flex items-center">
        <h1 className="absolute text-center w-full text-6xl mb-8 font-extrabold">
          Event Items
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
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.slice(0, 6).map((item: { _id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; imglink: string | undefined; }) => (
          <div key={item._id} className="col-span-1 p-6">
            <h1 className="text-2xl">{item.name}</h1>
            <img src={item.imglink} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
