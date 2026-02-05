import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black py-16 md:py-24">
            <RadialGradientBackground variant="hero" />
            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* side left column and content */}
                    <div className="text-left">
                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/10 rounded-full border border-white/20">
                                <Star className="w-4 h-4 text-white"/>
                                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                                    {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                                Firstki Aditya Fernanda
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className="text-lg text-white/70 max-w-[550px] mb-8">
                                Passionate about cybersecurity and ethical hacking, I specialize in identifying vulnerabilities and enhancing system security. With hands-on experience in penetration testing and network security, I am dedicated to protecting digital assets and ensuring robust defenses against cyber threats.
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => scrollToSection('contact')} className="inline-flex items-center gap-0 mb-12 group">
                                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6 py-3 text-base font-medium border border-white">
                                    Get in Touch
                                </div>
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {STATS.map((stat, index) => (
                                    <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                                        <div className="text-2xl font-normal text-primary mb-[10px] font-mono">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-white leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* side right column and content */}
                    <FadeIn delay={200}>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                                </div>

                                {/* image container */}
                                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                                    <img
                                        src="../images/profile.png"
                                        alt="Hero Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* technology logos */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <FadeIn delay={500}>
                                        <div className="flex items-center justify-center gap-4 bg-black/70 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                                            {/* linux */}
                                            <div className="w-10 h-10 items-center justify-center flex">
                                                <img src="../images/kalilinux.png" alt="Linux" />
                                            </div>
                                            {/* burpsuite */}
                                            <div className="w-10 h-10  items-center justify-center flex">
                                                <img src="../images/burpsuite.png" alt="Burp Suite" />
                                            </div>
                                            {/* wireshark */}
                                            <div className="w-10 h-10 items-center justify-center flex">
                                                <img src="../images/wireshark.png" alt="Wireshark" />
                                            </div>
                                            {/* nmap */}
                                            <div className="w-10 h-10 items-center justify-center flex">
                                                <img src="../images/nmap.png" alt="Nmap" />
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* scroll indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
                <ChevronDown className="w-8 h-8 text-primary"/>
            </button>

        </section>
    );
}

export default Hero;
