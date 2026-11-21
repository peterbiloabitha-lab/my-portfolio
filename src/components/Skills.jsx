import {
  Code2,
  Palette,
  Braces,
  Atom,
  Smartphone,
  GitBranch,
  Database,
  Monitor,
  ArrowUpRight
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code2, type: "Frontend" },
  { name: "CSS3", icon: Palette, type: "Frontend" },
  { name: "JavaScript", icon: Braces, type: "Frontend" },
  { name: "React JS", icon: Atom, type: "Frontend" },
  { name: "Responsive Design", icon: Smartphone, type: "Frontend" },
  { name: "Git & GitHub", icon: GitBranch, type: "Tools" },
];

function Skills() {

  return (
    <section className="section" id="skills">

      <div className="section-title">


        <h2>
          Technical <span className="gradient-text">Skills</span>
        </h2>

      </div>

      <div className="skills-grid">

        {skills.map((skill) => {

          const Icon = skill.icon;

          return (

            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                <Icon size={27} />
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.type}</p>
              </div>

              <ArrowUpRight
                className="skill-arrow"
                size={18}
              />

            </div>

          );

        })}

      </div>

    </section>
  );
}

export default Skills;
