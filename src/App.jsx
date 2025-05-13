import React from 'react';
import TopNavBar from './TopNavBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PricingSection from './PricingSection';
import Quality from './Qualtiy';
import Review from './Review';
import GallerySection from './GallerySection';
import BarbersSection from './BarbersSection';
import LocationSection from './LocationSection';
import FAQSection from './FAQSection';
import ContactForm from './Form';
import Adver from './Adver';
import Footer from './Footer';
function App() {
  return (
    <div className="bg-gray-950 min-h-screen py-4 px-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <TopNavBar />
        <HeroSection />
        <AboutSection/>
        <ServicesSection />
        <Quality/>
        <Review/>
        <PricingSection/>
        <GallerySection/>
        <BarbersSection/>
        <LocationSection/>
        <FAQSection/>
        <ContactForm/>
        <Adver/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
