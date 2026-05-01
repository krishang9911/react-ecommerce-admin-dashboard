const Header = ({ active, darkMode, setDarkMode }) => {
  return (
    <div className="header">
      <div>
        <h2>{active}</h2>
        <p className="subtitle">Welcome back, Admin 👋</p>
      </div>

      <div className="header-right">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        <div className="avatar">AD</div>
      </div>
    </div>
  )
}

export default Header