import React, { useEffect, useState } from 'react';
import { projects, categories } from '../../data/projects';
import { Briefcase, Palette, Target, Globe, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';

const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = React.useRef(null);

    const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3; // Assuming 3 cards are visible
            container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex);
    }

    const categoryIcons = {
        "All": Target,
        "Red Teaming Tools": Globe,
        "Vulnerability Research": Palette,
        "Security Labs": Zap
    };

    return (
        <section id="projects" className="relative py-20 bg-black overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"/>
                <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl"/>
           </div>

           <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full mb-4">
                            <Briefcase className="w-6 h-6 text-primary" />
                            <span className="text-sm text-primary font-medium">My Work</span>
                        </div>
                        <h2 className='text-2xl lg:text-5xl font-normal text-white'>Featured Projects</h2>
                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>A showcase of my recent work and projects.</p>
                    </div>
                </FadeIn>

                {/* Categories filter */}
                <FadeIn delay={100}>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >         
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-primary/10 opacity-100'
                                        : 'bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100'
                                }`}/>

                                <div className="relative flex items-center gap-2">
                                    {React.createElement(categoryIcons[category], {className: 'w-5 h-5'})}
                                    <span className="text-sm">{category}</span>
                                </div>

                                {activeCategory === category && (
                                    <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10"/>
                                )}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Projects carousel */}
                <FadeIn delay={200}>
                    <div className="relative">
                        <div 
                            ref={scrollContainerRef}
                            className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex hide-scrollbar"
                        >
                            <div className="flex gap-6 pb-4">
                                {filteredProjects.map((project, index) => (
                                    <div key={project.id} className="w-full md:w-[clac(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start">
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        {filteredProjects.length > 3 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full m-4"
                                    aria-label="Previous Projects"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= filteredProjects.length - 3}
                                    className="flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full m-4"
                                    aria-label="Next Projects"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* navigation dots */}
                        {filteredProjects.length > 3 && (
                            <div className="flex items-center justify-center gap-2 mt-8">
                                {Array.from({ length: filteredProjects.length - 2 }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => scrollToIndex(idx)}
                                        className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
                                            currentIndex === idx ? 'bg-white' : 'bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
           </div>
        </section>
    );
};

export default Projects;