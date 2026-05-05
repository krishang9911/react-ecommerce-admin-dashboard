const navItems = [
  { label: 'Dashboard', icon: '⊞', section: 'main' },
  { label: 'Orders', icon: '📦', badge: '3', section: 'main' },
  { label: 'Products', icon: '🏷️', section: 'main' },
  { label: 'Customers', icon: '👥', section: 'main' },
  { label: 'Charts', icon: '📊', section: 'main' },
  { label: 'Typography', icon: '✦', section: 'main' },
  { label: 'Analytics', icon: '📈', section: 'reports' },
  { label: 'Settings', icon: '⚙️', section: 'reports' },
  { label: 'Login', icon: '🔑', section: 'reports' },
]

const Sidebar = ({ active, setActive }) => {
  const mainItems = navItems.filter(i => i.section === 'main')
  const reportItems = navItems.filter(i => i.section === 'reports')

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">
          <div className="logo-icon">🚀</div>
          <div>
            <div className="logo-text">ShopEase</div>
            <div className="logo-sub">ADMIN PANEL</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main Menu</div>
        {mainItems.map(item => (
          <div
            key={item.label}
            className={`nav-item ${active === item.label ? 'active' : ''}`}
            onClick={() => setActive(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </div>
        ))}

        <div className="nav-section-label">Reports</div>
        {reportItems.map(item => (
          <div
            key={item.label}
            className={`nav-item ${active === item.label ? 'active' : ''}`}
            onClick={() => setActive(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">AD</div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">Admin User</div>
            <div className="sidebar-user-role">Super Admin</div>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>⋯</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
