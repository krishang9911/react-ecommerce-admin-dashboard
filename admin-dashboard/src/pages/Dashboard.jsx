const Dashboard = () => {
  const stats = [
    { title: "Revenue", value: "₹45,000", color: "#6366f1" },
    { title: "Orders", value: "120", color: "#10b981" },
    { title: "Customers", value: "80", color: "#f59e0b" },
    { title: "Products", value: "35", color: "#ef4444" },
  ]

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      <div className="card-grid">
        {stats.map((item) => (
          <div
            className="card"
            key={item.title}
            style={{ borderTop: `4px solid ${item.color}` }}
          >
            <p>{item.title}</p>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="table-section">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1234</td>
              <td>Rahul</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>#1235</td>
              <td>Aman</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>#1236</td>
              <td>Sneha</td>
              <td>Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard