import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block pt-4 pb-4 cart-col">
      <div className="row border-bottom">
        <div className="col-10 mx-auto col-lg-2 mb-0 d-flex justify-content-center align-items-bottom text-uppercase text-center mb-3">
          product
        </div>
        <div className="col-10 mx-auto col-lg-2 mb-0 d-flex justify-content-center align-items-bottom text-uppercase text-center">
          name of product
        </div>
        <div className="col-10 mx-auto col-lg-2 mb-0 d-flex justify-content-center align-items-bottom text-uppercase text-center">
          price
        </div>
        <div className="col-10 mx-auto col-lg-2 mb-0 d-flex justify-content-center align-items-bottom text-uppercase text-center">
          quantity
        </div>
        <div className="col-10 mx-auto col-lg-2 mb-0 d-flex justify-content-center align-items-bottom text-uppercase text-center">
          remove
        </div>
        <div className="col-10 mx-auto col-lg-2 mb-0 d-flex justify-content-center align-items-bottom text-uppercase text-center">
          total
        </div>
      </div>
    </div>
  );
}
