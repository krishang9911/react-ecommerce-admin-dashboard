const Sidebar = ({ active, setActive }) => {
  const menu = [
    "Dashboard",
    "Orders",
    "Products",
    "Customers",
    "Charts",
    "Typography",
  ]

  const reports = ["Analytics", "Settings", "Login"]

  return (
    <div className="sidebar">
      <h2 className="logo">🚀 ShopEase</h2>

      <p className="section-title">Main Menu</p>
      <ul>
        {menu.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="section-title">Reports</p>
      <ul>
        {reports.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar