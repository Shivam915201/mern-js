import React from "react";

const App = () => {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom right, #3b82f6, #2563eb, #1e3a8a)",
      color: "white",
      textAlign: "center",
      flexDirection: "column",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    button: {
      padding: "0.75rem 2rem",
      fontSize: "1rem",
      color: "#1e3a8a",
      backgroundColor: "white",
      borderRadius: "9999px",
      textDecoration: "none",
      fontWeight: "600",
      transition: "transform 0.2s ease, background-color 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#3b82f6",
      color: "white",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Create-Blanky-Shivam-App</h1>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
        onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
      >
        Docs
      </a>
      <h3>Do it yourself gang!</h3>
    </div>
  );
};

export default App;
