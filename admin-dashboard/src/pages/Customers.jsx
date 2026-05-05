const customers = [
  { name: 'Riya Sharma',  email: 'riya@email.com',   orders: 12, spent: '₹1,24,000', joined: 'Jan 2024', color: '#6366f1' },
  { name: 'Arjun Mehta',  email: 'arjun@email.com',  orders: 8,  spent: '₹42,500',   joined: 'Feb 2024', color: '#8b5cf6' },
  { name: 'Priya Singh',  email: 'priya@email.com',  orders: 5,  spent: '₹18,200',   joined: 'Mar 2024', color: '#06b6d4' },
  { name: 'Karan Patel',  email: 'karan@email.com',  orders: 20, spent: '₹2,10,000', joined: 'Dec 2023', color: '#10b981' },
  { name: 'Sneha Gupta',  email: 'sneha@email.com',  orders: 3,  spent: '₹9,800',    joined: 'Apr 2024', color: '#f59e0b' },
  { name: 'Rahul Verma',  email: 'rahul@email.com',  orders: 15, spent: '₹88,000',   joined: 'Nov 2023', color: '#ef4444' },
  { name: 'Ananya Bose',  email: 'ananya@email.com', orders: 7,  spent: '₹31,500',   joined: 'Mar 2024', color: '#6366f1' },
]

const initials = (name) => name.split(' ').map(n => n[0]).join('')

const Customers = () => (
  <div>
    <div className="page-header">
      <div className="page-header-left">
        <h1>Customers</h1>
        <p>View and manage your customer base.</p>
      </div>
    </div>

    <div className="table-card">
      <div className="table-card-header">
        <h3>All Customers <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: 12 }}>({customers.length})</span></h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer</th><th>Email</th><th>Orders</th><th>Total Spent</th><th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.email}>
              <td>
                <div className="customer-row">
                  <div className="avatar" style={{ background: c.color, width: 34, height: 34, fontSize: 12 }}>{initials(c.name)}</div>
                  <div className="customer-info">
                    <div className="customer-name">{c.name}</div>
                  </div>
                </div>
              </td>
              <td style={{ color: 'var(--text-muted)' }}>{c.email}</td>
              <td style={{ fontWeight: 600 }}>{c.orders}</td>
              <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{c.spent}</td>
              <td style={{ color: 'var(--text-muted)' }}>{c.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default Customers
