import React from 'react';
import { skills } from '../../data/skill';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Skills = () => {
    return (
        <section id="skills" className="relative py-16 md:py-24 bg-white">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-normal text-black mb-4 text-center">
                        Technical Skills
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        My technical skills and tools I use in my projects.
                    </p>
                </FadeIn>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map((skill, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all duration-300">
                                <div className="w-16 h-16 mb-4">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-black text-lg font-medium">{skill.name}</h3>
                                <p className="text-gray-600 text-sm">{skill.level}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;