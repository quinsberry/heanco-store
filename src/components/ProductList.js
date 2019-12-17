import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-2">
          <div className="container">
            <div className=" row justify-content-center">
              <Title name="our" title="products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </>
      // <Product /> 
    )
  }
}
