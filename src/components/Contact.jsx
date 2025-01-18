import  { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>We'd love to hear from you! Please fill out the form below.</p>
      </header>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </div>

        <button type="submit" style={styles.submitButton}>Send Message</button>
      </form>

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
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginTop: "50px",
    padding: "30px",
    background: "linear-gradient(135deg,rgb(11, 139, 60),rgb(8, 176, 222))", // Gradient background
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
  form: {
    maxWidth: "600px",
    margin: "30px auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(12, 162, 195, 0.1)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none",
    minHeight: "120px",
    transition: "border-color 0.3s ease",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff6347", // Lively accent color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#e55347",
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

export default Contact;
