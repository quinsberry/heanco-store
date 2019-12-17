import React from 'react'

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 py-4 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{ width: '5rem', height: '5rem' }} alt="product" className="img-fluid" />
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center">
        <span className="d-lg-none mr-1">product: </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center">
        <span className="d-lg-none mr-1">price: </span> <span className="mr-0">$</span>{price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
            <div className="counter mx-2 pb-1">{count}</div>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 d-flex align-items-center justify-content-center">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  )
}
