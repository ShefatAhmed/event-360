import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Social = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 2", "2 1"],
  });
  return (
    <motion.div
      style={{ scale: scrollYProgress }}
      ref={componentRef}
      className="pb-20"
    >
      <div className="relative">
        <img src="https://i.postimg.cc/Cdy86FVb/newsletter-bg.png" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h3 className="md:text-lg text-xs">SUBSCRIBE TO NEWSLETTER</h3>
          <h1 className="md:text-3xl text-xl md:font-extrabold mb-4">
            Want Something Extra?
          </h1>
          <div className="flex items-center justify-center">
            <input
              className="border-b-4 mr-2 px-2 py-1 bg-transparent"
              type="text"
              placeholder="Your Email"
              required
            />
            <Button className="uppercase font-extrabold">Subscribe</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Social;
