import React, { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon, FaDownload, FaFilter, FaLinkedin } from "react-icons/fa";
import TokiyoChatbot from "./components/TokiyoChatbot";
import LeetCodeGraph from "./components/LeetCodeGraph";
import GitHubGraph from "./components/GitHubGraph";

const projectsData = [
  {
    id: 1,
    category: "Full Stack",
    title: "3D Solar System Simulation",
    desc: "A responsive web page built using Three.js to simulate the solar system with interactive controls.",
    link: "https://github.com/shreekarangupta/karan_gupta_3d_Solar_System_",
  },
  {
    id: 2,
    category: "Machine Learning",
    title: "CCTV Anomaly Detection System",
    desc: "A machine learning project for real-time anomaly detection with notification alerts.",
    link: "https://github.com/shreekarangupta/CCTV_Anomaly_Detection_System",
  },
  {
    id: 3,
    category: "Full Stack",
    title: "Portfolio Website",
    desc: "This portfolio itself, featuring responsive design and smooth animations.",
    link: "https://github.com/shreekarangupta/portfolio-frontend",
  },
  {
    id: 4,
    category: "Frontend",
    title: "React Weather App",
    desc: "A weather app built with React and OpenWeather API.",
    link: "https://github.com/shreekarangupta/React_Weather_App",
  },
  {
    id: 5,
    category: "Machine Learning",
    title: "Multi-Agent Debate DAG",
    desc: "An AI debate simulation with 8 rounds between two agents and a judge using LangGraph and memory tracking.",
    link: "https://github.com/shreekarangupta/multi-agent-debate-dag",  // replace with actual repo link
  },
  {
    id: 6,
    category: "Machine Learning",
    title: "Self-Healing Classification Pipeline",
    desc: "A resilient LangGraph pipeline with fallback logic, fine-tuning, and real-time logging for robust classification.",
    link: "https://github.com/shreekarangupta/self-healing-classifier", // replace with actual repo link
  },
];

const categories = ["All", "Frontend", "Full Stack", "Machine Learning"];

