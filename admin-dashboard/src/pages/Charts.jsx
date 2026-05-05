import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts'

const data = [
  { name: 'Jan', a: 4000, b: 2400 },
  { name: 'Feb', a: 3000, b: 1398 },
  { name: 'Mar', a: 5000, b: 3200 },
  { name: 'Apr', a: 4500, b: 2800 },
  { name: 'May', a: 6000, b: 4100 },
  { name: 'Jun', a: 5500, b: 3600 },
  { name: 'Jul', a: 7200, b: 4800 },
]

const pieData = [
  { name: 'Electronics', value: 40 },
  { name: 'Clothing',    value: 25 },
  { name: 'Food',        value: 20 },
  { name: 'Other',       value: 15 },
]

const radarData = [
  { subject: 'Revenue',   A: 90 },
  { subject: 'Orders',    A: 75 },
  { subject: 'Customers', A: 60 },
  { subject: 'Products',  A: 85 },
  { subject: 'Returns',   A: 30 },
  { subject: 'Growth',    A: 70 },
]

const COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981']

const Charts = () => (
  <div>
    <div className="page-header">
      <div className="page-header-left">
        <h1>Charts</h1>
        <p>All chart types available in your dashboard.</p>
      </div>
    </div>

    <div className="two-col" style={{ marginBottom: 20 }}>
      <div className="card">
        <div className="card-header"><div className="card-title">Area Chart</div></div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="cA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Area type="monotone" dataKey="a" stroke="#6366f1" fill="url(#cA)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <div className="card-header"><div className="card-title">Bar Chart</div></div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="a" fill="#6366f1" radius={[4,4,0,0]} />
              <Bar dataKey="b" fill="#06b6d4" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    <div className="two-col">
      <div className="card">
        <div className="card-header"><div className="card-title">Line Chart</div></div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="a" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1', r: 4 }} />
              <Line type="monotone" dataKey="b" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <div className="card-header"><div className="card-title">Pie Chart</div></div>
        <div className="card-body">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3}>
                {pieData.map((entry, index) => <Cell key={entry.name} fill={COLORS[index]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            {pieData.map((entry, i) => (
              <span key={entry.name} style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: COLORS[i], display: 'inline-block' }} />
                {entry.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Charts
