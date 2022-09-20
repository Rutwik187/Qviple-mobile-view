import './App.css';
import AboutProduct from './components/about-product/AboutProduct';
import Hero from './components/hero/Hero';
import ModulesWeProvide from './components/modules-we-provide/ModulesWeProvide';
import Navbar from './components/navbar/Navbar';

import "swiper/css/bundle";

import Screens from './components/screens/Screens';
import AboutUs from './components/about-us/AboutUs';
import DownloadApp from './components/download-app/DownloadApp';
import OurTeam from './components/our-team/OurTeam';
import Testimonials from './components/testimonilas/Testimonials';
import Accordion from './components/accordion/Accordion';
import ContactUs from './components/contact-us/ContactUs';
import { Footer } from './components/footer/footer';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='mobile-view'>


      <Navbar />
      <Hero />
      <AboutProduct />
      <ModulesWeProvide />
      <Screens />
      <AboutUs />
      <DownloadApp />
      <OurTeam />
      <Testimonials />
      <Accordion />
      <ContactUs />
      <Footer />

      <Routes>
      </Routes>

    </div >
  );
}

export default App;
