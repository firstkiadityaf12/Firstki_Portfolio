import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import ContactBanner from './components/sections/ContactBanner';
import Journey from './components/sections/Journey';

const App = () => {
  const [isJourneyPage, setIsJourneyPage] = useState(window.location.hash === '#journey');

  useEffect(() => {
    const handleRouteChange = () => setIsJourneyPage(window.location.hash === '#journey');

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className='min-h-screen bg-black pb-[10vh]'>
      <Navbar />
      {isJourneyPage ? <Journey /> : (
        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Services/>
            <ContactBanner/>
        </main>
      )}
    </div>
  );
}

export default App;