const Customers = () => {
  return (
    <div className="page">
      <h2>Customers</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>rahul@email.com</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Priya</td>
            <td>priya@email.com</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Customers