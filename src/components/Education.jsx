import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    id: 1,
    title: "Sri Lanka Institute of Information Technology (SLIIT)",
    qualification: [
      { level: "BSc (Hons) in Information Technology – Software Engineering", year: "2021 - 2025" },
    ],
    location: "Malabe",
    image: "/education/sliit.jpg",
  },
  {
    id: 2,
    title: "Kingswood College",
    qualification: [
      { level: "Advanced Level – Physical Science Stream", year: "2020" },
      { level: "Ordinary Level", year: "2016" },
    ],
    location: "Kandy",
    image: "/education/kingswood.jpg",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education <span className="text-primary">Background</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey combining technical expertise and foundational knowledge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((edu) => (
            <div
              key={edu.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={edu.image}
                  alt={edu.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-4">{edu.title}</h3>

                <ul className="space-y-4 flex-1">
                  {edu.qualification.map((q, idx) => (
                    <li key={idx} className="border-l-2 border-primary/40 pl-4">
                      <div className="text-sm font-medium text-foreground leading-snug mb-1">{q.level}</div>
                      <div className="text-xs text-muted-foreground">{q.year}</div>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-border/50">
                  <GraduationCap size={14} className="text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};