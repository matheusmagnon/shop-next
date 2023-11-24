import Stripe from "stripe";

export const stripe = new Stripe(
  <string>process.env.STRIPE_SECRET_KEY,
  //"sk_test_51MaNxXBG08EyYbkiqN0CHZN6hcOgkKwXfM0ESew4XjfB0gcLoaaID8QZOvC4S9WvFhwwvjwAU3sx4C5ZsuIJad0b00UN0BVARS",
  {
  apiVersion: "2022-11-15",
  appInfo: { name: "Next Shop" },
});
