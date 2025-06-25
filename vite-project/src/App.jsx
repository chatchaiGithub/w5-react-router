import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Fleet from "./pages/Fleet";
import NotFound from "./pages/NotFound";

const App = () => {
  const styles = {
    app: {
      fontFamily: "Arial, sans-serif",
    },
    navbar: {
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "15px 30px",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    navContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      color: "#ff6b00",
      fontWeight: "bold",
      fontSize: "1.5rem",
      textDecoration: "none",
    },
    logoIcon: {
      fontSize: "1.8rem",
      marginRight: "10px",
    },
    navLinks: {
      display: "flex",
      gap: "30px",
    },
    navLink: {
      color: "#444",
      textDecoration: "none",
      fontWeight: "500",
      transition: "color 0.3s ease",
      padding: "5px 0",
    },
    activeNavLink: {
      color: "#ff6b00",
      borderBottom: "2px solid #ff6b00",
    },
    button: {
      backgroundColor: "#ff6b00",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    footer: {
      backgroundColor: "#333",
      color: "white",
      padding: "60px 20px 30px",
    },
    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    footerColumn: {
      flexBasis: "23%",
      minWidth: "250px",
      marginBottom: "30px",
    },
    footerTitle: {
      fontSize: "1.2rem",
      marginBottom: "20px",
      position: "relative",
      paddingBottom: "10px",
    },
    footerTitleLine: {
      content: "",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "40px",
      height: "3px",
      backgroundColor: "#ff6b00",
    },
    footerList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    footerListItem: {
      marginBottom: "10px",
    },
    footerLink: {
      color: "#ccc",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    footerBottom: {
      borderTop: "1px solid #555",
      marginTop: "30px",
      paddingTop: "20px",
      textAlign: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
    },
    socialIcon: {
      color: "white",
      fontSize: "1.5rem",
    },
  };

  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <Link to="/" style={styles.logo}>
            <span style={styles.logoIcon}>✈️</span>
            Thai Sky Explorer
          </Link>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
            <Link to="/destinations" style={styles.navLink}>
              Destinations
            </Link>
            <Link to="/fleet" style={styles.navLink}>
              Our Fleet
            </Link>
            <Link to="/about" style={styles.navLink}>
              About Us
            </Link>
          </div>
          <button style={styles.button}>Book Now</button>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>
              Thai Sky Explorer
              <div style={styles.footerTitleLine}></div>
            </h3>
            <p>
              Your journey to Thailand's most beautiful destinations starts with
              us. Experience the warmth of Thai hospitality at 30,000 feet.
            </p>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIcon}>
                📱
              </a>
              <a href="#" style={styles.socialIcon}>
                📷
              </a>
              <a href="#" style={styles.socialIcon}>
                🐦
              </a>
              <a href="#" style={styles.socialIcon}>
                👍
              </a>
            </div>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>
              Quick Links
              <div style={styles.footerTitleLine}></div>
            </h3>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>
                <Link to="/" style={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li style={styles.footerListItem}>
                <Link to="/destinations" style={styles.footerLink}>
                  Destinations
                </Link>
              </li>
              <li style={styles.footerListItem}>
                <Link to="/fleet" style={styles.footerLink}>
                  Our Fleet
                </Link>
              </li>
              <li style={styles.footerListItem}>
                <Link to="/about" style={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li style={styles.footerListItem}>
                <a href="#" style={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>
              Contact Us
              <div style={styles.footerTitleLine}></div>
            </h3>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>
                123 Suvarnabhumi Road, Bangkok
              </li>
              <li style={styles.footerListItem}>+66 2 123 4567</li>
              <li style={styles.footerListItem}>info@thaiskyexplorer.com</li>
              <li style={styles.footerListItem}>
                Hours: 24/7 Customer Service
              </li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>
              Newsletter
              <div style={styles.footerTitleLine}></div>
            </h3>
            <p>
              Subscribe to receive updates on special offers and new
              destinations.
            </p>
            <div style={{ marginTop: "15px" }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: "10px",
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              />
              <button
                style={{
                  backgroundColor: "#ff6b00",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} Thai Sky Explorer. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
