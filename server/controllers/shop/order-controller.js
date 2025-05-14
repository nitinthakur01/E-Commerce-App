// https://developer.paypal.com/dashboard/applications/sandbox
const { client } = require("../../config/payment-client");
const Order = require("../../models/Order");
const paypal = require("@paypal/checkout-server-sdk");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId,
    } = req.body;

    const itemTotal = cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");

    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: totalAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: itemTotal,
              },
            },
          },
          items: cartItems.map((item) => ({
            name: item.title,
            unit_amount: {
              currency_code: "USD",
              value: item.price.toFixed(2),
            },
            quantity: item.quantity.toString(),
          })),
        },
      ],
      application_context: {
        return_url: "http://localhost:5173/shop/paypal-return",
        cancel_url: "http://localhost:5173/shop/paypal-cancel",
      },
    });

    const order = await client.execute(request);
    const approvalURL = order.result.links.find(
      (link) => link.rel === "approve"
    ).href;

    const newOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId: order.result.id,
      payerId,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      approvalURL,
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error("PayPal Create Order Error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating PayPal order",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = { createOrder, capturePayment };
