import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  useEffect( () => {

  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("Payment Method", paymentMethod);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement>
          options=
          {{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9c2146",
              },
            },
          }}
        </CardElement>
        <button
          type="submit"
          disabled={!stripe}
          className="px-5 py-1 rounded-md mt-3 text-black font-bold bg-white"
        >
          Pay
        </button>
      </form>

      {
        cardError && <p className="text-red-400">{cardError}</p>
      }
    </>
  );
};

export default CheckoutForm;
