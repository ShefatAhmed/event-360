import Container from "@/components/Container";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import EventSection from "./EventSection";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Comment from "./Comment";
import RecentEvent from "./RecentEvent";
import Social from "./Social";
import News from "./News";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <ServiceSection />
      <EventSection />
      <Gallery />
      <Pricing />
      <Comment />
      <RecentEvent />
      <News />
      <Social />
    </Container>
  );
};

export default Home;
