import { useState, useEffect } from "react";
import { FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
 }, []);


  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-violet-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-violet-400 text-xl font-bold">
          Nibah Kondvilkar
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-white">

          <li>
            <a href="#home" className={`transition hover:text-violet-400 ${
              activeSection === "home"
                ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1"
                : "text-white"
            }`}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={`transition hover:text-violet-400 ${
              activeSection === "about"
                ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1"
                : "text-white"
            }`}>
              About
            </a>
          </li>

          <li>
            <a href="#experience" className={`transition hover:text-violet-400 ${
              activeSection === "experience"
                ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1"
                : "text-white"
            }`}>
              Experience
            </a>
          </li>

          <li>
            <a href="#skills" className={`transition hover:text-violet-400 ${
              activeSection === "skills"
                ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1"
                : "text-white"
            }`}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className={`transition hover:text-violet-400 ${
              activeSection === "projects"
                ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1"
                : "text-white"
            }`}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className={`transition hover:text-violet-400 ${
              activeSection === "contact"
                ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1"
                : "text-white"
            }`}>
              Contact
            </a>
          </li>

        </ul>

        {/*For Mobile Menu*/}

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        {/*For Resume*/}
        <a
          href="/Resume.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition"
        >
          <FaFileDownload />
          Download Resume
        </a>

      </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden bg-[#111827] border-t border-violet-700">

            <ul className="flex flex-col items-center py-6 space-y-6 text-white">

              <li>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>
              </li>

              <li>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/Resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-violet-600 px-4 py-2 rounded-lg"
                >
                  <FaFileDownload />
                  Resume
                </a>
              </li>

            </ul>

          </div>
        )}
    </nav>
  );
}

export default Navbar;