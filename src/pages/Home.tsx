import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import SectionDivider from "../components/SectionDivider";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";

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
