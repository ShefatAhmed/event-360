import { Check } from "lucide-react";

const Gallery = () => {
  return (
    <div className="md:grid grid-cols-2 justify-center items-center gap-32 mt-24">
      <div>
        <div className="relative flex items-center">
          <h1 className="absolute w-full text-6xl mb-8 font-extrabold">
            Gallery
          </h1>
          <img src="https://i.postimg.cc/XNQTv9Sg/Vector-14.png" alt="" />
        </div>
        <p className="my-9">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <ul className="text-base md:text-lg font-normal mt-3 pl-4 md:pl-1">
          <li className="mb-2">
            <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> One
            day pass access to all lectures
          </li>
          <li className="mb-2">
            <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> Lunch
            and Snack
          </li>
          <li className="mb-2">
            <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> Meet
            Event Speaker
          </li>
          <li>
            <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> Front
            Seat
          </li>
          <li className="mt-2">
            <Check className="inline-block w-4 h-4 mr-2 text-green-500" /> One
            day pass access to all lectures
          </li>
        </ul>
      </div>
      <div className="mt-20 md:mt-0">
        <div className="grid grid-cols-4">
          <div className="col-span-1 my-auto flex flex-col justify-center items-end">
            <img className="w-10/12" src="https://i.postimg.cc/bJ44n1Wv/Picture.png" alt="" />
            <img src="https://i.postimg.cc/q7PTB7mD/Picture-2.png" alt="" />
          </div>
          <div className="col-span-1 my-auto">
            <img src="https://i.postimg.cc/mrRyHgTC/Picture.png" alt="" />
            <img src="https://i.postimg.cc/x1LP8zV9/Picture-1.png" alt="" />
            <img src="https://i.postimg.cc/Hsq2TtKS/Picture-2.png" alt="" />
          </div>
          <div className="col-span-1 my-auto">
            <img src="https://i.postimg.cc/KzQb2j8N/Picture.png" alt="" />
            <img src="https://i.postimg.cc/zvBrXNL1/Picture-1.png" alt="" />
            <img src="https://i.postimg.cc/Y9t7ZYM0/Picture-3.png" alt="" />
          </div>
          <div className="col-span-1 my-auto">
            <img src="https://i.postimg.cc/cHKJXfm3/Picture-2.png" alt="" />
            <img className="w-10/12" src="https://i.postimg.cc/QMYtQfps/Picture-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
