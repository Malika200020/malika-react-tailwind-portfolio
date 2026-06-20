import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Reveal } from "@/components/ui/Reveal";

const internshipExperiences = [
    {
        id: 1,
        title: "Seylan Admin Web Application",
        projectType: "Full-stack development",
        tools: ["Java", "Spring Boot", "JSP", "MySQL", "GitLab", "Wildfly"],
        image: "/experience/seylan-admin.png",
        intro: "Enhanced Seylan Bank’s internal admin platform, focusing on performance, security, and operational efficiency.",
        bullets: [
            "Developed a bulk branch manager import feature using CSV uploads, reducing manual entry time significantly.",
            "Implemented robust file validation and backend processing to ensure data accuracy.",
            "Built a dual authentication system across 35+ admin pages for sensitive data changes.",
            "Applied secure encoding methods to protect sensitive information in the database."
        ],
        outcome: "Improved operational speed, minimized errors, and strengthened security protocols."
    },
    {
        id: 2,
        title: "Digiface Web Application",
        projectType: "Issue resolution & enhancement",
        tools: ["Java", "JSP", "GitLab"],
        image: "/experience/digiface.jpg",
        intro: "Collaborated with QA to resolve critical backend and frontend issues in a live production web application.",
        bullets: [
            "Patched bugs impacting user workflows and data presentation.",
            "Optimized JSP pages for improved responsiveness.",
            "Enhanced backend request handling to stabilize deployments."
        ],
        outcome: "Boosted application stability, responsiveness, and user satisfaction."
    },
    {
        id: 3,
        title: "eKYC Report Generator Module",
        projectType: "Backend automation & reporting",
        tools: ["Spring Boot", "Jaspersoft Studio", "MS SQL", "Maven"],
        image: "/experience/ekyc-report.png",
        intro: "Developed advanced backend modules for automated report generation in Seylan Bank’s eKYC platform.",
        bullets: [
            "Created a database listener to trigger real-time report generation.",
            "Integrated JasperReports to design dynamic, high-accuracy mandate forms.",
            "Built Joint Account and Sole Partnership forms linked directly to live data."
        ],
        outcome: "Reduced manual workload, ensured compliance, and increased operational efficiency."
    }
];

const currentExperiences = [
    {
        id: 4,
        title: "Archdiocese School Management System",
        projectType: "Business Analysis • System Design • Full-stack Development",
        tools: ["React", "Node.js", "Express", "MySQL", "JWT", "REST APIs", "Chart.js/Recharts", "Git"],
        image: "/experience/bishopsSystem.png",
        intro: "Developed a comprehensive multi-school management platform used by private, international, and vested schools to streamline administration and academic operations.",
        bullets: [
            "Led business requirement gathering sessions and collaborated directly with school administrators and stakeholders to define system workflows and functional requirements.",
            "Designed the application architecture, database structure, and REST API layer for scalable school management operations.",
            "Developed complete frontend and backend modules using React, Node.js, Express, and MySQL with secure role-based authentication and authorization.",
            "Implemented student, teacher, school, document, and administrative management modules with advanced filtering, search, bulk operations, and analytics dashboards.",
            "Built reporting and visualization features including charts, statistics dashboards, and operational insights for school administrators.",
            "Designed secure document management workflows supporting uploads, downloads, approval processes, and production-ready storage architecture."
        ],
        outcome: "Delivered a scalable platform now used in production across multiple schools, with ongoing enhancements driven by direct client collaboration."
    },
    {
        id: 5,
        title: "Chandananda College Management System",
        projectType: "Business Analysis • System Design • Full-stack Development",
        tools: ["React", "Node.js", "Express", "MySQL", "REST APIs", "JWT Authentication", "Git"],
        image: "/experience/schoolMgtApp.png",
        intro: "Designed and developed a complete digital management system for Chandananda College to modernize student administration, academic record management, teacher onboarding, and library operations.",
        bullets: [
            "Conducted stakeholder meetings and gathered functional requirements from school management to define business processes and system features.",
            "Designed database structures and application workflows for student, teacher, academic, and library management.",
            "Developed responsive frontend interfaces and backend APIs for student admissions, teacher onboarding, record management, and administrative operations.",
            "Implemented student profile management, academic marks management, attendance and record tracking, and searchable administrative dashboards.",
            "Built a complete library management module supporting book cataloging, borrowing, returns, inventory tracking, and librarian administration."
        ],
        outcome: "Delivered the project end-to-end, from initial analysis through implementation, testing, deployment, and ongoing client support."
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
                        Professional <span className="text-primary">Experience</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Highlights from my internship at Epic Lanka Pvt. Ltd. and my current role as an Associate Software Engineer at E-W Information Systems (Pvt) Ltd.
                    </p>
                </Reveal>

                <h3 className="text-2xl font-semibold mb-6 tracking-tight">
                    Associate Software Engineer <span className="text-primary">— E-W Information Systems (Pvt) Ltd</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentExperiences.map((exp, idx) => (
                        <Reveal key={exp.id} delay={Math.min(idx * 0.06, 0.3)} className="h-full">
                            <ExperienceCard exp={exp} />
                        </Reveal>
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-6 mt-16 tracking-tight">
                    Internship <span className="text-primary">— Epic Lanka Pvt. Ltd.</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {internshipExperiences.map((exp, idx) => (
                        <Reveal key={exp.id} delay={Math.min(idx * 0.06, 0.3)} className="h-full">
                            <ExperienceCard exp={exp} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
