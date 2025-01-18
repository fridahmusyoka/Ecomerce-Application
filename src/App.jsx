import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";       
import Products from "./components/Products"; 
import Services from "./components/Services"; 
import About from "./components/About";     
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div style={styles.container}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link} onMouseOver={e => e.target.style.color = "#ff6347"} onMouseOut={e => e.target.style.color = "white"}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/products" style={styles.link} onMouseOver={e => e.target.style.color = "#ff6347"} onMouseOut={e => e.target.style.color = "white"}>Products</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/services" style={styles.link} onMouseOver={e => e.target.style.color = "#ff6347"} onMouseOut={e => e.target.style.color = "white"}>Services</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" style={styles.link} onMouseOver={e => e.target.style.color = "#ff6347"} onMouseOut={e => e.target.style.color = "white"}>About</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/contact" style={styles.link} onMouseOver={e => e.target.style.color = "#ff6347"} onMouseOut={e => e.target.style.color = "white"}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <div style={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

/* Styles */
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  nav: {
    backgroundColor: "#333",
    padding: "10px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  pageContent: {
    padding: "20px",
    textAlign: "center",
    marginTop: "20px",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
};

export default App;
