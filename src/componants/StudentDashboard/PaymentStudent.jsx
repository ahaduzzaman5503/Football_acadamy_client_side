import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);


const PaymentStudent = () => { 
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl py-10">
        Please Complete The Payment
      </h1>
      <div className="divider"></div> 

      <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
      </Elements>
      

    </div>
  );
};

export default PaymentStudent;
