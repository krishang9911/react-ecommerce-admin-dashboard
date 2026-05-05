import { useState } from 'react'

const allOrders = [
  { id: '#ORD-001', customer: 'Riya Sharma',  date: '28 Apr 2026', product: 'iPhone 15',    amount: '₹79,999', status: 'delivered',  statusClass: 'badge-success' },
  { id: '#ORD-002', customer: 'Arjun Mehta',  date: '27 Apr 2026', product: 'Nike Shoes',   amount: '₹8,499',  status: 'processing', statusClass: 'badge-info' },
  { id: '#ORD-003', customer: 'Priya Singh',  date: '26 Apr 2026', product: "Levi's Jeans", amount: '₹3,299',  status: 'pending',    statusClass: 'badge-warning' },
  { id: '#ORD-004', customer: 'Karan Patel',  date: '25 Apr 2026', product: 'Samsung TV',   amount: '₹42,000', status: 'delivered',  statusClass: 'badge-success' },
  { id: '#ORD-005', customer: 'Sneha Gupta',  date: '24 Apr 2026', product: 'Headphones',   amount: '₹2,999',  status: 'cancelled',  statusClass: 'badge-danger' },
  { id: '#ORD-006', customer: 'Rahul Verma',  date: '23 Apr 2026', product: 'Laptop Stand', amount: '₹1,499',  status: 'delivered',  statusClass: 'badge-success' },
  { id: '#ORD-007', customer: 'Ananya Bose',  date: '22 Apr 2026', product: 'Smartwatch',   amount: '₹15,999', status: 'processing', statusClass: 'badge-info' },
  { id: '#ORD-008', customer: 'Dev Malhotra', date: '21 Apr 2026', product: 'Wireless KB',  amount: '₹3,799',  status: 'pending',    statusClass: 'badge-warning' },
]

const Orders = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = allOrders.filter(o => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search)
    const matchFilter = filter === 'All' || o.status === filter.toLowerCase()
    return matchSearch && matchFilter
  })

  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h1>Orders</h1>
          <p>Manage and track all customer orders.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary btn-sm">+ New Order</button>
        </div>
      </div>

      <div className="table-card">
        <div className="table-card-header">
          <h3>All Orders <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: 12 }}>({filtered.length})</span></h3>
          <div className="filter-row" style={{ marginBottom: 0 }}>
            <input className="search-input" placeholder="Search orders..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: 180 }} />
            <select className="filter-select" value={filter} onChange={e => setFilter(e.target.value)}>
              <option>All</option>
              <option>Delivered</option>
              <option>Processing</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th><th>Customer</th><th>Date</th><th>Product</th><th>Amount</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id}>
                <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{o.id}</td>
                <td>{o.customer}</td>
                <td style={{ color: 'var(--text-muted)' }}>{o.date}</td>
                <td>{o.product}</td>
                <td style={{ fontWeight: 700 }}>{o.amount}</td>
                <td><span className={`badge ${o.statusClass}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
