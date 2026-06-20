import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  {
    id: 1,
    title: "CodeFlow AI – Research Project",
    description:
      "An AI-powered solution designed to enhance software project management through predictive analytics and intelligent recommendations.",
    images: [
      "/projects/codeflow.png",
      "/projects/codeflow1.png",
      "/projects/codeflow2.png",
      "/projects/codeflow3.png",
      "/projects/codeflow4.png",
      "/projects/codeflow5.png",
    ],
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Flask",
      "Machine Learning",
      "Gemini AI",
    ],
    bullets: [
      "Developed a web-based system to optimize software project management using predictive analytics and gamified UI strategies.",
      "Implemented AI modules: project timeline prediction, defect estimation, task duration forecasting (COCOMO-inspired), and best team member allocation via online APIs.",
      "Authored and presented the paper “Enhancing Software Project Management Through Predictive Analytics and Gamified User Interfaces” at the 16th IEEE ICCCNT 2025.",
      "Presented at the 27th National ICT Awards (NBQSA Sri Lanka), Tertiary Student Project – Business Category.",
    ],
    githubUrl: "https://github.com/it21250156/ProjectManagementTool",
    demoUrl:
      "https://mysliit-my.sharepoint.com/personal/it21250156_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit21250156%5Fmy%5Fsliit%5Flk%2FDocuments%2FRP%20Demo%20Video%2FRP%5FDemo%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb0acb90c%2Dd4b5%2D4c57%2D94ec%2D8d2bb9b2886a-demo.com",
  },
  {
    id: 2,
    title: "EasyReach App (Kotlin)",
    description:
      "An Android application built to improve the shopping experience for visually impaired individuals through voice navigation and accessibility tools.",
    images: ["/projects/easyreach.png", "/projects/easyreach1.png"],
    tags: ["Kotlin", "Android", "Voice Recognition", "Firebase"],
    bullets: [
      "Built CRUD features for shop owners to add, update, and delete products.",
      "Created an admin console to manage in-store navigation directions.",
      "Integrated voice recognition for hands-free product location guidance.",
      "Published research accepted by European Chemical Bulletin.",
    ],
    githubUrl: "https://github.com/it21250156/EasyReach",
  },
  {
    id: 3,
    title: "Gems & Jewelry Web App (MERN)",
    description:
      "A client-focused feedback management system tailored for the gems and jewelry industry.",
    images: [
      "/projects/CeylonGems.png",
      "/projects/CeylonGems1.png",
      "/projects/CeylonGems2.png",
      "/projects/CeylonGems3.png",
      "/projects/CeylonGems4.png",
      "/projects/CeylonGems5.png",
      "/projects/CeylonGems6.png",
      "/projects/CeylonGems7.png",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js"],
    bullets: [
      "Collaborated with a client to gather requirements and iterative feedback.",
      "Developed a feedback form with star rating, validation, and error handling.",
      "Implemented feedback listing and filtering by search term and timestamp.",
    ],
    githubUrl: "https://github.com/it21250156/CeylonNaturalGems",
  },
];

export const ProjectsSection = () => {
  const [activeImages, setActiveImages] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images) => {
    setActiveImages(images);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + activeImages.length) % activeImages.length,
    );
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of impactful projects, ranging from research-driven
            solutions to client-focused applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={Math.min(idx * 0.06, 0.3)} className="h-full">
              <ProjectCard
                project={project}
                onImageClick={openLightbox}
              />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Malika200020"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {activeImages && (
        <Lightbox
          images={activeImages}
          index={currentIndex}
          onClose={() => setActiveImages(null)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};
