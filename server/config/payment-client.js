const checkoutNodeJssdk = require("@paypal/checkout-server-sdk");

const environment = new checkoutNodeJssdk.core.SandboxEnvironment(
  "AWK41K1wi7-wGGXBNNgT_Z5TssjvU9mq6bII5ypThd_LgYzC1BP-AeC5VDCufc8qZY3k-pmZgglyofzM",
  "EIKQNy40K56r-D-psLhOWPTLZottb75CiPPWxZiCNT3Idr9_RYS_yQQj9HNAXZi6woSIrMbV4LnK0wI8"
);

const client = new checkoutNodeJssdk.core.PayPalHttpClient(environment);

module.exports = { client };
