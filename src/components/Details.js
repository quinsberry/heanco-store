import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, color, model, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                  <div className="mt-2 ml-4">
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <div className="text-capitalize">
                    <h2>model: {model}</h2>
                    <h5 className="text-title-by text-uppercase text-muted mt-3 mb-0">
                      color: <span className="text-capitalize">{color}</span>
                    </h5>
                    <h5 className="text-title-by text-uppercase text-muted mt-1 mb-2">
                      made by: <span className="text-uppercase">{company}</span>
                    </h5>
                    <h4 className="text-blue">
                      price: <span>$</span>{price}
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product: </p>
                  </div>
                  <p className="text-muted lead">{info}</p>

                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
