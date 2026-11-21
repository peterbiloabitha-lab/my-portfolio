import { Code2, ArrowUp } from "lucide-react";

function Footer() {

  return (
    <footer className="footer">

      <a href="#home" className="brand">
        <Code2 size={21} />
        Peter Bilo Abitha<span className="gradient-text">.dev</span>
      </a>

      <p>Designed & developed with React.</p>

      <p>© 2026. All rights reserved.</p>

      <a href="#home">
        Back to top <ArrowUp size={15} />
      </a>

    </footer>
  );
}

export default Footer;