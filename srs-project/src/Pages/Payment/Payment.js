import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("<YOUR_PUBLISHABLE_KEY>");

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
const cart = (get_uploaded_file) => {
  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary badge-pill">{get_uploaded_file.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {
          Object.keys(get_uploaded_file).map((indx) => (
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{get_uploaded_file[indx].name}</h6>
                <small className="text-muted">{get_uploaded_file[indx].description}</small>
              </div>
              <span className="text-muted">$1200</span>
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
};

const Payment = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const get_uploaded_file = useSelector((state) => state.userReducer.get_uploaded_file)
  return (
    <>
      <div className="container">
        <div className="py-5 text-center"></div>

        <div className="row s-box">
          {paymentCompleted ? (
            successMessage()
          ) : (
            <React.Fragment>
                <div className="col-md-5 order-md-2 mb-4">{cart(get_uploaded_file)}</div>
              <div className="col-md-7 order-md-1">
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    amount={2000}
                    setPaymentCompleted={setPaymentCompleted}
                  />
                </Elements>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
