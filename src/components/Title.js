import React from 'react'

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 justify-content-center text-title mt-5 d-flex">
        <h1 className="text-capitalize font-weight-bold text-blue">{name}</h1>
        <h1 className="text-capitalize font-weight-bold text-blue ml-3">{title}</h1>
      </div>
    </div>
  )
}
