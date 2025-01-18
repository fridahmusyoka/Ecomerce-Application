import axios from "axios";
import  { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching product data from dummyjson.com
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Our Amazing Products</h1>
        <p style={styles.subtitle}>Explore our collection of top-rated products just for you!</p>
      </header>

      <section style={styles.productGrid}>
        {products.map((product, i) => (
            <ProductCard key={i} product={product} styles={styles}/>
        ))}
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
    background: "linear-gradient(135deg,rgb(226, 233, 134),rgb(83, 98, 197))", // Gradient background
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
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "50px",
  },
  productCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(86, 146, 230, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    background: "linear-gradient(135deg,rgb(235, 231, 230),rgb(241, 246, 235))", // Gradient background for cards
  },
  productImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  productTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  productDescription: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  productPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: "15px",
  },
  buyButton: {
    backgroundColor: "#ff6347",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buyButtonHover: {
    backgroundColor: "#ff4500", // Darker shade on hover
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

export default Products;
