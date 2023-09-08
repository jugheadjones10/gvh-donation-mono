const express = require("express");
const stripe = require("stripe")(
  "sk_test_51I9BAdFpTxZu0TTmdwfwATs4ugR7N5y8gmEaAHztXGSI4KwaGxn65hMdmCgyOcljk4HQpZDC9MnHtGpPZCkpYobo00e6KYW2XB"
);

const YOUR_DOMAIN = "http://localhost:4000";
const FRONTEND_DOMATIN = "http://localhost:3001";
const router = express.Router();

const paymentOptions = {
  line_items: [
    {
      // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      price: "price_1NmASRFpTxZu0TTmvzY2B9xY",
      quantity: 1,
    },
  ],
  mode: "subscription",
  success_url: `${FRONTEND_DOMATIN}?success=true`,
  cancel_url: `${FRONTEND_DOMATIN}?canceled=true`,
  phone_number_collection: {
    enabled: true,
  },
  custom_fields: [
    {
      key: "project",
      label: {
        type: "custom",
        custom: "Project",
      },
      optional: false,
      type: "dropdown",
      dropdown: {
        options: [
          {
            label: "Any project that requires the most help",
            value: "any",
          },
          {
            label: "Education",
            value: "education",
          },
          {
            label: "Rice for Hope",
            value: "rice",
          },
          {
            label: "Water Well",
            value: "waterwell",
          },
          {
            label: "School Improvement",
            value: "school",
          },
          {
            label: "Skills Training Center in Myanmar",
            value: "skillstraining",
          },
          {
            label: "Administration and Exploration",
            value: "administration",
          },
        ],
      },
    },
  ],
};

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create(paymentOptions);

  res.redirect(303, session.url);
});

module.exports = router;
