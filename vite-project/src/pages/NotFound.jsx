import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "100px auto",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    icon: {
      fontSize: "80px",
      marginBottom: "20px",
      color: "#ff6b00",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "#333",
    },
    message: {
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    button: {
      backgroundColor: "#ff6b00",
      color: "white",
      border: "none",
      padding: "12px 30px",
      fontSize: "1.1rem",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      marginBottom: "30px",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>✈️</div>
      <h1 style={styles.title}>Page Not Found</h1>
      <img
        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Plane in clouds"
        style={styles.image}
      />
      <p style={styles.message}>
        It seems this flight route doesn't exist! The page you're looking for
        may have been moved, deleted, or never existed in the first place. Let's
        get you back on course.
      </p>
      <Link to="/" style={styles.button}>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
