import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    hero: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      padding: "100px 20px",
      textAlign: "center",
      borderRadius: "10px",
      marginBottom: "40px",
      position: "relative",
    },
    heroOverlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "10px",
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
    },
    title: {
      fontSize: "2.8rem",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginBottom: "30px",
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
    features: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "40px 0",
    },
    featureCard: {
      flex: "0 0 30%",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "30px",
      marginBottom: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    icon: {
      fontSize: "3rem",
      color: "#ff6b00",
      marginBottom: "15px",
    },
    cardTitle: {
      fontSize: "1.5rem",
      marginBottom: "15px",
    },
    destinations: {
      marginTop: "60px",
    },
    destinationGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },
    destinationCard: {
      position: "relative",
      height: "200px",
      borderRadius: "10px",
      overflow: "hidden",
    },
    destinationImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    destinationOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      padding: "15px",
      color: "white",
    },
    section: {
      marginBottom: "60px",
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "20px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Thai Sky Explorer</h1>
          <p style={styles.subtitle}>
            Discover the beauty of Thailand from above
          </p>
          <Link to="/destinations" style={styles.button}>
            Explore Destinations
          </Link>
        </div>
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.icon}>✈️</div>
          <h3 style={styles.cardTitle}>Premium Fleet</h3>
          <p>
            Experience travel in our modern aircraft fleet with the highest
            standards of comfort and safety.
          </p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.icon}>🌏</div>
          <h3 style={styles.cardTitle}>Stunning Destinations</h3>
          <p>
            Fly to Thailand's most beautiful destinations, from bustling cities
            to serene beaches.
          </p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.icon}>⭐</div>
          <h3 style={styles.cardTitle}>Thai Hospitality</h3>
          <p>
            Experience the warmth of Thai service excellence throughout your
            journey with us.
          </p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Destinations</h2>
        <div style={styles.destinationGrid}>
          <div style={styles.destinationCard}>
            <img
              src="https://images.unsplash.com/photo-1510379872535-9310dc6fd6a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bangkok"
              style={styles.destinationImage}
            />
            <div style={styles.destinationOverlay}>
              <h3>Bangkok</h3>
              <p>The vibrant capital city</p>
            </div>
          </div>
          <div style={styles.destinationCard}>
            <img
              src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Phuket"
              style={styles.destinationImage}
            />
            <div style={styles.destinationOverlay}>
              <h3>Phuket</h3>
              <p>Paradise island beaches</p>
            </div>
          </div>
          <div style={styles.destinationCard}>
            <img
              src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Chiang Mai"
              style={styles.destinationImage}
            />
            <div style={styles.destinationOverlay}>
              <h3>Chiang Mai</h3>
              <p>The cultural northern city</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
