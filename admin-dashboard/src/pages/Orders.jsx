const Orders = () => {
  return (
    <div>
      <h2>Orders</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#1001</td>
            <td>Rohit</td>
            <td>₹1200</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>#1002</td>
            <td>Priya</td>
            <td>₹850</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders