import { ExternalLink } from "lucide-react";
import { Card, CardImage } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const researchItems = [
    {
        id: 1,
        title: "Enhancing Software Project Management Through Predictive Analytics and Gamified UI",
        description:
            "Published at the IEEE ICCCNT 2025 conference, focusing on AI-powered predictive analytics for better project management.",
        image: "/research/icccnt-publication.png",
        paperUrl: "/papers/ICCCNT2025.pdf",
        certUrl: "/papers/ICCCNT_Certificate.pdf",
    },
    {
        id: 2,
        title: "Easy Reach Store: Shopping Application for Visually Challenged",
        description:
            "Co-authored research paper published in the European Chemical Bulletin journal, detailing an accessible shopping app for the visually impaired.",
        image: "/research/ecb-publication.jpg",
        paperUrl: "/papers/EasyReach_ECB.pdf",
        certUrl: "/papers/ECB_Certificate.pdf",
    },
];

export const ResearchSection = () => {
    return (
        <section id="research" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
                        Published <span className="text-primary">Research</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        My contributions to academic research, published in international conferences and journals.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {researchItems.map((paper, idx) => (
                        <Reveal key={paper.id} delay={Math.min(idx * 0.06, 0.3)} className="h-full">
                            <Card>
                                <CardImage src={paper.image} alt={paper.title} />

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {paper.description}
                                    </p>

                                    {/* Buttons in center */}
                                    <div className="flex justify-center gap-3 mt-auto pt-2">
                                        <a
                                            href={paper.paperUrl}
                                            download
                                            className="px-3 py-1 text-xs rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200 ease-snappy flex items-center gap-1"
                                        >
                                            Research Paper <ExternalLink size={14} />
                                        </a>
                                        <a
                                            href={paper.certUrl}
                                            download
                                            className="px-3 py-1 text-xs rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200 ease-snappy flex items-center gap-1"
                                        >
                                            Certificate <ExternalLink size={14} />
                                        </a>
                                    </div>

                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
