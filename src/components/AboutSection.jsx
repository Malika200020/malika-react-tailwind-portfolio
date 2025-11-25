import { Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer | AI/ML Integrator | Backend Specialist
            </h3>

            <p className="text-muted-foreground">
              I'm a recent Software Engineering graduate passionate about
              building intelligent, scalable, and reliable applications. With
              hands-on experience in{" "}
              <strong>
                Java Spring Boot, Node.js, and AI/ML-powered systems
              </strong>
              , I enjoy solving complex technical challenges and delivering
              high-quality software that meets real-world needs.
            </p>

            <p className="text-muted-foreground">
              My academic and personal projects include an{" "}
              <strong>AI-driven project management tool</strong> recognized at
              NBQSA 2025 and published at IEEE ICCCNT 2025, as well as
              accessibility-focused and enterprise web applications. I'm also
              skilled in integrating predictive analytics, APIs, and secure
              backend workflows.
            </p>

            <p className="text-muted-foreground">
              I am currently working as an{" "}
              <strong>Associate Software Engineer</strong> at E-W Information
              Systems Limited (EWIS) in Sri Lanka. I apply my backend expertise,
              database knowledge, and strong problem-solving skills to
              contribute to a forward-thinking technical team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/papers/CV_Malika Degaldoruwa_ASE.pdf"
                download="CV_Malika Degaldoruwa_ASE.pdf"
                type="application/pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Developing enterprise and research-grade applications with
                    MERN, Spring Boot, and Flask, combining frontend
                    responsiveness with strong backend logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend & System Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in Java Spring Boot, MS SQL, JasperReports, API
                    integration, and automated reporting from my internship at
                    Epic Lanka Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Contributed to secure, large-scale banking applications and
                    report automation modules during my internship, while
                    leading and delivering award-nominated academic projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
