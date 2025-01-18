
function ProductCard({product, styles}) {
  return (
    <div key={product.id} style={styles.productCard}>
    <img src={product.thumbnail} alt={product.title} style={styles.productImage} />
    <h2 style={styles.productTitle}>{product.title}</h2>
    <span style={styles.productPrice}>${product.price}</span>
    <button style={styles.buyButton}>Buy Now</button>
  </div>
  )
}

export default ProductCard