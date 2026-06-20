import { ExternalLink } from "lucide-react";
import { SiTiktok, SiYoutube } from "react-icons/si";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";

const beyondItems = [
  {
    id: 1,
    title: "Basketball",
    description:
      "Played and led the school basketball team as Vice Captain up to Under-20 level. Secured Central Province runner-up title three times.",
    images: [
      "/beyond/basketball1.JPG",
      "/beyond/basketball2.JPG",
      "/beyond/basketball3.JPG",
    ],
  },
  {
    id: 2,
    title: "Drummer",
    description:
      "Share professional drum covers on social media, perform with bands, and take on freelance event gigs.",
    images: ["/beyond/drumming-tiktok-screenshot.png"],
    socials: {
      youtube: "https://youtube.com/@malikadegaldoruwa4839?si=chQMpD1npNvow_E4",
      tiktok: "https://www.tiktok.com/@malikadegaldoruwa?is_from_webapp=1&sender_device=pc",
      portfolio: "https://malika-drums.vercel.app/",
    },
  },
];

export const BeyondSection = () => {
  const [activeImages, setActiveImages] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images, index) => {
    setActiveImages(images);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <section id="beyond" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
            Beyond <span className="text-primary">the Code</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A glimpse into my passions and interests outside of software engineering.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beyondItems.map((item, itemIdx) => (
            <Reveal key={item.id} delay={Math.min(itemIdx * 0.06, 0.3)} className="h-full">
              <Card>
                {/* Images */}
                <div className="h-48 shrink-0 overflow-hidden flex">
                  {item.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${item.title} ${idx + 1}`}
                      loading="lazy"
                      className="w-full object-cover cursor-pointer transition-transform duration-[400ms] ease-snappy group-hover:scale-105"
                      onClick={() => openLightbox(item.images, idx)}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  {/* Social Icons for Drummer */}
                  {item.socials && (
                    <div className="flex space-x-4 mt-auto pt-2">
                      {item.socials.youtube && (
                        <a
                          href={item.socials.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy"
                        >
                          <SiYoutube size={20} />
                        </a>
                      )}
                      {item.socials.tiktok && (
                        <a
                          href={item.socials.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy"
                        >
                          <SiTiktok size={20} />
                        </a>
                      )}
                      {item.socials.portfolio && (
                        <a
                          href={item.socials.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
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
