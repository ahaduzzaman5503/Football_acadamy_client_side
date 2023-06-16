import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCard from "../Hooks/useCard";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const PaymentStudent = () => { 
  const [cart] = useCard();
  const {id} = useParams();
  
 const specificItemId = id;
 const specificItem = cart.find((item) => item.id === specificItemId);

 const price = specificItem ? specificItem.pricee : null;
 console.log(price);


  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl py-10">
        Please Complete The Payment
      </h1>
      <div className="divider"></div> 

      <Elements stripe={stripePromise}>
          <CheckoutForm price = {price}></CheckoutForm>
      </Elements>
      

    </div> 
  );
};

export default PaymentStudent;
