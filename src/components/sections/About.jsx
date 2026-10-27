import React, { useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants'; 
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const About = () => {

    const skills = [
        { name: "Kali Linux", color: "#888888" },
        { name: "Metasploit", color: "#888888" },
        { name: "Nmap", color: "#888888" },
        { name: "Wireshark", color: "#888888" },
        { name: "Burp Suite", color: "#888888" },
        { name: "OWASP ZAP", color: "#888888" },
        { name: "John the Ripper", color: "#888888" },
        { name: "Aircrack-ng", color: "#888888" },
        { name: "Nikto", color: "#888888" },
        { name: "SQLmap", color: "#888888" },
        { name: "Hydra", color: "#888888" },
        { name: "Maltego", color: "#888888" },
    ]

    return <section id="about" className="relative py-20 bg-white overflow-hidden">
            <RadialGradientBackground variant="about" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* left column - content */}
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={60}>
                                <div className="inline-flex items-center gap-2.5  border border-primary/30 bg-primary/10 rounded-full w-fit px-4 py-2">
                                    <Code2 className="w-4 h-4 text-primary"/>
                                    <span className="text-sm text-primary font-medium">
                                        Junior Offensive Security
                                    </span>
                                    <Sparkles className="w-4 h-4 text-primary"/>
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight">
                                    Crafting Secure Digital Fortresses: My Journey in Offensive Security 
                                </h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    {Array.isArray(PERSONAL_INFO.bio) && PERSONAL_INFO.bio.map((paragraph, index) => (
                                        <p key={index} className="text-base text-gray-700 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="grid grid-cols-3 gap-8">
                                    {ABOUT_STATS.map((stat, index) => (
                                        <div key={index} className="relative">
                                            <div className="absolute -top-4 left-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                                            <div className="text-3xl font-normal text-black mb-2 font-mono">
                                                {stat.value}
                                            </div>
                                            <p className="text-sm text-gray-600 leading-snug">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={400}>
                                <button
                                    onClick={()=>window.open(PERSONAL_INFO.resume, '_blank')} className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                                >
                                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                    Download Resume
                                </button>
                            </FadeIn>
                        </div>
                    </div>

                    {/* right column - skills */}
                    <FadeIn delay={200}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-t-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div className="relative bg-gray-50 border border-gray-300 rounded-2xl p-6 h-full flex flex-col justify-center gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Code2 className="w-6 h-6 text-primary"/>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-black mb-2">
                                                Expertise
                                            </h3>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Specialized in penetration testing, vulnerability assessment, and ethical hacking to identify and mitigate security risks.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-t-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div className="relative bg-gray-50 border border-gray-300 rounded-2xl p-6 h-full flex flex-col justify-center gap-6">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Sparkles className="w-6 h-6 text-primary"/>
                                    </div>
                                    <h3 className="flex-1 text-black font-semibold">
                                        Tools & Technologies
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Proficient in using tools like Metasploit, Nmap, Burp Suite, and Wireshark for security testing and analysis.
                                    </p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-t-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div className="relative bg-gray-50 border border-gray-300 rounded-2xl p-6 h-full flex flex-col justify-center gap-6">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Download className="w-6 h-6 text-primary"/>
                                    </div>
                                    <h3 className="flex-1 text-black font-semibold">
                                        Continuous Learning
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Committed to staying updated with the latest cybersecurity trends, threats, and defense mechanisms through continuous learning and certifications.
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-t-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <div className="relative bg-gray-50 border border-gray-300 rounded-2xl p-6 h-full flex flex-col justify-center gap-6">
                                    <div className="grid grid-cols-3 gap-6 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                            <div className="text-xs text-gray-700">Client Satisfaction</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                            <div className="text-xs text-gray-700">Support Availability</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">Fast</div>
                                            <div className="text-xs text-gray-700">Response Time and Delivery Time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    };

export default About;