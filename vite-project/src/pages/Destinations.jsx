import React from "react";

const Destinations = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      padding: "80px 20px",
      textAlign: "center",
      borderRadius: "10px",
      marginBottom: "40px",
      position: "relative",
    },
    headerOverlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "10px",
    },
    headerContent: {
      position: "relative",
      zIndex: 2,
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.2rem",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    tabs: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
      flexWrap: "wrap",
    },
    tab: {
      padding: "12px 25px",
      margin: "5px",
      border: "none",
      backgroundColor: "#f3f3f3",
      color: "#444",
      cursor: "pointer",
      borderRadius: "30px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
    },
    activeTab: {
      backgroundColor: "#ff6b00",
      color: "white",
    },
    destinationGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "30px",
    },
    destinationCard: {
      backgroundColor: "white",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "20px",
    },
    cardTitle: {
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
    cardSubtitle: {
      fontSize: "1rem",
      color: "#777",
      marginBottom: "15px",
    },
    features: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
    feature: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.9rem",
      color: "#555",
    },
    icon: {
      marginRight: "5px",
      color: "#ff6b00",
    },
    button: {
      backgroundColor: "#ff6b00",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
    },
  };

  const destinations = [
    {
      name: "Bangkok",
      region: "Central",
      image:
        "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "The vibrant capital city with a mix of tradition and modernity.",
      flightTime: "1h",
      frequency: "Daily",
      price: "฿2,500",
    },
    {
      name: "Chiang Mai",
      region: "North",
      image:
        "https://plus.unsplash.com/premium_photo-1661929242720-140374d97c94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The cultural hub of the north, surrounded by mountains.",
      flightTime: "1h 15m",
      frequency: "Daily",
      price: "฿3,200",
    },
    {
      name: "Phuket",
      region: "South",
      image:
        "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Thailand's largest island with stunning beaches and nightlife.",
      flightTime: "1h 20m",
      frequency: "Daily",
      price: "฿3,800",
    },
    {
      name: "Krabi",
      region: "South",
      image:
        "https://images.unsplash.com/photo-1537956965359-7573183d1f57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Famous for its limestone karsts and beautiful beaches.",
      flightTime: "1h 25m",
      frequency: "Daily",
      price: "฿3,600",
    },
    {
      name: "Chiang Rai",
      region: "North",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Known for the White Temple and beautiful mountain scenery.",
      flightTime: "1h 30m",
      frequency: "5x Weekly",
      price: "฿3,400",
    },
    {
      name: "Hat Yai",
      region: "South",
      image:
        "https://images.unsplash.com/photo-1646413321672-a7b0e4e42398?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A major commercial center in southern Thailand.",
      flightTime: "1h 40m",
      frequency: "Daily",
      price: "฿3,900",
    },
    {
      name: "Udon Thani",
      region: "Northeast",
      image:
        "https://images.unsplash.com/photo-1537897167687-34663468446b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Gateway to Isaan and Red Lotus Lake.",
      flightTime: "1h 10m",
      frequency: "4x Weekly",
      price: "฿3,100",
    },
    {
      name: "Surat Thani",
      region: "South",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Gateway to Koh Samui and other Gulf islands.",
      flightTime: "1h 15m",
      frequency: "Daily",
      price: "฿3,500",
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerOverlay}></div>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            Explore Thailand's Beautiful Destinations
          </h1>
          <p style={styles.subtitle}>
            From the bustling streets of Bangkok to the tranquil beaches of the
            South, discover the diverse beauty of Thailand with Thai Sky
            Explorer.
          </p>
        </div>
      </header>

      <div style={styles.tabs}>
        <button style={{ ...styles.tab, ...styles.activeTab }}>All</button>
        <button style={styles.tab}>Northern Thailand</button>
        <button style={styles.tab}>Southern Thailand</button>
        <button style={styles.tab}>Central Thailand</button>
        <button style={styles.tab}>Northeastern Thailand</button>
      </div>

      <div style={styles.destinationGrid}>
        {destinations.map((destination, index) => (
          <div style={styles.destinationCard} key={index}>
            <img
              src={destination.image}
              alt={destination.name}
              style={styles.cardImage}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{destination.name}</h3>
              <p style={styles.cardSubtitle}>{destination.region} Region</p>
              <p>{destination.description}</p>
              <div style={styles.features}>
                <span style={styles.feature}>
                  <span style={styles.icon}>✈️</span> {destination.flightTime}
                </span>
                <span style={styles.feature}>
                  <span style={styles.icon}>🗓️</span> {destination.frequency}
                </span>
                <span style={styles.feature}>
                  <span style={styles.icon}>💰</span> From {destination.price}
                </span>
              </div>
              <a href="#" style={styles.button}>
                View Flights
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
