import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials/Testimonials';
import BookNow from './components/BookingForm/BookNow';
function App() {
  return (
    <div className='  bg-[#295a5e] '>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <BookNow />
    </div>
  );
}

export default App;
