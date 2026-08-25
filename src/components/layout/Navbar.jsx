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
        <nav className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur' : 'bg-transparent'}`}
            style={{ transform: 'translate3d(0, 0, 0)'}}
        >
            <div className='max-w-[1320px] mx-auto px-5'>
                <div className='flex items-center justify-between'>
                    {/* logo */}
                    <div className='flex items-center gap-4'>
                        <Code className='w-6 h-6 text-primary'/>
                        <button
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                            className='text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
                            aria-label='home'
                        >
                            {PERSONAL_INFO.name.split(' ')[0]}
                        </button>
                </div>

                {/* desktop navigation */}
                <nav className='hidden md:flex items-center gap-4'>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`text-base font-medium transition-all duration-300 ${activeNav === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* CTA button */}
                <div className='hidden md:flex items-center gap-2'>
                    <button
                        onClick={() => handleNavClick('contact')}
                        className='px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border-white hover:bg-white/90 transition-all duration-300'
                    >
                        Hire Me
                    </button>
                </div>
                {/* mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='md:hidden p-4 text-white hover:text-white/80 transition-colors'
                    aria-label='menu'
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className='w-6 h-6'/> : <Menu className='w-6 h-6'/>}
                </button>

                </div>
            </div>

            {/* mobile navigation */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-110 oppacity-100' : 'max-h-0 oppacity-0'}`}
            >
                <div className='bg-black/90 backdrop-blur-lg border-t border-white/10 px-5 py-4 space-y-2'>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`block w-full text-left px-5 py-3 rounded-lg font-medium transition-all duration-300 ${activeNav === link.id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('contact')}
                        className='block w-full text-left mt-2 px-5 py-3 bg-white text-[#212121] font-medium rounded-[17px] border-white hover:bg-white/90 transition-all duration-300'
                    >
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;