import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	"pk_test_51JUR3oSDZ0xB7TLI4Ls0J6FAou0yD9PDEgcb6AEn5fbmOZWPC3L39h9iulHrvshIQwbrk6fUoMEguwme1HfQ4JnB00qAL466RT"
);

export default function ElementsProvider(props) {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm onPaymentMethodCreated={props.onPaymentMethodCreated} />
		</Elements>
	);
}
