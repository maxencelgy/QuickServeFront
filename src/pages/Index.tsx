import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
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
