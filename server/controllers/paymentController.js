import { instance } from "../server.js";

export const checkout = async (req, res) => {
  if (!req.body.amount) {
    console.log('error hai')
    return res.status(400).json({ error: "Amount is missing in the request body" });
  }

  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  await instance.orders.create(options, function (err, order) {
    if (err) {
      console.error("Error creating order:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log(order);
    res.status(200).json({ success: true, order });
  });
};

export const paymentVerification = async (req, res) => {
  // Ensure 'order' is defined or passed as an argument here
  const order = req.body.order;
  res.status(200).json({ success: true, order });
};
