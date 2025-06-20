import React from 'react';
import Hero from '../components/header/Hero';
import Services from '../components/common/services/Services';
import About from '../components/about/About';
import DataAnalysis from '../components/data analysis/DataAnalysis';
import Contact from '../components/common/contact/Contact';
import Testimonials from '../components/testimonials/Testimonials';
import Faq from '../components/faq/Faq';
import CaseStudy from '../components/case stydy/CaseStudy';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <DataAnalysis />
      <CaseStudy />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}

export default Home