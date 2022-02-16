import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51K5xe9SGjJnXEIin9sLbuspw5SgIx1wET91gjV7CSRBLskz7hf0HKHRyOuQtzaPUsHZtPURBtP1fZJtRk84Wi6YO00lnxLd29O");

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-check2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  );
};


const cart = (buy_data) => {
  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary badge-pill">{buy_data.length}</span>
      </h4>
      <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{buy_data.name}</h6>
                <small className="text-muted">{buy_data.description}</small>
              </div>
          <span className="text-muted">
            {buy_data.price === -1 ? "not set yet" : buy_data.price}</span>
            </li>
      </ul>
    </React.Fragment>
  )
}

const Payment = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const buy_data = useSelector((state) => state.userReducer.buy_data);
  const userId = useSelector((state) => state.userReducer.userId)

  return (
    <>
    {userId? 
      <div className = "container" >
        <div className="py-5 text-center"></div>

        <div className="row s-box">
          {paymentCompleted ? (
            successMessage()
          ) : (
            <React.Fragment>
                  <div className="col-md-5 order-md-2 mb-4">{cart(buy_data)}</div>
              <div className="col-md-7 order-md-1">
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                        amount={buy_data.price === undefined || buy_data.price ===-1?"":buy_data.price}
                        buy_obj={buy_data}
                    setPaymentCompleted={setPaymentCompleted}
                  />
                </Elements>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    :""}
    </>

  );
};

export default Payment;
