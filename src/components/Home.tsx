import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import SectionDivider from "./SectionDivider";
import Testimonials from "./Testimonials";
import Work from "./Work";

const Home = () => (
  <>
    <Hero />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Experience />
    <SectionDivider />
    <Work />
    <SectionDivider />
    <Testimonials />
    <SectionDivider />
    <Contact />
  </>
);

export default Home;
