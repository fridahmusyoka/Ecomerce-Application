

function About() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>We are a passionate team dedicated to bringing you the best shopping experience!</p>
      </header>

      <section style={styles.teamSection}>
        <div style={styles.teamCard}>
          <h2 style={styles.cardTitle}>Our Mission</h2>
          <p style={styles.cardText}>
            We strive to provide quality products with exceptional customer service, and fast delivery.
          </p>
        </div>
        <div style={styles.teamCard}>
          <h2 style={styles.cardTitle}>Our Vision</h2>
          <p style={styles.cardText}>
            To be the go-to destination for all your shopping needs, offering a wide variety of products at great prices.
          </p>
        </div>
        <div style={styles.teamCard}>
          <h2 style={styles.cardTitle}>Our Values</h2>
          <p style={styles.cardText}>
            Customer satisfaction, integrity, and innovation are at the heart of everything we do.
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 Our E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* Styles */
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f5f5f5", // Light background
    minHeight: "100vh",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    background: "linear-gradient(135deg, #f06, #48c6ef)", // Gradient background
    borderRadius: "10px",
    color: "#fff",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#f2f2f2",
  },
  teamSection: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
    flexWrap: "wrap",
  },
  teamCard: {
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Card gradient
    padding: "20px",
    borderRadius: "10px",
    width: "30%",
    margin: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "16px",
    color: "#fff",
    lineHeight: "1.5",
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#333",
    padding: "15px",
    borderRadius: "10px",
  },
  footerText: {
    fontSize: "14px",
    color: "#fff",
  },
};

export default About;
