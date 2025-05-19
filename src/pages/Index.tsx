
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import { Fade } from "react-awesome-reveal";

const Index = () => {
  return (
    <Layout>
      <Fade triggerOnce cascade damping={0.1} direction="up">
        <Hero />
        <StatsSection />
        <Services />
        <HowItWorks />
        <Testimonials />
      </Fade>
    </Layout>
  );
};

export default Index;
