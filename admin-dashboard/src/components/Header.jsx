const Header = ({ active, darkMode, setDarkMode }) => {
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-title">{active}</div>
        <div className="header-sub">Welcome back, Admin 👋 · {today}</div>
      </div>

      <div className="header-right">
        <div className="header-search">
        <span className="search-icon">🔍</span>
        <input placeholder="Search anything..." />
      </div>

        <button className="icon-btn" title="Notifications">
          🔔
          <span className="badge-dot"></span>
        </button>

        <button className="icon-btn" onClick={() => setDarkMode(!darkMode)} title="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>

        <div className="header-avatar">AD</div>
      </div>
    </div>
  )
}

export default Header
