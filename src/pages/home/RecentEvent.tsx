import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Error from "@/components/ui/error";
import Progress from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const RecentEvent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recent-events"],
    queryFn: () => {
      return fetch("https://event360-server-psi.vercel.app/recent-events").then(
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
  return (
    <div className="p-20">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">Recent Events</h1>
        <p className="mt-6">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit <br /> risus ac id
          lorem.
        </p>
      </div>
      <div className="mt-20">
        <Carousel>
          <CarouselContent className="flex">
            {data.map((item: { _id: Key | null | undefined; imglink: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; manager: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <CarouselItem
                key={item._id}
                className="flex-none mx-2 sm:w-full md:w-1/2 lg:w-1/4"
              >
                <img src={item.imglink} alt="" className="w-full h-auto" />
                <div className="p-4">
                  <p>{item.name}</p>
                  <p className="text-sm">by {item.manager}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default RecentEvent;
