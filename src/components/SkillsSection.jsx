import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHoverVariants, snap } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker, FaPython, FaJava
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiFlask, SiJira, SiFigma, SiPostman,
  SiCplusplus, SiR, SiSpringboot
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML5", category: "frontend", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS3", category: "frontend", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "JavaScript", category: "frontend", icon: <FaJs className="text-4xl text-yellow-400" /> },
  { name: "React.js", category: "frontend", icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
  { name: "Next.js", category: "frontend", icon: <SiNextdotjs className="text-4xl text-black dark:text-white" /> },

  // Backend
  { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "Express.js", category: "backend", icon: <FaNodeJs className="text-4xl text-gray-700 dark:text-gray-300" /> },
  { name: "Spring Boot", category: "backend", icon: <SiSpringboot className="text-4xl text-green-600" /> },
  { name: "MongoDB", category: "backend", icon: <SiMongodb className="text-4xl text-green-600" /> },
  { name: "PostgreSQL", category: "backend", icon: <SiPostgresql className="text-4xl text-blue-500" /> },
  { name: "Flask", category: "backend", icon: <SiFlask className="text-4xl text-gray-800 dark:text-white" /> },
  { name: "REST API", category: "backend", icon: <FaNodeJs className="text-4xl text-green-500" /> },

  // Tools
  { name: "Git / GitHub", category: "tools", icon: <FaGithub className="text-4xl text-gray-800 dark:text-white" /> },
  { name: "Jira", category: "tools", icon: <SiJira className="text-4xl text-blue-500" /> },
  { name: "Docker", category: "tools", icon: <FaDocker className="text-4xl text-blue-400" /> },
  { name: "Figma", category: "tools", icon: <SiFigma className="text-4xl text-pink-500" /> },
  { name: "VS Code", category: "tools", icon: <FaReact className="text-4xl text-blue-500" /> },
  { name: "Postman", category: "tools", icon: <SiPostman className="text-4xl text-orange-500" /> },

  // Other
  { name: "Python", category: "other", icon: <FaPython className="text-4xl text-yellow-400" /> },
  { name: "Java", category: "other", icon: <FaJava className="text-4xl text-red-600" /> },
  { name: "Kotlin", category: "other", icon: <FaJava className="text-4xl text-purple-600" /> },
  { name: "SQL", category: "other", icon: <SiPostgresql className="text-4xl text-blue-500" /> },
  { name: "C / C++", category: "other", icon: <SiCplusplus className="text-4xl text-blue-600" /> },
  { name: "R Programming", category: "other", icon: <SiR className="text-4xl text-blue-500" /> },
];

const categories = ["all", "frontend", "backend", "tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-200 ease-snappy capitalize active:scale-95",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={activeCategory} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-fast">
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              variants={cardHoverVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              transition={snap}
              className="bg-card p-6 rounded-lg flex flex-col items-center justify-center text-center will-change-transform"
            >
              {skill.icon}
              <h3 className="font-semibold text-lg mt-3">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
