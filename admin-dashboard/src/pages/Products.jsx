const products = [
  { id: 'P001', name: 'iPhone 15',      category: 'Electronics', price: '₹79,999', stock: 24,  emoji: '📱', status: 'In Stock',    statusClass: 'badge-success' },
  { id: 'P002', name: 'Nike Air Max',   category: 'Footwear',    price: '₹8,499',  stock: 56,  emoji: '👟', status: 'In Stock',    statusClass: 'badge-success' },
  { id: 'P003', name: "Levi's 501",     category: 'Clothing',    price: '₹3,299',  stock: 3,   emoji: '👖', status: 'Low Stock',   statusClass: 'badge-warning' },
  { id: 'P004', name: 'Samsung 55" TV', category: 'Electronics', price: '₹42,000', stock: 0,   emoji: '📺', status: 'Out of Stock',statusClass: 'badge-danger' },
  { id: 'P005', name: 'Sony WH-1000',   category: 'Electronics', price: '₹2,999',  stock: 18,  emoji: '🎧', status: 'In Stock',    statusClass: 'badge-success' },
  { id: 'P006', name: 'Laptop Stand',   category: 'Accessories', price: '₹1,499',  stock: 120, emoji: '💻', status: 'In Stock',    statusClass: 'badge-success' },
  { id: 'P007', name: 'Smartwatch',     category: 'Electronics', price: '₹15,999', stock: 8,   emoji: '⌚', status: 'Low Stock',   statusClass: 'badge-warning' },
  { id: 'P008', name: 'Wireless KB',    category: 'Accessories', price: '₹3,799',  stock: 44,  emoji: '⌨️', status: 'In Stock',    statusClass: 'badge-success' },
  { id: 'P009', name: 'iPad Pro 12.9',    category: 'Electronics', price: '₹1,09,999', stock: 12,  emoji: '📱', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P010', name: 'MacBook Air M2',   category: 'Electronics', price: '₹1,14,999', stock: 6,   emoji: '💻', status: 'Low Stock',    statusClass: 'badge-warning' },
{ id: 'P011', name: 'AirPods Pro',      category: 'Electronics', price: '₹24,999',   stock: 35,  emoji: '🎧', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P012', name: 'Canon DSLR R10',   category: 'Electronics', price: '₹69,999',   stock: 0,   emoji: '📷', status: 'Out of Stock', statusClass: 'badge-danger'  },
{ id: 'P013', name: 'PS5 Controller',   category: 'Gaming',      price: '₹6,999',    stock: 22,  emoji: '🎮', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P014', name: 'Adidas Ultraboost',category: 'Footwear',    price: '₹12,999',   stock: 41,  emoji: '👟', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P015', name: 'Linen Shirt',      category: 'Clothing',    price: '₹1,299',    stock: 2,   emoji: '👔', status: 'Low Stock',    statusClass: 'badge-warning' },
{ id: 'P016', name: 'Denim Jacket',     category: 'Clothing',    price: '₹2,999',    stock: 18,  emoji: '🧥', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P017', name: 'Running Shorts',   category: 'Clothing',    price: '₹899',      stock: 75,  emoji: '🩳', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P018', name: 'Yoga Mat',         category: 'Sports',      price: '₹1,199',    stock: 0,   emoji: '🧘', status: 'Out of Stock', statusClass: 'badge-danger'  },
{ id: 'P019', name: 'Protein Powder',   category: 'Health',      price: '₹2,499',    stock: 60,  emoji: '💪', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P020', name: 'Water Bottle',     category: 'Accessories', price: '₹599',      stock: 200, emoji: '🍶', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P021', name: 'Desk Lamp',        category: 'Home',        price: '₹1,799',    stock: 33,  emoji: '💡', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P022', name: 'Coffee Maker',     category: 'Home',        price: '₹4,999',    stock: 4,   emoji: '☕', status: 'Low Stock',    statusClass: 'badge-warning' },
{ id: 'P023', name: 'Air Purifier',     category: 'Home',        price: '₹8,999',    stock: 14,  emoji: '🌬️', status: 'In Stock',    statusClass: 'badge-success' },
{ id: 'P024', name: 'Backpack 30L',     category: 'Accessories', price: '₹2,299',    stock: 0,   emoji: '🎒', status: 'Out of Stock', statusClass: 'badge-danger'  },
{ id: 'P025', name: 'Sunglasses UV400', category: 'Accessories', price: '₹1,599',    stock: 28,  emoji: '🕶️', status: 'In Stock',    statusClass: 'badge-success' },
{ id: 'P026', name: 'Mechanical KB',    category: 'Accessories', price: '₹5,499',    stock: 17,  emoji: '⌨️', status: 'In Stock',    statusClass: 'badge-success' },
{ id: 'P027', name: 'USB-C Hub 7-in-1', category: 'Accessories', price: '₹2,799',   stock: 52,  emoji: '🔌', status: 'In Stock',     statusClass: 'badge-success' },
{ id: 'P028', name: 'Noise XB700',      category: 'Electronics', price: '₹3,499',    stock: 9,   emoji: '🎵', status: 'Low Stock',    statusClass: 'badge-warning' },
]

const Products = () => (
  <div>
    <div className="page-header">
      <div className="page-header-left">
        <h1>Products</h1>
        <p>Manage your product inventory.</p>
      </div>
      <div className="page-header-actions">
        <button className="btn btn-primary btn-sm">+ Add Product</button>
      </div>
    </div>

    <div className="product-grid" style={{ marginBottom: 24 }}>
      {products.map(p => (
        <div className="product-card" key={p.id}>
          <div className="product-img">{p.emoji}</div>
          <div className="product-info">
            <div className="product-name">{p.name}</div>
            <div className="product-category">{p.category}</div>
            <div className="product-footer">
              <div className="product-price">{p.price}</div>
              <span className={`badge ${p.statusClass}`}>{p.status}</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-muted)' }}>Stock: {p.stock} units</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Products
