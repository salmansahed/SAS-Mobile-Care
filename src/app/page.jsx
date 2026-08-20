import ContactCTA from "@/components/home/ContactCTA";
import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ContactCTA />
      <Testimonials />
      <FaqSection />
      <StatsSection />
    </div>
  );
};

export default Home;
