const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MezfdSBjgxYIbuxsqZ63tN0Je1XVI8TOwoBYVbqG0wLOyQE6fLnfdeVPAzukyPzcXO07EG5YI88HNRTiktvoH2b00QZP1PRxW"
);
// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  // OK Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/challenge-6bd65/us-central1/api
