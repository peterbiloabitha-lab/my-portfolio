import {
  Code2,
  Monitor,
  Sparkles,
  Braces
} from "lucide-react";

function About() {

  return (
    <section className="section" id="about">

      <div className="section-title">


        <h2>
          Who <span className="gradient-text">I Am</span>
        </h2>

      </div>

      <div className="about-layout">

        <div className="about-copy">

          <h3>
            Turning ideas into meaningful digital experiences.
          </h3>

          <p>
            I'm a frontend developer who enjoys building clean,
            attractive and responsive web interfaces.
          </p>

          <p>
            I work with HTML, CSS, JavaScript and React JS.
            I enjoy learning new technologies and building
            practical projects.
          </p>

          <p>
            My goal is to become a professional frontend
            developer and contribute to impactful applications.
          </p>

          <a href="#contact" className="text-link">
            Let's work together →
          </a>

        </div>

        <div className="about-stats">

          <div className="stat-card">
            <Code2 />
            <h3>Frontend</h3>
            <p>Modern web development</p>
          </div>

          <div className="stat-card">
            <Monitor />
            <h3>Responsive</h3>
            <p>Mobile-first interfaces</p>
          </div>

          <div className="stat-card">
            <Sparkles />
            <h3>Creative</h3>
            <p>Modern UI experiences</p>
          </div>

          <div className="stat-card">
            <Braces />
            <h3>Problem Solving</h3>
            <p>Practical coding skills</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;