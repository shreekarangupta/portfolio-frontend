import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI', backgroundColor: '#121212', color: '#eee', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#1f1f1f', padding: '1rem 2rem', position: 'sticky', top: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#61dafb' }}>Karan Gupta</div>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(section => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} style={{ color: '#61dafb', fontWeight: 600, textDecoration: 'none' }}>{section}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 1rem', background: 'linear-gradient(135deg, #282c34, #20232a)' }}>
        <img
  src="/images/karan.jpg"
  alt="Karan Gupta"
  style={{
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    marginBottom: '1.5rem',
    border: '3px solid #61dafb'
  }}
/>

<h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Hello, I'm Karan Gupta</h1>

        <p style={{ fontSize: '1.25rem', color: '#61dafb', marginBottom: '2rem' }}>Full Stack Developer | ML Enthusiast | Tech Lover</p>
        <a href="#projects" style={{ backgroundColor: '#61dafb', padding: '0.75rem 1.5rem', borderRadius: '30px', fontWeight: 600, color: '#121212', boxShadow: '0 4px 15px rgba(97,218,251,0.6)', textDecoration: 'none' }}>See My Work</a>
      </section>

      <section id="about" style={{ padding: '4rem 2rem', maxWidth: 1100, margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '3px solid #61dafb', display: 'inline-block', paddingBottom: '0.2rem', letterSpacing: '1px' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', color: '#ddd', maxWidth: 700, marginBottom: '1rem' }}>
          I am a passionate Full Stack Developer with experience in building modern, responsive websites and applications. I love to solve challenging problems, learn new technologies, and create clean, user-friendly designs.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#ddd', maxWidth: 700 }}>
          Currently focusing on JavaScript, React, Node.js, and exploring Machine Learning projects.
        </p>
      </section>

      <section id="projects" style={{ padding: '4rem 2rem', maxWidth: 1100, margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '3px solid #61dafb', display: 'inline-block', paddingBottom: '0.2rem', letterSpacing: '1px' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: '#1e1e1e', padding: '1.5rem', borderRadius: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.5)', transition: 'transform 0.3s ease' }}>
            <h3 style={{ marginBottom: '0.75rem', color: '#61dafb' }}>3D Solar System Simulation</h3>
            <p style={{ fontSize: '0.95rem', color: '#ccc', minHeight: 60 }}>
              A responsive web page built using Three.js to simulate the solar system with interactive controls.
            </p>
            <a href="#" style={{ color: '#21a1f1', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid transparent' }}>View Code</a>
          </div>
          <div style={{ backgroundColor: '#1e1e1e', padding: '1.5rem', borderRadius: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.5)', transition: 'transform 0.3s ease' }}>
            <h3 style={{ marginBottom: '0.75rem', color: '#61dafb' }}>CCTV Anomaly Detection System</h3>
            <p style={{ fontSize: '0.95rem', color: '#ccc', minHeight: 60 }}>
              A machine learning project for real-time anomaly detection with notification alerts.
            </p>
            <a href="#" style={{ color: '#21a1f1', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid transparent' }}>View Code</a>
          </div>
          <div style={{ backgroundColor: '#1e1e1e', padding: '1.5rem', borderRadius: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.5)', transition: 'transform 0.3s ease' }}>
            <h3 style={{ marginBottom: '0.75rem', color: '#61dafb' }}>Portfolio Website</h3>
            <p style={{ fontSize: '0.95rem', color: '#ccc', minHeight: 60 }}>
              This portfolio itself, featuring responsive design and smooth animations.
            </p>
            <a href="#" style={{ color: '#21a1f1', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid transparent' }}>View Code</a>
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: '4rem 2rem', maxWidth: 1100, margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '3px solid #61dafb', display: 'inline-block', paddingBottom: '0.2rem', letterSpacing: '1px' }}>Skills</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: 0, marginTop: '1rem' }}>
          {['JavaScript', 'React.js', 'Node.js', 'Python', 'Machine Learning', 'HTML5 & CSS3', 'Three.js', 'Git & GitHub'].map(skill => (
            <li key={skill} style={{ backgroundColor: '#282c34', padding: '0.6rem 1.2rem', borderRadius: 20, fontWeight: 600, color: '#61dafb', boxShadow: '0 2px 8px rgba(97, 218, 251, 0.3)', cursor: 'default' }}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" style={{ padding: '4rem 2rem', maxWidth: 500, margin: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '3px solid #61dafb', display: 'inline-block', paddingBottom: '0.2rem', letterSpacing: '1px' }}>Contact Me</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 8,
              border: 'none',
              fontSize: '1rem',
              backgroundColor: '#282c34',
              color: '#eee',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 8,
              border: 'none',
              fontSize: '1rem',
              backgroundColor: '#282c34',
              color: '#eee',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)',
            }}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 8,
              border: 'none',
              fontSize: '1rem',
              backgroundColor: '#282c34',
              color: '#eee',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)',
              resize: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#61dafb',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontWeight: '700',
              fontSize: '1.1rem',
              borderRadius: '30px',
              cursor: 'pointer',
              color: '#121212',
              boxShadow: '0 6px 20px rgba(97, 218, 251, 0.7)',
            }}
          >
            Send Message
          </button>
          {status && <p style={{ marginTop: '1rem', color: '#61dafb' }}>{status}</p>}
        </form>
      </section>

      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#1f1f1f', color: '#777', fontSize: '0.9rem' }}>
        &copy; 2025 Karan Gupta. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
