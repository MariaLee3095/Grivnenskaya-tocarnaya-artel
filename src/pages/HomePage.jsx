import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import MasterClasses from "../components/MasterClasses/MasterClasses";
import MyCarousel from "../components/Carousel/Carousel";
import PriceList from "../components/PriceList/PriceList";
import Reviews from "../components/ReviewsForm/ReviewsForm";
import ContactForm from "../components/ContactForm/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MasterClasses />
      <MyCarousel />
      <PriceList />
      <Reviews />
      <ContactForm />
    </>
  );
}
