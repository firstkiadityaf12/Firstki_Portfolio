import React from "react";
import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Wrench } from "lucide-react"; 
import FadeIn from "../animations/FadeIn";

const Services = () => {
    return (
        <section id="services" className="relative py-5 md:py-5 bg-black overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"/>
            </div>

            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px) linear-gradient(to bottom, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />
                
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-3">
                            <Wrench className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium tracking-wider uppercase">What I Offer</span>
                        </div>
                        <h2 className="text-2xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
                            Save Time, Enhance Security, and Boost Efficiency with My Cybersecurity Services
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            I provide a range of cybersecurity services tailored to meet your specific needs and protect your digital assets.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.slice(0, 2).map((service, index) => {
                        const IconComponent = Icons[service.icon] || Icons.Code
                        return (
                            <FadeIn key={service.id} delay={(index + 1) * 100}>
                                <div className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-medium text-white">{service.title}</h3>
                                        <p className="text-white/60">{service.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    }
                    )}
                    {services.slice(2).map((service, index) => {
                        const IconComponent = Icons[service.icon] || Icons.Code
                        return (
                            <FadeIn key={service.id} delay={(index + 1) * 100}>
                                <div className="bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-medium text-white">{service.title}</h3>
                                        <p className="text-white/60">{service.description}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Services;