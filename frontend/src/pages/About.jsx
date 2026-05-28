import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.jpg"
        alt="Habibullah"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #f97316',
          marginBottom: '20px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)'
        }}
      />

      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '10px',
          color: '#fff'
        }}
      >
        About Me
      </h2>

      <h3
        style={{
          fontSize: '1.5rem',
          color: '#f97316',
          marginBottom: '15px'
        }}
      >
        HABIBULLAH
      </h3>

      <p
        style={{
          color: '#a1a1aa',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          maxWidth: '700px',
          margin: '0 auto 30px auto'
        }}
      >
        Full Stack Developer focused on building scalable MERN stack applications
        with clean UI, secure backend systems, authentication, APIs, and ecommerce functionality.
        Passionate about learning modern technologies and solving real-world problems through code.
      </p>

      <p
        style={{
          color: '#d4d4d8',
          marginBottom: '25px',
          lineHeight: '1.8'
        }}
      >
        📍 Uttar Dinajpur, West Bengal <br />
        📞 +91-7547956830 <br />
        📧 habibullaharyan159@gmail.com
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px'
        }}
      >
        <a
          href="https://github.com/habib-868"
          target="_blank"
          rel="noreferrer"
          style={socialBtnStyle}
        >
          💻 GitHub
        </a>

        <a
          href="https://linkedin.com/in/md-habibullah-743594207"
          target="_blank"
          rel="noreferrer"
          style={{
            ...socialBtnStyle,
            background: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3b82f6',
            color: '#3b82f6'
          }}
        >
          💼 LinkedIn
        </a>

        <a
          href="mailto:habibullaharyan159@gmail.com"
          style={{
            ...socialBtnStyle,
            background: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10b981',
            color: '#10b981'
          }}
        >
          📧 Email
        </a>
      </div>
    </div>
  );
};

export default About;