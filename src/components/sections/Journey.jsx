import { ArrowLeft, Award, ExternalLink, Flag, Images, Medal, ShieldCheck } from "lucide-react";
import { achievements, certifications, journey, journeyPhotos } from "../../data/journey";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

const Journey = () => {
    const returnHome = () => {
        window.history.pushState({}, "", window.location.pathname);
        window.dispatchEvent(new PopStateEvent("popstate"));
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-black px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,71,71,0.16),transparent_38%)]" />
            <div className="relative z-10 mx-auto max-w-5xl">
                <FadeIn>
                    <button
                        onClick={() => {
                            returnHome();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="mb-16 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to portfolio
                    </button>

                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.16em] text-primary">
                            <Flag className="h-4 w-4" />
                            My journey
                        </div>
                        <h1 className="text-4xl font-normal leading-tight text-white md:text-6xl">
                            From LKS to offensive security.
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
                            A journey of learning, experimenting, and continuous growth in the world of cybersecurity.
                        </p>
                    </div>
                </FadeIn>

                {journey.length > 0 && (
                    <div className="relative mt-20">
                        <div className="absolute bottom-8 left-[19px] top-8 w-px bg-primary/40 md:left-1/2 md:-translate-x-1/2" />
                        <div className="space-y-12 md:space-y-20">
                            {journey.map((item, index) => (
                                <FadeIn key={item.accent} delay={index * 100}>
                                    <article className={`relative grid gap-6 pl-12 md:grid-cols-2 md:gap-20 md:pl-0 ${index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                                        <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-black text-xs font-semibold text-primary md:left-1/2 md:-translate-x-1/2">
                                            {item.accent}
                                        </div>
                                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                                            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">{item.period}</p>
                                            <h2 className="mt-2 text-2xl font-normal text-white">{item.title}</h2>
                                        </div>
                                        <div className="border-l border-white/10 pl-5 md:border-l-0 md:pl-0">
                                            <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                                {item.description.map((point, index) => (
                                                    <li key={index}>{point.replace("• ", "")}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </article>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                )}

                {certifications.length > 0 && (
                    <FadeIn delay={200}>
                        <section className="mt-24 border-t border-white/10 pt-16">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <div className="mb-3 flex items-center gap-2 text-primary">
                                    <Award className="h-5 w-5" />
                                    <span className="text-sm font-medium uppercase tracking-[0.16em]">Certifications</span>
                                </div>
                                <h2 className="text-3xl font-normal text-white md:text-4xl">Milestones I&apos;ve earned.</h2>
                            </div>
                            <p className="max-w-sm text-sm leading-relaxed text-white/50">A list of certifications supporting my journey in cybersecurity.</p>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {certifications.map((certification) => (
                                <a
                                    key={certification.title}
                                    href={certification.credentialUrl}
                                    className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/60 hover:bg-primary/[0.06]"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <Award className="h-6 w-6 shrink-0 text-primary" />
                                        {certification.credentialUrl !== "#" && <ExternalLink className="h-4 w-4 text-white/40 transition-colors group-hover:text-white" />}
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-white">{certification.title}</h3>
                                    <p className="mt-2 text-sm text-white/50">{certification.issuer}</p>
                                    <p className="mt-4 text-xs uppercase tracking-[0.14em] text-primary">{certification.year}</p>
                                </a>
                            ))}
                        </div>
                        </section>
                    </FadeIn>
                )}

                {achievements.length > 0 && (
                    <FadeIn delay={250}>
                        <section className="mt-24 border-t border-white/10 pt-16">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div>
                                    <div className="mb-3 flex items-center gap-2 text-primary">
                                        <Medal className="h-5 w-5" />
                                        <span className="text-sm font-medium uppercase tracking-[0.16em]">Achievements</span>
                                    </div>
                                    <h2 className="text-3xl font-normal text-white md:text-4xl">Highlights I&apos;ve earned.</h2>
                                </div>
                                <p className="max-w-sm text-sm leading-relaxed text-white/50">A selection of competition results and recognition from my professional journey.</p>
                            </div>

                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {achievements.map((achievement) => (
                                    <a
                                        key={achievement.title}
                                        href={achievement.credentialUrl}
                                        className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/60 hover:bg-primary/[0.06]"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <Medal className="h-6 w-6 shrink-0 text-primary" />
                                            {achievement.credentialUrl !== "#" && <ExternalLink className="h-4 w-4 text-white/40 transition-colors group-hover:text-white" />}
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-white">{achievement.title}</h3>
                                        <p className="mt-2 text-sm text-white/50">{achievement.issuer}</p>
                                        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-primary">{achievement.year}</p>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </FadeIn>
                )}

                {journeyPhotos.length > 0 && (
                    <FadeIn delay={300}>
                        <section className="mt-24 border-t border-white/10 pt-16">
                        <div className="mb-8 flex items-center gap-2 text-primary">
                            <Images className="h-5 w-5" />
                            <span className="text-sm font-medium uppercase tracking-[0.16em]">Journey gallery</span>
                        </div>
                        <h2 className="text-3xl font-normal text-white md:text-4xl">Moments along the way.</h2>
                        <div className="mt-8 columns-1 gap-5 md:columns-3">
                            {journeyPhotos.map((photo, index) => (
                                <figure
                                    key={photo.image}
                                    className={`group mb-5 break-inside-avoid border border-white/10 bg-white/[0.03] transition-transform duration-500 ${index === 1 ? "md:mt-8 md:-rotate-2" : index === 2 ? "md:-mt-4 md:rotate-1" : "md:rotate-2"}`}
                                >
                                    <img src={photo.image} alt={photo.alt} className="block h-auto w-full grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0" />
                                    <figcaption className="p-4 text-sm text-white/60">{photo.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                        </section>
                    </FadeIn>
                )}

                <FadeIn delay={400}>
                    <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3 text-white/60">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <span>Still learning. Still building. Still curious.</span>
                        </div>
                        <button
                            onClick={() => {
                                returnHome();
                                setTimeout(() => scrollToSection("contact"), 0);
                            }}
                            className="inline-flex items-center rounded-[17px] bg-white px-6 py-3.5 font-medium text-[#212121] transition-colors hover:bg-white/90"
                        >
                            Hire Me
                        </button>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
};

export default Journey;
