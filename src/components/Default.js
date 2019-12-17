import React, { Component } from 'react'

export default class Default extends Component {
  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title  pt-5">
              <h1>404</h1>
              <h2>page not found</h2>
              <h5 className="text-lowercase">The requested URL<span className="text-danger"> {this.props.location.pathname}</span> was not found</h5>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
