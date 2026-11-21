import { useState } from "react";

import {
  Code2,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Services",
    "Contact"
  ];

  return (
    <header className="navbar">

      <a href="#home" className="brand">
        <Code2 size={23} />
        Peter Bilo Abitha<span className="gradient-text">.dev</span>
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

      </nav>

      <div className="nav-actions">

        

        <a href="#contact" className="nav-hire">
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button
          className="icon-btn mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;