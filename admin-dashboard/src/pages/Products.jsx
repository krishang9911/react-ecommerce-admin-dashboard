const Products = () => {
  return (
    <div className="page">
      <h2>Products</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone 14</td>
            <td>₹80,000</td>
            <td>12</td>
          </tr>
          <tr>
            <td>MacBook Air</td>
            <td>₹1,20,000</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Products