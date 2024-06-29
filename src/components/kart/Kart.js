import React from 'react'



function Kart() {
  return (
<div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center">Shopping Cart</h1>
          <p className="lead text-center">
            Review your selected items before checkout.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Cart Items */}
              <tr>
                <td>Product 1</td>
                <td>2</td>
                <td>$10.00</td>
                <td>$20.00</td>
                <td>
                  <button className="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
              <tr>
                <td>Product 2</td>
                <td>1</td>
                <td>$15.00</td>
                <td>$15.00</td>
                <td>
                  <button className="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-right">
          <h4>Total: $35.00</h4>
          <button className="btn btn-primary">Proceed to Checkout</button>
        </div>
      </div>
    </div>

  )
}

export default Kart