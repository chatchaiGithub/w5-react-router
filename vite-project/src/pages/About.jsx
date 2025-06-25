import React from "react";

const About = () => {
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
    section: {
      marginBottom: "60px",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      marginBottom: "25px",
      color: "#333",
      borderBottom: "2px solid #ff6b00",
      paddingBottom: "10px",
      display: "inline-block",
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap",
    },
    content: {
      flex: "1 1 60%",
      minWidth: "300px",
    },
    image: {
      flex: "1 1 30%",
      minWidth: "300px",
      borderRadius: "10px",
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "auto",
      display: "block",
    },
    paragraph: {
      marginBottom: "20px",
      lineHeight: "1.6",
      color: "#444",
    },
    values: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "30px",
    },
    valueCard: {
      flex: "1 1 30%",
      minWidth: "250px",
      backgroundColor: "#f8f8f8",
      padding: "25px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    },
    icon: {
      fontSize: "2.5rem",
      color: "#ff6b00",
      marginBottom: "15px",
    },
    valueTitle: {
      fontSize: "1.3rem",
      marginBottom: "15px",
      color: "#333",
    },
    team: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "40px",
    },
    teamMember: {
      flex: "1 1 23%",
      minWidth: "220px",
      textAlign: "center",
    },
    memberImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto 15px",
      border: "5px solid #f3f3f3",
    },
    memberName: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    memberRole: {
      color: "#ff6b00",
      fontStyle: "italic",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Thai Sky Explorer</h1>
        <p style={styles.subtitle}>
          Leading the way in Thai aviation since 2005, we connect Thailand and
          provide exceptional flying experiences with Thai hospitality.
        </p>
      </header>

      <section style={styles.section}>
        <div style={styles.flex}>
          <div style={styles.content}>
            <h2 style={styles.sectionTitle}>Our Story</h2>
            <p style={styles.paragraph}>
              Thai Sky Explorer was founded in 2005 with a vision to transform
              air travel within Thailand. Starting with just 3 aircraft and
              routes to 5 destinations, we have grown to become one of the most
              trusted names in Thai aviation.
            </p>
            <p style={styles.paragraph}>
              Our commitment to Thai values of hospitality, excellence in
              service, and attention to detail has made us the preferred choice
              for both domestic and international travelers exploring the
              wonders of Thailand.
            </p>
            <p style={styles.paragraph}>
              Today, we operate a fleet of 35 modern aircraft, connect 15
              destinations across Thailand, and carry more than 10 million
              passengers each year. Our award-winning service continues to set
              new standards in the aviation industry.
            </p>
          </div>
          <div style={styles.image}>
            <img
              src="https://th.bing.com/th/id/OIP.93A7MJrDcUrsAJXa3LlujwHaE8?rs=1&pid=ImgDetMain"
              alt="Thai Sky Explorer history"
              style={styles.img}
            />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.values}>
          <div style={styles.valueCard}>
            <div style={styles.icon}>🌟</div>
            <h3 style={styles.valueTitle}>Thai Hospitality</h3>
            <p>
              We embody the warm, gracious service that Thailand is world-famous
              for, ensuring every passenger feels welcome.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.icon}>🛡️</div>
            <h3 style={styles.valueTitle}>Safety First</h3>
            <p>
              We never compromise on safety, maintaining the highest standards
              in all our operations.
            </p>
          </div>
          <div style={styles.valueCard}>
            <div style={styles.icon}>♻️</div>
            <h3 style={styles.valueTitle}>Sustainability</h3>
            <p>
              We're committed to minimizing our environmental impact through
              modern fuel-efficient aircraft and green initiatives.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Leadership Team</h2>
        <div style={styles.team}>
          <div style={styles.teamMember}>
            <img
              src="https://th.bing.com/th/id/OIP.zqDDgQWfh45JNuFDqRH8BgHaFj?rs=1&pid=ImgDetMain"
              alt="CEO"
              style={styles.memberImage}
            />
            <h3 style={styles.memberName}>Somchai Thongchai</h3>
            <p style={styles.memberRole}>Chief Executive Officer</p>
            <p>Leading our vision since 2010</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://th.bing.com/th/id/OIP.BGVXt4Ap1QJxTKkLkOFr9AHaLG?rs=1&pid=ImgDetMain"
              alt="COO"
              style={styles.memberImage}
            />
            <h3 style={styles.memberName}>Malai Sukjai</h3>
            <p style={styles.memberRole}>Chief Operations Officer</p>
            <p>Overseeing our seamless operations</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://th.bing.com/th/id/OIP.zJWxJEXsj9d8eNSdhLAjQQHaFj?rs=1&pid=ImgDetMain"
              alt="CFO"
              style={styles.memberImage}
            />
            <h3 style={styles.memberName}>Prasan Wattana</h3>
            <p style={styles.memberRole}>Chief Financial Officer</p>
            <p>Managing our financial strength</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://th.bing.com/th/id/OIP.M1iq2Wujw4r88tjDjXnbFQHaLH?rs=1&pid=ImgDetMain"
              alt="CXO"
              style={styles.memberImage}
            />
            <h3 style={styles.memberName}>Wandee Chaisorn</h3>
            <p style={styles.memberRole}>Chief Experience Officer</p>
            <p>Perfecting your journey with us</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