function App() {
  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true" || false;
  });

  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (filter === "All") setFilteredProjects(projectsData);
    else
      setFilteredProjects(
        projectsData.filter((p) => p.category === filter)
      );
  }, [filter]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--bg-color", "#121212");
      document.documentElement.style.setProperty("--text-color", "#eee");
      document.documentElement.style.setProperty("--card-bg", "#1e1e1e");
      document.documentElement.style.setProperty("--btn-bg", "#61dafb");
      document.documentElement.style.setProperty("--btn-text", "#121212");
      document.documentElement.style.setProperty("--nav-bg", "#1f1f1f");
      document.documentElement.style.setProperty("--link-color", "#61dafb");
      document.documentElement.style.setProperty("--shadow", "0 6px 20px rgba(97, 218, 251, 0.7)");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#f9f9f9");
      document.documentElement.style.setProperty("--text-color", "#121212");
      document.documentElement.style.setProperty("--card-bg", "#fff");
      document.documentElement.style.setProperty("--btn-bg", "#007bff");
      document.documentElement.style.setProperty("--btn-text", "#fff");
      document.documentElement.style.setProperty("--nav-bg", "#fff");
      document.documentElement.style.setProperty("--link-color", "#007bff");
      document.documentElement.style.setProperty("--shadow", "0 6px 20px rgba(0, 123, 255, 0.7)");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleFilterChange = (cat) => setFilter(cat);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(
        "https://portfolio-api.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setStatus(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
   {/* Navbar */}
<nav
  style={{
    backgroundColor: "var(--nav-bg)",
    padding: "1rem 2rem",
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <div
    style={{
      fontWeight: "bold",
      fontSize: "1.4rem",
      color: "var(--link-color)",
    }}
  >
    Karan Gupta
  </div>

  <ul
    style={{
      display: "flex",
      gap: "1.5rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    }}
  >
    {["Home", "About", "Projects", "Skills", "Contact"].map((section) => (
      <li key={section}>
        <a
          href={`#${section.toLowerCase()}`}
          style={{
            color: "var(--link-color)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {section}
        </a>
      </li>
    ))}
  </ul>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    {/* GitHub */}
    <a
      href="https://github.com/shreekarangupta"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      style={{ color: "var(--link-color)", fontSize: "1.3rem" }}
    >
      <FaGithub />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/karan-gupta-70723728a"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
      style={{ color: "var(--link-color)", fontSize: "1.3rem" }}
    >
      {/* <i className="fab fa-linkedin-in" /> */}
         <FaLinkedin/>
    </a>

    {/* Dark Mode Toggle */}
    <div
      onClick={toggleDarkMode}
      style={{
        cursor: "pointer",
        color: "var(--link-color)",
        fontSize: "1.3rem",
        userSelect: "none",
      }}
      title={darkMode ? "Light Mode" : "Dark Mode"}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </div>
  </div>
</nav>


      {/* Home Section */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 1rem",
          background: darkMode
            ? "linear-gradient(135deg, #282c34, #20232a)"
            : "linear-gradient(135deg, #61dafb, #21a1f1)",
          transition: "background 0.5s ease",
        }}
      >
        <img
          src="/images/karan.jpg"
          alt="Karan Gupta"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            marginBottom: "1.5rem",
            border: "3px solid var(--btn-bg)",
          }}
        />
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Hello, I'm Karan Gupta
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--btn-bg)",
            marginBottom: "2rem",
          }}
        >
          Full Stack Developer | ML Enthusiast | Tech Lover
        </p>
        <a
          href="#projects"
          className="glow-button"
          style={{
            backgroundColor: "var(--btn-bg)",
            padding: "0.75rem 1.5rem",
            borderRadius: "30px",
            fontWeight: 600,
            color: "var(--btn-text)",
            boxShadow: "var(--shadow)",
            textDecoration: "none",
            transition: "all 0.3s ease",
            userSelect: "none",
          }}
        >
          See My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          maxWidth: 1100,
          margin: "auto",
          transition: "color 0.5s ease",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            borderBottom: `3px solid var(--btn-bg)`,
            display: "inline-block",
            paddingBottom: "0.2rem",
            letterSpacing: "1px",
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: 700,
            marginBottom: "1rem",
            color: "var(--text-color)",
          }}
        >
          I am a passionate Full Stack Developer with experience in building
          modern, responsive websites and applications. I love to solve
          challenging problems, learn new technologies, and create clean,
          user-friendly designs.
        </p>
        <p style={{ fontSize: "1.1rem", maxWidth: 700, color: "var(--text-color)" }}>
          Currently focusing on JavaScript, React, Node.js, and exploring Machine
          Learning projects.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{ padding: "4rem 2rem", maxWidth: 1100, margin: "auto" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            borderBottom: `3px solid var(--btn-bg)`,
            display: "inline-block",
            paddingBottom: "0.2rem",
            letterSpacing: "1px",
          }}
        >
          Projects
        </h2>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className="glow-button"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                border: "none",
                backgroundColor:
                  filter === cat ? "var(--btn-bg)" : "var(--card-bg)",
                color: filter === cat ? "var(--btn-text)" : "var(--text-color)",
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: "var(--shadow)",
                transition: "all 0.3s ease",
                userSelect: "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "2rem",
          }}
        >
          {filteredProjects.map(({ id, title, desc, link }) => (
            <div
              key={id}
              style={{
                backgroundColor: "var(--card-bg)",
                padding: "1.5rem",
                borderRadius: 10,
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                transition: "transform 0.3s ease",
              }}
              className="project-card"
            >
              <h3 style={{ marginBottom: "0.75rem", color: "var(--btn-bg)" }}>
                {title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-color)" }}>
                {desc}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--link-color)", fontWeight: 600 }}
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          padding: "4rem 2rem",
          maxWidth: 1100,
          margin: "auto",
          transition: "color 0.5s ease",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            borderBottom: `3px solid var(--btn-bg)`,
            display: "inline-block",
            paddingBottom: "0.2rem",
            letterSpacing: "1px",
          }}
        >
          Skills
        </h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            padding: 0,
            marginTop: "1rem",
          }}
        >
          {[
            "JavaScript",
            "React.js",
            "Node.js",
            "Python",
            "Machine Learning",
            "HTML5 & CSS3",
            "Three.js",
            "Git & GitHub",
          ].map((skill) => (
            <li
              key={skill}
              style={{
                backgroundColor: "var(--card-bg)",
                padding: "0.6rem 1.2rem",
                borderRadius: 20,
                fontWeight: 600,
                color: "var(--btn-bg)",
                boxShadow: "0 2px 8px var(--btn-bg)",
                cursor: "default",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>

        {/* GitHub & LeetCode Graphs */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <GitHubGraph username="shreekarangupta" />
          <LeetCodeGraph username="mrkarang_26" />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          maxWidth: 600,
          margin: "auto",
          transition: "color 0.5s ease",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            borderBottom: `3px solid var(--btn-bg)`,
            display: "inline-block",
            paddingBottom: "0.2rem",
            letterSpacing: "1px",
          }}
        >
          Contact Me
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <button type="submit" className="glow-button" style={submitButtonStyle}>
            Send Message
          </button>
          <p style={{ marginTop: "1rem", minHeight: "1.5rem" }}>{status}</p>
        </form>
      </section>

      {/* Resume Download Button fixed bottom-right */}
      <a
        href="/resume.pdf"
        download
        title="Download Resume"
        className="glow-button"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "var(--btn-bg)",
          color: "var(--btn-text)",
          padding: "0.75rem 1rem",
          borderRadius: "30px",
          fontWeight: "600",
          boxShadow: "var(--shadow)",
          textDecoration: "none",
          userSelect: "none",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <FaDownload /> Resume
      </a>

      {/* AI Chatbot Tokiyo */}
      <TokiyoChatbot />

      {/* Global styles */}
      <style>{`
        input, textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input:focus, textarea:focus {
          border-color: var(--btn-bg);
          outline: none;
        }
        .glow-button:hover {
          box-shadow: 0 0 12px 2px var(--btn-bg);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  padding: "0.75rem 1rem",
  marginBottom: "1rem",
};

const submitButtonStyle = {
  backgroundColor: "var(--btn-bg)",
  color: "var(--btn-text)",
  padding: "0.75rem 1.5rem",
  fontWeight: "600",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  boxShadow: "var(--shadow)",
  userSelect: "none",
};

export default App;
