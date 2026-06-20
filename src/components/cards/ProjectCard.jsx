import PropTypes from "prop-types";
import { CheckCircle2, ExternalLink, Github } from "lucide-react";
import Slider from "react-slick";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 450,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  adaptiveHeight: true,
};

export const ProjectCard = ({ project, onImageClick }) => (
  <Card>
    <div className="h-48 shrink-0 overflow-hidden cursor-pointer" onClick={() => onImageClick(project.images)}>
      <Slider {...sliderSettings}>
        {project.images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

      {project.bullets?.length > 0 && (
        <ul className="space-y-2 mb-4">
          {project.bullets.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="text-primary shrink-0" size={16} />
              <span className="text-sm text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex space-x-3 mt-auto pt-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy"
          >
            <ExternalLink size={20} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  </Card>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string),
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
