const paypal = require("@paypal/paypal-server-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AWK41K1wi7-wGGXBNNgT_Z5TssjvU9mq6bII5ypThd_LgYzC1BP-AeC5VDCufc8qZY3k-pmZgglyofzM",
  client_secret:
    "EIKQNy40K56r-D-psLhOWPTLZottb75CiPPWxZiCNT3Idr9_RYS_yQQj9HNAXZi6woSIrMbV4LnK0wI8",
});

module.exports = paypal;
