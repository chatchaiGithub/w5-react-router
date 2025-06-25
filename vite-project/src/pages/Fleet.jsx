import React from "react";

const Fleet = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      color: "#333",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    fleetGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(550px, 1fr))",
      gap: "40px",
      marginBottom: "60px",
    },
    aircraftCard: {
      display: "flex",
      backgroundColor: "white",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    aircraftImage: {
      flex: "0 0 45%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "250px",
    },
    aircraftContent: {
      flex: "1 1 55%",
      padding: "25px",
    },
    aircraftTitle: {
      fontSize: "1.8rem",
      marginBottom: "10px",
      color: "#333",
    },
    aircraftSubtitle: {
      fontSize: "1.1rem",
      color: "#ff6b00",
      marginBottom: "15px",
    },
    specsList: {
      margin: "20px 0",
      padding: 0,
      listStyle: "none",
    },
    specItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid #eee",
    },
    specLabel: {
      fontWeight: "bold",
      color: "#555",
    },
    specValue: {
      color: "#333",
    },
    featuresSection: {
      margin: "50px 0",
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "30px",
      textAlign: "center",
      color: "#333",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "30px",
    },
    featureCard: {
      backgroundColor: "#f8f8f8",
      padding: "25px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    },
    featureIcon: {
      fontSize: "2.5rem",
      color: "#ff6b00",
      margin: "0 auto 15px",
    },
    featureTitle: {
      fontSize: "1.3rem",
      marginBottom: "10px",
      color: "#333",
    },
    safetySection: {
      backgroundColor: "#f9f9f9",
      padding: "50px",
      borderRadius: "10px",
      margin: "50px 0",
    },
    safetyFlex: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
    },
    safetyContent: {
      flex: "1 1 60%",
      minWidth: "300px",
    },
    safetyImage: {
      flex: "1 1 30%",
      minWidth: "300px",
      textAlign: "center",
    },
    safetyImg: {
      maxWidth: "100%",
      borderRadius: "10px",
    },
    paragraph: {
      marginBottom: "20px",
      lineHeight: "1.6",
      color: "#444",
    },
  };

  const fleet = [
    {
      type: "Boeing 787-9 Dreamliner",
      role: "Long-haul International",
      image:
        "https://images.unsplash.com/photo-1608023136037-626dad6c6188?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      specs: {
        Range: "14,010 km",
        "Passenger Capacity": "298",
        "Maximum Speed": "954 km/h",
        Length: "63 m",
        Wingspan: "60 m",
      },
    },
    {
      type: "Airbus A320neo",
      role: "Domestic & Regional",
      image:
        "https://th.bing.com/th/id/OIP.OyjYRJrgN59ORAM1sn59OAHaFJ?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
      specs: {
        Range: "6,500 km",
        "Passenger Capacity": "180",
        "Maximum Speed": "871 km/h",
        Length: "37.6 m",
        Wingspan: "35.8 m",
      },
    },
    {
      type: "Boeing 777-300ER",
      role: "International Long-haul",
      image:
        "https://th.bing.com/th/id/OIP.GtyEKDb1jZ_hE2nu4k_bXgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
      specs: {
        Range: "13,650 km",
        "Passenger Capacity": "396",
        "Maximum Speed": "950 km/h",
        Length: "73.9 m",
        Wingspan: "64.8 m",
      },
    },
    {
      type: "ATR 72-600",
      role: "Regional & Island Routes",
      image:
        "https://th.bing.com/th/id/R.b3b01c8df4ae3003cab844e37eb23b46?rik=xHuxUpajYBbqDg&pid=ImgRaw&r=0",
      specs: {
        Range: "1,500 km",
        "Passenger Capacity": "70",
        "Maximum Speed": "511 km/h",
        Length: "27.2 m",
        Wingspan: "27.05 m",
      },
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Our Modern Fleet</h1>
        <p style={styles.subtitle}>
          Thai Sky Explorer operates one of the youngest and most efficient
          fleets in Asia, ensuring comfort, safety, and sustainability on every
          journey.
        </p>
      </header>

      <div style={styles.fleetGrid}>
        {fleet.map((aircraft, index) => (
          <div style={styles.aircraftCard} key={index}>
            <div
              style={{
                ...styles.aircraftImage,
                backgroundImage: `url(${aircraft.image})`,
              }}
            ></div>
            <div style={styles.aircraftContent}>
              <h3 style={styles.aircraftTitle}>{aircraft.type}</h3>
              <h4 style={styles.aircraftSubtitle}>{aircraft.role}</h4>
              <p>
                Our fleet of {aircraft.type} aircraft delivers exceptional
                performance and passenger comfort.
              </p>
              <ul style={styles.specsList}>
                {Object.entries(aircraft.specs).map(([key, value], i) => (
                  <li style={styles.specItem} key={i}>
                    <span style={styles.specLabel}>{key}</span>
                    <span style={styles.specValue}>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Fleet Features</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌱</div>
            <h3 style={styles.featureTitle}>Eco-Friendly</h3>
            <p>
              Our modern fleet reduces CO2 emissions by up to 20% compared to
              previous generation aircraft.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🛋️</div>
            <h3 style={styles.featureTitle}>Comfort</h3>
            <p>
              Ergonomic seating, enhanced cabin air quality, and reduced noise
              for a better flying experience.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔌</div>
            <h3 style={styles.featureTitle}>Connectivity</h3>
            <p>
              Stay connected with in-flight Wi-Fi and USB charging ports at
              every seat.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🍽️</div>
            <h3 style={styles.featureTitle}>Thai Cuisine</h3>
            <p>
              Experience authentic Thai flavors with our specially curated
              in-flight meals.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.safetySection}>
        <div style={styles.safetyFlex}>
          <div style={styles.safetyContent}>
            <h2 style={styles.sectionTitle}>Our Commitment to Safety</h2>
            <p style={styles.paragraph}>
              At Thai Sky Explorer, safety is our highest priority. Our aircraft
              undergo rigorous maintenance checks that exceed industry
              standards, performed by our team of certified engineers and
              technicians.
            </p>
            <p style={styles.paragraph}>
              All our pilots undergo continuous training and certification, with
              regular simulator sessions to ensure they are prepared for any
              situation. Our fleet is equipped with the latest safety
              technology, including Enhanced Ground Proximity Warning Systems,
              Traffic Collision Avoidance Systems, and state-of-the-art weather
              radar.
            </p>
            <p style={styles.paragraph}>
              With one of the best safety records in the industry, you can fly
              with complete peace of mind.
            </p>
          </div>
          <div style={styles.safetyImage}>
            <img
              src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Aircraft maintenance"
              style={styles.safetyImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
