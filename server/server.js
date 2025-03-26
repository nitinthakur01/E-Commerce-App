const express = require("express");
const connectDb = require("./database");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth/auth-routes");
const adminProductRouter = require("./routes/admin/products-routes");
const shopProductRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/shop/products", shopProductRouter);
app.use("/api/shop/cart", shopCartRouter);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
