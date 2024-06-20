import { ArrowRight, Euro, Globe, PersonStanding } from "lucide-react";
import Container from "../Container";

const Footer = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-12 gap-12 py-12">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold">Event 360</h1>
        </div>
        <div className="col-span-2 py-3">
          <ul className="flex flex-col gap-3 text-lg text-[#E2E8F0]">
            <li className="text-white">Product</li>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="col-span-2 py-3">
          <ul className="flex flex-col gap-3 text-lg text-[#E2E8F0]">
            <li className="text-white">Solutions</li>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
          </ul>
        </div>
        <div className="col-span-2 py-3">
          <ul className="flex flex-col gap-3 text-lg text-[#E2E8F0]">
            <li className="text-white">Resources</li>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="col-span-2 py-3">
          <ul className="flex flex-col gap-3 text-lg text-[#E2E8F0]">
            <li className="text-white">Support</li>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="col-span-2 py-3">
          <ul className="flex flex-col gap-3 text-lg text-[#E2E8F0]">
            <li className="text-white">Company</li>
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li className="flex items-center">
              Request Demo <ArrowRight />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex justify-between py-5 text-[#E2E8F0]">
        <div>
          <h1>@ 2023. All rights reserved.</h1>
        </div>
        <div>
          <ul className="flex gap-8 mt-6 md:mt-0">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contact</li>
            <li className="flex">
              <Globe /> EN
            </li>
            <li className="flex">
              <Euro />
              EUR
            </li>
            <li>
              <PersonStanding />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
