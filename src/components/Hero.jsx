import {
  GitBranch,
  BriefcaseBusiness,
  ArrowRight,
  Download,
  Code2,
  Sparkles
} from "lucide-react";

function Hero() {

  return (
    <section className="hero section" id="home">

      <div className="hero-content">

        <div className="availability">
          <span className="live-dot"></span>
          OPEN TO FRONTEND OPPORTUNITIES
        </div>

        <p className="eyebrow">
        A DEVELOPER WHO LOVES TO BUILD
        </p>

        <h1>
          Good design catches attention
          <br />
          Great code makes it work
          <br />
          <span className="gradient-text">
          </span>
        </h1>

        <p className="hero-description">
          I'm , a frontend developer who loves exploring ideas, solving problems and bringing
           web projects to life with React. Focused on creating modern interfaces, responsive layouts and meaningful web experiences.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn btn-primary">
            Explore My Work <ArrowRight size={18} />
          </a>

          <a href="/resume.pdf" download className="btn btn-outline">
            Download CV <Download size={18} />
          </a>

        </div>

        <div className="social-row">

          <span>FIND ME ON</span>

          <a href= "https://github.com/peterbiloabitha-lab/portfolio.git"target="_blank" rel="noreferrer">
            <GitBranch />
          </a>

          <a href="www.linkedin.com/in/peter-bilo-abitha-0a0b33372" target="_blank" rel="noreferrer">
            <BriefcaseBusiness />
          </a>

        </div>

      </div>

      <div className="hero-art">

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="profile-card">

          <div className="profile-top">
            <span></span>
            <span></span>
            <span></span>
            <p>Frontend Devolper</p>
          </div>

          <div className="profile-code">

            <p><span className="purple">const</span> developer = {"{"}</p>

            <p className="indent">
              name: <span className="green">"Peter Bilo Abitha"</span>,
            </p>

            <p className="indent">
              role: <span className="green">"Frontend Developer"</span>,
            </p>

            <p className="indent">skills: [</p>

            <p className="indent2">
              <span className="yellow">"HTML"</span>,
            </p>

            <p className="indent2">
              <span className="yellow">"CSS"</span>,
            </p>

            <p className="indent2">
              <span className="yellow">"JavaScript"</span>,
            </p>

            <p className="indent2">
              <span className="yellow">"React"</span>
            </p>

            <p className="indent">]</p>

            <p>{"};"}</p>

            <p className="comment">
            </p>

          </div>

        </div>

        <div className="floating-bubble bubble-one">
          <Code2 />
        </div>

        <div className="floating-bubble bubble-two">
          <Sparkles />
        </div>

      </div>

      <a href="#about" className="scroll-down">
      </a>

    </section>
  );
}

export default Hero;
