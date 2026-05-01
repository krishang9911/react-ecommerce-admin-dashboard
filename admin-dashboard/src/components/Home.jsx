import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Fake data for the sales chart
const salesData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 3800 },
  { month: 'Mar', revenue: 5100 },
  { month: 'Apr', revenue: 4700 },
  { month: 'May', revenue: 6300 },
  { month: 'Jun', revenue: 5800 },
  { month: 'Jul', revenue: 7200 },
]

// Fake data for pie chart
const categoryData = [
  { name: 'Electronics', value: 40 },
  { name: 'Clothing',    value: 25 },
  { name: 'Food',        value: 20 },
  { name: 'Other',       value: 15 },
]
const PIE_COLORS = ['#6C63FF', '#22C55E', '#F59E0B', '#E8E8F0']

// Fake recent orders
const recentOrders = [
  { id: '#ORD-001', customer: 'Riya Sharma',   product: 'iPhone 15',      amount: '₹79,999', status: 'delivered' },
  { id: '#ORD-002', customer: 'Arjun Mehta',   product: 'Nike Shoes',     amount: '₹8,499',  status: 'processing' },
  { id: '#ORD-003', customer: 'Priya Singh',   product: 'Levi\'s Jeans',  amount: '₹3,299',  status: 'pending' },
  { id: '#ORD-004', customer: 'Karan Patel',   product: 'Samsung TV',     amount: '₹42,000', status: 'delivered' },
  { id: '#ORD-005', customer: 'Sneha Gupta',   product: 'Headphones',     amount: '₹2,999',  status: 'cancelled' },
]

// The 4 stat cards at the top
const stats = [
  { label: 'Total Revenue', value: '₹3.2L',  badge: '+12.5%', up: true,  icon: '💰', color: '#EEEDfe' },
  { label: 'Total Orders',  value: '1,284',   badge: '+8.2%',  up: true,  icon: '🛒', color: '#DCFCE7' },
  { label: 'Customers',     value: '842',     badge: '+5.1%',  up: true,  icon: '👥', color: '#FEF9C3' },
  { label: 'Cancelled',     value: '23',      badge: '-2.4%',  up: false, icon: '❌', color: '#FEE2E2' },
]

const Home = () => {
  return (
    <div className="main-content">

      {/* ===== STAT CARDS ===== */}
      {/* 4 cards in a row showing key numbers */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-icon" style={{ background: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <span className={`stat-badge ${stat.up ? 'up' : 'down'}`}>{stat.badge}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ===== CHARTS ROW ===== */}
      {/* Area chart on left, Pie chart on right */}
      <div className="charts-grid">

        {/* Area chart - monthly revenue */}
        <div className="chart-card">
          <h3>Revenue Overview</h3>
          <p>Monthly revenue for 2024</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#6C63FF" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#6C63FF" strokeWidth={2} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart - sales by category */}
        <div className="chart-card">
          <h3>Sales by Category</h3>
          <p>Product category breakdown</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={3}>
                {categoryData.map((entry, index) => (
                  <Cell key={entry.name} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
            {categoryData.map((entry, i) => (
              <span key={entry.name} style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: PIE_COLORS[i], display: 'inline-block' }} />
                {entry.name}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ===== RECENT ORDERS TABLE ===== */}
      <div className="table-card">
        <div className="table-header">
          <h3>Recent Orders</h3>
          <a href="#">View all</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td style={{ fontWeight: 600 }}>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td style={{ fontWeight: 600 }}>{order.amount}</td>
                <td><span className={`badge ${order.status}`}>{order.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home
