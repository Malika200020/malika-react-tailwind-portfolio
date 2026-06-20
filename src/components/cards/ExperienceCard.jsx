import PropTypes from "prop-types";
import { CheckCircle2 } from "lucide-react";
import { Card, CardImage } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export const ExperienceCard = ({ exp }) => (
  <Card>
    <CardImage src={exp.image} alt={exp.title} />

    <div className="p-6 flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-4">
        {exp.tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">
        <strong>Project Type:</strong> {exp.projectType}
      </p>
      <p className="text-muted-foreground text-sm mb-4">{exp.intro}</p>

      <ul className="space-y-2 mb-4">
        {exp.bullets.map((point, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle2 className="text-primary shrink-0" size={16} />
            <span className="text-sm text-muted-foreground">{point}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-foreground font-medium mt-auto pt-2">{exp.outcome}</p>
    </div>
  </Card>
);

ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    intro: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    outcome: PropTypes.string.isRequired,
  }).isRequired,
};
