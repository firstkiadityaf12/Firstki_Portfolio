import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const ContactBanner = () => {
    return (
        <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#0d0505] py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,71,71,0.18),transparent_45%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Let&apos;s connect</p>
                            <h2 className="max-w-2xl text-3xl font-normal leading-tight text-white md:text-5xl">
                                Ready to make your digital space more secure?
                            </h2>
                            <p className="mt-4 max-w-xl text-base text-white/60 md:text-lg">
                                Let&apos;s discuss how I can help protect your systems and digital assets.
                            </p>
                        </div>

                        <a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="inline-flex w-fit items-center gap-2 rounded-[17px] bg-white px-6 py-3.5 text-base font-medium text-[#212121] transition-colors hover:bg-white/90"
                        >
                            Hire Me
                            <ArrowUpRight className="h-5 w-5" />
                        </a>
                    </div>

                    <div className="mt-12 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white">
                            <Mail className="h-5 w-5 text-primary" />
                            <span className="break-all">{PERSONAL_INFO.email}</span>
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white">
                            <Linkedin className="h-5 w-5 text-primary" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="tel:+6281234567890" className="flex items-center gap-3 text-white/70 transition-colors hover:text-white">
                            <Phone className="h-5 w-5 text-primary" />
                            <span>+6282229231664</span>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ContactBanner;
