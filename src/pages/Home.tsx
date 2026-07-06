import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import SectionDivider from "../components/SectionDivider";
import Seo from "../components/Seo";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";

const Home = () => (
  <>
    <Seo
      title="Sunny Datko | Staff Frontend Engineer & Design Systems"
      description="Staff Frontend Engineer specializing in design systems and React, building scalable UX that connects product strategy, design, and frontend architecture."
      path="/"
    />
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
