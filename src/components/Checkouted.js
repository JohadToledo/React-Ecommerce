import React from "react";
import { NavLink } from "react-router-dom";

const Checkouted = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <div className="payment">
              <div className="payment_header">
                <div className="check">
                <i className="fa fa-check" aria-hidden="true"></i>
                </div>
              </div>
              <div className="content">
                <h1>Payment Success !</h1>
                <p>
                  Tu pedido fue hecho, gracias por confiar en Petra!!.{" "}
                </p>
                <NavLink to={`/`}>Go to Home</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkouted;
