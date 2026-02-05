import React from "react";
import { ExternalLink, TrendingUp } from "lucide-react";

const ProjectCard = ({ project }) => {
    const { title, description, image, technologies, metrics, demoUrl, githubUrl } = project;
    
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"/>

                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    {demoUrl && (
                        <a 
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/10 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a 
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/10 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                        >
                            <TrendingUp className="w-4 h-4" />
                            GitHub
                        </a>
                    )}
                </div>

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-gray-300">{description}</p>
                </div>

                <div className="flex flex-wrap">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index}
                            className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded mr-2 mb-2"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {metrics && (
                    <div className="mt-4">
                        <TrendingUp className="inline-block w-4 h-4 mr-2 text-primary" />
                        {Object.entries(JSON.parse(metrics)).map(([key, value], index) => (
                            <span key={index} className="inline-block mr-2">
                                {key}: {value}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
    );
}

export default ProjectCard;