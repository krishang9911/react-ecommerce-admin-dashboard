import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'

const salesData = [
  { month: 'Jan', revenue: 42000 },
  { month: 'Feb', revenue: 38000 },
  { month: 'Mar', revenue: 51000 },
  { month: 'Apr', revenue: 47000 },
  { month: 'May', revenue: 63000 },
  { month: 'Jun', revenue: 58000 },
  { month: 'Jul', revenue: 72000 },
]

const ordersData = [
  { month: 'Jan', orders: 310 },
  { month: 'Feb', orders: 270 },
  { month: 'Mar', orders: 420 },
  { month: 'Apr', orders: 380 },
  { month: 'May', orders: 460 },
  { month: 'Jun', orders: 390 },
  { month: 'Jul', orders: 580 },
]

const categoryData = [
  { name: 'Electronics', value: 40 },
  { name: 'Clothing',    value: 25 },
  { name: 'Food',        value: 20 },
  { name: 'Other',       value: 15 },
]
const PIE_COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#e8e7f8']

const recentOrders = [
  { id: '#ORD-001', customer: 'Riya Sharma',  product: 'iPhone 15',    amount: '₹79,999', status: 'delivered',  statusClass: 'badge-success' },
  { id: '#ORD-002', customer: 'Arjun Mehta',  product: 'Nike Shoes',   amount: '₹8,499',  status: 'processing', statusClass: 'badge-info' },
  { id: '#ORD-003', customer: 'Priya Singh',  product: "Levi's Jeans", amount: '₹3,299',  status: 'pending',    statusClass: 'badge-warning' },
  { id: '#ORD-004', customer: 'Karan Patel',  product: 'Samsung TV',   amount: '₹42,000', status: 'delivered',  statusClass: 'badge-success' },
  { id: '#ORD-005', customer: 'Sneha Gupta',  product: 'Headphones',   amount: '₹2,999',  status: 'cancelled',  statusClass: 'badge-danger' },
]

const stats = [
  {
    label: 'Total Revenue', value: '₹3.24L', badge: '+12.5%', up: true,
    icon: '💰', color: '#f5f3ff', iconBg: '#ede9fe',
    sub: '+12.5% from last month',
    cardColor: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
  },
  {
    label: 'Total Orders', value: '1,284', badge: '+8.2%', up: true,
    icon: '📦', color: '#ecfdf5', iconBg: '#d1fae5',
    sub: '64 orders today',
    cardColor: 'linear-gradient(90deg, #06b6d4, #10b981)'
  },
  {
    label: 'Customers', value: '842', badge: '+5.1%', up: true,
    icon: '👥', color: '#eff6ff', iconBg: '#dbeafe',
    sub: '28 new this week',
    cardColor: 'linear-gradient(90deg, #3b82f6, #06b6d4)'
  },
  {
    label: 'Conversion', value: '3.6%', badge: '+0.5%', up: true,
    icon: '📝', color: '#fff7ed', iconBg: '#fed7aa',
    sub: 'vs 3.1% last month',
    cardColor: 'linear-gradient(90deg, #f59e0b, #ef4444)'
  },
]

const Dashboard = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-left">
          <h1>Dashboard</h1>
          <p>Here's what's happening with your store today.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-outline btn-sm">📅 May 2026</button>
          <button className="btn btn-primary btn-sm">+ New Order</button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label} style={{ '--card-color': stat.cardColor }}>
            <div className="stat-card-top">
              <div className="stat-icon" style={{ background: stat.iconBg }}>{stat.icon}</div>
              <span className={`stat-badge ${stat.up ? 'up' : 'down'}`}>
                {stat.up ? '↑' : '↓'} {stat.badge}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sub">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="charts-row" style={{ marginBottom: 24 }}>
        {/* Area Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Revenue Overview</div>
              <div className="card-subtitle">Monthly revenue Jan – Jul 2026</div>
            </div>
            <button className="btn btn-outline btn-sm">View All</button>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} tickFormatter={v => `₹${v/1000}k`} />
                <Tooltip formatter={(v) => [`₹${v.toLocaleString()}`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Orders Trend</div>
              <div className="card-subtitle">Monthly order count</div>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={ordersData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="orders" fill="#6366f1" radius={[6, 6, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row: Table + Pie */}
      <div className="charts-row">
        {/* Recent Orders Table */}
        <div className="table-card">
          <div className="table-card-header">
            <h3>Recent Orders</h3>
            <button className="btn btn-outline btn-sm">View All</button>
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
                  <td style={{ fontWeight: 600, color: 'var(--primary)' }}>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td style={{ fontWeight: 700 }}>{order.amount}</td>
                  <td><span className={`badge ${order.statusClass}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pie Chart */}
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">Sales by Category</div>
              <div className="card-subtitle">Product category breakdown</div>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={3}>
                  {categoryData.map((entry, index) => (
                    <Cell key={entry.name} fill={PIE_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {categoryData.map((entry, i) => (
                <div key={entry.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: PIE_COLORS[i], display: 'inline-block' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{entry.name}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
