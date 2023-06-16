import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const {users} = useContext(AuthContext);

  useEffect( () => {
    axiosSecure.post('/createpayment', {price})
    .then(res => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
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

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: users?.email || "no email",
          email: users?.displayName || "no name",
        },
      },
    })
    if(confirmError){
      console.log(confirmError);
    }
    console.log("payment 58 no line", paymentIntent);

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
          disabled={!stripe || !clientSecret}
          className="px-5 py-1 rounded-md mt-3 text-black font-bold bg-white"
        >
          Pay
        </button>
      </form>

      {
        cardError && <p className="text-red-500 pt-3 font-bold">{cardError}</p>
      }
    </>
  );
};

export default CheckoutForm;
