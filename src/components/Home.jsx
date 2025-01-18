
function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Our Vibrant E-commerce Store!</h1>
        <p style={styles.subtitle}>Explore our exclusive collection of products and services.</p>
      </header>

      <section style={styles.featuresSection}>
        <div style={styles.featureCard}>
          <h2 style={styles.featureTitle}>Quality Products</h2>
          <p style={styles.featureText}>Discover top-rated products that suit your needs.</p>
        </div>
        <div style={styles.featureCard}>
          <h2 style={styles.featureTitle}>Great Services</h2>
          <p style={styles.featureText}>Enjoy excellent customer support and service offerings.</p>
        </div>
        <div style={styles.featureCard}>
          <h2 style={styles.featureTitle}>Fast Shipping</h2>
          <p style={styles.featureText}>Get your products delivered quickly and safely.</p>
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
    color: "#fff",
    background: "linear-gradient(135deg, #ff7e5f,rgb(103, 196, 23))", // Gradient background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  subtitle: {
    fontSize: "18px",
    color: "#f2f2f2",
    marginTop: "10px",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
  },
  featuresSection: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
  },
  featureTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: "10px",
  },
  featureText: {
    fontSize: "16px",
    color: "#333",
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

export default Home;
