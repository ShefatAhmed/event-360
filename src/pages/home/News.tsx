import { CalendarCheck, MoveRight } from "lucide-react";
const News = () => {
  return (
    <div className="pb-20">
      <div className="text-center py-5">
        <h3 className="uppercase">info update</h3>
        <h1 className="font-extrabold text-4xl">Latest News</h1>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 hover:text-[#00D4FC]">
          <img
            src="https://demo-themewinter.com/exhibz/wp-content/uploads/2019/01/Blog-1.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="flex items-center gap-3">
              <CalendarCheck />
              January 1, 2024
            </p>
            <p className="mt-8">
              There’s such a thing as “too much information”, especially for
            </p>
            <button className="mt-8 flex gap-2">
              Continue <MoveRight />{" "}
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 hover:text-[#00D4FC]">
          <img
            src="https://demo-themewinter.com/exhibz/wp-content/uploads/2019/01/Blog-2.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="flex items-center gap-3">
              <CalendarCheck />
              January 12, 2024
            </p>
            <p className="mt-8">
              There’s such a thing as “too much information”, especially for
            </p>
            <button className="mt-8 flex gap-2">
              Continue <MoveRight />{" "}
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 hover:text-[#00D4FC]">
          <img
            src="https://demo-themewinter.com/exhibz/wp-content/uploads/2019/01/Blog-3.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="flex items-center gap-3">
              <CalendarCheck />
              January 30, 2024
            </p>
            <p className="mt-8">
              There’s such a thing as “too much information”, especially for
            </p>
            <button className="mt-8 flex gap-2">
              Continue <MoveRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
