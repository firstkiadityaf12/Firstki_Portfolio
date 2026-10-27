import React, {useState, useEffect} from 'react';
import {Code, Menu, X} from 'lucide-react';
import {NAV_LINKS, PERSONAL_INFO} from "../../utils/constants";
import {useScrollSpy, scrollToSection} from "../../hooks/useScrollSpy";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentHash, setCurrentHash] = useState(window.location.hash);
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id), 100);
    const activeNav = currentHash === '#journey' ? 'journey' : activeSection;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        const handleHashChange = () => setCurrentHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("popstate", handleHashChange);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("popstate", handleHashChange);
        };
    }, []);

    const handleNavClick = (sectionId) => {
        if (sectionId === 'journey') {
            window.location.hash = 'journey';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
            return;
        }

        if (window.location.hash === '#journey') {
            window.history.pushState({}, '', window.location.pathname);
            window.dispatchEvent(new PopStateEvent('popstate'));
            setTimeout(() => scrollToSection(sectionId), 0);
            setIsMenuOpen(false);
            return;
        }

        scrollToSection(sectionId);
        setIsMenuOpen(false);
    }

    return (
        <nav className={`fixed top-4 left-2 right-2 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-1000 transition-all duration-300 ${isScrolled ? 'bg-white/25 backdrop-blur-lg border border-white/40' : 'bg-white/15 backdrop-blur-md border border-white/30'} rounded-full py-3 px-4 md:px-8`}>
            <div className='flex items-center justify-between md:justify-center gap-3 sm:gap-4 md:gap-8'>
                {/* logo */}
                <div className='flex items-center gap-2 flex-shrink-0'>
                    <Code className='w-4 h-4 sm:w-5 sm:h-5 text-primary'/>
                    <button
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        className='text-sm sm:text-base md:text-lg font-bold text-primary hover:opacity-80 transition-opacity'
                        aria-label='home'
                    >
                        {PERSONAL_INFO.name.split(' ')[0]}
                    </button>
                </div>

                {/* desktop navigation */}
                <nav className='hidden md:flex items-center gap-6'>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`text-xs lg:text-sm font-medium transition-all duration-300 ${activeNav === link.id ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* CTA button - desktop only */}
                <button
                    onClick={() => handleNavClick('contact')}
                    className='hidden md:block px-5 py-1.5 bg-black text-white font-medium text-xs lg:text-sm rounded-full hover:bg-gray-800 transition-all duration-300'
                >
                    Hire Me
                </button>
                
                {/* mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='md:hidden p-2 text-black hover:text-gray-600 transition-colors'
                    aria-label='menu'
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className='w-5 h-5'/> : <Menu className='w-5 h-5'/>}
                </button>
            </div>

            {/* mobile navigation */}
            {isMenuOpen && (
                <div className='md:hidden mt-4 pt-4 border-t border-white/20 space-y-2'>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`block w-full text-left px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 ${activeNav === link.id ? 'text-black bg-white/30 font-semibold' : 'text-gray-600 hover:text-black hover:bg-white/20'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('contact')}
                        className='block w-full text-left mt-2 px-3 py-2 bg-black text-white font-medium text-xs rounded-lg hover:bg-gray-800 transition-all duration-300'
                    >
                        Hire Me
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;