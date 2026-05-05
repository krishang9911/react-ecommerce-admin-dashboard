import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, AreaChart, Area } from 'recharts'

const monthlyData = [
  { month: 'Jan', revenue: 42000, orders: 310, customers: 45 },
  { month: 'Feb', revenue: 38000, orders: 270, customers: 38 },
  { month: 'Mar', revenue: 51000, orders: 420, customers: 62 },
  { month: 'Apr', revenue: 47000, orders: 380, customers: 55 },
  { month: 'May', revenue: 63000, orders: 460, customers: 78 },
  { month: 'Jun', revenue: 58000, orders: 390, customers: 65 },
  { month: 'Jul', revenue: 72000, orders: 580, customers: 92 },
]

const insights = [
  { icon: '🚀', label: 'Best Month',       value: 'July 2026',  desc: 'Highest revenue month',   bg: '#f5f3ff' },
  { icon: '📦', label: 'Avg Order Value',  value: '₹1,764',     desc: 'Per transaction average', bg: '#ecfdf5' },
  { icon: '👥', label: 'New Customers',    value: '435',        desc: 'This year so far',        bg: '#eff6ff' },
  { icon: '🔄', label: 'Return Rate',      value: '1.8%',       desc: 'Below industry avg',      bg: '#fffbeb' },
]

const Analytics = () => (
  <div>
    <div className="page-header">
      <div className="page-header-left">
        <h1>Analytics</h1>
        <p>Deep dive into your store performance.</p>
      </div>
    </div>

    {/* Metric Cards */}
    <div className="stats-grid" style={{ marginBottom: 24 }}>
      {insights.map(s => (
        <div className="metric-card" key={s.label}>
          <div style={{ fontSize: 28, marginBottom: 8, background: s.bg, width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
          <div className="metric-value">{s.value}</div>
          <div className="metric-label">{s.label}</div>
          <div className="metric-change positive" style={{ marginTop: 8 }}>{s.desc}</div>
        </div>
      ))}
    </div>

    {/* Charts */}
    <div className="charts-row" style={{ marginBottom: 24 }}>
      <div className="card">
        <div className="card-header">
          <div><div className="card-title">Revenue vs Orders</div><div className="card-subtitle">Monthly comparison</div></div>
        </div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#6366f1" radius={[4,4,0,0]} name="Revenue (₹)" />
              <Bar dataKey="orders"  fill="#06b6d4" radius={[4,4,0,0]} name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div><div className="card-title">New Customers</div><div className="card-subtitle">Monthly growth</div></div>
        </div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="custGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#8b5cf6" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="customers" stroke="#8b5cf6" strokeWidth={2} fill="url(#custGrad)" name="New Customers" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
)

export default Analytics
