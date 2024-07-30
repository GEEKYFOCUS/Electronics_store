import { usePaystackPayment } from "react-paystack";

export const usePaystack = ({ email, amount, name, phone, publicKey }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    publicKey,
    metadata: {
      name,
      phone,
    },
  };

  const initializePayment = usePaystackPayment(config);

  return { initializePayment };
};
