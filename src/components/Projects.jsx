import { useState } from "react";

import {
  GitBranch,
  ExternalLink,
  Code2
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Booking App",
    category: "React",
    description:
      "Movie application with movie listings, details, login and cart functionality.",
    tech: ["React", "CSS", "Axios", "REST API"],
    github: "https://github.com/",
    demo: "#"
  },
  {
    id: 2,
    title: "Fake Review Detection",
    category: "python",
    description:
      "Machine learning application that detects fake customer reviews and classifies them as genuine or fraudulent.",
    tech: ["python","Flask", "JavaScript", "CSS"],
    github: "https://github.com/peterbiloabitha-lab/Fake__review.git",
    demo: "#"
  },
  {
    id: 3,
    title: "TripNest",
    category: "JavaScript",
    description:
      "Travel website with destination search, hotel listings and booking flow.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/",
    demo: "#"
  }
];

function Projects() {

  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "JavaScript"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section className="section" id="projects">

      <div className="section-title">


        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>

      </div>

      <div className="project-toolbar">


        <div className="filters">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setFilter(category)}
              className={
                filter === category
                  ? "filter active"
                  : "filter"
              }
            >
              {category}
            </button>

          ))}

        </div>

      </div>

      <div className="projects-grid">

        {filteredProjects.map((project) => (

          <article className="project-card" key={project.id}>

            <div className={`project-visual visual-${project.id}`}>

              <span className="project-index">
                0{project.id} / 03
              </span>

              <div className="project-visual-icon">
                <Code2 size={48} />
              </div>

              <h3>{project.title}</h3>

              <span className="project-category">
                {project.category} PROJECT
              </span>

            </div>

            <div className="project-details">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">

                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>

              <div className="project-actions">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={17} />
                  Source Code
                </a>

                
                
              

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;
