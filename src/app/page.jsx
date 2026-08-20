import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
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
    </div>
  );
};

export default Home;
